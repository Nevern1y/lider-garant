"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import { LottieRefCurrentProps } from "lottie-react";
import type { AnimationItem } from "lottie-web";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type Props = {
  src?: string;
  autoplay?: boolean;
  hoverPlay?: boolean;
  fill?: boolean;
  className?: string;
  hoverTargetId?: string;
};

export default function LottieHero({
  src,
  autoplay = true,
  hoverPlay = false,
  fill = true,
  className,
  hoverTargetId,
}: Props) {
  const [data, setData] = useState<AnimationItem | null>(null); // <- тип вместо any
  const [error, setError] = useState<string | null>(null);
  const [showFallback, setShowFallback] = useState(false);

  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  const urls = useMemo(
    () => [
      "https://assets3.lottiefiles.com/packages/lf20_jcikwtux.json",
      "https://assets7.lottiefiles.com/packages/lf20_jtbfg2nb.json",
      "https://assets2.lottiefiles.com/packages/lf20_t24tpvcu.json",
    ],
    []
  );

  useEffect(() => {
    let cancelled = false;
    const fallbackTimer = setTimeout(() => setShowFallback(true), 1200);

    (async () => {
      const candidates: string[] = [];
      if (src) candidates.push(src);
      candidates.push("/animations/hero.json");
      candidates.push(...urls);

      for (const url of candidates) {
        try {
          const ctrl = new AbortController();
          const id = setTimeout(() => ctrl.abort(), 6000);
          const res = await fetch(url, { signal: ctrl.signal });
          clearTimeout(id);
          if (!res.ok) continue;
          const json: AnimationItem = await res.json();
          if (!cancelled) {
            setData(json);
            setError(null);
            setShowFallback(false);
            break;
          }
        } catch (e) {
          console.warn("Lottie fetch failed", e);
          continue;
        }
      }

      if (!cancelled && !data) setError("unavailable");
    })();

    return () => {
      cancelled = true;
      clearTimeout(fallbackTimer);
    };
  }, [urls, src, data]);

  useEffect(() => {
    if (!hoverTargetId) return;
    const el =
      typeof document !== "undefined"
        ? document.getElementById(hoverTargetId)
        : null;
    if (!el) return;

    const onEnter = () => lottieRef.current?.play?.();
    const onLeave = () => lottieRef.current?.stop?.();

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [hoverTargetId]);

  if (error && !showFallback) return null;

  return (
    <div
      className={`${fill ? "absolute inset-0" : "h-full w-full"} ${
        className ?? ""
      }`}
      onMouseEnter={() => {
        if (hoverPlay && !hoverTargetId) lottieRef.current?.play?.();
      }}
      onMouseLeave={() => {
        if (hoverPlay && !hoverTargetId) lottieRef.current?.stop?.();
      }}
      style={{ pointerEvents: hoverPlay && !hoverTargetId ? "auto" : "none" }}
    >
      {data ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={data}
          loop
          autoplay={hoverTargetId ? false : autoplay && !hoverPlay}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        // CSS fallback animation
        <div className="absolute inset-0">
          <div
            className="absolute -left-10 top-6 h-40 w-40 rounded-full opacity-25 blur-2xl"
            style={{
              background:
                "linear-gradient(90deg, var(--brand-grad-start), var(--brand-grad-end))",
            }}
          />
          <div
            className="absolute right-6 top-10 h-28 w-28 rounded-full opacity-25 blur-2xl animate-pulse"
            style={{
              background:
                "linear-gradient(90deg, var(--brand-grad-start), var(--brand-grad-end))",
            }}
          />
          <div
            className="absolute bottom-6 left-10 h-32 w-32 rounded-full opacity-25 blur-2xl animate-[pulse_2s_ease-in-out_infinite]"
            style={{
              background:
                "linear-gradient(90deg, var(--brand-grad-start), var(--brand-grad-end))",
            }}
          />
        </div>
      )}
    </div>
  );
}

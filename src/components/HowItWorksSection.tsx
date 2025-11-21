"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import LottieHero from "@/components/LottieHero";

const steps = [
  {
    title: "Пройдите простую регистрацию",
    desc: "Создайте аккаунт за минуту и получите доступ к личному кабинету.",
    image: "/window.svg",
    lottie: "/step1.json",
  },
  {
    title: "Заведите заявку на финансовый продукт",
    desc: "Выберите продукт и заполните короткую форму — это займёт пару минут.",
    image: "/file.svg",
    lottie: "/step2.json",
  },
  {
    title: "Выберите предложение в режиме одного окна",
    desc: "Сравните условия от партнёров и подтвердите лучший вариант онлайн.",
    image: "/globe.svg",
    lottie: "/step3.json",
  },
];

export default function HowItWorksSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const progressRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  const next = useMemo(
    () => () => {
      setFading(true);
      window.setTimeout(() => {
        setActive((idx) => (idx + 1) % steps.length);
        setFading(false);
      }, 180);
    },
    []
  );

  useEffect(() => {
    if (paused) return;
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      next();
    }, 7000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [paused, next]);

  const handleSelect = (idx: number) => {
    setFading(true);
    window.setTimeout(() => {
      setActive(idx);
      setFading(false);
    }, 150);
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      next();
    }, 7000);
  };
  useEffect(() => {
    if (progressRef.current) window.clearInterval(progressRef.current);

    requestAnimationFrame(() => setProgress(0));

    if (paused) return;

    const start = Date.now();
    progressRef.current = window.setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, (elapsed / 7000) * 100);
      setProgress(pct);
      if (pct >= 100) {
        if (progressRef.current) window.clearInterval(progressRef.current);
      }
    }, 100);

    return () => {
      if (progressRef.current) window.clearInterval(progressRef.current);
    };
  }, [active, paused]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="relative overflow-hidden rounded-[32px] border border-foreground/10">
        <div className="relative grid gap-12 px-6 py-12 md:grid-cols-[1.05fr_0.95fr] md:px-12">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                handleSelect((active + 1) % steps.length);
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                handleSelect((active - 1 + steps.length) % steps.length);
              } else if (e.key === "Enter") {
                e.preventDefault();
                handleSelect((active + 1) % steps.length);
              }
            }}
          >
            <h2 className="mb-6 mt-4 text-3xl font-bold leading-tight text-foreground md:text-[42px]">
              Как это работает?
            </h2>

            <ol className="relative space-y-6">
              {steps.map((step, i) => (
                <li key={i} className="relative pl-12">
                  <div className="pointer-events-none absolute left-3 top-0 h-full w-[3px] -translate-x-1/2">
                    <div className="absolute inset-0 rounded-full bg-foreground/10" />
                    <div
                      className="absolute left-0 top-0 w-full rounded-full bg-linear-to-b from-emerald-400 to-sky-500"
                      style={{
                        height: `${
                          i < active ? 100 : i === active ? progress : 0
                        }%`,
                        transition:
                          i === active ? "height 100ms linear" : "none",
                      }}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSelect(i)}
                    className="group relative w-full text-left"
                  >
                    <span
                      className={
                        "absolute left-[-18px] top-[-18px] flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold shadow-lg transition-all " +
                        (i === active
                          ? "bg-foreground text-background"
                          : "bg-foreground/10 text-foreground/10 group-hover:bg-foreground/20")
                      }
                    >
                      {i + 1}
                    </span>

                    <div
                      className={
                        (i === active
                          ? "rounded-2xl bg-foreground/5 p-5 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.95)]"
                          : "rounded-2xl p-5 hover:bg-foreground/5") +
                        " transition-colors"
                      }
                    >
                      <h3
                        className={
                          "mb-1 text-base font-semibold md:text-lg transition-colors " +
                          (i === active
                            ? "text-foreground"
                            : "text-foreground/65 group-hover:text-foreground")
                        }
                      >
                        {step.title}
                      </h3>
                      <p
                        className={
                          i === active
                            ? "text-sm text-foreground/70"
                            : "text-sm text-foreground/40 group-hover:text-foreground/60"
                        }
                      >
                        {step.desc}
                      </p>
                      {i === 0 && (
                        <a
                          href="#register"
                          className="mt-3 inline-flex h-10 items-center rounded-full bg-foreground/90 px-5 text-xs font-semibold uppercase tracking-wide text-background"
                        >
                          Зарегистрироваться
                        </a>
                      )}
                    </div>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <div
            className="relative h-[260px] md:h-[360px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="absolute inset-0 rounded-[30px] border border-foreground/10 bg-foreground/5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]" />

            <div className="relative h-full overflow-hidden rounded-[30px] border border-foreground/10 bg-foreground/5">
              <div
                className="h-full w-full transition-opacity duration-300"
                style={{ opacity: fading ? 0 : 1 }}
              >
                <LottieHero src={steps[active].lottie} />
              </div>

              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full bg-black/40 px-4 py-2 text-white shadow-lg backdrop-blur-xl">
                <Image
                  src="/logos/1.png"
                  alt="Банк 1"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full bg-white/20 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <Image
                  src="/logos/2.png"
                  alt="Банк 2"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full bg-white/20 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <Image
                  src="/logos/3.png"
                  alt="Банк 3"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full bg-white/20 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <span className="ml-1 text-sm font-medium text-white/80">
                  +9
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

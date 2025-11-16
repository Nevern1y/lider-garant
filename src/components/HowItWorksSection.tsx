"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
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
    const imgs = steps.map((s) => s.image);
    imgs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (progressRef.current) window.clearInterval(progressRef.current);
    setProgress(0);
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
    <section className="mx-auto max-w-7xl px-6 py-16 md:grid md:grid-cols-2 md:items-center md:gap-12">
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
        <h2 className="mb-8 text-2xl font-bold leading-tight text-primary md:text-3xl">
          Как это работает ?
        </h2>

        <ol className="relative space-y-6">
          {steps.map((step, i) => (
            <li key={i} className="relative pl-10">
              <div className="pointer-events-none absolute left-3 top-0 h-full w-[3px] -translate-x-1/2">
                <div className="absolute inset-0 rounded-full bg-foreground/15" />
                <div
                  className="absolute left-0 top-0 w-full rounded-full bg-primary"
                  style={{ height: `${i < active ? 100 : i === active ? progress : 0}%`, transition: i === active ? "height 100ms linear" : "none" }}
                />
              </div>

              <button
                type="button"
                onClick={() => handleSelect(i)}
                className="group relative w-full text-left"
              >
                <span
                  className={
                    "absolute left-[-15px] top-[-15px] flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold shadow-sm transition-colors " +
                    (i === active
                      ? "bg-foreground text-background"
                      : "bg-foreground/10 text-foreground/60 group-hover:bg-foreground/20")
                  }
                >
                  {i + 1}
                </span>

                <div
                  className={
                    (i === active
                      ? "rounded-xl bg-foreground/5 p-4"
                      : "rounded-xl p-4 hover:bg-foreground/5") + " transition-colors"
                  }
                >
                  <h3
                    className={
                      "mb-1 text-base font-semibold md:text-lg transition-colors " +
                      (i === active ? "text-foreground" : "text-foreground/60 group-hover:text-foreground")
                    }
                  >
                    {step.title}
                  </h3>
                  <p className={i === active ? "text-sm text-foreground/70" : "text-sm text-foreground/40 group-hover:text-foreground/60"}>
                    {step.desc}
                  </p>
                  {i === 0 && (
                    <a
                      href="#register"
                      className="mt-3 inline-flex h-10 items-center rounded-full px-5 text-sm font-medium btn-gradient"
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
        className="relative mt-10 md:mt-0 h-[260px] md:h-[360px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute -right-6 -top-6 h-[82%] w-[88%] rounded-3xl bg-foreground/10" />

        <div className="relative h-full overflow-hidden rounded-3xl border border-foreground/10 bg-background shadow-xl">
          <div className="h-full w-full transition-opacity duration-300" style={{ opacity: fading ? 0 : 1 }}>
            <LottieHero src={steps[active].lottie} />
          </div>

          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-full bg-background/85 px-4 py-2.5 shadow-lg backdrop-blur">
            <img src="/logos/1.png" alt="Банк 1" className="h-8 w-8 rounded-full bg-foreground/10 object-cover" />
            <img src="/logos/2.png" alt="Банк 2" className="h-8 w-8 rounded-full bg-foreground/10 object-cover" />
            <img src="/logos/3.png" alt="Банк 3" className="h-8 w-8 rounded-full bg-foreground/10 object-cover" />
            <span className="ml-1 text-sm font-medium text-foreground/80">+9</span>
          </div>
        </div>
      </div>
    </section>
  );
}

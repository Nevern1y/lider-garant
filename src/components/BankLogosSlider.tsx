"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const banks = Array.from({ length: 16 }, (_, i) => `/logos/${i + 1}.svg`);

export default function BankLogosSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame: number;
    let scrollPos = 0;

    const speed = 3;

    const animate = () => {
      if (!slider) return;

      scrollPos += speed;
      if (scrollPos >= slider.scrollWidth / 3) {
        scrollPos = 0;
      }
      slider.scrollLeft = scrollPos;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const items = [...banks, ...banks, ...banks];

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14">
      <div className="overflow-hidden rounded-[32px] border border-foreground/10">
        <div className="px-6 py-10 md:px-12">
          <div className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-foreground/70">
            Наши партнёры
          </div>
          <div
            ref={sliderRef}
            className="flex gap-6 whitespace-nowrap overflow-x-hidden"
          >
            {items.map((src, i) => (
              <div
                key={i}
                className="flex h-16 min-w-[120px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-lg"
              >
                <Image
                  src={src}
                  alt={`Логотип банка ${i + 1}`}
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

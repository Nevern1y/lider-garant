"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const banks = Array.from({ length: 16 }, (_, i) => `/logos/${i + 1}.png`);

export default function BankLogosSlider() {
  const items = [...banks, ...banks, ...banks];
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10">
      <div className="mb-4 text-sm uppercase tracking-wide text-foreground/60">
        Наши партнёры
      </div>
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={2}
        spaceBetween={12}
        breakpoints={{
          480: { slidesPerView: 3, spaceBetween: 16 },
          768: { slidesPerView: 5, spaceBetween: 18 },
          1024: { slidesPerView: 6, spaceBetween: 20 },
        }}
        loop
        freeMode={{ enabled: true, momentum: false }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={2000}
        className="select-none"
      >
        {items.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="flex h-16 items-center justify-center rounded-xl border border-foreground/10 px-4 bg-white">
              <img src={src} alt={`logo-${i}`} className="max-h-15 w-auto" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

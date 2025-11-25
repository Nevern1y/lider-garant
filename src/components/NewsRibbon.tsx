"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";

const news = [
  {
    title: "Обновление условий банковских гарантий",
    date: "15.11.2025",
    excerpt: "Снижение ставок и упрощённый скоринг для малого бизнеса.",
  },
  {
    title: "Новый партнёр по лизингу",
    date: "10.11.2025",
    excerpt: "Запущены программы с авансом от 0% и ускоренным одобрением.",
  },
  {
    title: "ВЭД: прямые коррсчета",
    date: "05.11.2025",
    excerpt: "Подключили ещё два иностранных банка для удобных платежей.",
  },
  {
    title: "Страхование контрактов",
    date: "01.11.2025",
    excerpt: "Экспресс-полисы для контрактов свыше 30 млн руб.",
  },
  {
    title: "Тендерное сопровождение",
    date: "28.10.2025",
    excerpt: "Каждый третий тендер — победа. Расширили экспертизу.",
  },
  {
    title: "Расширение продуктовой линейки",
    date: "25.10.2025",
    excerpt: "Добавлены новые финансовые инструменты для бизнеса.",
  },
];

export default function NewsRibbon() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 py-10 md:py-16 overflow-hidden">
      <div className="relative rounded-[32px] border border-foreground/10 p-8 md:p-12 bg-white/5 backdrop-blur-xl">
        <h2 className="mb-10 text-center text-3xl font-semibold text-primary md:text-4xl">
          Новости компании
        </h2>

        {/* Кнопки в правый верхний угол */}
        <div className="absolute top-6 right-6 flex gap-3 z-10">
          <button
            className="news-swiper-button-prev flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 text-foreground transition-all hover:bg-foreground/10 hover:border-foreground/30"
            aria-label="Предыдущая новость"
          >
            ←
          </button>
          <button
            className="news-swiper-button-next flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 text-foreground transition-all hover:bg-foreground/10 hover:border-foreground/30"
            aria-label="Следующая новость"
          >
            →
          </button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
          }}
          navigation={{
            nextEl: ".news-swiper-button-next",
            prevEl: ".news-swiper-button-prev",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
        >
          {news.map((item, i) => (
            <SwiperSlide key={i}>
              <article className="group h-64 flex flex-col justify-between rounded-3xl border border-foreground/10 bg-foreground/5 p-5 transition-all duration-300 hover:border-primary/30">
                <div>
                  <time className="mb-2 block text-xs text-foreground/60">
                    {item.date}
                  </time>
                  <h3 className="mb-3 text-base font-semibold text-foreground line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-foreground/70 line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
                <Button
                  asChild
                  size="sm"
                  className="h-9 rounded-full px-4 text-xs font-medium bg-primary"
                >
                  <a href="#">Читать полностью →</a>
                </Button>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

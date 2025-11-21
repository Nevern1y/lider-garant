"use client";
import FadeIn from "@/components/FadeIn";
import BankLogosSlider from "@/components/BankLogosSlider";
import ManagerCTASection from "@/components/ManagerCTASection";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import Link from "next/link";

export default function Page() {
  const TOTAL_OFFERS = 25;
  const [visibleOffers, setVisibleOffers] = useState(6);

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10 md:py-16">
      <FadeIn>
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 p-8 md:p-12">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative grid items-center gap-6 md:grid-cols-2">
            <div className="space-y-5">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Кредиты для бизнеса
              </h1>
              <p className="max-w-2xl text-foreground/70">
                Предлагаем выбрать вам лучшие условия по кредиту для бизнеса!
              </p>
              <Button
                asChild
                className="h-11 rounded-xl px-6 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:brightness-110 active:translate-y-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
              >
                <Link href="/#application">Подать заявку</Link>
              </Button>
            </div>

            <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl md:block">
              <Image
                src="/credit-bg.jpg"
                alt="Кредит для бизнеса"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <div className="mt-8">
          <BankLogosSlider />
        </div>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mt-8 w-full max-w-7xl py-10">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Доступные виды кредита
          </h2>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {[
              "Кредитная линия (ВКЛ / НКЛ)",
              "Оборотный кредит (до 2 млрд)",
              "На исполнение контракта (до 2 млрд)",
              "Инвестиционные цели",
              "На любые цели",
              "Бизнес-ипотека",
            ].map((t, i) => (
              <SwiperSlide key={i}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-foreground/85 backdrop-blur-md shadow-[0_0_30px_-15px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.35)]">
                  <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500/15 via-sky-500/15 to-emerald-500/15 blur-xl" />
                  {t}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mt-6 w-full max-w-7xl py-12">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Выгоднее и проще, чем напрямую в банк
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Предложение по кредиту (одобрение согласно публикации протокола)",
              "Минимум документооборота (нужны только скан-копии и КП)",
              "Лучшие предложения (Среди нескольких банков и маркетплейсов)",
              "Надёжно и быстро (Согласование до получения решения – до 8 часов)",
            ].map((t, i) => (
              <div
                key={i}
                className="group relative flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[0_0_30px_-12px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-primary/30 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.35)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 text-white text-sm font-bold shadow-md">
                  {i + 1}
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  {t}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto w-full max-w-7xl py-6">
          <h3 className="mb-3 text-lg font-semibold text-foreground">
            Фильтр по предложениям банков
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Сумма", "Срок", "Комиссия"].map((x) => (
              <span
                key={x}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/80 backdrop-blur-md shadow-[0_0_20px_-12px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-12px_rgba(0,0,0,0.35)]"
              >
                {x}
              </span>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto w-full max-w-7xl py-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-foreground">
              Подобрано 25 предложений
            </h3>
            <span className="text-sm text-foreground/60">
              Показываем только самые лучшие предложения
            </span>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur-xl shadow-[0_0_30px_-15px_rgba(0,0,0,0.25)]">
            <div className="grid gap-6 md:grid-cols-2">
              {Array.from({ length: TOTAL_OFFERS })
                .slice(0, visibleOffers)
                .map((_, i) => (
                  <div
                    key={i}
                    className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-background/60 p-5 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-background">
                      <Image
                        src={`/logos/${(i % 8) + 1}.png`}
                        alt="Логотип банка"
                        width={40}
                        height={40}
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 text-sm font-semibold text-foreground">
                        Банк № {2340 + i}
                      </div>
                      <div className="text-xs text-foreground/70">
                        Сумма: до 500 млн ₽ · Срок: до 2600 дн · Комиссия: от
                        1.8%
                      </div>
                    </div>
                    <Button className="shrink-0 rounded-xl px-4 py-2 text-xs font-semibold shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md bg-primary text-primary-foreground">
                      Подать заявку
                    </Button>
                  </div>
                ))}
            </div>
          </div>
          {visibleOffers < TOTAL_OFFERS && (
            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                onClick={() =>
                  setVisibleOffers((v) => Math.min(v + 6, TOTAL_OFFERS))
                }
                className="rounded-full px-6 py-2 text-sm text-foreground/80 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                Показать еще
              </Button>
            </div>
          )}
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mt-2 w-full max-w-7xl py-12">
          <div className="grid items-stretch gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                Подберем самые выгодные предложения
              </h2>
              <p className="mb-6 text-sm text-foreground/70">
                Заполните форму, выберите среди предложений банков лучшее,
                получите кредит и заключайте контракт.
              </p>
              <form
                className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_0_30px_-15px_rgba(0,0,0,0.25)]"
                action="#"
                method="post"
              >
                <div className="grid gap-4">
                  <Input
                    type="text"
                    name="inn"
                    placeholder="ИНН"
                    inputMode="numeric"
                    pattern="^(\\d{10}|\\d{12})$"
                    title="ИНН должен содержать 10 или 12 цифр"
                    required
                    className="h-12 w-full rounded-full border border-foreground/15 bg-background/90 px-4 text-sm"
                  />
                  <Input
                    type="number"
                    name="amount"
                    placeholder="Сумма"
                    inputMode="numeric"
                    min={1}
                    step={1000}
                    title="Укажите сумму больше 0"
                    required
                    className="h-12 w-full rounded-full border border-foreground/15 bg-background/90 px-4 text-sm"
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Номер телефона"
                    inputMode="tel"
                    pattern="^(?:\\+?7|8)?\\d{10}$"
                    title="Формат: +7XXXXXXXXXX или 8XXXXXXXXXX"
                    required
                    className="h-12 w-full rounded-full border border-foreground/15 bg-background/90 px-4 text-sm"
                  />
                </div>
                <label className="flex items-start gap-3 text-xs text-foreground/70">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 rounded border-foreground/30"
                  />
                  <span>
                    Ставя галочку, я соглашаюсь на обработку персональных
                    данных, в соответствии с
                    <a
                      href="/docs/agreement.pdf"
                      target="_blank"
                      className="mx-1 underline"
                    >
                      Соглашением
                    </a>
                    и
                    <a
                      href="/docs/privacy.pdf"
                      target="_blank"
                      className="ml-1 underline"
                    >
                      Политикой конфиденциальности
                    </a>
                    .
                  </span>
                </label>
                <Button
                  type="submit"
                  className="h-11 rounded-xl px-6 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-2xl active:translate-y-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
                >
                  Отправить заявку
                </Button>
              </form>
            </div>
            <div className="relative hidden min-h-[280px] overflow-hidden rounded-3xl border border-foreground/10 md:block">
              <Image
                src="/good-deal.jpg"
                alt="s"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto w-full max-w-7xl py-12 md:py-16">
          <h2 className="mb-8 text-2xl font-bold text-primary md:text-3xl">
            Смотрите также
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_-15px_rgba(0,0,0,0.2)] backdrop-blur-xl">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Банковские гарантии (44‑ФЗ, 223‑ФЗ, 185‑ФЗ (615 ПП),
                  коммерческие закупки, налоговые гарантии)
                </h3>
                <p className="text-sm text-foreground/70">
                  Выбор из нескольких банков и маркетплейсов. Сопровождение без
                  комиссии.
                </p>
              </div>
              <Link
                href="/"
                className="mt-5 inline-flex rounded-xl border border-primary px-5 py-2.5 text-sm font-semibold text-primary"
              >
                Узнать больше
              </Link>
            </div>
            <div className="relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_-15px_rgба(0,0,0,0.2)] backdrop-blur-xl">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Льготное кредитование бизнеса
                </h3>
                <p className="text-sm text-foreground/70">
                  Субсидии и снижение ставки: банки и маркетплейсы с выгодными
                  лимитами.
                </p>
              </div>
              <Link
                href="/"
                className="mt-5 inline-flex rounded-xl border border-primary px-5 py-2.5 text-sm font-semibold text-primary"
              >
                Подобрать условия
              </Link>
            </div>
            <div className="relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_-15px_rgба(0,0,0,0.2)] backdrop-blur-xl">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Тендерное сопровождение
                </h3>
                <p className="text-sm text-foreground/70">
                  Спецсчет, ЕРУЗ, регистрация на площадках. Аккредитации на
                  закрытых секциях.
                </p>
              </div>
              <Link
                href="/"
                className="mt-5 inline-flex rounded-xl border border-primary px-5 py-2.5 text-sm font-semibold text-primary"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto w-full max-w-7xl px-0 py-10 md:py-14">
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              "Как получить кредит на исполнение контракта?",
              "На какой срок можно получить кредит?",
              "Как получить кредит на исполнение контракта?",
              "Что нужно знать для подготовки заявки?",
              "В чем преимущество кредита на исполнение контракта?",
              "Какая ставка на льготное кредитование?",
            ].map((q, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="overflow-hidden rounded-2xl border border-foreground/10 bg-white/5 px-4"
              >
                <AccordionTrigger className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-foreground/90 transition-colors [&[data-state=open]>svg]:rotate-180">
                  {q}
                  <svg
                    className="h-4 w-4 shrink-0 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden pb-4 text-sm text-foreground/70 transition-all duration-300 data-[state=closed]:opacity-0 data-[state=closed]:max-h-0 data-[state=open]:opacity-100 data-[state=open]:max-h-40">
                  Ответим на ваши вопросы с 07.00 до 23.00 по московскому
                  времени. Подать заявку можно онлайн.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </FadeIn>

      <FadeIn>
        <ManagerCTASection />
      </FadeIn>
    </main>
  );
}

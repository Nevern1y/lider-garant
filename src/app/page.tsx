import NewsRibbon from "@/components/NewsRibbon";
import ApplicationFormSection from "@/components/ApplicationFormSection";
import BestOffersSection from "@/components/BestOffersSection";
import ManagerCTASection from "@/components/ManagerCTASection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import BankLogosSlider from "@/components/BankLogosSlider";
import { Button } from "@/components/ui/button";

export default function Home() {
  const products = [
    {
      id: "guarantees",
      title: "Банковские гарантии",
      desc: "44-ФЗ, 223-ФЗ, 185-ФЗ (615 ПП), коммерческие закупки, налоговые гарантии.",
      btn: "Узнать лимит",
      img: "/finance-products/guarantee.png",
    },
    {
      id: "credits",
      title: "Финансирование контракта",
      desc: "Онлайн-заявка за минуту, бесплатное сравнение ставок, получение кредита на лучших условиях.",
      btn: "Подобрать кредит",
      img: "/finance-products/two.png",
    },
    {
      id: "logistics",
      title: "Логистическое кредитование бизнеса",
      desc: "Кредитование для текущих операционных и иных расходов (логистика, оборот).",
      btn: "Подобрать условия",
      img: "/finance-products/three.png",
    },
    {
      id: "ved",
      title: "ВЭД",
      desc: "Прямые корреспондентские счета в иностранных банках и гарантийные списания комиссии.",
      btn: "Подробнее",
      img: "/finance-products/four.png",
    },
    {
      id: "leasing",
      title: "Лизинг",
      desc: "Финансируем новое и с пробегом с авансом от 0%.",
      btn: "Узнать больше",
      img: "/finance-products/money.png",
    },
    {
      id: "insurance",
      title: "Страхование",
      desc: "Экспресс-страхование контрактов свыше 30 млн рублей.",
      btn: "Узнать больше",
      img: "/finance-products/hands.png",
    },
    {
      id: "factoring",
      title: "Факторинг",
      desc: "Финансирование под уступку права требования, улучшение оборотного капитала.",
      btn: "Подробнее",
      img: "/finance-products/settings.png",
    },
    {
      id: "tender",
      title: "Тендерное сопровождение",
      desc: "Каждый 3-й тендер — победа! Спецсчет, ЕРУЗ, закрытые секции.",
      btn: "Подробнее",
      img: "/finance-products/calculator-hand.png",
    },
    {
      id: "checking",
      title: "Проверка контрагентов",
      desc: "Все — от реквизитов и отчетности до контактов и кадровых рисков.",
      btn: "Подробнее",
      img: "/finance-products/proverka.png",
    },
  ];

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12">
      <FadeIn>
        <section className="relative overflow-hidden rounded-[40px] border border-foreground/10">
          <div className="relative grid gap-10 px-4 py-12 md:grid-cols-[1.1fr_0.9fr] md:px-14">
            <div className="flex flex-col justify-center space-y-6 text-left">
              <h1 className="text-3xl font-semibold leading-tight md:text-[52px]">
                <span className="block text-primary tracking-tight">
                  Финансовый маркетплейс
                </span>
                <span className="block mt-2">для предпринимателей</span>
              </h1>

              <p className="max-w-sm text-sm leading-relaxed text-foreground/70 md:text-lg">
                Все для госзакупок и личных нужд — получите предложение онлайн
              </p>
              <div className="flex flex-col gap-5 md:flex-row items-center">
                <button className="learn-more">
                  <span className="circle">
                    <span className="icon arrow"></span>
                  </span>
                  <Link href="/login" className="button-text">
                    Войти
                  </Link>
                </button>
              </div>
            </div>

            <div className="relative w-full overflow-hidden rounded-[30px] p-3 md:p-5 backdrop-blur-xl">
              <video
                src="/hero-fon.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <BankLogosSlider />
      </FadeIn>

      <FadeIn>
        <section
          id="products"
          className="relative overflow-hidden mx-auto w-full max-w-7xl py-5"
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-primary/15 blur-[120px] opacity-70" />
          </div>

          <h2 className="mb-14 text-center text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            <span className="text-primary">Финансовые продукты</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 px-7 py-7 shadow-[0_0_30px_-15px_rgba(0,0,0,0.2)] hover:shadow-xl hover:shadow-primary/10 backdrop-blur-xl transition-all duration-500"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="pr-24 md:pr-32">
                    <h3 className="mb-3 text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-foreground/75">
                      {item.desc}
                    </p>
                  </div>
                  {item.img && (
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={240}
                      height={240}
                      sizes="(min-width: 768px) 240px, 192px"
                      className="pointer-events-none absolute bottom-[0px] right-[-20px] md:right-[-80px] h-48 w-48 md:h-60 md:w-60 object-contain transition-transform duration-300 hover:scale-105"
                    />
                  )}
                </div>

                <div className="mt-auto flex items-center justify-between gap-3">
                  <button className="inline-flex rounded-xl border border-primary px-6 py-2.5 text-sm hover:bg-primary font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:shadow-md active:translate-y-0">
                    {item.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <HowItWorksSection />
      </FadeIn>

      <FadeIn>
        <section className="relative mx-auto w-full max-w-7xl py-5">
          <h2 className="mb-16 text-center text-4xl font-semibold tracking-tight text-primary md:text-5xl">
            Кто и как зарабатывает с нами?
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-3xl hover:shadow-xl hover:shadow-primary/10  border border-foreground/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-foreground/20">
              <div className="relative flex items-start gap-5 ">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white font-bold shadow-md">
                  A
                </span>
                <div>
                  <div className="mb-2 text-lg font-semibold text-foreground">
                    ИП и юридические лица
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    Агенты по банковским гарантиям, финансовые брокеры,
                    предприниматели, владельцы бизнеса.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:border-foreground/20">
              <div className="pointer-events-none absolute  -right-16 -bottom-16 h-52 w-52 rounded-full bg-gradient-to-tl from-emerald-500/20 to-sky-500/10 blur-3xl transition-opacity duration-700 group-hover:opacity-80" />

              <div className="relative flex items-start gap-5">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white font-bold shadow-md">
                  B
                </span>
                <div>
                  <div className="mb-2 text-lg font-semibold text-foreground">
                    Физические лица и самозанятые
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    Тендерные специалисты, бухгалтеры, финансовые консультанты,
                    юристы, агенты, фрилансеры и те, кто ищет дополнительный
                    доход.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center gap-5 text-center">
            <p className="max-w-xl text-sm text-foreground/70">
              Мы вам поможем. Оставьте заявку и начните зарабатывать.
            </p>
            <a
              href="#earn"
              className="inline-flex h-12 items-center rounded-full border border-primary/40 px-8 text-sm font-medium text-primary backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary/10 hover:border-primary/60 hover:shadow-lg"
            >
              Начать зарабатывать
            </a>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <NewsRibbon />
      </FadeIn>
      <FadeIn>
        <ApplicationFormSection />
      </FadeIn>
      <FadeIn>
        <BestOffersSection />
      </FadeIn>
      <FadeIn>
        <ManagerCTASection />
      </FadeIn>
    </main>
  );
}

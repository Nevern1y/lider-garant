"use client";
import FadeIn from "@/components/FadeIn";
import BankLogosSlider from "@/components/BankLogosSlider";
import Image from "next/image";
import ManagerCTASection from "@/components/ManagerCTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { useState } from "react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import GuaranteeHowItWorksSection from "@/components/guarantee-how-it-works";
import { Laptop, Layers, UserCheck, Timer, Percent } from "lucide-react";

export default function BankGuaranteePage() {
  const TOTAL_OFFERS = 25;
  const [visibleOffers, setVisibleOffers] = useState(6);
  const [visibleDeals] = useState(12);

  const benefits = [
    {
      text: "Все операции онлайн — от оформления до получения гарантии.",
      icon: Laptop,
    },
    { text: "Возможность выбрать самое подходящее предложение.", icon: Layers },
    { text: "Помощь менеджера в оформлении заявки.", icon: UserCheck },
    {
      text: "Рассмотрение заявки ≤ 1 часа, гарантия в день обращения.",
      icon: Timer,
    },
    { text: "Минимальная комиссия.", icon: Percent },
  ];

  const banks = [
    "Реалист",
    "Банк Казани",
    "Абсолют",
    "МТС",
    "Зенит",
    "Альфа",
    "ПСБ",
    "Газпромбанк",
    "Уралсиб",
    "Металлинвестбанк",
    "Совкомбанк",
    "МКБ",
    "Банк Левобережный",
    "Руснарбанк",
    "СГБ",
    "МСП",
    "ТКБ",
    "Санкт-Петербург",
    "Тиньков",
    "Ингострахбанк",
    "СДМ Банк",
    "ЛокоБанк",
    "Ак Барс",
    "Алеф-Банк",
    "Евразийский Банк",
    "Росбанк",
    "Транстройбанк",
    "Урал ФД",
    "Банк Колуга",
    "Банк Солидарности",
    "Меткомбанк",
    "Солид Банк",
    "Промсоцбанк",
    "БСПБ",
    "Камкомбанк",
    "Озон Банк",
    "Дом РФ",
    "Кубань Кредит",
    "Газстрансбанк",
    "Сбербанк",
  ];

  const related = [
    {
      title: "Кредитирование бизнеса",
      desc: "Кредитование для осуществления текущих операционных и иных расходов.",
      href: "/credits",
    },
    {
      title: "ВЭД",
      desc: "Прямые корреспондентские счета в иностранных банках и гарантийные снижение комиссии на конвертацию.",
      href: "/ved",
    },
    {
      title: "Страхование",
      desc: "Экспресс страхование крупных контрактов свыше 1млрд рублей.",
      href: "/insurance",
    },
    {
      title: "Лизинг",
      desc: "Финансируем новое и с пробегом с авансом от 0%.",
      href: "/leasing",
    },
    {
      title: "Проверка контрагентов",
      desc: "Все от реквизитов и отчетности,до контактов и кадровых рисков.",
      href: "/checking",
    },
    {
      title: "Тендерное сопровождение",
      desc: "Каждый 3‑й тендер — победа! Штат опытных специалистов по цене одного сотрудника.Специальный счет, ЕРУЗ, аккредитация на закрытые секции.",
      href: "/tender-support",
    },
  ];

  const deals = Array.from({ length: 24 }).map((_, i) => ({
    title: [
      "Банковская гарантия",
      "Банковская гарантия",
      "Банковская гарантия",
      "Банковская гарантия",
    ][i % 4],
    amount: [
      "50 000 000 ₽",
      "26 205 355 ₽",
      "76 932 998 ₽",
      "37 955 980 ₽",
      "221 929 992 ₽",
      "30 000 000 ₽",
      "44 769 067 ₽",
    ][i % 7],
  }));
  return (
    <>
      <main className="mx-auto w-full max-w-7xl px-6 py-10 md:py-16">
        <FadeIn>
          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 p-8 md:p-12">
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative grid items-center gap-8 md:grid-cols-2">
              <div className="space-y-5">
                <h1 className="text-3xl font-semibold tracking-tight md:text-5xl text-primary">
                  Банковская гарантия
                </h1>
                <p className="max-w-2xl text-base text-foreground/80 md:text-lg">
                  Предлагаем выбрать вам лучшие условия по банковским гарантиям
                  для бизнеса!
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-foreground/80 md:text-sm">
                    Закрытые закупки
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-foreground/80 md:text-sm">
                    Коммерческие закупки
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    asChild
                    className="h-11 rounded-xl px-6 text-sm font-medium bg-primary text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:brightness-110 active:translate-y-0 "
                  >
                    <Link href="/#application">Подать заявку!</Link>
                  </Button>
                </div>
              </div>

              <div className="relative hidden h-[360px] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl md:flex items-center justify-center">
                <Image
                  src="/guarantee.png"
                  alt=""
                  width={640}
                  height={640}
                  sizes="(min-width: 1024px) 520px, 380px"
                  className="h-72 w-auto md:h-80 lg:h-88 object-contain"
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
          <GuaranteeHowItWorksSection />
        </FadeIn>

        <FadeIn>
          <section className="relative mx-auto mt-6 w-full max-w-7xl py-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
              <div className="h-112 w-md rounded-full bg-gradient-to-br from-indigo-500/30 via-sky-500/25 to-emerald-500/30 blur-[140px] opacity-70" />
            </div>

            <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-primary md:text-4xl">
              Кто и как зарабатывает с нами?
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:shadow-[0_0_55px_-5px_rgba(0,0,0,0.25)] hover:border-white/20">
                <div className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full bg-gradient-to-br from-indigo-500/20 to-sky-500/10 blur-3xl transition-opacity duration-700 group-hover:opacity-80" />

                <div className="relative flex items-start gap-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-base font-bold text-white shadow-md">
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

              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:shadow-[0_0_55px_-5px_rgba(0,0,0,0.25)] hover:border-white/20">
                <div className="pointer-events-none absolute -right-16 -bottom-16 h-52 w-52 rounded-full bg-gradient-to-tl from-emerald-500/20 to-sky-500/10 blur-3xl transition-opacity duration-700 group-hover:opacity-80" />

                <div className="relative flex items-start gap-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-base font-bold text-white shadow-md">
                    B
                  </span>
                  <div>
                    <div className="mb-2 text-lg font-semibold text-foreground">
                      Физические лица и самозанятые
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      Тендерные специалисты, бухгалтеры, финансовые
                      консультанты, юристы, агенты, фрилансеры и те, кто ищет
                      дополнительный доход.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-5 text-center">
              <p className="max-w-xl text-sm text-foreground/70">
                Мы вам поможем. Оставьте заявку и начните зарабатывать.
              </p>
              <Button asChild variant="outline" className="btn-three h-12 px-6">
                <Link href="/#application">Начать зарабатывать</Link>
              </Button>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mx-auto mt-6 w-full max-w-7xl py-16">
            <h2 className="mb-12 text-center text-2xl font-bold text-primary md:text-3xl">
              Почему работать с нами выгодно?
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {benefits.map((item, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col items-center text-center gap-3 rounded-2xl border border-primary/10 bg-background/70 p-6 backdrop-blur-xl shadow-lg transition-all duration-300 hover:border-primary/40 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-md group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6" />
                  </div>

                  <p className="text-foreground/80 text-xs md:text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mx-auto mt-2 w-full max-w-7xl py-12">
            <div className="grid items-stretch gap-10 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-primary">
                  Подберем самые выгодные предложения
                </h2>
                <p className="mb-6 text-sm text-foreground/70">
                  Заполните форму, выберите среди предложений банков лучшее,
                  получите гарантию и заключайте контракт с заказчиком.
                </p>
                <form className="space-y-4" action="#" method="post">
                  <div className="grid gap-4">
                    <Input
                      type="text"
                      name="inn"
                      placeholder="ИНН"
                      inputMode="numeric"
                      pattern="^\\d{10}(\\d{2})?$"
                      maxLength={12}
                      title="ИНН должен содержать 10 или 12 цифр"
                      required
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        target.value = target.value.replace(/\D/g, ""); // оставить только цифры
                      }}
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
                      inputMode="numeric"
                      pattern="^\\+?7\\d{10}$"
                      title="Формат: +7XXXXXXXXXX"
                      maxLength={12}
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
                  <Button type="submit" className="btn-three h-12">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              <div className="relative h-80 md:h-auto w-full rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/good-deal.jpg"
                  alt="good deal"
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
          <section className="mx-auto w-full max-w-7xl py-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-primary">
                Подобрано 25 предложений
              </h3>
              <span className="text-sm text-foreground/60">
                Показываем только самые лучшие предложения
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {banks.slice(0, visibleOffers).map((bank, i) => (
                <div
                  key={i}
                  className="relative flex items-center gap-4 rounded-2xl border border-foreground/10 bg-white/5 p-5 hover:-translate-y-1 hover:border-primary/70 transition-all"
                >
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 text-2xl font-semibold text-primary">
                      {bank}
                    </div>
                    <div className="text-xs text-foreground/70">
                      Сумма: до 500 млн ₽ · Срок: до 2600 дн · Комиссия: от 1.8%
                    </div>
                  </div>
                  <Button className="shrink-0 rounded-xl px-4 py-2 text-xs font-semibold shadow-sm  hover:-translate-y-0.5 hover:shadow-md bg-none border border-primary hover:bg-primary text-primary hover:text-white transition-all">
                    Подать заявку
                  </Button>
                </div>
              ))}
            </div>

            {visibleOffers < TOTAL_OFFERS && (
              <div className="mt-6 flex justify-center">
                <Button
                  variant="outline"
                  onClick={() =>
                    setVisibleOffers((v) => Math.min(v + 6, TOTAL_OFFERS))
                  }
                  className="rounded-full px-6 py-2 text-sm text-foreground/80 transition-transform hover:-translate-y-0.5 hover:shadow-sm"
                >
                  Показать еще
                </Button>
              </div>
            )}
          </section>
        </FadeIn>
        <FadeIn>
          <section className="mx-auto w-full max-w-7xl px-0 py-10 md:py-14">
            <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl text-center">
              Часто задаваемые вопросы
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "Что такое банковская гарантия и для чего она нужна?",
                  a: "Это обязательство банка выплатить заказчику сумму по гарантии, если поставщик нарушит условия контракта.",
                },
                {
                  q: "Какие виды банковских гарантий можно оформить через Лидер Гарант?",
                  a: "44‑ФЗ, 223‑ФЗ, 185‑ФЗ (615 ПП), коммерческие закупки и налоговые гарантии.",
                },
                {
                  q: "Кто может получить банковскую гарантию?",
                  a: "ИП и ООО с подтверждаемым опытом и финансовыми показателями. Рассмотрим и молодые компании.",
                },
                {
                  q: "Сколько времени занимает получение банковской гарантии?",
                  a: "Первичное решение — от 1 часа, выдача часто в день обращения.",
                },
                {
                  q: "Какие документы нужны?",
                  a: "Уставные документы, финансовая отчётность и сведения по контракту. Список индивидуальный — поможем собрать.",
                },
                {
                  q: "Можно ли получить без посещения банка?",
                  a: "Да, весь процесс и выпуск возможны онлайн.",
                },
                {
                  q: "Поможет ли менеджер при оформлении?",
                  a: "Да, персональный менеджер сопровождает на каждом шаге и подсказывает оптимальные условия.",
                },
              ].map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="overflow-hidden rounded-2xl border border-foreground/10 bg-white/5 px-4 hover:border-primary transition-all"
                >
                  <AccordionTrigger className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-foreground/90 transition-colors [&[data-state=open]>svg]:rotate-180">
                    {item.q}
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
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mx-auto w-full max-w-7xl py-12">
            <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl text-center">
              Смотрите также
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-white/5 p-5 backdrop-blur-xl transition-all hover:-translate-y-0.5"
                >
                  <div className="mb-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </div>
                  <p className="mb-5 text-sm text-foreground/70">{item.desc}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-xl px-4 py-2 text-sm border border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <a href={item.href}>Подробнее</a>
                  </Button>
                </div>
              ))}
            </div>
            <h3 className="text-sm text-foreground/70 text-center mt-6">
              Ответим на ваши вопросы с 7:00 до 23:00 по московскому времени
            </h3>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mx-auto w-full max-w-7xl py-12">
            <h2 className="mb-10 text-2xl font-bold text-primary md:text-3xl text-center">
              Гарантии для госзаказа
            </h2>

            <div className="grid gap-6 md:grid-cols-3 ">
              <div className="rounded-xl border border-foreground/10 bg-foreground/5 p-6">
                <p className="text-base text-muted-foreground ">
                  Получить поручительство банка на выполнение обязательств для
                  заказчика,согласно требованиям 44-ФЗ,223-ФЗ,с помощью нашего
                  финансового маркетплейса , можно быстро и выгодно.
                </p>
              </div>

              <div className="rounded-xl border border-foreground/10 bg-foreground/10 p-6">
                <p className="text-base text-muted-foreground">
                  Одна заявка уйдет в несколько банков , среди предложений,среди
                  которых выберете лучшее.
                </p>
              </div>

              <div className="rounded-xl border border-foreground/10 bg-foreground/10 p-6">
                <p className="mb-4 font-semibold">
                  Мы работаем со всеми видами гарантий для госзаказа :
                </p>
                <ul className="flex flex-col gap-2 text-muted-foreground">
                  <li>Гарантии на заявку для участия в торгах</li>
                  <li>Гарантии на исполнение контракта</li>
                  <li>Гарантии обеспечение гарантийных обязательств</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <ManagerCTASection />
        </FadeIn>
        <section className="mx-auto mt-2 w-full max-w-7xl py-8">
          <div className="mb-2 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
                Лента сделок
              </h2>
              <p className="text-sm text-foreground/60">
                Последние заявки от наших клиентов и агентов
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-foreground md:text-3xl">
                3 064 379 982 ₽
              </div>
              <div className="text-xs text-foreground/60">
                Общая сумма последних заявок
              </div>
            </div>
          </div>
          <div className="relative pt-2">
            <Swiper
              modules={[Autoplay, FreeMode]}
              slidesPerView={1.2}
              spaceBetween={12}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 14 },
                768: { slidesPerView: 3, spaceBetween: 16 },
                1024: { slidesPerView: 4, spaceBetween: 18 },
              }}
              loop
              freeMode={{ enabled: true, momentum: false }}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={2200}
              className="select-none"
            >
              {deals.slice(0, visibleDeals).map((d, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-foreground/85 backdrop-blur-md flex h-full min-h-[180px] flex-col">
                    <div className="mb-1 text-xs text-foreground/60">
                      Гарантии
                    </div>
                    <div className="mb-3 text-base font-semibold leading-snug">
                      {d.title}
                    </div>
                    <div className="mb-3 h-px w-full bg-white/10" />
                    <div className="mt-auto">
                      <div className="text-2xl font-bold">{d.amount}</div>
                      <div className="text-xs text-foreground/60">
                        сумма заявки
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <FadeIn>
          <section className="mx-auto w-full max-w-7xl py-12">
            <h2 className="mb-10 text-2xl font-bold text-primary md:text-3xl">
              Часто ищут
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-foreground/10 bg-foreground/10 p-6 space-y-2">
                {[
                  "Банковские гарантии на исполнение контракта",
                  "Банковские гарантии на участие в тендере",
                  "Банковские гарантии на гарантийное обеспечение (ГО)",
                  "Банковские гарантии на авансовый платёж",
                  "Банковские гарантии по закрытой закупке",
                  "Банковские гарантии по коммерческой закупке",
                ].map((t, i) => (
                  <Link
                    key={i}
                    href="/#application"
                    className="block text-sm text-primary underline underline-offset-2 hover:text-primary/70 transition-colors"
                  >
                    {t}
                  </Link>
                ))}
              </div>

              <div className="rounded-xl border border-foreground/10 bg-foreground/10 p-6 space-y-2">
                {[
                  "Банковские гарантии для ИП",
                  "Банковские гарантии для ООО",
                  "Банковские гарантии 44-ФЗ",
                  "Банковские гарантии 223-ФЗ",
                  "Экспресс-гарантии",
                  "Налоговые банковские гарантии",
                ].map((t, i) => (
                  <Link
                    key={i}
                    href="/#application"
                    className="block text-sm text-primary underline underline-offset-2 hover:text-primary/70 transition-colors"
                  >
                    {t}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>
      </main>
    </>
  );
}

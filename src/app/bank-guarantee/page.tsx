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
// Swiper removed - using grid layout for deals
import GuaranteeHowItWorksSection from "@/components/guarantee-how-it-works";
import {
  Laptop,
  Layers,
  UserCheck,
  Timer,
  Percent,
  CheckCheck,
} from "lucide-react";
import {
  ShieldCheck,
  FileCheck,
  Building2,
  BadgeCheck,
  Lock,
  Handshake,
} from "lucide-react";
import TopApplicationForm from "@/components/topApplicationForm";
import GuaranteeCalculator from "@/components/GuaranteeCalculator";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Банковская гарантия на обеспечение заявки участия в тендере",
    desc: "Вид банковской гарантии, подтверждающий добросовестность поставщика и его намерения подписать контракт,в случае победы в тендере. Выдача БГ день в день.",
    features: ["44-ФЗ", "223-ФЗ", "Коммерческая"],
  },
  {
    icon: FileCheck,
    title: "Банковская гарантия на обеспечение исполнения контракта ",
    desc: "Вид Банковской гарантирующая заказчику исполнения контракта и обеспечивает выполнение обязательств, в случае, если победитель тендера не выполнит условия контракта.БГ предоставляется до или сразу после заключения контракта, до 2 млрд.",
    features: ["44-ФЗ", "223-ФЗ", "Коммерческая"],
  },
  {
    icon: Building2,
    title: "Банковская гарантия на аванс",
    desc: "Это обязательство Гарантия возврата аванса, документ, выданный банком в пользу заказчика, для подтверждения, что исполнитель контракта гарантированно вернёт аванс в случае отказа от исполнения обязательств. Обычно выдается банком на всю сумму авансового платежа и может уменьшаться по мере поставки товара,выполнения работы, оказания услуги, до 2 млрд.",
    features: ["223-ФЗ", "Коммерческая"],
  },
  {
    icon: BadgeCheck,
    title: "Банковская гарантия обеспечения гарантийных обязательств",
    desc: "Этот вид БГ обеспечивает гарантии качества товара, работ или услуг на гарантийный срок.Исполнитель предоставляет её заказчику для подтверждения гарантийных обязательств по качеству,без ограничений по сроку.",
    features: ["44-ФЗ", "223-ФЗ", "Коммерческая"],
  },
  {
    icon: Lock,
    title: "Банковские гарантии налоговые",
    desc: "Это документ, который обеспечивает оплату пошлин налогоплательщиком перед налоговыми органами. Некоторые виды налоговой БГ: банковская гарантия оплаты акцизов; банковская гарантия возврата возмещённого НДС;банковская гарантия гарантия по отсрочке платежей в ФСС и налоговую службу",
    features: ["Коммерческая"],
  },
  {
    icon: Handshake,
    title: "Банковские гарантии таможенные",
    desc: "Вид БГ, обеспечивающий выплату банком в пользу таможенных органов, в случае не выполнения компанией своих обязательств по уплате таможенных пошлин, сборов, и других обязательных платежей при ввозе или вывозе товаров.",
    features: ["Коммерческая"],
  },
];
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
      img: "/finance-products/guarantee.png",
    },
    {
      title: "ВЭД",
      desc: "Прямые корреспондентские счета в иностранных банках и гарантийные снижение комиссии на конвертацию.",
      href: "/ved",
      img: "/finance-products/money.png",
    },
    {
      title: "Страхование",
      desc: "Экспресс страхование крупных контрактов свыше 1млрд рублей.",
      href: "/insurance",
      img: "/finance-products/hands.png",
    },
    {
      title: "Лизинг",
      desc: "Финансируем новое и с пробегом с авансом от 0%.",
      href: "/leasing",
      img: "/finance-products/four.png",
    },
    {
      title: "Проверка контрагентов",
      desc: "Все от реквизитов и отчетности,до контактов и кадровых рисков.",
      href: "/checking",
      img: "/finance-products/proverka.png",
    },
    {
      title: "Тендерное сопровождение",
      desc: "Каждый 3‑й тендер — победа! Штат опытных специалистов по цене одного сотрудника.Специальный счет, ЕРУЗ, аккредитация на закрытые секции.",
      href: "/tender-support",
      img: "/finance-products/calculator-hand.png",
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
            <div className="relative grid items-center gap-8 md:grid-cols-2">
              <div className="space-y-5">
                <h1 className="text-3xl font-semibold tracking-tight md:text-5xl text-white">
                  Банковская гарантия
                  <div className="text-primary">с выгодой 45%</div>
                </h1>
                <h2 className="text-2xl font-semibold">
                  Оформите банковскую гарантию <br /> в 20+ банках партнерах:
                </h2>
                <p className="max-w-2xl text-base text-foreground/80 md:text-lg"></p>
                <ul>
                  <li className="list-disc marker:text-primary">
                    Сумма банковской гарантии до 2 млрд
                  </li>
                  <li className="list-disc marker:text-primary">
                    Гарантии до 10 млн рублей за 2 минуты по паспорту
                  </li>
                  <li className="list-disc marker:text-primary">
                    44-ФЗ, 223-ФЗ, 185-ФЗ и коммерция
                  </li>
                  <li className="list-disc marker:text-primary">
                    Все регионы: включая СКФО, Крым и новые территории
                  </li>
                </ul>

                <div className="flex items-center gap-3">
                  <Button asChild className="btn-three h-12">
                    <Link href="/#application">Подать заявку!</Link>
                  </Button>
                </div>
              </div>

              <div className="relative hidden h-[360px] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl md:flex items-center justify-center">
                <div className="absolute bottom-2 right-2 space-y-3 z-20">
                  <div className="flex items-center gap-3 rounded-lg bg-background/60 border border-white/10 px-3 py-2 backdrop-blur-md">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                      <CheckCheck className="h-3 w-3" />
                    </div>
                    <span className="text-sm font-medium text-white">
                      Одна заявка — множество предложений
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-background/60 border border-white/10 px-3 py-2 backdrop-blur-md">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                      <CheckCheck className="h-3 w-3" />
                    </div>
                    <span className="text-sm font-medium text-white">
                      Одобрение и выдача онлайн
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-background/60 border border-white/10 px-3 py-2 backdrop-blur-md">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                      <CheckCheck className="h-3 w-3" />
                    </div>
                    <span className="text-sm font-medium text-white">
                      Все виды банковских гарантий
                    </span>
                  </div>
                </div>

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
          <section className="mx-auto mt-16 w-full max-w-7xl py-12">
            <h2 className="mb-10 text-center text-3xl font-bold text-primary">
              Доступные виды Банковских гарантий
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {guarantees.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="group relative rounded-2xl hover:-translate-y-1 border border-foreground/10 bg-white/5 p-4 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold text-foreground ">
                          {item.title}
                        </h3>

                        <div className="mt-2 flex flex-wrap gap-2">
                          {item.features.map((f) => (
                            <span
                              key={f}
                              className="inline-flex items-center text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full px-2 py-1"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-foreground/70">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
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
          <GuaranteeCalculator />
        </FadeIn>

        <FadeIn>
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
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {deals.slice(0, visibleDeals).map((d, i) => (
                <div
                  key={i}
                  className="w-full rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-foreground/85 backdrop-blur-md flex h-full min-h-[180px] flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
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
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <TopApplicationForm />
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
                  className="relative overflow-hidden flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 px-7 py-7 shadow-[0_0_30px_-15px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-500 hover:shadow-lg"
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
                      Узнать больше
                    </button>
                  </div>
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

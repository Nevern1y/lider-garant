"use client";
import FadeIn from "@/components/FadeIn";
import BankLogosSlider from "@/components/BankLogosSlider";
import ManagerCTASection from "@/components/ManagerCTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import Image from "next/image";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const [visibleDeals] = useState(12);

  const responsibility = [
    "Гражданская ответственность перевозчика (пассажиры)",
    "Ответственность членов СРО/ОДО (фин.риски и СМР)",
    "ОСГОП/ОСГОП (обязательное)",
    "Профессиональная ответственность (ЧОП, проектировщики, туроператор)",
  ];

  const propertyAndCargo = [
    "Разовая перевозка",
    "Перевозчик",
    "Имущество",
    "Ипотека",
  ];

  const accidents = [
    "Страхование от несчастных случаев",
    "Страхование спортсменов (дети и взрослые)",
    "Добровольное страхование от НС",
    "Несчастные случаи при исполнении трудовых обязанностей",
  ];

  const benefits = [
    "Выгодные предложения от ТОП страховщиков",
    "Улучшение условий по действующим договорам",
    "Договор и полисы в удобном режиме",
    "Страхуем во всех субъектах РФ, включая новые",
  ];

  const deals = Array.from({ length: 24 }).map((_, i) => ({
    title: [
      "Страхование строительно-монтажные риски",
      "Страхование ответственности членов СРО",
      "Страхование имущества и груза",
      "ГО за причинение вреда третьим лицам",
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

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10 md:py-16">
      <FadeIn>
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 p-8 md:p-12">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-5">
              <h1 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
                Страхование бизнеса.
              </h1>
              <p className="max-w-2xl text-base text-foreground/80 md:text-lg">
                Страхование деятельности юридического лица, обеспечит надежную
                защиту от действий третьих лиц, связанных с риском утраты,
                повреждения или уничтожения дорогостоящего имущества и
                оборудования.
              </p>
              <div className="flex items-center gap-3">
                <Button asChild className="btn-three h-12">
                  <a href="#insurance-form">Запросить предложение онлайн</a>
                </Button>
              </div>
              <div className="mt-4 grid w-full max-w-md grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
                  <div className="text-3xl font-bold text-foreground">14</div>
                  <div className="text-xs text-foreground/70">
                    страховых компаний
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
                  <div className="text-3xl font-bold text-foreground">125</div>
                  <div className="text-xs text-foreground/70">
                    видов страхования
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden h-[360px] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl md:flex items-center justify-center">
              <Image
                src="/people.png"
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
        <section className="mx-auto mt-8 w-full max-w-7xl py-10">
          <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Виды страхования
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 pr-28 md:pr-40 min-h-[180px] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-3 text-lg font-semibold text-foreground">
                Строительно-монтажные риски
              </div>
              <ul className="space-y-2 text-sm text-foreground/85">
                {[
                  "Строительно-монтажные риски",
                  "СМР, Ответственность",
                  "СМР, Ответственность, ППГО",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute -right-6 bottom-0 h-28 w-28 rounded-full bg-white/10 blur-xl" />
              <Image
                aria-hidden
                src="/casca.png"
                alt=""
                width={220}
                height={220}
                className="pointer-events-none absolute -bottom-2 -right-2 h-36 w-36 md:h-44 md:w-44 object-contain"
              />
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-3 text-lg font-semibold text-foreground">
                Все виды страхования ответственности
              </div>
              <ul className="space-y-2 text-sm text-foreground/85">
                {responsibility.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute -right-6 bottom-0 h-28 w-28 rounded-full bg-white/10 blur-xl" />
              <Image
                aria-hidden
                src="/shield.png"
                alt=""
                width={220}
                height={220}
                className="pointer-events-none absolute bottom-6 -right-6 h-36 w-36 md:h-44 md:w-44 object-contain"
              />
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-3 text-lg font-semibold text-foreground">
                Имущество и грузы
              </div>
              <ul className="space-y-2 text-sm text-foreground/85">
                {propertyAndCargo.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute -right-6 bottom-0 h-28 w-28 rounded-full bg-white/10 blur-xl" />
              <Image
                aria-hidden
                src="/cart-and-box.png"
                alt=""
                width={220}
                height={220}
                className="pointer-events-none absolute -bottom-2 -right-2 h-36 w-36 md:h-44 md:w-44 object-contain"
              />
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-3 text-lg font-semibold text-foreground">
                Страхование от несчастных случаев
              </div>
              <ul className="space-y-2 text-sm text-foreground/85">
                {accidents.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute -right-6 bottom-0 h-28 w-28 rounded-full bg-white/10 blur-xl" />
              <Image
                aria-hidden
                src="/circle.png"
                alt=""
                width={220}
                height={220}
                className="pointer-events-none absolute -bottom-2 -right-2 h-36 w-36 md:h-44 md:w-44 object-contain"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mt-2 w-full max-w-7xl py-10">
          <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Преимущества
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((t, i) => (
              <div
                key={t}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-foreground/85 backdrop-blur-md"
              >
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-foreground/70">
                  {i + 1}
                </div>
                <div className="leading-snug">{t}</div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mt-2 w-full max-w-7xl py-10">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-primary md:text-3xl">
                Дадим лучшее предложение
              </h2>
              <p className="mb-2 text-sm text-foreground/70">
                Уже получили предложение по страхованию?
              </p>
              <p className="mb-6 text-sm text-foreground/70">
                Мы дадим лучшие условия страхования после заключения о качестве
                предложения.
              </p>
              <Button
                asChild
                variant="outline"
                className="rounded-xl px-5 py-2.5 text-sm"
              >
                <a href="#insurance-form">Оставить заявку</a>
              </Button>
            </div>
            <div className="relative hidden min-h-[220px] rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 md:block">
              <div className="absolute inset-0 flex items-center justify-center text-foreground/60 text-sm">
                Иллюстрация
              </div>
            </div>
          </div>
        </section>
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
                  страхование
                </div>
                <div className="mb-3 text-base font-semibold leading-snug">
                  {d.title}
                </div>
                <div className="mb-3 h-px w-full bg-white/10" />
                <div className="mt-auto">
                  <div className="text-2xl font-bold">{d.amount}</div>
                  <div className="text-xs text-foreground/60">сумма заявки</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="mx-auto w-full max-w-7xl px-0 py-10 md:py-14">
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl text-center md:text-left">
            Часто задаваемые вопросы
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {[
              {
                q: "Зачем бизнесу нужно страхование ?",
                a: "Страхование покрывает убытки,которые юридическое лицо может понести в случае причинения вреда третьим лицам,в том числе клиентам,партнерам или сотрудникам.Это помогает защитить компанию от юридических и финансовых последствий.",
              },
              {
                q: "Что можно страховать?",
                a: "Страхование юридических лиц позволяет застраховать:Строительные объекты, Гражданскую ответственность при СМР, период гарантии на объект Страхование от несчастных случаев. Гражданскую ответственность исполнителя работ, включая профессиональную , а также обязательную ответсвенность в силу закона.Ответственность директоров предприятий",
              },
              {
                q: "Что такое страховой риск?",
                a: "Страховой риск — это событие, которое невозможно точно предсказать по времени и месту его наступления, оно не зависит от воли участников и несет в себе потенциальную опасность, что создает мотивацию для страхования. Это риск, который можно оценить с точки зрения вероятности его наступления и возможного объема ущерба",
              },
              {
                q: "Каким контрактам необходимы СМР?",
                a: "Строительно-монтажные риски необходимы для следующих контрактов:Контракты по 615 постановлению правительства;Иные контракты, где есть риск гибели и утраты объекта строительтва",
              },
              {
                q: "Кому стоит покупать страховку?",
                a: `Строителям.
              Владельцам зданий и сооружений.
              Клининговым компаниям.
              Членам СРО.
              Товаропроизводителям.
              Любому бизнесу, желающему сохранить и развить свое предприятие.
              Организациям, обязанным иметь страховку в силу закона (например ЧОП и туроператор).`,
              },
              {
                q: "Кому требуется страхование строительно-монтажных рисков?",
                a: `Страхование СМР необходимо для:
              Исполнителей строительно-монтажных работ.
              Генеральных подрядчиков.
              Подрядчиков.
              Субподрядчиков.`,
              },
              {
                q: "Зачем покупать договор страхования?",
                a: `Обезопасить свой бизнес.
              Не понести расходов перед третьими лицами в случае проишествий.
              Выполнить требования заказчика.
              Выполнить требования закона.
              Повысить свой балл на коммерческих закупках.
              Защитить свой персонал от возможных происшествий.`,
              },

              {
                q: "Кто может оплатить страховку?",
                a: "Оплатить страховку может страхователь или третье лицо (как физическое, так и юридическое) по его поручению",
              },
              {
                q: "Договор страхования может быть продлен, если клиент не закончил исполнение контракта вовремя?",
                a: `Для проления договора страхования, обязательно должно быть предоставлено "документальное обеспечение".
Стоимость страховки в таком случае, как правило, увеличивается.`,
              },
            ].map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <AccordionTrigger className="w-full cursor-pointer px-5 py-4 text-left text-sm font-medium text-foreground transition-colors data-[state=open]:bg-white/5">
                  <div className="flex items-center justify-between gap-4">
                    <span>{item.q}</span>
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/10 text-base leading-none text-foreground/80">
                      <Plus className="h-4 w-4 data-[state=open]:hidden" />
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 text-sm text-foreground/80 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </FadeIn>

      <FadeIn>
        <section
          id="insurance-form"
          className="mx-auto mt-2 w-full max-w-7xl py-12"
        >
          <div className="grid items-stretch gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                Подберем самые выгодные предложения
              </h2>
              <p className="mb-6 text-sm text-foreground/70">
                Заполните форму, выберите среди предложений лучшее, получите
                полис и защитите бизнес.
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
                  <PhoneInput
                    name="phone"
                    className="h-12 w-full rounded-full border border-foreground/15 bg-background/90 px-4 text-sm"
                    required
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
            <div className="relative hidden min-h-[260px] rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 md:block">
              <Image
                src="/good-deal.jpg"
                alt="s"
                fill
                className="object-cover object-center rounded-3xl"
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
            {related.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all hover:-translate-y-0.5"
              >
                <div className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </div>
                <p className="mb-5 text-sm text-foreground/70">{item.desc}</p>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl px-4 py-2 text-sm"
                >
                  <a href={item.href}>Подробнее</a>
                </Button>
              </div>
            ))}
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
  );
}

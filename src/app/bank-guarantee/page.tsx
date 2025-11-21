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

export default function BankGuaranteePage() {
  const TOTAL_OFFERS = 25;
  const [visibleOffers, setVisibleOffers] = useState(6);

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
    <>
      <main className="mx-auto w-full max-w-7xl px-6 py-10 md:py-16">
        <FadeIn>
          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 p-8 md:p-12">
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative grid items-center gap-8 md:grid-cols-2">
              <div className="space-y-5">
                <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
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
                    className="h-11 rounded-xl px-6 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:brightness-110 active:translate-y-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
                  >
                    <Link href="/#application">Подать заявку!</Link>
                  </Button>
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

                <div className="pointer-events-none absolute right-4 bottom-8 flex w-full max-w-[230px] flex-col gap-2">
                  {[
                    "Одна заявка — множество предложений",
                    "Одобрение и выдача онлайн",
                    "Все виды банковских гарантий",
                  ].map((text, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 rounded-2xl bg-white/95 px-3 py-2 text-xs font-medium text-slate-800 shadow-md"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-600 text-[11px] text-white">
                        ✓
                      </span>
                      <span className="leading-snug">{text}</span>
                    </div>
                  ))}
                </div>
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
          <section className="mx-auto mt-6 w-full max-w-7xl py-12">
            <div className="rounded-2xl border border-foreground/10 bg-white/5 p-6 md:p-8 shadow-md">
              <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
                Как это работает?
              </h2>
              <ol className="space-y-4 md:space-y-5">
                <li className="rounded-xl border border-foreground/10 bg-white/5 p-4">
                  <div className="flex gap-4">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background text-sm font-semibold">
                      1
                    </span>
                    <div>
                      <div className="text-base font-semibold">
                        Пройдите простую регистрацию
                      </div>
                      <div className="text-sm text-foreground/70">
                        Создайте аккаунт за минуту и получите доступ к личному
                        кабинету.
                      </div>
                      <Button
                        asChild
                        className="mt-3 h-10 rounded-full px-5 text-sm font-medium text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-xl active:translate-y-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
                      >
                        <a href="/login">Зарегистрироваться</a>
                      </Button>
                    </div>
                  </div>
                </li>

                <li className="rounded-xl border border-foreground/10 bg-white/5 p-4">
                  <div className="flex gap-4">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background text-sm font-semibold">
                      2
                    </span>
                    <div>
                      <div className="text-base font-semibold">
                        Заведите заявку на банковскую гарантию
                      </div>
                      <div className="text-sm text-foreground/70">
                        Заполните короткую форму — это займёт пару минут.
                      </div>
                    </div>
                  </div>
                </li>

                <li className="rounded-xl border border-foreground/10 bg-white/5 p-4">
                  <div className="flex gap-4">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background text-sm font-semibold">
                      3
                    </span>
                    <div>
                      <div className="text-base font-semibold">
                        Выберите предложение в режиме одного окна
                      </div>
                      <div className="text-sm text-foreground/70">
                        Сравните условия от банков и подтвердите лучший вариант.
                      </div>
                    </div>
                  </div>
                </li>

                <li className="rounded-xl border border-foreground/10 bg-white/5 p-4">
                  <div className="flex gap-4">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background text-sm font-semibold">
                      4
                    </span>
                    <div>
                      <div className="text-base font-semibold">
                        Оформите банковскую гарантию и получите комиссионное
                        вознаграждение
                      </div>
                      <div className="text-sm text-foreground/70">
                        Всё онлайн — без посещения офиса.
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="relative mx-auto mt-6 w-full max-w-7xl py-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
              <div className="h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-indigo-500/30 via-sky-500/25 to-emerald-500/30 blur-[140px] opacity-70" />
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
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full px-8 text-sm font-medium text-primary transition-transform hover:-translate-y-0.5 hover:shadow-md"
              >
                <Link href="/#application">Начать зарабатывать</Link>
              </Button>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mx-auto mt-6 w-full max-w-7xl py-12">
            <h2 className="mb-8 text-2xl font-bold text-primary md:text-3xl">
              Почему работать с нами выгодно?
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Все операции онлайн — от оформления до получения гарантии.",
                "Возможность выбрать самое подходящее предложение.",
                "Помощь менеджера в оформлении заявки.",
                "Срок рассмотрения заявки — не более часа, выдача гарантий в день обращения.",
                "Минимальная комиссия.",
              ].map((text, i) => (
                <div
                  key={i}
                  className="group relative flex items-start gap-4 rounded-2xl border border-foreground/10 bg-white/5 p-6 backdrop-blur-md shadow-[0_0_30px_-10px_rgba(0,0,0,0.15)] transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_45px_-5px_rgba(0,0,0,0.25)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 text-white text-sm font-bold shadow-md">
                    {i + 1}
                  </div>
                  <p className="text-sm text-foreground/85 leading-relaxed">
                    {text}
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
                <h2 className="mb-4 text-2xl font-semibold text-foreground">
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
                      pattern="^(\\d{10}|\\d{12})$"
                      title="ИНН должен содержать 10 или 12 цифр"
                      required
                      maxLength={12}
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
                    className="h-11 rounded-xl px-6 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-xl active:translate-y-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </div>

              <div className="relative h-[320px] md:h-auto w-full rounded-3xl overflow-hidden border border-white/10">
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
              <h3 className="text-xl font-semibold text-foreground">
                Подобрано 25 предложений
              </h3>
              <span className="text-sm text-foreground/60">
                Показываем только самые лучшие предложения
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {Array.from({ length: TOTAL_OFFERS })
                .slice(0, visibleOffers)
                .map((_, i) => (
                  <div
                    key={i}
                    className="relative flex items-center gap-4 rounded-2xl border border-foreground/10 bg-white/5 p-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/10 bg-background">
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
            <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
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
                  className="overflow-hidden rounded-2xl border border-foreground/10 bg-white/5 px-4"
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
            <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
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
                    className="rounded-xl px-4 py-2 text-sm"
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
            <h2 className="mb-10 text-2xl font-bold text-primary md:text-3xl">
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

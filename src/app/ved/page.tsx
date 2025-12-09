"use client";

import FadeIn from "@/components/FadeIn";
import BankLogosSlider from "@/components/BankLogosSlider";
import ManagerCTASection from "@/components/ManagerCTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import WhyUs from "@/components/Why-us";

export default function Page() {
  const [visibleDeals] = useState(12);

  const offers = [
    {
      country: "Индонезия",
      rate: "Курс — Инвестбанк",
      term: "Срок 3–7 дней",
      fee: "Комиссия 2,5%",
    },
    {
      country: "Гонконг",
      rate: "Курс — ЦБ",
      term: "Срок 2–4 дня",
      fee: "Комиссия 2,3%",
    },
    {
      country: "ОАЭ",
      rate: "Курс — ЦБ",
      term: "Срок 2–7 дней",
      fee: "Комиссия 2,3%",
    },
    {
      country: "Турция",
      rate: "Курс — ЦБ",
      term: "Срок 2–7 дней",
      fee: "Комиссия 2,5%",
    },
    {
      country: "Эстония",
      rate: "Курс — ЦБ",
      term: "Срок 2–7 дней",
      fee: "Комиссия 2,9%",
    },
    {
      country: "Сингапур",
      rate: "Курс — Инвестбанк",
      term: "Срок 3–7 дней",
      fee: "Комиссия 2,4%",
    },
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
      "Внешнеэкономическая деятельность",
      "Внешнеэкономическая деятельность",
      "Внешнеэкономическая деятельность",
      "Внешнеэкономическая деятельность",
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
    <main className="mx-auto w-full max-w-7xl px-6 py-10 md:py-16">
      <FadeIn>
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 p-8 md:p-12">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  <span className="text-primary">Международные</span>
                  <br />
                  <span className="text-primary">платежи для</span>
                  <br />
                  <span className="text-primary">бизнеса.</span>
                </h1>
              </div>

              <div className="space-y-3">
                <p className="text-lg text-foreground/85 font-medium">
                  Комплексные решения по ВЭД для импортеров и экспортеров.
                </p>
                <p className="text-base text-foreground/75 leading-relaxed">
                  Поможем перевести деньги, получить оплату из‑за рубежа и
                  сопровождать сделки.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </div>
                  <span className="text-base font-semibold text-foreground">
                    от 0,3%
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </div>
                  <span className="text-base font-semibold text-foreground">
                    от 1 дня
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild className="btn-three h-12">
                  <a href="#ved-form">Подать заявку</a>
                </Button>
              </div>
            </div>

            <div className="relative hidden h-120 w-full overflow-hidden rounded-3xl border border-white/10 md:block">
              <Image
                src="/economic-activity.jpg"
                alt="ВЭД"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <BankLogosSlider />
      </FadeIn>

      <FadeIn>
        <WhyUs variant="ved" />
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mt-4 w-full max-w-7xl py-8">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Перевод в различных валютах
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-foreground/85 backdrop-blur-md">
              <p className="mb-3">
                С низкой комиссией и без потерь на конверсии.
              </p>
              <ul className="space-y-1 list-disc pl-5 text-foreground/80">
                <li>США, Европа, Азия, Ближний Восток и другие направления.</li>
                <li>Работаем с основными мировыми валютами.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-foreground/85 backdrop-blur-md">
              <p className="mb-2 font-medium">
                Начинающим международного рынка и опытным участникам
              </p>
              <p className="mb-2">
                Индивидуальные тарифы и поддержка экспертов по ВЭД.
              </p>
              <p className="text-foreground/70">
                Комплексное сопровождение контрактов: берём на себя валютный
                контроль, мониторинг зачислений и декларации на товар.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mt-2 w-full max-w-7xl py-8">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Полное сопровождение сделки с персональным менеджером
          </h2>
          <p className="mb-4 max-w-3xl text-sm text-foreground/75">
            Предоставим комплексное решение для импортеров и экспортеров,
            поможем с документами и операциями, подробно ответим на ваши
            вопросы.
          </p>
          <Button
            asChild
            variant="outline"
            className="rounded-xl px-5 py-2.5 text-sm"
          >
            <a href="#ved-form">Оставить заявку</a>
          </Button>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mt-2 w-full max-w-7xl py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Рассчитайте международный перевод
          </h2>
          <p className="mb-6 max-w-2xl text-sm text-foreground/70">
            Введите сумму, валюту, страну и номер телефона. Мы подберём только
            самые выгодные предложения в банках, в которых уверены.
          </p>
          <form className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-2">
            <div className="space-y-4">
              <Input
                type="number"
                name="amount"
                placeholder="Сумма"
                className="h-11 rounded-full border border-foreground/15 bg-background/90 px-4 text-sm"
              />
              <Input
                type="text"
                name="currency"
                placeholder="Валюта (USD, EUR, CNY, AED и др.)"
                className="h-11 rounded-full border border-foreground/15 bg-background/90 px-4 text-sm"
              />
              <PhoneInput
                name="phone"
                className="h-11 rounded-full border border-foreground/15 bg-background/90 px-4 text-sm"
              />
              <Input
                type="text"
                name="country"
                placeholder="Страна получателя"
                className="h-11 rounded-full border border-foreground/15 bg-background/90 px-4 text-sm"
              />
            </div>
            <div className="flex flex-col justify-between gap-4 text-sm text-foreground/75">
              <p>
                Нажмите кнопку и получите расчет. Мы найдем только самые лучшие
                предложения по комисси и курсу.
              </p>
              <Button
                type="submit"
                className="h-11 w-full rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 px-6 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Получить расчет
              </Button>
              <p className="text-xs text-foreground/60">
                В ближайшее время с вами свяжется наш менеджер.
              </p>
            </div>
          </form>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mt-2 w-full max-w-7xl py-10">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Предложения под ваши параметры
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((o) => (
              <div
                key={o.country}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-foreground/85 backdrop-blur-md"
              >
                <div className="mb-2 text-base font-semibold text-foreground">
                  {o.country}
                </div>
                <div className="mb-1 text-foreground/80">{o.rate}</div>
                <div className="mb-1 text-foreground/80">{o.term}</div>
                <div className="mb-4 text-foreground/80">{o.fee}</div>
                <Button
                  className="h-9 w-full rounded-xl text-xs font-semibold"
                  variant="outline"
                >
                  Подать заявку
                </Button>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mt-2 w-full max-w-7xl py-10">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Свободно оплачивайте закупки и получайте валютные платежи
          </h2>

          {/* Шаги */}
          <div className="grid gap-6 md:grid-cols-2 mb-10">
            {[
              {
                title: "Шаг 1",
                content: [
                  "Мы находим агента, и вы заключаете договор.",
                  "Помогаем заключить договор с агентом так, чтобы он провел платежи за вас.",
                ],
              },
              {
                title: "Шаг 2",
                content: [
                  "Деньги вы перечисляете агенту в рублях, мы фиксируем курс валюты и проводим закупки.",
                ],
              },
              {
                title: "Шаг 3",
                content: [
                  "Поставщик отправляет валюту контрагенту, обычно это происходит в течение 1–3 рабочих дней. Вы оплачиваете комиссию агенту — процент от суммы перевода.",
                ],
              },
              {
                title: "Шаг 4",
                content: [
                  "Ваш контрагент получает платеж, а вы — отчёт и документы, подтверждающие исполнение обязательств.",
                ],
              },
            ].map((step, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-3 text-lg font-semibold text-primary">
                  {step.title}
                </div>
                <div className="text-sm text-foreground/80 space-y-2">
                  {step.content.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Комиссии и условия */}
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Отправляете деньги в другую страну",
                content: [
                  "Комиссия за платеж — от 0,2% до 4%.",
                  "Минимальная сумма валютного платежа — 10 000 $ или эквивалент.",
                ],
              },
              {
                title: "Получаете деньги от иностранной компании",
                content: [
                  "Комиссия за платеж — от 0,5%.",
                  "Минимальная сумма валютного платежа — 10 000 $ или эквивалент в другой валюте.",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-3 text-base font-semibold text-primary">
                  {item.title}
                </div>
                <div className="text-sm text-foreground/75 space-y-2">
                  {item.content.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
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
                  Внешнеэкономическая деятельность
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
        <section className="mx-auto w-full max-w-7xl py-12">
          <h2 className="mb-10 text-2xl font-bold text-primary md:text-3xl">
            Часто ищут
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-foreground/10 bg-white/5 p-6 space-y-2">
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

            <div className="rounded-xl border border-foreground/10 bg-white/5 p-6 space-y-2">
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

      <FadeIn>
        <ManagerCTASection />
      </FadeIn>
    </main>
  );
}

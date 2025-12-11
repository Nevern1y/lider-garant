"use client";
import BankLogosSlider from "@/components/BankLogosSlider";
import DealFeed from "@/components/deal-feed";
import FadeIn from "@/components/FadeIn";
import ManagerCTASection from "@/components/ManagerCTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import WhyUs from "@/components/Why-us";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const related = [
    {
      title: "Банковские гарантии",
      desc: "44-ФЗ, 223-ФЗ, 185-ФЗ (615 ПП), коммерческие закупки, налоговые гарантии.",
      btn: "Узнать лимит",
      href: "/bank-guarantee",
    },
    {
      title: "Льготное кредитование бизнеса",
      desc: "Кредитование для осуществления текущих операционных и иных расходов.",
      btn: "Подобрать условия",
      href: "/business-credit",
    },
    {
      title: "Финансирование контракта",
      desc: "Онлайн-заявка за минуту, бесплатное сравнение ставок, лучшие условия получения кредита.",
      btn: "Подобрать кредит",
      href: "/credits",
    },
    {
      title: "Лизинг",
      desc: "Финансируем новое и с пробегом с авансом 0%.",
      btn: "Узнать больше",
      href: "/leasing",
    },
    {
      title: "Тендерное сопровождение",
      desc: "Каждый 3-й тендер — победа! Штат специалистов по цене одного. Спецсчёт, ЕРУЗ, закрытые секции.",
      btn: "Подробнее",
      href: "/tender",
    },
    {
      title: "Проверка контрагентов",
      desc: "Все: от реквизитов и отчётности до контактов и кадровых рисков.",
      btn: "Подробнее",
      href: "/check",
    },
  ];
  const TOTAL_OFFERS = 25;
  const [visibleOffers, setVisibleOffers] = useState(8);
  const [visibleDeals] = useState(12);

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

  const [search, setSearch] = useState("");
  const [minAmount, setMinAmount] = useState<number | "">("");
  const [maxAmount, setMaxAmount] = useState<number | "">("");

  const filteredBanks = banks
    .map((bank, i) => ({
      name: bank,
      amount: 500_000_000,
      term: 2600,
    }))
    .filter(
      (bank) =>
        bank.name.toLowerCase().includes(search.toLowerCase()) &&
        (minAmount === "" || bank.amount >= minAmount) &&
        (maxAmount === "" || bank.amount <= maxAmount)
    )
    .slice(0, visibleOffers);

  const titles = [
    "факторинг для бизнеса",
    "факторинг для юридических лиц",
    "факторинг поставок",
    "закрытый факторинг",
    "кредитный факторинг",
    "факторинг без регресса",
    "факторинг с регрессом",
    "коммерческий факторинг",
    "факторинг для бизнеса",
    "факторинг для юридических лиц",
    "факторинг без регресса",
    "факторинг с регрессом",
  ];

  const amounts = [
    "50 000 000 ₽",
    "26 205 355 ₽",
    "76 932 998 ₽",
    "37 955 980 ₽",
    "221 929 992 ₽",
    "30 000 000 ₽",
    "44 769 067 ₽",
  ];

  const deals = Array.from({ length: 24 }).map((_, i) => ({
    title: titles[i % titles.length],
    amount: amounts[i % amounts.length],
  }));

  const faqs = [
    {
      q: "Кто оказывает услуги факторинга?",
      a: `
Финансовым агентом — фактором, который выдает деньги в рамках услуг факторинга, — может быть факторинговая компания, банк или микрофинансовая организация.

Часто бизнес обращается именно в банки, например, потому что у них открыт там расчетный счет. Нет смысла искать другое финансовое учреждение, если удобно обслуживаться в одном месте.

Покупатель затягивает сроки оплаты за поставку? Лидер-Гарант предлагает услуги факторинга для ИП и малого бизнеса на удобных условиях:

- Не нужен залог.
- Решение о финансировании — в этот же день. Заявку могут одобрить за 2 часа.
- Финансирование до 95% при факторинге с регрессом и до 100% — без регресса.
- Отсрочка до 120 календарных дней.

Лидер-Гарант помогает своим клиентам справляться с кассовыми разрывами и налаживать сотрудничество с контрагентами.
`,
    },
    {
      q: "Работают ли факторинговые компании с клиентами из других городов?",
      a: `
В большинстве случаев факторинговым компаниям неважно, за сколько километров от них находится клиент. Даже если компания в Москве, а клиент из Красноярска — это не влияет на скорость оказания услуг.

Современные технологии и гибкость факторинговых компаний позволяют работать с клиентами из любого региона:

- Удаленное взаимодействие: можно подать заявку, отправить документы и подписать договор онлайн.
- Электронный документооборот: все операции выполняются через системы электронного документооборота.
- Поддержка на расстоянии: персональные менеджеры всегда на связи через телефон, мессенджеры или видеозвонки.
- Отсутствие географических ограничений: важнее финансовое состояние компании и покупателей, а не местоположение.
`,
    },
    {
      q: "Кто может выступать инициатором факторинга?",
      a: `
Инициатором факторинга может быть как поставщик, так и покупатель, в зависимости от целей и потребностей бизнеса:

- Для поставщика: способ быстро получить деньги за проданные товары или услуги, не дожидаясь оплаты покупателем. При факторинге без регресса риск неоплаты переходит на факторинговую компанию.
- Для покупателя: инструмент для выстраивания долгосрочных отношений с поставщиком. Можно передавать всех поставщиков факторинговой компании и рассчитаться с фактором по мере появления денег.
`,
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
              <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl space-y-1 leading-tight">
                <span className="block text-primary">Международные</span>
                <span className="block text-white">платежи для</span>
                <span className="block text-primary">бизнеса.</span>

                <span className="block text-foreground/90 mt-4 md:mt-5 text-lg md:text-xl font-normal">
                  Комплексные решения по ВЭД для импортеров и экспортеров.
                </span>

                <span className="block text-foreground/70 text-base md:text-lg font-normal">
                  Поможем перевести деньги, получить оплату из-за рубежа и
                  сопровождать сделки.
                </span>
              </h1>

              <div className="max-w-2xl text-base text-foreground/80 md:text-lg">
                <ul className="mt-2 space-y-2 list-inside">
                  <li className="list-disc marker:text-primary">
                    От 0,3% годовых.
                  </li>
                  <li className="list-disc marker:text-primary">от 1 дня</li>
                </ul>
              </div>
              <div className="flex items-center gap-3">
                <Button asChild className="h-12 btn-three">
                  <a href="#">Получить расчёт</a>
                </Button>
              </div>
            </div>

            <div className="relative hidden h-[360px] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl md:flex items-center justify-center">
              <Image
                src="/finance-products/calculator-hand.png"
                alt=""
                width={500}
                height={500}
                className="h-72 w-auto object-contain"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <BankLogosSlider />
      </FadeIn>

      <FadeIn>
        <WhyUs variant="factoring" />
      </FadeIn>

      <FadeIn>
        <section className="mx-auto w-full max-w-7xl py-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-3xl font-semibold text-primary">
              Подобрано 8 предложений
            </h3>
            <span className="text-sm text-foreground/60">
              Показываем только самые лучшие предложения
            </span>
          </div>
          <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <Input
              type="text"
              placeholder="Поиск по банку"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 w-full md:w-1/3 rounded-full border border-foreground/15 px-4 text-sm"
            />
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur-xl shadow-[0_0_30px_-15px_rgba(0,0,0,0.25)]">
            <div className="grid gap-6 md:grid-cols-2">
              {filteredBanks.length > 0 ? (
                filteredBanks.slice(0, visibleOffers).map((bank, i) => (
                  <div
                    key={i}
                    className="relative flex items-center gap-4 rounded-2xl border border-foreground/10 bg-white/5 p-5"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 text-2xl font-semibold text-primary">
                        {bank.name}
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
                ))
              ) : (
                <div className="col-span-full text-center text-sm text-foreground/70 py-10">
                  По вашему запросу ничего не найдено.
                </div>
              )}
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
                получите гарантию и заключайте контракт с заказчиком.
              </p>
              <form
                id="application"
                className="space-y-4"
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
                    .
                  </span>
                </label>
                <Button type="submit" className="h-11 btn-three w-full">
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
                className="group relative hover:border-primary overflow-hidden rounded-2xl border-2 border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all hover:-translate-y-0.5"
              >
                <div className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </div>
                <p className="mb-5 text-sm text-foreground/70">{item.desc}</p>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl px-4 py-2 text-sm border-2 border-primary text-primary transition-all hover:bg-primary hover:text-white"
                >
                  <a href={item.href}>Подробнее</a>
                </Button>
              </div>
            ))}
          </div>
        </section>
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
        <div className="">
          <DealFeed deals={deals} />
        </div>
      </section>

      <FadeIn>
        <section className="mx-auto w-full max-w-7xl px-0 py-10 md:py-14">
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl text-center">
            Вопросы по факторингу
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((item, i) => (
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
        <ManagerCTASection />
      </FadeIn>

      <FadeIn>
        <section className="mx-auto w-full max-w-7xl py-12">
          <h2 className="mb-10 text-2xl font-bold text-primary md:text-3xl">
            Часто ищут
          </h2>

          <div className="rounded-xl border border-foreground/10 bg-white/5 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-6">
              {[
                "факторинг для бизнеса",
                "факторинг для юридических лиц",
                "условия факторинга",
                "агентский факторинг",
                "виды факторингов",
                "факторинг отсрочка",
                "кредитный факторинг",
                "факторинг без регресса",
                "факторинг с регрессом",
                "факторинг кредитование",
                "банковский факторинг",
                "закрытый факторинг",
                "коммерческий факторинг",
                "стороны договора факторинга",
                "факторинг для малого бизнеса",
                "получение факторинга",
                "факторинг форма кредитования",
                "предоставления факторинга",
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

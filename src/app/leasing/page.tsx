"use client";
import FadeIn from "@/components/FadeIn";
import BankLogosSlider from "@/components/BankLogosSlider";
import ManagerCTASection from "@/components/ManagerCTASection";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import Link from "next/link";
import WhyUs from "@/components/Why-us";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import DealFeed from "@/components/deal-feed";

export default function Page() {
  const TOTAL_OFFERS = 17;
  const [visibleOffers, setVisibleOffers] = useState(6);
  const [visibleDeals] = useState(12);

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

  const deals = Array.from({ length: 24 }).map((_, i) => ({
    title: [
      "лизинг для бизнеса",
      "лизинг для малого бизнеса",
      "лизинг оборудование для бизнеса",
      "лизинг оборудования для малого бизнеса",
      "льготный лизинг для бизнеса",
      "льготный лизинг для малого бизнеса",
      "лизинг для ип",
      "лизинг авто для ип",
      "лизинг для ип без первоначального взноса",
      "лизинг машин оборудования",
      "лизинг оборудования",
      "лизинг авто для юридических лиц",
      "лизинг бу авто",
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

  const faqs = [
    {
      q: "Что такое предмет лизинга?",
      a: "Это могут быть любые непотребляемые вещи, в том числе предприятия и другие имущественные комплексы, здания, сооружения, оборудование, транспортные средства и другое движимое и недвижимое имущество, кроме земельных участков и других природных объектов.",
    },
    {
      q: "Кто участвует в лизинговой сделке?",
      a: "Субъектами лизинговой сделки являются лизингодатель, лизингополучатель и продавец. При возвратном лизинге продавец и лизингополучатель — одно лицо.",
    },
    {
      q: "Какие обязательства несёт лизингополучатель?",
      a: "Важно соблюдать условия договора: вносить лизинговые платежи в установленные графиком сроки, использовать предмет лизинга и содержать его в соответствии с условиями договора, давать лизингодателю полную информацию о состоянии арендуемой техники и предоставлять доступ для проверки.",
    },
    {
      q: "Что можно и нельзя делать с автомобилями, которые взяли в лизинг?",
      a: "После заключения договора лизингополучатель обретает права владения и пользования автомобилем, но в собственность он перейдёт только после выкупа. Лизингополучатель должен самостоятельно проходить ТО и обслуживать автомобиль, оплачивать штрафы, если нарушит правила дорожного движения, соблюдать лимиты пробега, если они оговорены в договоре.",
    },
    {
      q: "Как вносятся платежи по лизингу?",
      a: "Оплата производится по графику, который прописывается в договоре и доступен в личном кабинете клиента. Важно вносить платежи своевременно, так как просрочки ведут к начислению пеней и возможному расторжению контракта.",
    },
  ];

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10 md:py-16">
      <FadeIn>
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 p-8 md:p-12">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative grid items-center gap-6 md:grid-cols-2">
            <div className="space-y-5">
              <h1 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
                Лизинг для юридических лиц
              </h1>
              <h2 className="text-2xl font-semibold">
                Предложим самые выгодные предложения по лизингу для бизнеса:
              </h2>
              <p className="max-w-2xl text-base text-foreground/80 md:text-lg"></p>
              <ul>
                <li className="list-disc marker:text-primary">
                  Финансируем с авансом от 0%
                </li>
                <li className="list-disc marker:text-primary">
                  Работаем со сложным оборудованием.
                </li>
                <li className="list-disc marker:text-primary">
                  Подберем выгодное решение для вашей компании.
                </li>
              </ul>
              <Button asChild className="btn-three h-12">
                <a href="#leasing-form">Подать заявку</a>
              </Button>
            </div>

            <div className="relative hidden md:block aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/leasing.jpg"
                alt="Лизинг для бизнеса"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <BankLogosSlider />
      </FadeIn>

      <FadeIn>
        <WhyUs variant="leasing" />
      </FadeIn>

      <FadeIn>
        <section className="mx-auto w-full max-w-7xl py-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-3xl font-semibold text-primary">
              Подобрано 17 предложений
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
                        Сумма лизинга: до 80 млн ₽ · Срок: до 2600 дн ·
                        Удорожание в год: от 16,4%
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
        <section className="mx-auto mt-2 w-full max-w-7xl py-10">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Получите персональное предложение
          </h2>
          <div className="mb-6 grid gap-3 md:grid-cols-4">
            {[
              "Аванс от 0%",
              "Экспресс рассмотрение",
              "Экономия на налогах",
              "Работаем с спец предложениями и скидки",
            ].map((t) => (
              <div
                key={t}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/85 backdrop-blur-md"
              >
                {t}
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Автотранспорт",
              "Спецтехника",
              "Оборудование",
              "Строительная",
              "Дорожная",
              "Компьютерное и мобильное",
              "Легковой коммерческий транспорт",
              "Промышленное",
              "Грузовой транспорт",
              "Самоходная",
              "Сельскохозяйственная",
              "Пищевое",
            ].map((t) => (
              <div
                key={t}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground/85 backdrop-blur-md"
              >
                {t}
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section
          id="leasing-form"
          className="mx-auto mt-2 w-full max-w-7xl py-12"
        >
          <div className="grid items-stretch gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                Подберем самые выгодные предложения
              </h2>
              <p className="mb-6 text-sm text-foreground/70">
                Заполните форму, выберите среди предложений лучшее, получите
                финансирование и заключайте контракт.
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
                <Button type="submit" className="h-11 btn-three">
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
            Вопросы по банковским гарантиям
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
                "лизинг для бизнеса",
                "лизинг для малого бизнеса",
                "лизинг оборудование для бизнеса",
                "лизинг оборудования для малого бизнеса",
                "льготный лизинг для бизнеса",
                "льготный лизинг для малого бизнеса",
                "лизинг для ип",
                "лизинг авто для ип",
                "лизинг для ип без",
                "лизинг для ип без первоначального",
                "лизинг для ип без первоначального взноса",
                "лизинг авто для ип без первоначального взноса",
                "лизинг для ип на авто без первоначального",
                "условия лизинга для ип",
                "газель в лизинг для ип",
                "автомобиль в лизинг для ип",
                "машина в лизинг для ип",
                "лизинг для ип калькулятор",
                "грузовой лизинг для ип",
                "лизинг для ип на усн",
                "купить в лизинг для ип",
                "лизинг авто с пробегом",
                "лизинг бу авто",
                "лизинг авто для юридических",
                "лизинг авто для юридических лиц",
                "лизинг оборудования",
                "оборудование лизинг аренда",
                "договор лизинга оборудования",
                "финансовый лизинг оборудования",
                "стоимость лизинга оборудования",
                "оборудование кредит лизинг",
                "лизинг машин оборудования",
                "лизинг оборудования компания",
                "приобрести оборудование в лизинг",
                "какое оборудование в лизинг",
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

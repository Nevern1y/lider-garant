"use client";
import BankLogosSlider from "@/components/BankLogosSlider";
import FadeIn from "@/components/FadeIn";
import ManagerCTASection from "@/components/ManagerCTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// removed Swiper imports - using grid layout for deals

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

  const deals = Array.from({ length: 24 }).map((_, i) => ({
    title: ["Факторинг", "Факторинг", "Факторинг", "Факторинг"][i % 4],
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
            <div className="space-y-5">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                <span className="text-primary">Факторинг</span> — деньги для
                бизнеса, под отсрочку платежа
              </h1>
              <div className="max-w-2xl text-base text-foreground/80 md:text-lg">
                <ul className="mt-2 space-y-2 list-inside">
                  <li>• От 6,5% годовых.</li>
                  <li>• Без залога.</li>
                  <li>• Для работающего бизнеса, от 1 года.</li>
                  <li>• Выгоднее кредита</li>
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
              <div className="mb-1 text-xs text-foreground/60">Факторинг</div>
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
      <FadeIn>
        <ManagerCTASection />
      </FadeIn>
    </main>
  );
}

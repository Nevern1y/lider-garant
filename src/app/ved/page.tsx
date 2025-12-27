"use client";

import DealFeed from "@/components/deal-feed";
import FadeIn from "@/components/FadeIn";
import HowItWorksSection from "@/components/HowItWorksSection";
import ManagerCTASection from "@/components/ManagerCTASection";
import SeeAlso from "@/components/see-also";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Rocket,
  Shield,
  DollarSign,
  Globe,
  Phone,
  FileText,
  ShoppingCart,
  Bot,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const advantages = [
    {
      icon: "rocket.svg",
      title: "Быстрые платежи",
      description: "Переводим деньги за 1-3 дня по всему мира",
    },
    {
      icon: "/dollar.svg",
      title: "Низкие комиссии",
      description: "От 0,3% - лучшие условия на рынке",
    },
    {
      icon: "/shield.svg",
      title: "Надежно",
      description:
        "Выкупаем товар без российского следа, из любых стран в любой валюте",
    },
    {
      icon: "/checked.svg",
      title: "Международный охват",
      description:
        "8 компаний-партнёров в странах ЕС и Азии, что позволяет индивидуально подбирать компанию-плательщика, исходя из запроса клиента",
    },
    {
      icon: "/phone.svg",
      title: "Поддержка 24/7",
      description:
        "Предоставляем полную юридическую поддержку и оперативно работаем с запросами банков",
    },
    {
      icon: "/note.svg",
      title: "Полное сопровождение",
      description: "Поможем с документами и валютным контролем",
    },
  ];

  const unitedStreamAdvantages = [
    {
      icon: "/rocket.svg",
      title: "ПРОЗРАЧНО",
      description:
        "Предоставляем полную информацию о ходе сделки и комиссии уже на этапе консультации, а минимальное число посредников ускоряет процесс зачисления платежа",
    },
    {
      icon: "/shield.svg",
      title: "БЫСТРО",
      description:
        "Мы проводим платежи ежедневно и всегда имеем альтернативную компанию-плательщика, что позволяет оперативно реагировать на любые форс-мажоры",
    },
    {
      icon: "/checked.svg",
      title: "НАДЁЖНО",
      description:
        "Все условия фиксируются в официальном договоре, в случае возврата платежа мы оперативно возвращаем средства или используем наш зарубежный счёт для быстрого решения вопроса",
    },
  ];

  const internationalPaymentsServices = [
    {
      icon: "/phone.svg",
      title: "ОПЛАТА ИНВОЙСОВ",
      description:
        "Оплатим инвойс по агентскому договору в случаях, когда банки отказываются напрямую принимать деньги из России",
    },
    {
      icon: "/wallet.svg",
      title: "ВЫКУП ТОВАРОВ",
      description:
        "В случаях, когда продавец товара за границей отказывается продавать товар российскому покупателю, выкупим товар за вас от одной из наших европейских или азиатских компаний",
    },
    {
      icon: "/calculator.svg",
      title: "ОПЛАТА УСЛУГ",
      description:
        "Оплатим за вас роялти, выплату дивидендов, услуги дизайна и маркетинга и т.д. (для юридических лиц)",
    },
  ];

  const deals = Array.from({ length: 24 }).map((_, i) => ({
    title: [
      "Международные платежи",
      "Валютные платежи",
      "Трансграничные платежи",
      "Платежи за рубеж",
      "Платежи за границу",
      "Международные переводы",
      "Валютные переводы",
      "Трансграничные переводы",
      "Переводы за рубеж",
      "Перевод за границу",
      "Платежи в Китай",
      "Международный расчет",
    ][i % 6],
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
    "оплата международных платежей",
    "платежный агент",
    "международные расчеты",
    "услуга международных платежей",
    "платформа международных платежей",
    "переводы за границу",
    "переводы за рубеж",
    "вэд платежи",
    "международные переводы",
    "перевод денег за границу",
    "международные платежи и расчеты",
    "международные банковские платежи",
    "проведение международных платежей",
    "получать международные платежи",
    "платежи в международной торговле",
    "перевод зарубеж",
    "международные платежи для бизнеса",
    "принимать международные платежи",
    "сервисы международных платежей",
    "международные трансграничные платежи",
    "международные онлайн платежи",
    "платформа трансграничных платежей",
    "трансграничная система платежей",
    "денежные переводы зарубеж",
    "валютные переводы",
    "банковский платежный агент",
    "услуги платежного агента",
    "оплата через платежного агента",
    "платежный агент перевод",
    "платежный агент поставщик",
    "платежный агент вэд",
    "платежи в китай",
    "платежи в европу",
    "платежи в турцию",
    "платежи в индию",
    "платежи в иран",
    "платежи в оаэ",
    "платежи в дубай",
    "платежи в японию",
    "платежи в корею",
    "валютные денежные переводы",
    "переводы за границу из россии",
    "денежный перевод за границу",
    "перевод валюты за границу",
    "перевод средств за рубеж",
    "международные денежные переводы",
    "валютные платежи",
    "валютные платежи за границу",
    "проведение валютных платежей",
    "международные переводы",
    "международные денежные переводы",
    "международный банковский перевод",
    "проведение международных расчетов",
  ];

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10 md:py-16">
      <FadeIn>
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 p-8 md:p-12">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/economic-activity.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  <span className="text-foreground">Международные</span>
                  <br />
                  <span className="text-foreground">платежи </span>
                  <br />
                  <span className="text-primary">для бизнеса.</span>
                </h1>
              </div>

              <div className="space-y-3">
                <p className="text-base text-foreground/75 leading-relaxed">
                  Поможем перевести деньги, получить оплату из‑за рубежа без
                  ограничения по суммам в любой валюте.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-base font-semibold text-foreground">
                    от 0,3%
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-base font-semibold text-foreground">
                    от 1 дня
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  Получите предложение
                </h3>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="from-currency"
                      className="text-sm font-medium text-foreground/90"
                    >
                      Валюта отправления
                    </Label>
                    <Select>
                      <SelectTrigger className="h-11 w-full rounded-full border border-foreground/15 bg-background/90 px-4 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20">
                        <SelectValue placeholder="Выберите валюту" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="RUB">
                          RUB - Российский рубль
                        </SelectItem>
                        <SelectItem value="USD">USD - Доллар США</SelectItem>
                        <SelectItem value="EUR">EUR - Евро</SelectItem>
                        <SelectItem value="CNY">
                          CNY - Китайский юань
                        </SelectItem>
                        <SelectItem value="AED">AED - Дирхам ОАЭ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="to-currency"
                      className="text-sm font-medium text-foreground/90"
                    >
                      Валюта получения
                    </Label>
                    <Select>
                      <SelectTrigger className="h-11 w-full rounded-full border border-foreground/15 bg-background/90 px-4 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20">
                        <SelectValue placeholder="Выберите валюту" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="RUB">
                          RUB - Российский рубль
                        </SelectItem>
                        <SelectItem value="USD">USD - Доллар США</SelectItem>
                        <SelectItem value="EUR">EUR - Евро</SelectItem>
                        <SelectItem value="CNY">
                          CNY - Китайский юань
                        </SelectItem>
                        <SelectItem value="AED">AED - Дирхам ОАЭ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="amount"
                      className="text-sm font-medium text-foreground/90"
                    >
                      Сумма к оплате
                    </Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="Введите сумму"
                      className="h-11 rounded-full border text-foreground border-foreground/15 bg-background/90 px-4 text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-foreground/90"
                    >
                      Телефон
                    </Label>
                    <PhoneInput
                      id="phone"
                      className="h-11 rounded-full text-foreground border border-foreground/15 bg-background/90 px-4 text-sm"
                    />
                  </div>

                  <Button type="submit" className="h-12 btn-three w-full">
                    Получить предложение
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mt-8 w-full max-w-7xl py-8">
          <h2 className="mb-8 text-3xl font-bold text-primary text-center">
            Преимущества
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary/20 shadow-2xl hover:shadow-primary/20"
              >
                <div className="mb-4 flex h-24 w-24 items-center justify-center text-primary">
                  <Image
                    src={advantage.icon}
                    alt={advantage.title}
                    width={100}
                    height={100}
                    className="h-24 w-24"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-primary">
                  {advantage.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/5 via-sky-500/5 to-emerald-500/5 p-8 md:p-12 my-12">
          <div className="absolute inset-0 opacity-5">
            <Image
              src="/economic-activity.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10">
            <div className="mb-12 grid gap-8 md:grid-cols-2">
              <h2 className="text-5xl font-bold tracking-tight text-foreground">
                <span className="text-primary">Lider garant</span> - РАБОТАЕМ
                БЫСТРЕЕ БАНКОВ
              </h2>
              <div className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  Lider garant - это современная платежная система, которая
                  позволяет быстро и безопасно выводить деньги с любых платформ
                  и бирж. Мы работаем с 2018 года и за это время помогли тысячам
                  клиентов по всему миру.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Наши клиенты - это трейдеры, инвесторы и владельцы бизнеса,
                  которые ценят скорость, надежность и конфиденциальность. Мы
                  предлагаем лучшие условия на рынке и индивидуальный подход к
                  каждому клиенту.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {unitedStreamAdvantages.map((advantage, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary/20 shadow-2xl hover:shadow-primary/20"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Image
                      src={advantage.icon}
                      alt="Icon"
                      width={100}
                      height={100}
                      className="h-16 w-16"
                    />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-primary">
                    {advantage.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/5 via-sky-500/5 to-emerald-500/5 p-8 md:p-12 my-12">
          <div className="relative z-10">
            <div className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                Международные расчёты без границ — оплачиваем то, что неудобно
                другим
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                Компания United Stream помогает{" "}
                <span className="text-primary">юридическим лицам</span> и ИП
                легко совершать и получать платежи, предлагая следующие услуги:
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {internationalPaymentsServices.map((service, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary/20 shadow-2xl hover:shadow-primary/20 text-center"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={100}
                      height={100}
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-primary">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/5 via-sky-500/5 to-emerald-500/5 p-8 md:p-12 my-12">
          <div className="relative z-10">
            <div className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                Предлагаем выгодные проценты комиссии
                <br />
                при неизменно высоком качестве
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 text-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-2xl">
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Отправить платёж{" "}
                  <span className="text-primary">за границу</span> из России
                </h3>
                <p className="mb-2 text-5xl font-bold text-primary">0,3%</p>
                <p className="mb-4 text-lg text-foreground/70">комиссия</p>
                <p className="text-sm text-foreground/50">
                  *От цены инвойса без скрытых платежей. Процент комиссии
                  зависит от страны назначения платежа
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-2xl">
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Получить платёж{" "}
                  <span className="text-primary">из-за границы</span> в Россию
                </h3>
                <p className="mb-2 text-5xl font-bold text-primary">от 0%</p>
                <p className="mb-4 text-lg text-foreground/70">комиссия</p>
                <p className="text-sm text-foreground/50">
                  На получение экспортной выручки в валюте и рублях
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/5 via-sky-500/5 to-emerald-500/5 p-8 md:p-12 my-12">
          <div className="relative z-10">
            <div className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                Условия сотрудничества
              </h2>
            </div>

            <div className="mb-8 flex justify-center">
              <div className="inline-flex rounded-full bg-white/5 p-1">
                <button className="px-6 py-2 rounded-full bg-primary text-white font-medium">
                  ИМПОРТ (ПЛАТЕЖИ ЗА ГРАНИЦУ)
                </button>
                <button className="px-6 py-2 rounded-full text-foreground/70 hover:text-foreground font-medium">
                  ЭКСПОРТ (ПЛАТЕЖИ В РОССИЮ)
                </button>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Международные расчёты для импортных поставок
                </h3>
                <p className="text-lg font-medium text-primary mb-6">
                  Комиссия платежного агента:{" "}
                  <span className="text-2xl">0,3%</span>
                </p>
                <ul className="space-y-4">
                  {[
                    "Оплата по агентскому договору",
                    "Оплата инвойсов в валюте контракта",
                    "Выкуп товара от нашего имени",
                    "Помощь с валютным контролем",
                    "Консультации по документам",
                    "Отслеживание платежей",
                    "Персональный менеджер",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <HowItWorksSection />
      </FadeIn>

      <FadeIn>
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/5 via-sky-500/5 to-emerald-500/5 p-8 md:p-12 my-12">
          <div className="relative z-10">
            <div className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                ПОПУЛЯРНЫЕ НАПРАВЛЕНИЯ ПЛАТЕЖЕЙ
              </h2>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-foreground/90">От любой суммы</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-foreground/90">
                    Валюты: доллары, евро, юани, дирхамы, рубли, лиры
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-foreground/90">Срок: 1-3 дней</span>
                </li>
              </ul>

              <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
                <p className="text-center text-foreground/90 font-medium">
                  Не находите своего направления или валюты?{" "}
                  <a
                    href="#contact"
                    className="text-primary hover:underline font-semibold"
                  >
                    Свяжитесь с нами!
                  </a>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
              {[
                { name: "Южная Корея", code: "kr" },
                { name: "Турция", code: "tr" },
                { name: "Китай", code: "cn" },
                { name: "Евросоюз", code: "eu" },
                { name: "ОАЭ", code: "ae" },
                { name: "Япония", code: "jp" },
              ].map((country) => (
                <div
                  key={country.code}
                  className="flex flex-col items-center group"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center mb-3 overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all duration-300">
                    <span className="text-3xl">
                      {country.code === "kr" && "🇰🇷"}
                      {country.code === "tr" && "🇹🇷"}
                      {country.code === "cn" && "🇨🇳"}
                      {country.code === "eu" && "🇪🇺"}
                      {country.code === "ae" && "🇦🇪"}
                      {country.code === "jp" && "🇯🇵"}
                    </span>
                  </div>
                  <span className="text-center text-foreground/90 font-medium text-sm md:text-base">
                    {country.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mt-2 w-full max-w-7xl py-8">
          <div className="mb-2 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary ">
                Лента сделок
              </h2>
              <p className="text-sm text-foreground/60">
                Последние заявки от наших клиентов и агентов
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-foreground ">
                3 064 379 982 ₽
              </div>
              <div className="text-xs text-foreground/60">
                Общая сумма последних заявок
              </div>
            </div>
          </div>
          <div className="py-5">
            <DealFeed deals={deals} />
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <SeeAlso />
      </FadeIn>
      <FadeIn>
        <ManagerCTASection />
      </FadeIn>

      <FadeIn>
        <section className="mx-auto w-full max-w-7xl py-12">
          <h2 className="mb-10 text-4xl text-center font-bold text-primary ">
            Часто ищут
          </h2>

          <div className="rounded-xl border border-foreground/10 bg-white/5 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-6">
              {faqs.map((t, i) => (
                <Link
                  key={i}
                  href="/#application"
                  className="block nav-link link-gradient"
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

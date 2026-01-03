"use client";

import FadeIn from "@/components/FadeIn";
import {
  ShieldCheck,
  CreditCard,
  Landmark,
  HandCoins,
  Car,
  Globe,
  ClipboardCheck,
  UserSearch,
} from "lucide-react";

const services = [
  { label: "Банковские гарантии", Icon: ShieldCheck },
  { label: "Кредитование", Icon: CreditCard },
  { label: "Открытие счетов и РКО", Icon: Landmark },
  { label: "Факторинг", Icon: HandCoins },
  { label: "Лизинг", Icon: Car },
  { label: "ВЭД и сопровождение контрактов", Icon: Globe },
  { label: "Тендерное сопровождение", Icon: ClipboardCheck },
  { label: "Проверка клиента и контрагента", Icon: UserSearch },
];

const modules = [
  {
    title: "Портал клиентов",
    description:
      "Регистрация, вход, выбор партнёра и создание заявки, обмен документами, заключение договора, оплата услуги и получение финансового продукта.",
  },
  {
    title: "Портал агентов",
    description:
      "Регистрация, заключение агентского договора, ввод данных, заполнение форм, выбор партнёра и создание заявки, сопровождение клиента.",
  },
  {
    title: "Кабинеты администраторов",
    description:
      "Управление площадкой, банками-партнёрами и агентами, настройка витрины услуг, мониторинг сделок и SLA.",
  },
];

const integrations = [
  "ЕГРЮЛ, Росстат, ФНС, ФССП, МВД, ФНС и Росфинмониторинг",
  "Портал закупок, ФНС, сервисы госорганов",
  "Банки: ПСБ, Альфа-Банк, Уралсиб, Реалист и другие",
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10 md:py-16 space-y-12">
      <FadeIn>
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 p-8 md:p-12">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary/70">
              Цифровая интернет-площадка финансовых услуг
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            <span className="text-primary">Lider Garant</span> — экосистема
              для бизнеса и банков
            </h1>
            <p className="max-w-2xl text-base text-foreground/75 md:text-lg">
              Платформа обеспечивает онлайн-взаимодействие юридических лиц с
              банками, микрокредитными и факторинговыми компаниями, а также с
              другими участниками финансового рынка по всей России.
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-foreground/10 bg-white/5 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">
              Автоматизация процесса
            </h2>
            <p className="mt-3 text-sm text-foreground/75">
              От подачи заявки до принятия решений и подписания документов в
              электронном виде посредством электронной подписи. Каждое действие
              отслеживается и фиксируется.
            </p>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-white/5 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">
              Архитектура
            </h2>
            <p className="mt-3 text-sm text-foreground/75">
              Сайт состоит из страниц услуг, личного кабинета клиентов и
              агентов, а также административных кабинетов площадки и
              банков-партнёров.
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="rounded-3xl border border-foreground/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-primary md:text-3xl">
            Основные услуги платформы
          </h2>
          <p className="mt-3 text-sm text-foreground/70">
            Все сервисы доступны через единый интерфейс и интегрированы с
            банковскими продуктами.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {services.map(({ label, Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:shadow-[0_0_24px_rgba(34,211,238,0.25)]"
              >
                <Icon className="h-4 w-4 shrink-0 text-primary" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </main>
  );
}

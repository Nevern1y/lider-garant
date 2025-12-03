"use client";

import FadeIn from "@/components/FadeIn";

const entrepreneurs = [
  "Быстро подберем лучшие условия по банковским гарантиям, кредитам, лизингу, страхованию.",
  "Предоставим тендерное сопровождение и поможем с РКО и ВЭД.",
  "решим даже сложные вопросы с оформлением банковских продуктов.",
];

const specialists = [
  {
    title: "Закрепляем заявки",
    description:
      "Если заявка заведена через Лидер-Гарант — мы закрепляем её за вами. Другой агент не может завести эту заявку даже через сторонний сервис.",
  },
  {
    title: "Верификация",
    description:
      "Вручную проверяем заявки перед отправкой в банк. Это снижает риск ошибки и отклонения.",
  },
  {
    title: "Анализируем отклонённые заявки",
    description:
      "Если банк отклонил заявку — разбираемся почему так произошло. Часто получается убедить банк, что отказ ошибочный и выпустить гарантию.",
  },
  {
    title: "Помогаем заводить заявки",
    description:
      "Нам можно прислать данные для заявки и операторы Лидер-Гарант заполнят документы за вас.",
  },
];

function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10 md:py-16 space-y-10">
      <FadeIn>
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 p-8 md:p-16">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative z-10 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
              Предпринимателям и компаниям
            </h1>
            <p className="text-lg text-foreground/75 max-w-2xl leading-relaxed">
              Быстро подберем лучшие условия по банковским гарантиям, кредитам,
              лизингу, страхованию. Предоставим тендерное сопровождение и
              поможем с РКО и ВЭД.
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="rounded-3xl border border-white/10 bg-gradient-to-tr from-white/3 to-white/4 p-8 shadow-lg backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground leading-tight">
            Тендерным специалистам и агентам
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {specialists.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col gap-3 rounded-2xl border border-white/6 bg-white/3 p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 text-foreground/90">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <CheckIcon className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-foreground/70 ml-11">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </main>
  );
}

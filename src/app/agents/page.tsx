"use client";

import FadeIn from "@/components/FadeIn";

const entrepreneurs = [
  "Быстро подберем лучшие условия по банковским гарантиям, кредитам, лизингу, страхованию.",
  "Предоставим тендерное сопровождение и поможем с РКО и ВЭД.",
  "решим даже сложные вопросы с оформлением банковских продуктов.",
];

const specialists = [
  "Закрепляем заявки",
  "Если заявка заведена через — мы закрепляем её за вами. Другой агент не может завести эту заявку даже через сторонний сервис.",
  "Верификация",
  "Вручную проверяем заявки перед отправкой в банк. Это снижает риск ошибки и отклонения.",
  "Анализируем отклонённые заявки",
  "Если банк отклонил заявку — разбираемся почему так произошло. Часто получается убедить банк, что отказ ошибочный и выпустить гарантию.",
  "Экономьте время на проверке документов и заполнении заявок - в нашей системе все автоматизировано.",
  "Помогаем заводить заявки",
  "Нам можно прислать данные для заявки и операторы Лидер-Гарант заполнят документы за вас.",
  "Получайте честные и своевременные выплаты когда вам удобно.",
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
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/3 to-white/2 p-8 shadow-lg backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Предпринимателям и компаниям
          </h1>

          <div className="mt-8 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            {entrepreneurs.map((text) => (
              <article
                key={text}
                className="flex items-start gap-4 rounded-2xl border border-white/6 bg-white/4 p-4 md:p-5"
              >
                <div className="flex-shrink-0 mt-1 text-foreground/90">
                  <span className="inline-flex items-center justify-center rounded-full bg-foreground/5 p-2">
                    <CheckIcon className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-foreground/85">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="rounded-3xl border border-white/10 bg-gradient-to-tr from-white/3 to-white/4 p-8 shadow-lg backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground leading-tight">
            Тендерным специалистам и агентам
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {specialists.map((text, index) => (
              <div
                key={`${text}-${index}`}
                className="group flex items-start gap-4 rounded-2xl border border-white/6 bg-white/3 p-4 transition-shadow hover:shadow-md"
              >
                <div className="shrink-0 mt-1 text-foreground/90">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/6 text-foreground/100 transition-transform group-hover:scale-105">
                    <CheckIcon className="w-4 h-4" />
                  </span>
                </div>

                <div className="text-sm leading-relaxed text-foreground/80">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </main>
  );
}

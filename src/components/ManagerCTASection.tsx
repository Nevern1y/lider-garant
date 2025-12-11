"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageSquareText, Phone } from "lucide-react";

const cards = [
  {
    icon: CheckCircle2,
    title: "Подайте заявку",
    desc: "Перезвоним в течение 15 минут и подберём решение.",
    link: "#application",
    cta: "Отправить заявку",
  },
  {
    icon: Phone,
    title: "Позвоните нам",
    desc: "Звонок бесплатный по России.",
    link: "tel:+7 800 000 00 00",
    cta: "+7 800 000 00 00",
  },
  {
    icon: MessageSquareText,
    title: "Напишите нам",
    desc: "Отвечаем на почту в рабочее время.",
    link: "mailto:client@lider-garant.ru",
    cta: "client@lider-garant.ru",
  },
];

export default function ManagerCTASection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-5">
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-foreground/15">
        <div className="relative grid gap-10 px-5 sm:px-8 md:px-14 py-10 sm:py-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-foreground/70">
              Всегда на связи
            </p>
            <h2 className="mt-3 sm:mt-4 text-[24px] xs:text-[28px] sm:text-3xl md:text-[40px] font-semibold leading-tight text-primary">
              Вам всегда поможет персональный менеджер
            </h2>
            <p className="mt-3 sm:mt-4 max-w-xl text-[12px] sm:text-sm md:text-base text-foreground/70">
              Мы берём на себя организацию коммуникации: менеджер подключается в
              любом канале, следит за сроками и держит вас в курсе на каждом
              шаге.
            </p>

            <div className="mt-8 grid gap-3 sm:gap-4 sm:grid-cols-2 md:grid-cols-3">
              {cards.map(({ icon: Icon, title, desc, link, cta }) => (
                <div
                  key={title}
                  className="group hover:shadow-xl hover:shadow-primary/10 rounded-2xl border border-foreground/10 bg-white/[0.03] 
                  p-4 sm:p-5   
                  backdrop-blur-xl transition-all duration-300 
                  sm:hover:-translate-y-1 sm:hover:border-white/25"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 xs:h-10 xs:w-10 items-center justify-center rounded-2xl bg-white/55 text-foreground">
                      <Icon className="h-4 w-4 xs:h-5 xs:w-5" />
                    </span>
                    <div className="text-[13px] sm:text-sm font-semibold">
                      {title}
                    </div>
                  </div>
                  <p className="mt-2.5 text-[11px] sm:text-xs text-foreground/70">
                    {desc}
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="mt-4 sm:mt-5 w-full justify-center rounded-2xl text-[10px] xs:text-[11px]  hover:bg-primary bg-none text-primary border-2 border-primary hover:text-white sm:text-xs font-semibold uppercase tracking-wide whitespace-normal break-words text-center"
                  >
                    <a href={link}>{cta}</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="order-first lg:order-0 rounded-2xl sm:rounded-3xl border border-foreground/10 bg-white/5 p-5 sm:p-6 text-center text-foreground/80 backdrop-blur-2xl">
            <div className="text-[10px] sm:text-[12px] font-semibold uppercase tracking-[0.25em] text-foreground/60">
              Ваш менеджер
            </div>
            <p className="mt-3 sm:mt-4 text-[24px] sm:text-3xl font-semibold text-primary">
              Лидер Гарант
            </p>
            <p className="mt-3 sm:mt-4 text-[12px] sm:text-sm leading-relaxed text-foreground/75">
              Следит за сроками, помогает с документами и держит связь удобным
              для вас способом. Решаем вопросы даже вне рабочего времени.
            </p>
            <div className="mt-5 sm:mt-6 flex flex-col items-center gap-2.5 text-[11px] sm:text-sm">
              <div className="rounded-2xl border border-foreground/10 bg-white/10 px-3 py-2 text-foreground">
                График: 07:00 — 23:00 (МСК)
              </div>
              <div className="rounded-2xl border border-foreground/10 bg-white/10 px-3 py-2 text-foreground">
                Каналы: телефон, почта, мессенджеры
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

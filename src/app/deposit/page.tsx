"use client";

import FadeIn from "@/components/FadeIn";
import ManagerCTASection from "@/components/ManagerCTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const DEMO_OFFERS = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  bank: `Банк ${i + 1}`,
  logo: `https://via.placeholder.com/160x48?text=Bank+${i + 1}`,
  amount: i % 2 === 0 ? "до 500 млн ₽" : "до 300 млн ₽",
  term: ["1 день", "от 30 до 365 дней", "от 60 до 360 дней"][i % 3],
  rate: ["28%", "24%", "18%", "12%"][i % 4],
  commission: ["до 23.5%", "От 22.49%", "до 4%"][i % 3],
  tags: i % 2 === 0 ? ["Пополнение", "Снятие"] : ["Без пополн."],
}));

export default function DepositsPage() {
  const [query, setQuery] = useState("");
  const [bankFilter, setBankFilter] = useState("Все банки");
  const [termFilter, setTermFilter] = useState("Все сроки");
  const [visible, setVisible] = useState(8);

  const banks = ["Все банки", ...new Set(DEMO_OFFERS.map((o) => o.bank))];
  const terms = [
    "Все сроки",
    "1 день",
    "от 30 до 365 дней",
    "от 60 до 360 дней",
  ];

  const filtered = DEMO_OFFERS.filter((o) => {
    if (bankFilter !== "Все банки" && o.bank !== bankFilter) return false;
    if (termFilter !== "Все сроки" && o.term !== termFilter) return false;
    if (query && !o.bank.toLowerCase().includes(query.toLowerCase()))
      return false;
    return true;
  });

  return (
    <main className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <section className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-[1fr,360px] gap-6 shadow-[0_0_30px_rgb(34,211,238,0.15)]">
          <div>
            <span className="inline-block text-[var(--primary-light)] font-bold text-3xl tracking-tight">
              Депозит
            </span>
            <h1 className="mt-3 text-3xl font-semibold text-[var(--foreground)] leading-snug">
              Сравнивайте и выбирайте лучшие условия по депозитам
            </h1>
            <p className="mt-4 text-[var(--foreground-secondary)] text-sm">
              Подобрано <strong className="text-white">26 предложений</strong>{" "}
              от <strong className="text-white">14 банков</strong>. Максимальная
              ставка — до <strong className="text-white">28%</strong>.
            </p>

            <div className="flex gap-3 mt-6">
              <button
                className="px-6 py-3 rounded-2xl bg-primary
                text-white font-semibold shadow-[0_0_20px_var(--primary-glow)]
                hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                Подать заявку
              </button>
              <button
                className="px-6 py-3 rounded-2xl border border-white/15 text-[var(--primary)]
                hover:border-[var(--primary)] hover:text-white transition-all"
              >
                Получить предложение
              </button>
            </div>

            <div className="flex gap-4 mt-8 flex-wrap">
              {[
                ["Сумма", "до 500 млн ₽"],
                ["Срок", "от 8 до 365 дней"],
                ["Комиссия", "до 23,65%"],
              ].map(([label, val]) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 min-w-[160px]"
                >
                  <div className="text-xs text-[var(--foreground-secondary)]">
                    {label}
                  </div>
                  <div className="font-semibold text-[var(--foreground)] mt-1">
                    {val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr,340px] gap-10">
          <section>
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="flex gap-4 flex-wrap">
                <select
                  value={bankFilter}
                  onChange={(e) => setBankFilter(e.target.value)}
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-sm text-[var(--foreground)]"
                >
                  {banks.map((b) => (
                    <option key={b} value={b} className="bg-[#07182a]">
                      {b}
                    </option>
                  ))}
                </select>
                <select
                  value={termFilter}
                  onChange={(e) => setTermFilter(e.target.value)}
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-sm text-[var(--foreground)]"
                >
                  {terms.map((t) => (
                    <option key={t} value={t} className="bg-[#07182a]">
                      {t}
                    </option>
                  ))}
                </select>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Поиск по названию"
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-sm text-[var(--foreground)] min-w-[180px]"
                />
              </div>

              <div className="text-sm text-[var(--foreground-secondary)]">
                Найдено:{" "}
                <span className="text-white font-semibold">
                  {filtered.length}
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.slice(0, visible).map((o) => (
                <article
                  key={o.id}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 
                  hover:border-[var(--primary)]/30 hover:shadow-[0_0_25px_var(--primary-glow)]
                  transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={o.logo}
                        alt={o.bank}
                        className="w-20 h-8 object-contain bg-[#062033] rounded-md p-1"
                      />
                      <div>
                        <div className="font-medium text-[var(--foreground)]">
                          {o.bank}
                        </div>
                        <div className="text-xs text-[var(--foreground-secondary)]">
                          {o.term}
                        </div>
                      </div>
                    </div>

                    <div
                      className="text-lg font-bold bg-gradient-to-r
                      from-[var(--primary-light)] to-[var(--primary-dark)]
                      bg-clip-text text-transparent drop-shadow-[0_0_10px_var(--primary-glow)]
                    "
                    >
                      {o.rate}
                    </div>
                  </div>

                  <div className="mt-5 flex gap-3 flex-wrap">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 min-w-[120px]">
                      <div className="text-xs text-[var(--foreground-secondary)]">
                        Сумма
                      </div>
                      <div className="font-semibold text-[var(--foreground)]">
                        {o.amount}
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 min-w-[120px]">
                      <div className="text-xs text-[var(--foreground-secondary)]">
                        Комиссия
                      </div>
                      <div className="font-semibold text-[var(--foreground)]">
                        {o.commission}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex gap-2 flex-wrap">
                    {o.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-[var(--foreground-secondary)] bg-white/5 border border-white/10 px-2 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    className="w-full mt-5 py-3 rounded-xl bg-primary
                    font-semibold shadow-[0_0_20px_var(--primary-glow)]
                    text-white hover:brightness-110 hover:-translate-y-0.5 transition-all"
                  >
                    Подать заявку
                  </button>
                </article>
              ))}
            </div>

            {/* Show more */}
            <div className="mt-6 text-center">
              {visible < filtered.length ? (
                <button
                  onClick={() => setVisible(filtered.length)}
                  className="px-5 py-2 rounded-xl border border-dashed border-white/15 text-[var(--foreground-secondary)] hover:border-[var(--primary)]/50 hover:text-white transition-all"
                >
                  Показать еще
                </button>
              ) : (
                filtered.length > 8 && (
                  <button
                    onClick={() => setVisible(8)}
                    className="px-5 py-2 rounded-xl border border-dashed border-white/15 text-[var(--foreground-secondary)] hover:border-[var(--primary)]/50 hover:text-white transition-all"
                  >
                    Свернуть
                  </button>
                )
              )}
            </div>
          </section>

          <section className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_0_20px_rgb(34,211,238,0.1)]">
            <h2 className="text-xl font-semibold mb-3 text-white">
              Подберем самое выгодное
            </h2>
            <p className="text-sm text-[var(--foreground-secondary)] mb-6">
              Выберите из предложений банков лучшее — мы поможем оформить.
            </p>

            <form className="space-y-4">
              <Input
                placeholder="ИНН"
                className="h-12 rounded-xl bg-[#062033]/60 border border-white/10 text-sm px-4"
              />
              <Input
                placeholder="Сумма"
                className="h-12 rounded-xl bg-[#062033]/60 border border-white/10 text-sm px-4"
              />
              <Input
                placeholder="Номер телефона"
                className="h-12 rounded-xl bg-[#062033]/60 border border-white/10 text-sm px-4"
              />
              <Button
                className="w-full h-12 rounded-xl bg-primary
                text-white font-semibold shadow-[0_0_20px_var(--primary-glow)]
                hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                Отправить заявку
              </Button>
            </form>
          </section>
        </div>

        <FadeIn>
          <ManagerCTASection />
        </FadeIn>
      </div>
    </main>
  );
}

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function BestOffersSection() {
  const offers = [
    { bank: "Сбер", rating: 5, reviews: 234, rate: "от 6.9%", amount: "до 50 млн ₽", term: "до 36 мес" },
    { bank: "ВТБ", rating: 4, reviews: 198, rate: "от 7.2%", amount: "до 30 млн ₽", term: "до 24 мес" },
    { bank: "Альфа-Банк", rating: 5, reviews: 312, rate: "от 7.0%", amount: "до 40 млн ₽", term: "до 48 мес" },
    { bank: "Газпромбанк", rating: 4, reviews: 155, rate: "от 7.4%", amount: "до 25 млн ₽", term: "до 24 мес" },
    { bank: "Открытие", rating: 5, reviews: 121, rate: "от 6.8%", amount: "до 35 млн ₽", term: "до 36 мес" },
    { bank: "Россельхозбанк", rating: 4, reviews: 87, rate: "от 7.1%", amount: "до 20 млн ₽", term: "до 18 мес" },
  ];

  const Star = ({ filled }: { filled: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill={filled ? "var(--primary)" : "none"} stroke="var(--primary)" strokeWidth="1.5">
      <path d="M12 17.3l-5.4 3 1-6.1-4.4-4.3 6.1-.9L12 3l2.7 5.9 6.1.9-4.4 4.3 1 6.1z" />
    </svg>
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10 md:py-16">
      <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:mb-10 md:text-3xl">
        <span className="text-gradient">Лучшие предложения</span>
      </h2>
      <div className="grid gap-5 md:grid-cols-2 auto-rows-[1fr]">
        {offers.map((o, i) => (
          <div key={i} className="h-full rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500/25 via-sky-500/25 to-emerald-500/25">
            <Card className="h-full rounded-2xl border border-foreground/10 bg-background/90 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/10 text-xs font-medium text-foreground/90">
                      {o.bank[0]}
                    </div>
                    <div className="text-base font-semibold text-foreground">{o.bank}</div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="flex items-center gap-0.5 text-primary">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} filled={idx < o.rating} />
                      ))}
                    </div>
                    <span className="text-foreground/60">{o.reviews} отзывов</span>
                    <span className="text-foreground/40">→</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="rounded-xl bg-foreground/15 p-3 text-center">
                    <div className="text-foreground/60">Ставка</div>
                    <div className="font-semibold text-foreground">{o.rate}</div>
                  </div>
                  <div className="rounded-xl bg-foreground/15 p-3 text-center">
                    <div className="text-foreground/60">Сумма</div>
                    <div className="font-semibold text-foreground">{o.amount}</div>
                  </div>
                  <div className="rounded-xl bg-foreground/15 p-3 text-center">
                    <div className="text-foreground/60">Срок</div>
                    <div className="font-semibold text-foreground">{o.term}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

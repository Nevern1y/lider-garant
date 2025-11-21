"use client";

export default function BestOffersSection() {
  const offers = [
    {
      bank: "МСП Банк",
      rating: 5,
      reviews: 237,
      rate: "от 26%",
      amount: "до 50 млн",
      term: "до 60 мес",
    },
    {
      bank: "Т Банк",
      rating: 5,
      reviews: 93,
      rate: "от 2,49% в мес",
      amount: "до 60 млн",
      term: "до 60 мес",
    },
    {
      bank: "ВТБ",
      rating: 5,
      reviews: 71,
      rate: "от 22%",
      amount: "до 30 млн",
      term: "до 60 мес",
    },
    {
      bank: "Альфа Банк",
      rating: 5,
      reviews: 170,
      rate: "от 27,5%",
      amount: "до 50 млн",
      term: "до 60 мес",
    },
    {
      bank: "АТБ",
      rating: 5,
      reviews: 65,
      rate: "от 20,1%",
      amount: "до 50 млн",
      term: "до 60 мес",
    },
    {
      bank: "Дом.РФ Банк",
      rating: 5,
      reviews: 83,
      rate: "от 23,75%",
      amount: "до 100 млн",
      term: "до 60 мес",
    },
  ];

  const Star = ({ filled }: { filled: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill={filled ? "var(--primary)" : "none"}
      stroke="var(--primary)"
      strokeWidth="1.5"
    >
      <path d="M12 17.3l-5.4 3 1-6.1-4.4-4.3 6.1-.9L12 3l2.7 5.9 6.1.9-4.4 4.3 1 6.1z" />
    </svg>
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14 md:py-20">
      <div className="relative overflow-hidden rounded-[32px] border border-foreground/10">
        <div className="relative px-6 py-12 md:px-12">
          <h2 className="mb-10 text-center text-3xl font-semibold text-primary md:text-[42px]">
            Лучшие предложения
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {offers.map((o, i) => (
              <div
                key={i}
                className="group h-full rounded-[28px] border border-cyan-400/20 bg-white/5 p-6 shadow-[0_15px_45px_-25px_rgba(15,23,42,0.9)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_35px_70px_-40px_rgba(34,197,94,0.65)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground/10 text-sm font-semibold text-foreground/90">
                      {o.bank[0]}
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{o.bank}</div>
                      <div className="mt-1 flex items-center gap-1 text-[11px] text-foreground/60">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star key={idx} filled={idx < o.rating} />
                        ))}
                        <span>{o.reviews} отзывов</span>
                        <span className="text-foreground/40">→</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs font-medium">
                  <div className="rounded-2xl bg-foreground/8 px-3 py-4">
                    <div className="text-foreground/50">Ставка</div>
                    <div className="mt-1 text-sm font-semibold text-foreground">
                      {o.rate}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-foreground/8 px-3 py-4">
                    <div className="text-foreground/50">Сумма</div>
                    <div className="mt-1 text-sm font-semibold text-foreground">
                      {o.amount}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-foreground/8 px-3 py-4">
                    <div className="text-foreground/50">Срок</div>
                    <div className="mt-1 text-sm font-semibold text-foreground">
                      {o.term}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

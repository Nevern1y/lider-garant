"use client";

const news = [
  {
    title: "Обновление условий банковских гарантий",
    date: "15.11.2025",
    excerpt: "Снижение ставок и упрощённый скоринг для малого бизнеса.",
  },
  {
    title: "Новый партнёр по лизингу",
    date: "10.11.2025",
    excerpt: "Запущены программы с авансом от 0% и ускоренным одобрением.",
  },
  {
    title: "ВЭД: прямые коррсчета",
    date: "05.11.2025",
    excerpt: "Подключили ещё два иностранных банка для удобных платежей.",
  },
  {
    title: "Страхование контрактов",
    date: "01.11.2025",
    excerpt: "Экспресс-полисы для контрактов свыше 30 млн руб.",
  },
  {
    title: "Тендерное сопровождение",
    date: "28.10.2025",
    excerpt: "Каждый третий тендер — победа. Расширили экспертизу.",
  },
];

export default function NewsRibbon() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10 md:py-16">
      <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:mb-10 md:text-3xl">
        <span className="text-gradient">Новости компании</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Featured on the left */}
        <article className="md:col-span-2 overflow-hidden rounded-3xl border border-foreground/10 bg-background/70 shadow-md">
          <div className="relative h-52 w-full overflow-hidden md:h-64">
            <img
              src="/news/hero.jpg"
              alt="featured"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6 md:p-7">
            <h3 className="mb-2 text-lg font-semibold text-foreground md:text-xl">
              {news[0]?.title}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-foreground/80">
              {news[0]?.excerpt}
            </p>
            <a href="#" className="btn-gradient inline-flex h-10 items-center rounded-full px-5 text-sm font-medium">Читать полностью →</a>
          </div>
        </article>

        {/* Sidebar list on the right */}
        <aside className="rounded-3xl border border-foreground/10 bg-background/60 p-5">
          <div className="mb-4 text-sm font-medium text-foreground/80">Лента событий</div>
          <ul className="divide-y divide-foreground/10">
            {news.slice(1).map((n, i) => (
              <li key={i} className="py-3 first:pt-0 last:pb-0">
                <a href="#" className="block">
                  <div className="mb-1 text-sm font-semibold text-foreground hover:underline">
                    {n.title}
                  </div>
                  <time className="text-xs text-foreground/60">{n.date}</time>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <a href="#" className="link-gradient text-sm">Смотреть все новости →</a>
          </div>
        </aside>
      </div>
    </section>
  );
}

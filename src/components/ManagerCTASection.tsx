export default function ManagerCTASection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
      <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:mb-10 md:text-3xl">
        <span className="text-gradient">Вам всегда поможет персональный менеджер</span>
      </h2>
      <div className="grid gap-5 md:grid-cols-3 auto-rows-[1fr]">
        {/* Card 1 */}
        <div className="h-full rounded-2xl border border-foreground/15 bg-background/80 p-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">✓</span>
            <div className="text-base font-medium text-foreground">Подайте заявку, и мы с Вами свяжемся</div>
          </div>
          <p className="mb-5 text-sm text-foreground/70">Перезвоним в течение 15 минут</p>
          <a href="#application" className="inline-flex h-10 items-center rounded-full border border-primary/40 px-5 text-sm font-medium text-primary transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:bg-primary/10 hover:border-primary/60">Отправить заявку</a>
        </div>

        {/* Card 2 */}
        <div className="h-full rounded-2xl border border-foreground/15 bg-background/80 p-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">☎</span>
            <div className="text-base font-medium text-foreground">Позвоните нам, и мы расскажем все условия</div>
          </div>
          <p className="mb-5 text-sm text-foreground/70">Звонок бесплатный</p>
          <a href="tel:+78000000000" className="inline-flex h-10 items-center rounded-full border border-foreground/25 px-5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:text-primary hover:border-primary/40 hover:bg-foreground/10">8 800 000 00 00</a>
        </div>

        {/* Card 3 */}
        <div className="h-full rounded-2xl border border-foreground/15 bg-background/80 p-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">💬</span>
            <div className="text-base font-medium text-foreground">Напишите, и мы подробно ответим на все вопросы</div>
          </div>
          <p className="mb-5 text-sm text-foreground/70">Электронная почта для клиентов</p>
          <a href="mailto:client@lider-garant.ru" className="inline-flex h-10 items-center rounded-full border border-primary/40 px-5 text-sm font-medium text-primary transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:bg-primary/10 hover:border-primary/60">client@lider-garant.ru</a>
        </div>
      </div>
    </section>
  );
}

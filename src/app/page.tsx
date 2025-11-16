import BankLogosSlider from "@/components/BankLogosSlider";
import NewsRibbon from "@/components/NewsRibbon";
import ApplicationFormSection from "@/components/ApplicationFormSection";
import BestOffersSection from "@/components/BestOffersSection";
import ManagerCTASection from "@/components/ManagerCTASection";
import SiteFooter from "@/components/SiteFooter";
import HowItWorksSection from "@/components/HowItWorksSection";
import LottieHero from "@/components/LottieHero";
import FadeIn from "@/components/FadeIn";
export default function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
      <FadeIn>
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold leading-tight text-foreground md:text-5xl">
            <span className="block text-gradient">Финансовый маркетплейс</span>
            <span className="block">для предпринимателей</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
            Все для госзакупок и личных нужд — получите предложение онлайн.
            Войдите, и мы подберём решения под ваши задачи.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#login"
              className="btn-gradient inline-flex h-11 items-center rounded-xl px-6 text-sm font-medium md:text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110"
            >
              Войти
            </a>
          </div>
        </div>

        <div className="relative h-[360px] w-full overflow-hidden rounded-3xl bg-background/70 p-5 backdrop-blur-md md:h-[420px] transition hover:shadow-2xl hover:border-foreground/20">
          <LottieHero src="/Login.json" />
        </div>
      </section>
      </FadeIn>
      <FadeIn>
        <BankLogosSlider />
      </FadeIn>
      <FadeIn>
        <HowItWorksSection />
      </FadeIn>

      <FadeIn>
      <section className="relative mx-auto mt-2 w-full max-w-7xl py-10 md:mt-4 md:py-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/25 via-sky-500/25 to-emerald-500/25 blur-3xl" />
        </div>
        <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-primary md:mb-10 md:text-4xl">
          Кто и как зарабатывает с нами?
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-dashed border-foreground/25 bg-background/40 p-6 md:p-8 backdrop-blur transition hover:border-foreground/40">
            <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-gradient-to-br from-indigo-500/20 to-sky-500/10 blur-2xl" />
            <div className="relative flex items-start gap-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-sm font-bold text-background">A</span>
              <div>
                <div className="mb-2 text-base font-semibold text-foreground">ИП и юридические лица</div>
                <p className="text-sm leading-relaxed text-foreground/80">
                  Агенты по банковским гарантиям, финансовые брокеры, предприниматели, владельцы бизнеса.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-dashed border-foreground/25 bg-background/40 p-6 md:p-8 backdrop-blur transition hover:border-foreground/40">
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-gradient-to-tr from-emerald-500/20 to-sky-500/10 blur-2xl" />
            <div className="relative flex items-start gap-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-sm font-bold text-background">B</span>
              <div>
                <div className="mb-2 text-base font-semibold text-foreground">Физические лица и самозанятые</div>
                <p className="text-sm leading-relaxed text-foreground/80">
                  Тендерные специалисты, бухгалтеры, финансовые консультанты, юристы, агенты, фрилансеры и те, кто ищет дополнительный доход.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="max-w-2xl text-sm text-foreground/75">Мы вам поможем. Оставьте заявку и начните зарабатывать.</p>
          <a href="#earn" className="inline-flex h-11 items-center rounded-full border border-primary/40 px-6 text-sm font-medium text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/10 hover:border-primary/60">
            Начать зарабатывать
          </a>
        </div>
      </section>
      </FadeIn>

      <FadeIn>
      <section
        id="products"
        className="relative mx-auto mt-2 w-full max-w-7xl py-10 md:mt-4 md:py-16"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-8 top-8 h-56 w-56 rounded-full bg-gradient-to-tr from-indigo-500/15 via-sky-500/15 to-emerald-500/15 blur-3xl" />
        </div>
        <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:mb-10 md:text-3xl">
          <span className="text-gradient">Финансовые продукты</span>
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 auto-rows-[1fr]">
          <div id="guarantees" className="group h-full rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500/25 via-sky-500/25 to-emerald-500/25">
            <div className="rounded-2xl border border-foreground/10 bg-background/70 p-6 backdrop-blur transition hover:shadow-xl hover:border-foreground/20 min-h-[220px] md:min-h-[240px]">
              <div id="card-guarantees" className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Банковские гарантии</h3>
                  <p className="mb-4 text-sm leading-relaxed text-foreground/80">
                    44-ФЗ, 223-ФЗ, 185-ФЗ (615 ПП), коммерческие закупки, налоговые
                    гарантии.
                  </p>
                  <a href="#" className="inline-flex h-10 items-center rounded-full border border-foreground/20 px-5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:text-primary hover:border-primary/40 hover:bg-foreground/10">
                    Узнать лимит
                  </a>
                </div>
                <div className="relative mt-1 h-24 w-28 shrink-0 overflow-hidden rounded-xl bg-foreground/5">
                  <LottieHero src="/finance-products/2.json" hoverPlay autoplay={false} hoverTargetId="card-guarantees" />
                </div>
              </div>
            </div>
          </div>

          <div id="credits" className="group h-full rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500/25 via-sky-500/25 to-emerald-500/25">
            <div className="rounded-2xl border border-foreground/10 bg-background/70 p-6 backdrop-blur transition hover:shadow-xl hover:border-foreground/20 min-h-[220px] md:min-h-[240px]">
              <div id="card-credits" className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Финансирование контракта</h3>
                  <p className="mb-4 text-sm leading-relaxed text-foreground/80">
                    Онлайн‑заявка за минуту, бесплатное сравнение ставок, получение
                    кредита на лучших условиях.
                  </p>
                  <a href="#" className="inline-flex h-10 items-center rounded-full border border-foreground/20 px-5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:text-primary hover:border-primary/40 hover:bg-foreground/10">
                    Подобрать кредит
                  </a>
                </div>
                <div className="relative mt-1 h-24 w-28 shrink-0 overflow-hidden rounded-xl bg-foreground/5">
                  <LottieHero src="/finance-products/2.json" hoverPlay autoplay={false} />
                </div>
              </div>
            </div>
          </div>

          <div className="group h-full rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500/25 via-sky-500/25 to-emerald-500/25">
            <div className="rounded-2xl border border-foreground/10 bg-background/70 p-6 backdrop-blur transition hover:shadow-xl hover:border-foreground/20 min-h-[220px] md:min-h-[240px]">
              <div id="card-logistics" className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Логистическое кредитование бизнеса</h3>
                  <p className="mb-4 text-sm leading-relaxed text-foreground/80">
                    Кредитование для текущих операционных и иных расходов (логистика,
                    оборот).
                  </p>
                  <a href="#" className="inline-flex h-10 items-center rounded-full border border-foreground/20 px-5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:text-primary hover:border-primary/40 hover:bg-foreground/10">
                    Подобрать условия
                  </a>
                </div>
                <div className="relative mt-1 h-24 w-28 shrink-0 overflow-hidden rounded-xl bg-foreground/5">
                  <LottieHero src="/finance-products/2.json" hoverPlay autoplay={false} hoverTargetId="card-logistics" />
                </div>
              </div>
            </div>
          </div>

          <div id="ved" className="group h-full rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500/25 via-sky-500/25 to-emerald-500/25">
            <div className="rounded-2xl border border-foreground/10 bg-background/70 p-6 backdrop-blur transition hover:shadow-xl hover:border-foreground/20 min-h-[220px] md:min-h-[240px]">
              <div id="card-ved" className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">ВЭД</h3>
                  <p className="mb-4 text-sm leading-relaxed text-foreground/80">
                    Прямые корреспондентские счета в иностранных банках и гарантийные
                    списания комиссии.
                  </p>
                  <a href="#" className="inline-flex h-10 items-center rounded-full border border-foreground/20 px-5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:text-primary hover:border-primary/40 hover:bg-foreground/10">
                    Подробнее
                  </a>
                </div>
                <div className="mt-1 h-20 w-24 shrink-0 rounded-xl bg-gradient-to-br from-foreground/10 to-foreground/5" />
              </div>
            </div>
          </div>

          <div id="leasing" className="group h-full rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500/25 via-sky-500/25 to-emerald-500/25">
            <div className="rounded-2xl border border-foreground/10 bg-background/70 p-6 backdrop-blur transition hover:shadow-xl hover:border-foreground/20 min-h-[220px] md:min-h-[240px]">
              <div id="card-leasing" className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Лизинг</h3>
                  <p className="mb-4 text-sm leading-relaxed text-foreground/80">
                    Финансируем новое и с пробегом с авансом от 0%.
                  </p>
                  <a href="#" className="inline-flex h-10 items-center rounded-full border border-foreground/20 px-5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:text-primary hover:border-primary/40 hover:bg-foreground/10">
                    Узнать больше
                  </a>
                </div>
                <div className="mt-1 h-20 w-24 shrink-0 rounded-xl bg-gradient-to-br from-foreground/10 to-foreground/5" />
              </div>
            </div>
          </div>

          <div id="insurance" className="group h-full rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500/25 via-sky-500/25 to-emerald-500/25">
            <div className="rounded-2xl border border-foreground/10 bg-background/70 p-6 backdrop-blur transition hover:shadow-xl hover:border-foreground/20 min-h-[220px] md:min-h-[240px]">
              <div id="card-insurance" className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Страхование</h3>
                  <p className="mb-4 text-sm leading-relaxed text-foreground/80">
                    Экспресс‑страхование контрактов свыше 30 млн рублей.
                  </p>
                  <a href="#" className="inline-flex h-10 items-center rounded-full border border-foreground/20 px-5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:text-primary hover:border-primary/40 hover:bg-foreground/10">
                    Узнать больше
                  </a>
                </div>
                <div className="mt-1 h-20 w-24 shrink-0 rounded-xl bg-gradient-to-br from-foreground/10 to-foreground/5" />
              </div>
            </div>
          </div>

          <div id="factoring" className="group h-full rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500/25 via-sky-500/25 to-emerald-500/25">
            <div className="rounded-2xl border border-foreground/10 bg-background/70 p-6 backdrop-blur transition hover:shadow-xl hover:border-foreground/20 min-h-[220px] md:min-h-[240px]">
              <div id="card-factoring" className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Факторинг</h3>
                  <p className="mb-4 text-sm leading-relaxed text-foreground/80">
                    Финансирование под уступку права требования, улучшение оборотного
                    капитала.
                  </p>
                  <a href="#" className="inline-flex h-10 items-center rounded-full border border-foreground/20 px-5 text-sm font-medium text-foreground hover:bg-foreground/10">
                    Подробнее
                  </a>
                </div>
                <div className="mt-1 h-20 w-24 shrink-0 rounded-xl bg-gradient-to-br from-foreground/10 to-foreground/5" />
              </div>
            </div>
          </div>

          <div className="group h-full rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500/25 via-sky-500/25 to-emerald-500/25">
            <div className="rounded-2xl border border-foreground/10 bg-background/70 p-6 backdrop-blur transition hover:shadow-xl hover:border-foreground/20 min-h-[220px] md:min-h-[240px]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Тендерное сопровождение</h3>
                  <p className="mb-4 text-sm leading-relaxed text-foreground/80">
                    Каждый 3‑й тендер — победа! Штат опытных специалистов. Спецсчет,
                    регистрация в ЕРУЗ, аккредитация на закрытых секциях.
                  </p>
                  <a href="#" className="inline-flex h-10 items-center rounded-full border border-foreground/20 px-5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:text-primary hover:border-primary/40 hover:bg-foreground/10">
                    Подробнее
                  </a>
                </div>
                <div className="mt-1 h-20 w-24 shrink-0 rounded-xl bg-gradient-to-br from-foreground/10 to-foreground/5" />
              </div>
            </div>
          </div>

          <div className="group h-full rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500/25 via-sky-500/25 to-emerald-500/25">
            <div className="rounded-2xl border border-foreground/10 bg-background/70 p-6 backdrop-blur transition hover:shadow-xl hover:border-foreground/20 min-h-[220px] md:min-h-[240px]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Проверка контрагентов</h3>
                  <p className="mb-4 text-sm leading-relaxed text-foreground/80">
                    Все — от реквизитов и отчетности до контактов и кадровых рисков.
                  </p>
                  <a href="#" className="inline-flex h-10 items-center rounded-full border border-foreground/20 px-5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:text-primary hover:border-primary/40 hover:bg-foreground/10">
                    Подробнее
                  </a>
                </div>
                <div className="mt-1 h-20 w-24 shrink-0 rounded-xl bg-gradient-to-br from-foreground/10 to-foreground/5" />
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>
      <FadeIn>
        <NewsRibbon />
      </FadeIn>
      <FadeIn>
        <ApplicationFormSection />
      </FadeIn>
      <FadeIn>
        <BestOffersSection />
      </FadeIn>
      <FadeIn>
        <ManagerCTASection />
      </FadeIn>
      <FadeIn>
        <SiteFooter />
      </FadeIn>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10 bg-background/80">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Логотип" width={28} height={28} />
              <span className="text-sm font-semibold text-foreground">
                Лидер‑Гарант
              </span>
            </div>
            <address className="not-italic text-sm text-foreground/70">
              ООО Лидер‑Гарант, 127283, г. Москва, ул. Остоженка 10
            </address>
            <div className="text-sm text-foreground/70">
              Служба поддержки
              <div>8 300 000 00 00 Ежедневно с 7 до 20 Мск</div>
              <a
                href="mailto:support@lider-garant.ru"
                className="link-gradient"
              >
                support@lider-garant.ru
              </a>
            </div>
            <div>
              <ThemeToggle />
            </div>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold text-foreground">
              Маркетплейс
            </div>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="/bank-guarantee" className="nav-link link-gradient">
                  Банковская гарантия
                </Link>
              </li>
              <li>
                <Link href="/credits" className="nav-link link-gradient">
                  Кредиты
                </Link>
              </li>
              <li>
                <Link href="/ved" className="nav-link link-gradient">
                  ВЭД
                </Link>
              </li>
              <li>
                <Link href="/leasing" className="nav-link link-gradient">
                  Лизинг
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="nav-link link-gradient">
                  Страхование
                </Link>
              </li>
              <li>
                <Link href="/rko" className="nav-link link-gradient">
                  РКО и спец счета
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold text-foreground">
              Сервисы
            </div>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="/news" className="nav-link link-gradient">
                  Новости
                </Link>
              </li>
              <li>
                <Link
                  href="/counterparty-check"
                  className="nav-link link-gradient"
                >
                  Проверка контрагента
                </Link>
              </li>
              <li>
                <Link href="/tender-support" className="nav-link link-gradient">
                  Тендерное сопровождение
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold text-foreground">
              Компания
            </div>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="/about" className="nav-link link-gradient">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="nav-link link-gradient">
                  Контакты
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="nav-link link-gradient">
                  Карта сайта
                </Link>
              </li>
              <li>
                <Link href="/agents" className="nav-link link-gradient">
                  Агентам
                </Link>
              </li>
              <li>
                <Link href="/partners" className="nav-link link-gradient">
                  Партнерам
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-foreground/50">
          © {new Date().getFullYear()} ООО Лидер‑Гарант. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

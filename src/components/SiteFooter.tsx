import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { Send } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10 bg-background/80">
      <style>{`
        html[data-theme="light"] .logo-light-footer { display: none; }
        html[data-theme="dark"] .logo-dark-footer { display: none; }
      `}</style>
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 -my-18">
              <Image
                src="/logo-light-2.png"
                alt="Логотип"
                width={154}
                height={156}
                className="row-span-2 h-55 w-auto mb-2 logo-light-footer"
              />
              <Image
                src="/logo-dark.png"
                alt="Логотип"
                width={154}
                height={156}
                className="row-span-2 h-15 mb-25 mt-20 w-auto logo-dark-footer"
              />
            </div>
            <address className="not-italic text-sm text-foreground/70">
              ООО Лидер‑Гарант, 129085, г. Москва, Проспект мира 105
            </address>
            <div className="text-sm text-foreground/70">
              Служба поддержки
              <div>+7(965)284-14-15 Ежедневно с 7 до 20 Мск</div>
              <a href="mailto:info@lider-garant.ru" className="link-gradient">
                info@lider-garant.ru
              </a>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=""
                title="Telegram"
              >
                <Send className="h-7 w-7 hover:text-primary transition-colors" />
              </a>
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
                <Link href="/factoring" className="nav-link link-gradient">
                  Факторинг
                </Link>
              </li>
              <li>
                <Link href="/deposit" className="nav-link link-gradient">
                  Депозиты
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

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Smartphone, Menu, X } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import CustomSelect from "./ui/my-select";

const financeItems = [
  { label: "Гарантии", href: "/bank-guarantee" },
  { label: "Кредиты", href: "/credits" },
  { label: "Лизинг", href: "/leasing" },
  { label: "Факторинг", href: "/factoring" },
  { label: "Страхование", href: "/insurance" },
  { label: "ВЭД", href: "/ved" },
  { label: "РКО и спецсчета", href: "/rko" },
  { label: "Депозиты", href: "/deposit" },
];

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <style>{`
        html[data-theme="light"] .logo-light {
          display: none;
        }
        html[data-theme="dark"] .logo-dark {
          display: none;
        }
      `}</style>
      <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/80 backdrop-blur py-5">
        <div className="mx-auto flex h-16 w-full items-center justify-between gap-4 px-6 md:px-8 whitespace-nowrap">
          <Link
            href="/"
            className="grid grid-cols-[auto_1fr] items-center gap-x-3"
          >
            <Image
              src="/logo-light-2.png"
              alt="Логотип"
              width={154}
              height={156}
              className="row-span-2 h-55 w-auto mb-2 logo-light"
            />
            <Image
              src="/logo-dark.png"
              alt="Логотип"
              width={160}
              height={160}
              className="logo-dark  w-auto h-15 object-contain transition-all"
              priority
            />
          </Link>
          <nav className="mt-1 hidden items-center justify-center gap-6 lg:flex lg:gap-8">
            <CustomSelect items={financeItems} />

            <Link
              href="/agents"
              className="hidden xl:inline-block nav-link link-gradient"
            >
              Агентам
            </Link>
            <Link
              href="/partners"
              className="hidden xl:inline-block nav-link link-gradient"
            >
              Партнерам
            </Link>
            <Link
              href="/about"
              className="hidden xl:inline-block nav-link link-gradient"
            >
              О проекте
            </Link>
          </nav>
          <div className="hidden shrink-0 items-center gap-4 md:flex md:gap-6">
            <div className="">
              <Smartphone className="h-5 w-5 text-foreground" />
            </div>

            <div className="flex flex-col items-start leading-tight">
              <a
                href="tel:+78000000000"
                className="text-[15px] font-semibold text-foreground hover:opacity-80 transition"
              >
                8 (800) 000-00-00
              </a>
              <button
                onClick={() => setModalOpen(true)}
                className="text-xs font-medium text-brand nav-link link-gradient"
              >
                Обратный звонок
              </button>
            </div>

            <button className="btn-three py-2 px-6">Личный кабинет</button>
          </div>

          <button
            aria-label="Открыть меню"
            className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-foreground/10 xl:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="sm:max-w-md border-none">
            <DialogHeader>
              <DialogTitle className="text-primary">
                Заказать обратный звонок
              </DialogTitle>
              <DialogDescription>
                Оставьте телефон — перезвоним в течение 15 минут.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-3 py-2">
              <div className="grid gap-1">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Иван Иванович Иванов" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="phone">Телефон</Label>
                <PhoneInput
                  id="phone"
                  name="phone"
                  className="h-11 rounded-full"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => setModalOpen(false)} className="btn-three">
                Отправить
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetContent side="right" className="p-0 w-[92vw] max-w-sm">
            <div className="flex h-[100dvh] flex-col overflow-y-auto bg-background p-5">
              <div className="mb-4 flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2"
                >
                  <Image src="/logo.svg" alt="Логотип" width={80} height={20} />
                  <span className="text-base font-semibold">Лидер гарант</span>
                </Link>
                <button
                  aria-label="Закрыть меню"
                  className="rounded-lg p-2 hover:bg-foreground/10"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="mb-2 text-xs uppercase text-foreground/60">
                    Финансовые продукты
                  </div>
                  <ul className="space-y-2">
                    {financeItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-3 py-2 text-foreground hover:bg-foreground/10"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <nav className="grid gap-2">
                  <Link
                    href="#agents"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2 hover:bg-foreground/10"
                  >
                    Агентам
                  </Link>
                  <Link
                    href="#partners"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2 hover:bg-foreground/10"
                  >
                    Партнерам
                  </Link>
                  <Link
                    href="#about"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2 hover:bg-foreground/10"
                  >
                    О проекте
                  </Link>
                </nav>

                <div className="grid gap-4 rounded-2xl border border-foreground/10 bg-foreground/5 p-5 shadow-sm backdrop-blur-md dark:bg-white/5 dark:border-white/10">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/10 text-foreground/70">
                        <Smartphone className="h-5 w-5" />
                      </div>
                      <a
                        href="tel:+79999999999"
                        className="text-lg font-semibold tracking-tight text-foreground/70"
                      >
                        +7 (999) 999-99-99
                      </a>
                    </div>
                    <div className="rounded-xl bg-foreground/15 p-1.5 text-foreground shadow-sm dark:bg-black/50">
                      <ThemeToggle />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => {
                        setMobileOpen(false);
                        setModalOpen(true);
                      }}
                      className="text-sm font-medium text-primary underline underline-offset-4"
                    >
                      Обратный звонок
                    </button>
                  </div>
                  <Link
                    href="#login"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-5 font-semibold text-primary-foreground shadow-sm transition hover:shadow-md"
                  >
                    Личный кабинет
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}

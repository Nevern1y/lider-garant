"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Smartphone, Menu, X } from "lucide-react";

const financeItems = [
  { label: "Гарантии", href: "#guarantees" },
  { label: "Кредиты", href: "#credits" },
  { label: "Лизинг", href: "#leasing" },
  { label: "Факторинг", href: "#factoring" },
  { label: "Страхование", href: "#insurance" },
  { label: "ВЭД", href: "#ved" },
  { label: "РКО и спецсчета", href: "#rko" },
];

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/80 backdrop-blur py-2">
      <div className="mx-auto flex h-16 w-full items-center justify-between gap-4 px-6 md:px-8 whitespace-nowrap">
        <Link href="/" className="grid grid-cols-[auto_1fr] items-center gap-x-3">
          <Image src="/logo.svg" alt="Логотип" width={44} height={36} className="row-span-2" />
          <div className="leading-tight">
            <span className="block text-sm font-extrabold tracking-wide text-foreground md:text-base">
              ЛИДЕР
            </span>
            <span className="block -mt-0.5 text-sm font-extrabold tracking-wide text-foreground md:text-base">
              ГАРАНТ
            </span>
          </div>
          <span className="col-span-2 mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-gradient md:text-xs">
            Финансовый маркетплейс
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex md:gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-10 rounded-full px-4 text-sm font-medium"
              >
                Финансовые продукты
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  className="ml-2"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64 border-none">
              {financeItems.map((item) => (
                <DropdownMenuItem key={item.label} asChild>
                  <Link href={item.href} className="w-full">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="#agents" className="nav-link link-gradient">
            Агентам
          </Link>
          <Link href="#partners" className="nav-link link-gradient">
            Партнерам
          </Link>
          <Link href="#about" className="nav-link link-gradient">
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
              className="mt-0.5 text-xs font-medium text-brand hover:underline"
            >
              Обратный звонок
            </button>
          </div>

          <Link href="#login" className="relative btn-outline-anim inline-flex h-10 items-center px-5">
            <span>Личный кабинет</span>
            <svg viewBox="0 0 180 60" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
              <rect x="1" y="1" width="178" height="58" rx="12" ry="12"></rect>
            </svg>
          </Link>

          <ThemeToggle />
        </div>

        <button
          aria-label="Открыть меню"
          className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-foreground/10 md:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <style jsx global>{`
        .nav-link {
          position: relative;
          padding: 6px 8px;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 8px;
          right: 8px;
          bottom: 2px;
          height: 2px;
          background-color: var(--primary);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.2s ease;
        }
        .nav-link:hover::after {
          transform: scaleX(1);
        }

        /* Animated outline button */
        .btn-outline-anim {
          border-radius: 12px;
          color: var(--foreground);
          isolation: isolate;
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
          will-change: transform;
        }
        .btn-outline-anim svg {
          position: absolute;
          left: 0; top: 0;
          fill: none;
          stroke: var(--foreground);
          stroke-dasharray: 150 480;
          stroke-dashoffset: 150;
          transition: stroke-dashoffset 1s ease-in-out, stroke 0.2s ease;
          pointer-events: none;
        }
        .btn-outline-anim rect { stroke-width: 1.5; }
        .btn-outline-anim:hover svg {
          stroke-dashoffset: -480;
        }
        .btn-outline-anim span {
          position: relative;
          z-index: 1;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .btn-outline-anim:hover {
          background: color-mix(in oklab, var(--foreground) 10%, transparent);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }
      `}</style>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Заказать обратный звонок</DialogTitle>
            <DialogDescription>
              Оставьте телефон — перезвоним в течение 15 минут.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3 py-2">
            <div className="grid gap-1">
              <Label htmlFor="name">Имя</Label>
              <Input id="name" placeholder="Иван" />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                inputMode="tel"
                placeholder="+7 (___) ___-__-__"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setModalOpen(false)}>Отправить</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Mobile menu */}
      <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
        <DialogContent className="sm:max-w-md p-0 gap-0">
          <div className="flex h-[100dvh] w-[92vw] max-w-sm flex-col overflow-y-auto rounded-2xl bg-background p-5">
            <div className="mb-4 flex items-center justify-between">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                <Image src="/logo.svg" alt="Логотип" width={80} height={20} />
                <span className="text-base font-semibold">Лидер гарант</span>
              </Link>
              <button aria-label="Закрыть меню" className="rounded-lg p-2 hover:bg-foreground/10" onClick={() => setMobileOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <div className="mb-2 text-xs uppercase text-foreground/60">Финансовые продукты</div>
                <ul className="space-y-2">
                  {financeItems.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 text-foreground hover:bg-foreground/10">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <nav className="grid gap-2">
                <Link href="#agents" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 hover:bg-foreground/10">Агентам</Link>
                <Link href="#partners" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 hover:bg-foreground/10">Партнерам</Link>
                <Link href="#about" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 hover:bg-foreground/10">О проекте</Link>
              </nav>

              <div className="grid gap-3 rounded-xl border border-foreground/10 p-4">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-foreground" />
                  <a href="tel:+79999999999" className="font-medium text-foreground">+7 (999) 999-99-99</a>
                </div>
                <button onClick={() => { setMobileOpen(false); setModalOpen(true); }} className="text-sm text-brand underline">Обратный звонок</button>
                <Link href="#login" onClick={() => setMobileOpen(false)} className="relative btn-outline-anim inline-flex h-10 items-center justify-center px-5">
                  <span>Личный кабинет</span>
                  <svg viewBox="0 0 180 60" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                    <rect x="1" y="1" width="178" height="58" rx="12" ry="12"></rect>
                  </svg>
                </Link>
                <div className="pt-2"><ThemeToggle /></div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}

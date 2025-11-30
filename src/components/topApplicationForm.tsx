"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const banks = [
  { name: "ВТБ Банк", logo: "/logos/22.svg", width: 44, height: 44 },
  { name: "Газпромбанк", logo: "/logos/19.svg", width: 44, height: 44 },
  { name: "Уралсиб", logo: "/logos/9.svg", width: 48, height: 44 },
];

export default function TopApplicationForm() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <FadeIn>
      <section className="relative mx-auto mt-8 w-full max-w-7xl bg-foreground/10 overflow-visible rounded-3xl px-6 py-10 md:px-12 min-h-[550px] border border-foreground/10">
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 h-full min-h-[500px]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 flex-1">
            <div className="flex flex-col gap-4 w-full lg:w-auto z-20">
              {banks.map((bank, index) => (
                <div
                  key={bank.name}
                  className="group relative flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.01] min-w-[320px] lg:min-w-[380px]"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white">
                    <Image
                      src={bank.logo}
                      alt={bank.name}
                      width={bank.width}
                      height={bank.height}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="mt-1.5 flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle2
                        className="h-4 w-4 shrink-0 text-emerald-500"
                        strokeWidth={2.5}
                      />
                      <span>Заявка успешно одобрена</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden lg:block shrink-0 absolute z-20 left-5">
              <Image
                src="/application-form-women.png"
                alt="woman"
                width={450}
                height={550}
                className="h-auto w-auto max-h-[550px] object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex shrink-0 w-full lg:w-auto">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg lg:max-w-xl rounded-3xl border border-foreground/20 bg-foreground/10 p-10 lg:p-12 shadow-2xl relative -mt-8 -mb-8 lg:-mt-12 lg:-mb-12"
              aria-label="Форма получения банковской гарантии"
            >
              <h3 className="mb-6 text-2xl font-bold leading-tight text-primary">
                Получить банковскую гарантию
              </h3>

              <div className="space-y-3">
                <Label htmlFor="guarantee-type">Вид гарантии</Label>
                <Select name="guarantee-type" required>
                  <SelectTrigger className="w-full bg-white border-gray-300 px-4 py-6">
                    <SelectValue placeholder="Выберите тип гарантии" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tender">Участие в тендере</SelectItem>
                    <SelectItem value="contract">
                      Исполнение контракта
                    </SelectItem>
                    <SelectItem value="warranty">
                      Исполнение гарантийных обязательств
                    </SelectItem>
                    <SelectItem value="advance">Возврат аванса</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-3 space-y-3">
                <Label htmlFor="fullname">ФИО</Label>
                <Input
                  id="fullname"
                  type="text"
                  name="fullname"
                  placeholder="Иванов Иван Иванович"
                  className="bg-white border-gray-300 px-4 py-6"
                  required
                />
              </div>

              <div className="mt-3 space-y-3">
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+7 (___) ___-__-__"
                  className="bg-white border-gray-300 px-4 py-6"
                  required
                />
              </div>

              <div className="mt-4 space-y-3">
                <Label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary/20"
                  />
                  <span className="text-sm">
                    Я даю согласие на обработку{" "}
                    <span className="font-medium text-primary">
                      моих персональных данных
                    </span>
                  </span>
                </Label>
              </div>

              <Button
                type="submit"
                className="mt-6 w-full rounded-xl px-6 py-6 bg-primary"
                size="lg"
              >
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

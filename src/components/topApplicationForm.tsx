"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { toast } from "sonner";
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
  const [phoneKey, setPhoneKey] = useState(0);
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    toast.success("Заявка отправлена");

    const form = e.currentTarget as HTMLFormElement;
    form.reset();

    setPhoneKey((k) => k + 1);
  }

  return (
    <FadeIn>
      <section className="relative mx-auto mt-6 md:mt-8 w-full max-w-7xl bg-foreground/10 overflow-visible rounded-2xl md:rounded-3xl px-4 md:px-6 lg:px-12 py-6 md:py-10 min-h-auto md:min-h-[550px] border border-foreground/10">
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-4 md:gap-8 lg:gap-12 h-full min-h-auto lg:min-h-[500px]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 flex-1">
            <div className="flex flex-col gap-3 md:gap-4 w-full lg:w-auto z-20">
              {banks.map((bank, index) => (
                <div
                  key={bank.name}
                  className="group relative flex items-center gap-3 md:gap-4 rounded-xl md:rounded-2xl border border-gray-200 bg-white px-3 md:px-5 py-3 md:py-4 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.01] min-w-full md:min-w-[320px] lg:min-w-[380px]"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex h-10 md:h-12 w-10 md:w-12 shrink-0 items-center justify-center rounded-lg md:rounded-xl bg-white">
                    <Image
                      src={bank.logo}
                      alt={bank.name}
                      width={bank.width}
                      height={bank.height}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="mt-1 md:mt-1.5 flex items-center gap-1.5 md:gap-2 text-xs md:text-xs text-gray-600">
                      <CheckCircle2
                        className="h-3.5 w-3.5 md:h-4 md:w-4 shrink-0 text-emerald-500"
                        strokeWidth={2.5}
                      />
                      <span className="truncate md:truncate">
                        Заявка одобрена
                      </span>
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
              className="w-full max-w-lg lg:max-w-xl rounded-2xl md:rounded-3xl border border-foreground/20 bg-foreground/10 p-5 md:p-10 lg:p-12 shadow-2xl relative mt-4 md:-mt-8 lg:-mt-12 md:-mb-8 lg:-mb-12"
              aria-label="Форма получения банковской гарантии"
            >
              <h3 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold leading-tight text-primary">
                Получить гарантию
              </h3>

              <div className="space-y-2 md:space-y-3">
                <Label htmlFor="guarantee-type" className="text-xs md:text-sm">
                  Вид гарантии
                </Label>
                <Select name="guarantee-type" required>
                  <SelectTrigger className="w-full bg-white border-gray-300 px-4 py-2.5 md:py-6 text-sm md:text-base">
                    <SelectValue placeholder="Выберите тип" />
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

              <div className="mt-2 md:mt-3 space-y-2 md:space-y-3">
                <Label htmlFor="fullname" className="text-xs md:text-sm">
                  ФИО
                </Label>
                <Input
                  id="fullname"
                  type="text"
                  name="fullname"
                  placeholder="ФИО"
                  className="bg-white border-gray-300 px-4 py-2.5 md:py-6 text-sm md:text-base"
                  required
                />
              </div>

              <div className="mt-2 md:mt-3 space-y-2 md:space-y-3">
                <Label htmlFor="phone" className="text-xs md:text-sm">
                  Телефон
                </Label>
                <PhoneInput
                  key={phoneKey}
                  id="phone"
                  name="phone"
                  className="bg-white border-gray-300 px-4 py-2.5 md:py-6 h-10 md:h-11 rounded-full text-sm md:text-base"
                  required
                />
              </div>

              <div className="mt-3 md:mt-4 space-y-2 md:space-y-3">
                <Label className="flex items-start gap-2 md:gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary/20 shrink-0"
                  />
                  <span className="text-xs md:text-sm">
                    Я даю согласие на обработку{" "}
                    <span className="font-medium text-primary">
                      персональных данных
                    </span>
                  </span>
                </Label>
              </div>

              <Button
                type="submit"
                className="mt-4 md:mt-6 w-full rounded-lg md:rounded-xl px-4 md:px-6 py-3 md:py-6 bg-primary text-sm md:text-base"
                size="lg"
              >
                Отправить
              </Button>
            </form>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

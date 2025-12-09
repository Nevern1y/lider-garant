"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type FormValues = {
  product: string;
  inn: string;
  amount: string;
};

export default function ApplicationFormSection() {
  const form = useForm<FormValues>({
    defaultValues: { product: "Кредиты", inn: "", amount: "" },
    mode: "onChange",
  });

  const onSubmit = (values: FormValues) => {
    const isInnValid = /^\d{10}|\d{12}$/.test(values.inn);
    const amountNum = Number(values.amount.replace(/\s/g, ""));

    if (!isInnValid) {
      toast.error("ИНН должен содержать 10 или 12 цифр");
      return;
    }
    if (!amountNum || amountNum <= 0) {
      toast.error("Укажите сумму больше 0");
      return;
    }
    toast.success("Заявка отправлена", {
      description: `${values.product}: ${amountNum.toLocaleString("ru-RU")} ₽`,
    });
  };

  const products = [
    "Кредиты",
    "Банковская гарантия",
    "ВЭД",
    "Лизинг",
    "Страхование",
  ];

  return (
    <section id="application" className="mx-auto w-full max-w-7xl py-5">
      <div className="relative overflow-hidden rounded-[32px] border border-foreground/10">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-sky-500/30 blur-[160px]" />
          <div className="absolute -bottom-28 -right-12 h-80 w-80 rounded-full bg-emerald-400/25 blur-[150px]" />
        </div>
        <div className="relative grid items-center gap-10 px-6 py-10 md:px-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="mb-6 text-3xl font-semibold leading-tight text-primary md:text-[40px]">
              Оставьте заявку
            </h3>
            <div className="mb-6 flex flex-wrap gap-3">
              {products.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => form.setValue("product", p)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all border ${
                    form.watch("product") === p
                      ? "bg-primary text-white  border-transparent shadow-[0_20px_45px_-25px_rgba(16,185,129,1)]"
                      : "bg-foreground/5 text-foreground/70 border-foreground/10 hover:bg-foreground/10"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="inn"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                          ИНН
                        </FormLabel>
                        <FormControl>
                          <Input
                            inputMode="numeric"
                            placeholder="Введите ИНН"
                            maxLength={12}
                            {...field}
                            className="h-12 rounded-full border border-foreground/10 bg-foreground/10 px-4 text-foreground placeholder:text-foreground/40 focus-visible:ring-foreground/40"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                          Сумма
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Сумма"
                            {...field}
                            className="h-12 rounded-full border border-foreground/10 bg-foreground/10 px-4 text-foreground placeholder:text-foreground/40 focus-visible:ring-foreground/40"
                            onChange={(e) => {
                              const raw = e.target.value.replace(/[^\d]/g, "");
                              const formatted = raw.replace(
                                /\B(?=(\d{3})+(?!\d))/g,
                                " "
                              );
                              field.onChange(formatted);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                  <Button
                    type="submit"
                    className="h-12 rounded-full px-8 text-sm font-semibold uppercase tracking-wide bg-primary"
                  >
                    Оставить заявку
                  </Button>
                  <p className="text-xs text-foreground/70">
                    Находим только самые лучшие предложения, в которых сами
                    уверены
                  </p>
                </div>
              </form>
            </Form>
          </div>

          <div className="relative hidden min-h-[220px] overflow-hidden rounded-[26px] border border-white/10 bg-white/5 lg:block">
            <Image
              src="/zayavka.jpg"
              alt="Заявка"
              fill
              sizes="(min-width: 1024px) 50vw, 0"
              className="object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-900/30 to-slate-950/60" />
          </div>
        </div>
      </div>
    </section>
  );
}

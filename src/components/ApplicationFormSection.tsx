"use client";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
    const isInnValid = /^(\d{10}|\d{12})$/.test(values.inn);
    const amountNum = Number(values.amount.replace(/\s/g, ""));
    if (!isInnValid) {
      toast.error("ИНН должен содержать 10 или 12 цифр");
      return;
    }
    if (!amountNum || amountNum <= 0) {
      toast.error("Укажите сумму больше 0");
      return;
    }
    toast.success("Заявка отправлена", { description: `${values.product}: ${amountNum.toLocaleString("ru-RU")} ₽` });
  };

  return (
    <section id="application" className="mx-auto mt-2 w-full max-w-7xl py-10 md:mt-4 md:py-16">
      <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:mb-10 md:text-3xl">
        <span className="text-gradient">Оставьте заявку</span>
      </h2>
      <div className="rounded-3xl border border-foreground/10 bg-background/70 p-4 md:p-6">
        <div className="grid items-stretch gap-6 md:grid-cols-2">
        {/* Left: form */}
        <div className="rounded-3xl border border-foreground/10 bg-background/90 p-6 md:p-8">
          <h3 className="mb-4 text-xl font-semibold text-foreground">Получить банковскую гарантию</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="product"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Продукт</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-foreground/5">
                          <SelectValue placeholder="Выберите продукт" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Кредиты">Кредиты</SelectItem>
                        <SelectItem value="Банковская гарантия">Банковская гарантия</SelectItem>
                        <SelectItem value="ВЭД">ВЭД</SelectItem>
                        <SelectItem value="Лизинг">Лизинг</SelectItem>
                        <SelectItem value="Страхование">Страхование</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="inn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ИНН</FormLabel>
                      <FormControl>
                        <Input inputMode="numeric" placeholder="10 или 12 цифр" maxLength={12} {...field} className="bg-foreground/5" />
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
                      <FormLabel>Сумма</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Например, 5 000 000" {...field} className="bg-foreground/5" onChange={(e) => {
                          const raw = e.target.value.replace(/[^\d]/g, "");
                          const formatted = raw.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                          field.onChange(formatted);
                        }} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-3 text-xs text-foreground/70">
                  <input type="checkbox" className="h-4 w-4 rounded border-foreground/30 bg-background" />
                  Я даю согласие на обработку моих персональных данных
                </label>
                <label className="flex items-center gap-3 text-xs text-foreground/70">
                  <input type="checkbox" className="h-4 w-4 rounded border-foreground/30 bg-background" />
                  Я согласен получать новости, рассылки и звонки
                </label>
              </div>

              <Button type="submit" className="h-11 w-full px-6 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 text-background transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110">
                Отправить заявку
              </Button>
              <p className="text-xs text-foreground/60">Находим только самые лучшие предложения, в которых сами уверены.</p>
            </form>
          </Form>
        </div>

        {/* Right: explanation */}
        <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-background/60 p-6 md:p-8">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-sky-500/15 to-emerald-500/20" />
            <div className="absolute right-[-60px] top-[-60px] h-80 w-80 rounded-full bg-foreground/10 blur-3xl" />
          </div>
          <div className="relative flex h-full items-center justify-center">
            <div className="grid w-full max-w-md gap-5">
              <div className="inline-flex items-center gap-3 rounded-full bg-background/85 px-4 py-2.5 shadow-lg backdrop-blur">
                <img src="/logos/1.png" alt="bank" className="h-6 w-6 rounded" />
                <div>
                  <div className="text-sm font-medium text-foreground">ВТБ Банк</div>
                  <div className="text-[11px] text-foreground/70">Заявка успешно одобрена</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-3 rounded-full bg-background/85 px-4 py-2.5 shadow-lg backdrop-blur">
                <img src="/logos/2.png" alt="bank" className="h-6 w-6 rounded" />
                <div>
                  <div className="text-sm font-medium text-foreground">Газпромбанк</div>
                  <div className="text-[11px] text-foreground/70">Заявка успешно одобрена</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-3 rounded-full bg-background/85 px-4 py-2.5 shadow-lg backdrop-blur">
                <img src="/logos/3.png" alt="bank" className="h-6 w-6 rounded" />
                <div>
                  <div className="text-sm font-medium text-foreground">Уралсиб</div>
                  <div className="text-[11px] text-foreground/70">Заявка успешно одобрена</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

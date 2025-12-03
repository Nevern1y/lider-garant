"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Pencil } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const guaranteeTypes = [
  { value: "tender", label: "Участие в тендере" },
  { value: "contract", label: "Исполнение контракта" },
  { value: "warranty", label: "Исполнение гарантийных обязательств" },
  { value: "advance", label: "Возврат аванса" },
];

export default function GuaranteeCalculator() {
  const [guaranteeType, setGuaranteeType] = useState("tender");
  const [amount, setAmount] = useState(1000000);
  const [months, setMonths] = useState(10);
  const [discount, setDiscount] = useState(true);
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");

  const formatNumber = (num: number) => {
    return num.toLocaleString("ru-RU");
  };

  const calculatePrice = () => {
    const basePrice = amount * months * 0.0012;
    const finalPrice = discount ? basePrice * 0.8 : basePrice;
    return Math.round(finalPrice);
  };

  const originalPrice = Math.round((amount * months * 0.0012) / 100);
  const finalPrice = calculatePrice();

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setAmount(Math.min(Math.max(value, 10000), 1000000000));
  };

  const handleMonthsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setMonths(Math.min(Math.max(value, 1), 120));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ guaranteeType, amount, months, discount, fullname, phone });
  };

  return (
    <FadeIn>
      <section className="mx-auto mt-16 w-full max-w-7xl p-12 bg-foreground/5 rounded-2xl">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-primary">
                Рассчитайте свою банковскую гарантию
              </h2>
              <p className="text-sm">Выберите тип гарантии</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {guaranteeTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setGuaranteeType(type.value)}
                  className={`rounded-xl px-4 py-2.5 text-sm  font-semibold transition-all hover:bg-primary hover:-translate-y-1 hover:text-white cursor-pointer ${
                    guaranteeType === type.value
                      ? "border-2 border-primary bg-primary text-white"
                      : "border-2 border-primary text-primary"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <Label className="text-base font-medium text-primary">
                Сумма гарантии, ₽
              </Label>
              <div className="relative">
                <Input
                  type="text"
                  value={formatNumber(amount)}
                  onChange={(e) => {
                    const value =
                      parseInt(e.target.value.replace(/\s/g, "")) || 0;
                    setAmount(Math.min(Math.max(value, 10000), 1000000000));
                  }}
                  className="h-16 text-2xl font-bold text-gray-900 bg-white border-gray-300 px-4 pr-12"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <Pencil className="h-5 w-5" />
                </button>
              </div>
              <input
                type="range"
                min="10000"
                max="1000000000"
                step="10000"
                value={amount}
                onChange={handleAmountChange}
                className="
    w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:h-5
    [&::-webkit-slider-thumb]:w-5
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:bg-primary
    [&::-webkit-slider-thumb]:cursor-pointer
    [&::-moz-range-thumb]:h-5
    [&::-moz-range-thumb]:w-5
    [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:bg-primary
    [&::-moz-range-thumb]:border-0
    [&::-moz-range-thumb]:cursor-pointer
  "
                style={{
                  background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${
                    ((amount - 10000) / (1000000000 - 10000)) * 100
                  }%, #e5e7eb ${
                    ((amount - 10000) / (1000000000 - 10000)) * 100
                  }%, #e5e7eb 100%)`,
                }}
              />

              <div className="flex justify-between text-xs text-gray-500">
                <span>10 000 ₽</span>
                <span>1 000 000 ₽</span>
                <span>100 000 000 ₽</span>
                <span>до 1 000 000 000 ₽</span>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-base font-medium text-primary">
                Срок, месяцев
              </Label>
              <div className="relative">
                <Input
                  type="text"
                  value={months}
                  onChange={(e) => {
                    const value = parseInt(e.target.value) || 0;
                    setMonths(Math.min(Math.max(value, 1), 120));
                  }}
                  className="h-16 text-2xl font-bold text-gray-900 bg-white border-gray-300 px-4 pr-12"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <Pencil className="h-5 w-5" />
                </button>
              </div>
              <input
                type="range"
                min="1"
                max="120"
                step="1"
                value={months}
                onChange={handleMonthsChange}
                className="
    w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:h-5
    [&::-webkit-slider-thumb]:w-5
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:bg-primary
    [&::-webkit-slider-thumb]:cursor-pointer
    [&::-moz-range-thumb]:h-5
    [&::-moz-range-thumb]:w-5
    [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:bg-primary
    [&::-moz-range-thumb]:border-0
    [&::-moz-range-thumb]:cursor-pointer
  "
                style={{
                  background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${
                    ((months - 1) / (120 - 1)) * 100
                  }%, #e5e7eb ${
                    ((months - 1) / (120 - 1)) * 100
                  }%, #e5e7eb 100%)`,
                }}
              />

              <div className="flex justify-between text-xs text-gray-500">
                <span>от 1 мес.</span>
                <span>до 120 мес.</span>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8 lg:h-fit">
            <div className="rounded-3xl border border-foreground/10 bg-foreground/10 p-8 shadow-xl">
              <div className="mb-6 space-y-3 border-b border-gray-200 pb-6">
                <div className="flex justify-between text-sm">
                  <span className="">Сумма банковской гарантии:</span>
                  <span className="font-semibold text-primary">
                    {amount >= 1000000
                      ? `${(amount / 1000000).toFixed(1)} млн ₽`
                      : `${formatNumber(amount)} ₽`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="">Срок гарантии:</span>
                  <span className="font-semibold text-primary">
                    {months}{" "}
                    {months === 1 ? "месяц" : months < 5 ? "месяца" : "месяцев"}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="mb-2 text-sm">Итоговая цена гарантии:</div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-primary">
                    {formatNumber(finalPrice)} ₽
                  </span>
                  {discount && (
                    <span className="text-lg text-red-500 line-through">
                      {formatNumber(originalPrice)} ₽
                    </span>
                  )}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Иванов Иван Иванович"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="bg-white border-gray-300 px-4 py-6"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <PhoneInput
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-white border-gray-300 px-4 py-6 h-11 rounded-full"
                    required
                  />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-center gap-3">
                    <Switch checked={discount} onCheckedChange={setDiscount} />
                    <Label className="text-sm font-medium text-black cursor-pointer">
                      Активировать скидку
                    </Label>
                  </div>
                  {discount && (
                    <span className="rounded bg-red-500 px-3 py-1 text-xs font-bold text-white">
                      -20%
                    </span>
                  )}
                </div>

                <div className="space-y-3">
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
                  className="w-full h-14 bg-primary btn-three"
                  size="lg"
                >
                  Отправить заявку
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  * Предварительный расчет. Не является публичной офертой
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

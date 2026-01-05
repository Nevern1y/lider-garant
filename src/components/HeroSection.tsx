"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
  imageAlt: string;
  gradient?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  features,
  buttonText,
  buttonHref,
  imageSrc,
  imageAlt,
  gradient = true,
}: HeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-white/10 ${
        gradient
          ? "bg-linear-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10"
          : "bg-linear-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10"
      } p-8 md:p-12`}
    >
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-5">
          {subtitle && <h2 className="text-2xl font-semibold">{subtitle}</h2>}
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl space-y-1 leading-tight">
            {title}
          </h1>

          {description && (
            <div className="max-w-2xl text-base text-foreground/80 md:text-lg">
              {description}
            </div>
          )}

          {features && (
            <ul className="mt-2 space-y-2 list-inside">
              {features.map((feature, i) => (
                <li key={i} className="list-disc marker:text-primary">
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center gap-3">
            <Button asChild className="h-12 btn-three">
              <Link href={buttonHref}>{buttonText}</Link>
            </Button>
          </div>
        </div>

        <div className="relative hidden h-[360px] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl md:flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            className="h-72 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

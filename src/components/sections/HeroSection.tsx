"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarCheck, Car, Clock, Phone, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

const QUICK_FACTS = [
  { icon: CalendarCheck, label: "10+ лет опыта" },
  { icon: ShieldCheck, label: "Гарантия на работы" },
  { icon: Car, label: "Все марки авто" },
] as const;

const SCHEDULE_ROWS = [
  { label: "Пн - Пт", value: "08:00 - 19:00", muted: false },
  { label: "Обед", value: "13:00 - 14:00", muted: true },
  { label: "Сб - Вс", value: "Выходной", muted: true },
] as const;

export function HeroSection() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-[var(--bg-dark)]">
      {/* Background image */}
      <Image
        src="/images/mechanic-tools.jpg"
        alt="Мастер BIP-MOBILE за работой"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/90 via-[#1C1C1C]/80 to-[#1C1C1C]/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Left column - text */}
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold leading-[1.1] tracking-tight text-[var(--text-on-dark)] sm:text-5xl lg:text-[56px]"
            >
              Ремонт автомобилей в&nbsp;Витебске с&nbsp;гарантией качества
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg leading-relaxed text-[var(--text-on-dark)]/70 md:text-xl"
            >
              Обслуживаем легковые автомобили и&nbsp;микроавтобусы всех марок.
              Индивидуальный подход, прозрачные цены, понятные сроки.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                onClick={scrollToBooking}
                className="h-12 rounded-lg bg-[var(--accent)] px-8 text-base text-white hover:bg-[var(--accent-hover)]"
              >
                Записаться на диагностику
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={SITE.phoneHref}
                  className="h-12 rounded-lg border-white/30 bg-transparent px-8 text-base text-[var(--text-on-dark)] hover:bg-white/10"
                >
                  <Phone size={18} />
                  Позвонить
                </a>
              </Button>
            </motion.div>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-4"
            >
              {QUICK_FACTS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-[var(--text-on-dark)]/60"
                >
                  <Icon size={18} className="text-[var(--accent)]" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - schedule card (desktop only) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden lg:block lg:w-[340px] lg:flex-shrink-0"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              {/* Logo at the bottom */}
              <div className="mb-6 flex justify-center">
                <Image
                  src="/images/logo-2.png"
                  alt="Bip-mobile"
                  width={290}
                  height={290}
                />
              </div>
              {/* Card header */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-[var(--accent)]" />
                  <span className="text-sm font-semibold text-white">Режим работы</span>
                </div>
                <span className="text-xs text-white/50">Пн-Пт</span>
              </div>
              {/* Schedule rows */}
              <div>
                {SCHEDULE_ROWS.map(({ label, value, muted }) => (
                  <div
                    key={label}
                    className="flex justify-between border-b border-white/10 py-2 last:border-0"
                  >
                    <span className="text-sm text-white/70">{label}</span>
                    <span
                      className={`text-sm font-mono ${muted ? "text-white/50" : "text-white"}`}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              {/* Phone link */}
              <a href={SITE.phoneHref} className="mt-4 flex items-center gap-2">
                <Phone size={16} className="text-[var(--accent)]" />
                <span className="font-mono text-sm text-white">{SITE.phone}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

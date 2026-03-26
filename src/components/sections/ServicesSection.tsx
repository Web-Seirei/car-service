"use client";

import { motion } from "framer-motion";
import { Banknote } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/Section";
import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <Section id="services" variant="beige">
      <SectionHeader
        title="Наши услуги"
        subtitle="Выполняем полный комплекс работ по ремонту и обслуживанию автомобилей. Цены - ориентировочные, точная стоимость после диагностики."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isLastOdd = index === services.length - 1 && services.length % 3 === 1;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
              className={isLastOdd ? "lg:col-start-2" : undefined}
            >
              <Card className="h-full border-[var(--border)] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md gap-3">
                <div className="flex justify-between ">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent-light)]">
                    <Icon size={24} className="text-[var(--accent)]" />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-sm font-medium text-[var(--accent)]">
                    <Banknote size={16} className="opacity-60" />
                    {service.price} BYN
                  </div>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                  {service.title}
                </h3>
                <p className="line-clamp-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

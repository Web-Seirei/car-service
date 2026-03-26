"use client";

import { motion } from "framer-motion";

import { Section, SectionHeader } from "@/components/Section";
import { advantages } from "@/lib/data";

export function AdvantagesSection() {
  return (
    <Section id="advantages" variant="white">
      <SectionHeader title="Почему выбирают нас" />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {advantages.map((advantage, index) => {
          const Icon = advantage.icon;
          return (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.08, 0.4),
              }}
              className="rounded-xl border-t-2 border-[var(--accent)] bg-[var(--bg-page)] p-6"
            >
              <div className="mb-4">
                <Icon size={28} className="text-[var(--accent)]" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-[var(--text-primary)]">
                {advantage.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {advantage.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

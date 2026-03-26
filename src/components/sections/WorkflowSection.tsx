"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";

import { Section, SectionHeader } from "@/components/Section";
import { workflowSteps } from "@/lib/data";

export function WorkflowSection() {
  return (
    <Section id="workflow" variant="beige">
      <SectionHeader
        title="Как проходит ремонт"
        subtitle="Четыре простых шага от обращения до готового автомобиля."
      />
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0">
        {workflowSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Fragment key={step.step}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.1, 0.4),
                }}
                className="flex-1 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-lg font-bold text-white">
                  {step.step}
                </div>
                <div className="mt-4">
                  <Icon size={24} className="mx-auto text-[var(--text-secondary)]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-[var(--text-secondary)]">
                  {step.description}
                </p>
              </motion.div>
              {index < workflowSteps.length - 1 && (
                <div className="hidden lg:flex items-center pt-6 px-2">
                  <div className="w-12 xl:w-20 border-t-2 border-dashed border-[var(--border)]" />
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </Section>
  );
}

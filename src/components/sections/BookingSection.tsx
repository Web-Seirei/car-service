"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { InputMask } from "@react-input/mask";
import { CheckCircle, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Section, SectionHeader } from "@/components/Section";
import { submitBooking } from "@/lib/api";

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    if (status !== "success") return;
    const timer = setTimeout(() => setStatus("idle"), 5000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    await submitBooking(formData);

    setStatus("success");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <Section id="booking" variant="white">
      <SectionHeader
        title="Запишитесь на сервис"
        subtitle="Оставьте заявку, и мы свяжемся с вами в течение 30 минут в рабочее время."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-xl"
      >
        {status === "success" ? (
          <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
            <CheckCircle size={40} className="mx-auto text-green-500" />
            <p className="mt-3 text-lg font-semibold text-green-800">
              Заявка отправлена!
            </p>
            <p className="mt-1 text-sm text-green-600">
              Мы свяжемся с вами в течение 30 минут в рабочее время.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label
                htmlFor="name"
                className="text-sm font-medium text-[var(--text-primary)]"
              >
                Имя <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Ваше имя"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="mt-1.5 bg-white border-[var(--border)] focus:border-[var(--accent)] focus:ring-[var(--accent)]/20"
              />
            </div>

            <div>
              <Label
                htmlFor="phone"
                className="text-sm font-medium text-[var(--text-primary)]"
              >
                Телефон <span className="text-red-500">*</span>
              </Label>
              <InputMask
                component={Input}
                mask="+375 (__) ___-__-__"
                replacement={{ _: /\d/ }}
                value={formData.phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                id="phone"
                type="tel"
                placeholder="+375 (__) ___-__-__"
                required
                className="mt-1.5 bg-white border-[var(--border)] focus:border-[var(--accent)] focus:ring-[var(--accent)]/20"
              />
            </div>

            <div>
              <Label
                htmlFor="message"
                className="text-sm font-medium text-[var(--text-primary)]"
              >
                Описание проблемы
              </Label>
              <Textarea
                id="message"
                placeholder="Опишите неисправность или услугу, которая вас интересует"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                className="mt-1.5 bg-white border-[var(--border)] focus:border-[var(--accent)] focus:ring-[var(--accent)]/20"
              />
            </div>

            <Button
              type="submit"
              disabled={status === "submitting"}
              className="h-12 w-full bg-[var(--accent)] text-base text-white hover:bg-[var(--accent-hover)]"
            >
              {status === "submitting" ? "Отправляем..." : "Отправить заявку"}
              <Send size={18} />
            </Button>

            <p className="mt-4 text-center text-xs text-[var(--text-muted)]">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
            </p>
          </form>
        )}
      </motion.div>
    </Section>
  );
}

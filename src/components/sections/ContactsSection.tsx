"use client";

import { motion } from "framer-motion";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import {
  ViberIcon,
  WhatsAppIcon,
  InstagramIcon,
} from "@/components/icons/MessengerIcons";

import { Section, SectionHeader } from "@/components/Section";
import { SCHEDULE, SITE, SOCIAL } from "@/lib/constants";

export function ContactsSection() {
  return (
    <Section id="contacts" variant="beige">
      <SectionHeader
        title="Контакты"
        subtitle="Приезжайте или свяжитесь с нами удобным способом."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="space-y-5"
        >
          <div className="flex items-start gap-3 text-sm">
            <MapPin size={20} className="mt-0.5 shrink-0 text-[var(--accent)]" />
            <span className="text-[var(--text-primary)]">{SITE.address}</span>
          </div>

          <div className="flex items-start gap-3 text-sm">
            <Phone size={20} className="mt-0.5 shrink-0 text-[var(--accent)]" />
            <a
              href={SITE.phoneHref}
              className="text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
            >
              {SITE.phone}
            </a>
          </div>

          <div className="flex items-start gap-3 text-sm">
            <Mail size={20} className="mt-0.5 shrink-0 text-[var(--accent)]" />
            <a
              href={`mailto:${SITE.email}`}
              className="text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
            >
              {SITE.email}
            </a>
          </div>

          <div className="flex items-start gap-3 text-sm">
            <Clock size={20} className="mt-0.5 shrink-0 text-[var(--accent)]" />
            <div className="text-[var(--text-primary)]">
              <p>{SCHEDULE.weekdays}</p>
              <p>{SCHEDULE.lunch}</p>
              <p>{SCHEDULE.weekends}</p>
            </div>
          </div>

          {/* Messengers */}
          <div className="mt-6 border-t border-[var(--border)] pt-6">
            <p className="text-sm font-semibold text-[var(--text-primary)]">
              Мессенджеры
            </p>
            <div className="mt-3 flex gap-3">
              <a
                href={SOCIAL.viber}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Viber"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-white transition-colors hover:border-[var(--accent)]"
              >
                <ViberIcon size={20} className="text-[var(--accent)]" />
              </a>
              <a
                href={SOCIAL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-white transition-colors hover:border-[var(--accent)]"
              >
                <WhatsAppIcon size={20} className="text-[var(--accent)]" />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-white transition-colors hover:border-[var(--accent)]"
              >
                <InstagramIcon size={20} className="text-[var(--accent)]" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Yandex Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="h-[400px] overflow-hidden rounded-xl border border-[var(--border)] lg:h-full lg:min-h-[400px]"
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?pt=30.182915,55.179106&z=16&l=map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="BIP-MOBILE на карте"
          />
        </motion.div>
      </div>

      {/* Review CTA */}
      <div className="mt-8 text-center">
        <a
          href={SOCIAL.yandexAddReview}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--accent)] transition-colors hover:underline"
        >
          Оставить отзыв на Яндекс.Картах
          <ExternalLink size={14} />
        </a>
      </div>
    </Section>
  );
}

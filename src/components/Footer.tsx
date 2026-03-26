"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE, SOCIAL, SCHEDULE, NAV_ITEMS } from "@/lib/constants";
import {
  ViberIcon,
  WhatsAppIcon,
  InstagramIcon,
} from "@/components/icons/MessengerIcons";
import { useCallback } from "react";

const MESSENGERS = [
  { href: SOCIAL.viber, label: "Viber", icon: ViberIcon },
  { href: SOCIAL.whatsapp, label: "WhatsApp", icon: WhatsAppIcon },
  { href: SOCIAL.instagram, label: "Instagram", icon: InstagramIcon },
] as const;

export function Footer() {
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  return (
    <footer className="bg-bg-dark py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <p className="text-xl font-bold text-text-on-dark">
              <span className="text-accent-main">BIP</span>-MOBILE
            </p>
            <p className="mt-3 text-sm text-text-muted">{SITE.description}</p>
            <div className="mt-4 flex items-center gap-3">
              {MESSENGERS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-text-muted transition-colors hover:text-text-on-dark"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Навигация
            </h3>
            <nav className="flex flex-col gap-2.5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm text-text-on-dark/70 transition-colors hover:text-text-on-dark"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Контакты
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-text-on-dark/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-text-muted" />
                {SITE.address}
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2 text-sm text-text-on-dark/70 transition-colors hover:text-text-on-dark"
                >
                  <Phone size={16} className="shrink-0 text-text-muted" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-sm text-text-on-dark/70 transition-colors hover:text-text-on-dark"
                >
                  <Mail size={16} className="shrink-0 text-text-muted" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-text-on-dark/70">
                <Clock size={16} className="mt-0.5 shrink-0 text-text-muted" />
                <span>
                  {SCHEDULE.weekdays}
                  <br />
                  {SCHEDULE.lunch}
                  <br />
                  {SCHEDULE.weekends}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/12 pt-8 text-center text-xs text-text-muted">
          © {new Date().getFullYear()} ИП &laquo;BIP-MOBILE&raquo;. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

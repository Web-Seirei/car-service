"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_ITEMS, SITE } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    },
    []
  );

  const scrollToBooking = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border bg-white transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-18 lg:px-8">
        <a
          href="#"
          onClick={scrollToTop}
          className="text-xl font-bold text-text-primary italic"
        >
          <span className="text-accent-main">BIP</span>-MOBILE
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-1.5 font-mono text-sm font-medium text-text-primary lg:flex"
          >
            <Phone size={16} />
            {SITE.phone}
          </a>
          <Button
            onClick={scrollToBooking}
            className="bg-accent-main text-white hover:bg-accent-hover"
          >
            Записаться на сервис
          </Button>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu size={24} />
              <span className="sr-only">Открыть меню</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="text-left text-xl font-bold">
                <span className="text-accent-main">BIP</span>-MOBILE
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col px-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="border-b border-border py-3 text-lg font-medium text-text-primary transition-colors hover:text-accent-main"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4 px-4 pb-6">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 font-mono text-sm font-medium text-text-primary"
              >
                <Phone size={16} />
                {SITE.phone}
              </a>
              <Button
                onClick={scrollToBooking}
                className="w-full bg-accent-main text-white hover:bg-accent-hover"
              >
                Записаться на сервис
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

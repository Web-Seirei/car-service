"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/Section";
import { reviews } from "@/lib/data";

export function ReviewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[var(--bg-dark)] text-[var(--text-on-dark)]"
    >
      {/* Background image */}
      <Image
        src="/images/dark-workshop.jpg"
        alt=""
        fill
        quality={75}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#1C1C1C]/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        <SectionHeader
          title="Отзывы наших клиентов"
          subtitle="Нам доверяют. Мнения реальных клиентов о работе СТО BIP-MOBILE."
          variant="dark"
        />

        {/* Carousel */}
        <div className="relative">
          {/* Navigation arrows (desktop) */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/10 bg-[var(--bg-dark-alt)] p-2 text-[var(--text-on-dark)] transition-colors hover:bg-white/10 disabled:opacity-30 lg:-left-12 lg:flex"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/10 bg-[var(--bg-dark-alt)] p-2 text-[var(--text-on-dark)] transition-colors hover:bg-white/10 disabled:opacity-30 lg:-right-12 lg:flex"
            aria-label="Следующий отзыв"
          >
            <ChevronRight size={20} />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-4 flex">
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="min-w-0 shrink-0 basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full rounded-xl border border-white/10 bg-[var(--bg-dark-alt)] p-6">
                    <span className="font-serif text-4xl leading-none text-[var(--accent)]/30">
                      &ldquo;
                    </span>

                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-on-dark)]/80">
                      {review.text}
                    </p>

                    <div className="mt-4 flex gap-1">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-[var(--text-on-dark)]">
                        {review.name}
                      </span>
                      <span className="text-xs text-[var(--text-on-dark)]/40">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                selectedIndex === index
                  ? "w-6 bg-[var(--accent)]"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Перейти к отзыву ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

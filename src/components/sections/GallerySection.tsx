"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/Section";

const GALLERY_IMAGES = [
  {
    src: "/images/car-lift.jpg",
    alt: "Автомобиль на подъёмнике в мастерской BIP-MOBILE",
  },
  {
    src: "/images/car-repair.jpg",
    alt: "Диагностика двигателя на стенде",
  },
  {
    src: "/images/instruments.jpg",
    alt: "Мастер за работой под автомобилем",
  },
] as const;

export function GallerySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="gallery" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        <SectionHeader
          title="Наша мастерская"
          subtitle="Современное оборудование и профессиональный подход к каждому автомобилю."
        />

        {/* Mobile / tablet carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="md:hidden"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-4 flex">
              {GALLERY_IMAGES.map((image) => (
                <div key={image.src} className="min-w-0 shrink-0 basis-full pl-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      quality={80}
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {GALLERY_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  selectedIndex === index
                    ? "w-6 bg-[var(--accent)]"
                    : "w-2 bg-neutral-300 hover:bg-neutral-400"
                }`}
                aria-label={`Перейти к фото ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Desktop grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="hidden h-[500px] gap-3 md:grid md:grid-cols-5 md:grid-rows-2 lg:h-[560px]"
        >
          {/* Main image — 60% width, full height */}
          <div className="relative overflow-hidden rounded-xl md:col-span-3 md:row-span-2">
            <Image
              src={GALLERY_IMAGES[0].src}
              alt={GALLERY_IMAGES[0].alt}
              fill
              quality={80}
              sizes="60vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Top right — 40% width, 50% height */}
          <div className="relative overflow-hidden rounded-xl md:col-span-2 md:row-span-1">
            <Image
              src={GALLERY_IMAGES[1].src}
              alt={GALLERY_IMAGES[1].alt}
              fill
              quality={80}
              sizes="40vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Bottom right — 40% width, 50% height */}
          <div className="relative overflow-hidden rounded-xl md:col-span-2 md:row-span-1">
            <Image
              src={GALLERY_IMAGES[2].src}
              alt={GALLERY_IMAGES[2].alt}
              fill
              quality={80}
              sizes="40vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

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
  return (
    <section id="gallery" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        <SectionHeader
          title="Наша мастерская"
          subtitle="Современное оборудование и профессиональный подход к каждому автомобилю."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="grid h-[300px] grid-cols-1 grid-rows-1 gap-3 sm:h-[400px] md:h-[500px] md:grid-cols-5 md:grid-rows-2 lg:h-[560px]"
        >
          {/* Main image — 60% width, full height */}
          <div className="relative hidden overflow-hidden rounded-xl md:col-span-3 md:row-span-2 md:block">
            <Image
              src={GALLERY_IMAGES[0].src}
              alt={GALLERY_IMAGES[0].alt}
              fill
              quality={80}
              sizes="(max-width: 768px) 100vw, 60vw"
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
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Bottom right — 40% width, 50% height */}
          <div className="relative hidden overflow-hidden rounded-xl md:col-span-2 md:row-span-1 md:block">
            <Image
              src={GALLERY_IMAGES[2].src}
              alt={GALLERY_IMAGES[2].alt}
              fill
              quality={80}
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

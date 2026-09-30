"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { photos } from "@/data/photos";
import SectionHeading from "./SectionHeading";
import Lightbox from "./Lightbox";
import { Camera, Maximize2, ArrowUpRight } from "lucide-react";

export default function PhotographySection() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  return (
    <section id="photography" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08] scroll-mt-20">
      <SectionHeading
        badge="04 // VISUAL STUDIES & EXPOSURES"
        title="PHOTOGRAPHY"
        subtitle="Sometimes I debug pixels. Sometimes I photograph them."
        description="A visual study of brutalist architectural angles, high-frequency monochrome textures, and atmospheric gradients."
        action={
          <Link
            href="/photography"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400 hover:text-white transition-colors"
          >
            <span>VIEW COMPLETE GALLERY ({photos.length} STUDIES)</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        }
      />

      {/* Editorial Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {photos.map((photo, index) => {
          // Asymmetric aspect ratio classes for editorial feel
          const isTall = photo.aspectRatio === "tall";
          const isWide = photo.aspectRatio === "wide";

          return (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(index)}
              className={`group relative overflow-hidden rounded-2xl bg-zinc-950 border border-white/[0.08] cursor-pointer transition-all duration-500 hover:border-lime-400/50 ${
                isTall
                  ? "sm:row-span-2 min-h-[460px]"
                  : isWide
                  ? "sm:col-span-2 min-h-[300px]"
                  : "min-h-[340px]"
              }`}
            >
              {/* Image */}
              <div className="relative w-full h-full min-h-[300px]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              {/* Hover Indicator Icon */}
              <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 border border-white/[0.1] text-stone-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <Maximize2 className="w-4 h-4 text-lime-400" />
              </div>

              {/* Metadata Caption (Appears smoothly on bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-lime-400 mb-1">
                  <span>{photo.category}</span>
                  <span>·</span>
                  <span>{photo.location}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white">
                  {photo.title}
                </h3>

                <p className="text-xs text-stone-300 mt-1 line-clamp-1 opacity-80 group-hover:opacity-100">
                  {photo.subtitle}
                </p>

                {/* Hover EXIF pill */}
                <div className="mt-3 pt-2 border-t border-white/[0.1] flex items-center justify-between text-[10px] font-mono text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center gap-1">
                    <Camera className="w-3 h-3 text-lime-400" />
                    {photo.exif.camera}
                  </span>
                  <span>{photo.exif.shutter} · {photo.exif.aperture}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        photos={photos}
        currentIndex={activePhotoIndex}
        onClose={() => setActivePhotoIndex(null)}
        onNavigate={(newIndex) => setActivePhotoIndex(newIndex)}
      />
    </section>
  );
}

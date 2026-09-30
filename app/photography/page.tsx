"use client";

import { useState } from "react";
import Image from "next/image";
import { photos, Photo } from "@/data/photos";
import SectionHeading from "@/components/SectionHeading";
import Lightbox from "@/components/Lightbox";
import { Camera, Maximize2, SlidersHorizontal } from "lucide-react";

export default function PhotographyPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const categories = ["All", "Architecture", "Monochrome", "Street", "Landscape", "Atmosphere"];

  const filteredPhotos =
    selectedCategory === "All"
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeading
        badge="01 // VISUAL OBSERVATIONS"
        title="PHOTOGRAPHY"
        subtitle="Sometimes I debug pixels. Sometimes I photograph them."
        description="A visual journal studying geometry, optical gradients, high-contrast monochrome tones, and brutalist forms."
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mr-2">
          <SlidersHorizontal className="w-3.5 h-3.5 text-lime-400" />
          <span>FILTER:</span>
        </div>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
              selectedCategory === cat
                ? "bg-lime-400 text-stone-950 font-bold"
                : "bg-white/[0.03] text-stone-400 hover:text-stone-200 hover:bg-white/[0.06] border border-white/[0.06]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Editorial Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPhotos.map((photo, index) => {
          const isTall = photo.aspectRatio === "tall";
          const isWide = photo.aspectRatio === "wide";

          return (
            <div
              key={photo.id}
              onClick={() => {
                // Find index in master photos array for lightbox navigation
                const masterIndex = photos.findIndex((p) => p.id === photo.id);
                setActivePhotoIndex(masterIndex !== -1 ? masterIndex : index);
              }}
              className={`group relative overflow-hidden rounded-2xl bg-zinc-950 border border-white/[0.08] cursor-pointer transition-all duration-500 hover:border-lime-400/50 ${
                isTall
                  ? "sm:row-span-2 min-h-[480px]"
                  : isWide
                  ? "sm:col-span-2 min-h-[320px]"
                  : "min-h-[360px]"
              }`}
            >
              <div className="relative w-full h-full min-h-[320px]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 border border-white/[0.1] text-stone-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <Maximize2 className="w-4 h-4 text-lime-400" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-lime-400 mb-1">
                  <span>{photo.category}</span>
                  <span>·</span>
                  <span>{photo.location}</span>
                </div>

                <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                  {photo.title}
                </h3>

                <p className="text-xs text-stone-300 mt-1 line-clamp-1">
                  {photo.subtitle}
                </p>

                <div className="mt-3 pt-2 border-t border-white/[0.1] flex items-center justify-between text-[11px] font-mono text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center gap-1">
                    <Camera className="w-3 h-3 text-lime-400" />
                    {photo.exif.camera}
                  </span>
                  <span>{photo.exif.shutter} @ {photo.exif.aperture}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Lightbox
        photos={photos}
        currentIndex={activePhotoIndex}
        onClose={() => setActivePhotoIndex(null)}
        onNavigate={(newIdx) => setActivePhotoIndex(newIdx)}
      />
    </div>
  );
}

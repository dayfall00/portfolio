"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Calendar, Info } from "lucide-react";
import { Photo } from "@/data/photos";

interface LightboxProps {
  photos: Photo[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = currentIndex !== null;
  const currentPhoto = currentIndex !== null ? photos[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const newIdx = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(newIdx);
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const newIdx = (currentIndex + 1) % photos.length;
    onNavigate(newIdx);
  }, [currentIndex, photos.length, onNavigate]);

  // Keyboard navigation & Esc listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 select-none"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between z-10 border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-lime-400 font-bold tracking-widest uppercase">
              GALLERY // {String(currentIndex + 1).padStart(2, "0")} OF {String(photos.length).padStart(2, "0")}
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-stone-500 uppercase">
              {currentPhoto.category}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block text-[11px] font-mono text-stone-500">
              USE [←] [→] KEYS TO NAVIGATE · [ESC] TO CLOSE
            </span>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-stone-300 hover:text-white hover:bg-white/[0.1] transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5 text-lime-400" />
            </button>
          </div>
        </div>

        {/* Center Viewing Stage */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/60 border border-white/[0.15] text-stone-300 hover:text-lime-400 hover:border-lime-400/50 transition-all backdrop-blur-sm"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Active Image */}
          <motion.div
            key={currentPhoto.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl max-h-[68vh] w-full h-full flex items-center justify-center"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/60 border border-white/[0.15] text-stone-300 hover:text-lime-400 hover:border-lime-400/50 transition-all backdrop-blur-sm"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom EXIF & Narrative Panel */}
        <div className="z-10 bg-zinc-950/80 border border-white/[0.08] rounded-2xl p-4 sm:p-6 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Title & Location */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-stone-100">
                {currentPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 mt-0.5">
                {currentPhoto.subtitle}
              </p>
              <div className="flex items-center gap-3 mt-2 text-xs font-mono text-stone-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-lime-400" />
                  {currentPhoto.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {currentPhoto.year}
                </span>
              </div>
            </div>

            {/* Narrative Story */}
            <div className="border-t md:border-t-0 md:border-l border-white/[0.08] pt-3 md:pt-0 md:pl-6">
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500 flex items-center gap-1.5 mb-1">
                <Info className="w-3 h-3 text-lime-400" />
                ARTISTIC RATIONALE
              </span>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                &quot;{currentPhoto.story}&quot;
              </p>
            </div>

            {/* EXIF Data */}
            <div className="border-t md:border-t-0 md:border-l border-white/[0.08] pt-3 md:pt-0 md:pl-6 font-mono text-xs text-stone-400 space-y-1">
              <div className="flex items-center gap-1.5 text-stone-200">
                <Camera className="w-3.5 h-3.5 text-lime-400" />
                <span>{currentPhoto.exif.camera} · {currentPhoto.exif.lens}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] text-stone-400">
                <div>
                  <span className="text-stone-600 block text-[9px]">FOCAL</span>
                  {currentPhoto.exif.focalLength}
                </div>
                <div>
                  <span className="text-stone-600 block text-[9px]">EXPOSURE</span>
                  {currentPhoto.exif.shutter} @ {currentPhoto.exif.aperture}
                </div>
                <div>
                  <span className="text-stone-600 block text-[9px]">SENSITIVITY</span>
                  ISO {currentPhoto.exif.iso}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImageCarousel({
  images = [],
  interval = 3000, // ms
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    const id = setInterval(() => setI((p) => (p + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  if (!images.length) return null;

  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] overflow-hidden rounded-xl shadow">
      {/* Slides */}
      {images.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={src} alt="" fill priority={idx === 0} className="object-cover" />
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2.5 w-2.5 rounded-full border border-white/70 ${
              idx === i ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

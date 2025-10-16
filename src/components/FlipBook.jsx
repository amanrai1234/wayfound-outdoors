"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

export default function FlipBook({ images = [], interval = 2500 }) {
  const pages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (!pages.length) return;
    const id = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setIndex((p) => (p + 1) % pages.length);
        setFlipping(false);
      }, 500);
    }, interval);
    return () => clearInterval(id);
  }, [pages.length, interval]);

  if (!pages.length) return null;

  const leftSrc = pages[index];
  const rightSrc = pages[(index + 1) % pages.length];
  const nextLeftSrc = pages[(index + 2) % pages.length];

  return (
    <div className="relative w-full max-w-5xl aspect-[16/9] select-none transition-transform duration-500 ease-out hover:rotate-[-1.5deg]">
      {/* Floor shadow to simulate a book resting on a surface */}
      <div className="absolute -bottom-4 right-10 h-8 w-2/3 blur-lg bg-black/30 rounded-full opacity-40" />

      <div className="absolute inset-0 perspective-[1400px]">
        {/* Book container with slight rotation and offset, textured cover outline */}
        <div className="absolute inset-y-2 right-0 left-8 grid grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.45)] border border-black/20 rotate-[1.5deg] translate-x-2 bg-transparent">
          {/* Left static page */}
          <div className="relative">
            <Image src={leftSrc} alt="" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,transparent_60%)]" />
            {/* Inner gutter shadow */}
            <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-l from-black/10 to-transparent" />
          </div>

          {/* Right flipping page */}
          <div className="relative [transform-style:preserve-3d]">
            <div
              className={`absolute inset-0 origin-left [backface-visibility:hidden] transition-transform duration-500 ease-out shadow-[10px_0_35px_-15px_rgba(0,0,0,0.6)] ${
                flipping ? "-rotate-y-180" : "rotate-y-0"
              }`}
            >
              <Image src={rightSrc} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,transparent_60%)]" />
              <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/10 to-transparent" />
            </div>
            {/* Page backside (shows next left page while flipping) */}
            <div
              className={`absolute inset-0 origin-left [backface-visibility:hidden] rotate-y-180 transition-transform duration-500 ease-out shadow-[10px_0_35px_-15px_rgba(0,0,0,0.6)] ${
                flipping ? "rotate-y-0" : "rotate-y-180"
              }`}
            >
              <Image src={nextLeftSrc} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,transparent_60%)]" />
              <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-l from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



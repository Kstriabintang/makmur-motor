"use client";

import Image from "next/image";
import { useState } from "react";
import { Car as CarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarImageProps {
  photos: string[];
  index?: number;
  alt: string;
  gradient?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
}

const DEFAULT_GRADIENT = "from-slate-700 via-slate-800 to-slate-900";

/**
 * Renders a car photo with Next/Image when one exists, otherwise a
 * branded gradient placeholder with a car icon. Also falls back to the
 * placeholder if the image fails to load at runtime.
 */
export function CarImage({
  photos,
  index = 0,
  alt,
  gradient = DEFAULT_GRADIENT,
  className,
  imgClassName,
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
}: CarImageProps) {
  const src = photos[index];
  const [errored, setErrored] = useState(false);
  const showPlaceholder = !src || errored;

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {showPlaceholder ? (
        <div
          className={cn(
            "flex h-full w-full items-center justify-center bg-gradient-to-br",
            gradient
          )}
        >
          <div className="flex flex-col items-center gap-2 text-white/70">
            <CarIcon className="h-12 w-12" strokeWidth={1.25} />
            <span className="text-[11px] font-medium uppercase tracking-widest">
              Foto Segera Hadir
            </span>
          </div>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setErrored(true)}
          className={cn("object-cover", imgClassName)}
        />
      )}
    </div>
  );
}

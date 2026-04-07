"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

export function FadeInImage({
  className = "",
  alt,
  ...props
}: ImageProps & { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      alt={alt}
      className={`transition-all duration-700 ease-out ${
        loaded ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
      } ${className}`}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
}

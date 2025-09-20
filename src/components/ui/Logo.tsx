"use client";
import Image from 'next/image';
import { org } from '@/data/config';
import { useState } from 'react';

type Props = {
  width?: number;
  alt?: string;
  className?: string;
  priority?: boolean;
};

export default function Logo({ width = 28, alt = 'Space Kings', className, priority }: Props) {
  // Intenta el logo principal (PNG) y cae al fallback si falla
  const [src, setSrc] = useState<string>(org.logo || '/logo.png');
  const height = Math.round(width);
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={`${width}px`}
      priority={priority}
      className={className}
      style={{ height: 'auto' }}
      onError={() => {
        if (src !== (org.logoFallback || '/logo.svg')) setSrc(org.logoFallback || '/logo.svg');
      }}
    />
  );
}

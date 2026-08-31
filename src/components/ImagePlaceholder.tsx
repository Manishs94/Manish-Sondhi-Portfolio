import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  /** Exact filename to export from Figma, e.g. "frame-01-overview.png" */
  filename: string;
  caption?: string;
  aspect?: 'video' | 'square' | 'wide';
}

const aspectClasses: Record<NonNullable<ImagePlaceholderProps['aspect']>, string> = {
  video: 'aspect-video',
  square: 'aspect-square',
  wide: 'aspect-[16/10]',
};

/**
 * Renders the real exported image when present under /case-studies/{filename};
 * falls back to a labeled placeholder box (showing the exact expected filename)
 * when the file hasn't been exported yet.
 */
const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ filename, caption, aspect = 'video' }) => {
  const [imageMissing, setImageMissing] = useState(false);
  const src = filename.startsWith('http') ? filename : `/case-studies/${filename}`;

  if (!imageMissing) {
    return (
      <div className={`${aspectClasses[aspect]} rounded-2xl overflow-hidden bg-portfolio-bg-light`}>
        <img
          src={src}
          alt={caption ?? filename}
          className="w-full h-full object-cover"
          onError={() => setImageMissing(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`${aspectClasses[aspect]} rounded-2xl border-2 border-dashed border-portfolio-accent/30 bg-portfolio-bg-light flex flex-col items-center justify-center gap-2 p-6 transition-all duration-300 hover:border-portfolio-accent/60`}
    >
      <ImageIcon className="w-6 h-6 text-portfolio-accent/60" />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-accent">
        Export Needed
      </p>
      <p className="text-sm font-medium text-portfolio-text-dark text-center font-mono">{filename}</p>
      {caption && (
        <p className="text-xs text-portfolio-text-light mt-1 max-w-xs text-center">{caption}</p>
      )}
    </div>
  );
};

export default ImagePlaceholder;

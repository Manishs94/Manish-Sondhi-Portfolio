import React, { useEffect, useRef, useState } from 'react';

const DURATION_MS = 1200;

// Counts up to a metric such as "1,798", "42%" or "60+" the first time it scrolls into view.
// Values with no leading number render as-is. Screen readers get the final value only.
const CountUp: React.FC<{ value: string }> = ({ value }) => {
  const match = value.match(/^(\D*)(\d[\d,]*(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[2].replace(/,/g, '')) : NaN;
  const decimals = match ? (match[2].split('.')[1]?.length ?? 0) : 0;
  const grouped = match ? match[2].includes(',') : false;

  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match || Number.isNaN(target)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const format = (n: number) =>
      `${match[1]}${n.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        useGrouping: grouped,
      })}${match[3]}`;

    setShown(format(0));
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION_MS, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(t < 1 ? format(target * eased) : value);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden="true">{shown}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
};

export default CountUp;

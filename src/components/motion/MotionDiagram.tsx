import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

// Shared kit for the case-study motion diagrams: an SVG canvas 480 units wide (320 on phones,
// where each diagram supplies a stacked layout) that plays a timed sequence once it scrolls
// into view, with a Replay button. Every element takes `at`
// (seconds) for when it enters; elements without `at` are static. With reduced motion the
// diagram renders directly in its final state.

const styles = `
.pm-root .pm-in, .pm-root .pm-pop, .pm-root .pm-grow, .pm-root .pm-stat, .pm-root .pm-blip { opacity: 0; }
.pm-root .pm-edge { stroke-dasharray: 1; stroke-dashoffset: 1; }
.pm-root .pm-pop { transform-box: fill-box; transform-origin: center; }
.pm-root .pm-grow { transform-box: fill-box; transform-origin: left center; }

.pm-root.pm-play .pm-in, .pm-root.pm-play .pm-stat { animation: pm-fade-up 0.5s ease-out forwards; }
.pm-root.pm-play .pm-edge { animation: pm-draw 0.8s ease-in-out forwards; }
.pm-root.pm-play .pm-pop { animation: pm-pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
.pm-root.pm-play .pm-grow { animation: pm-grow 0.7s ease-out forwards; }
.pm-root.pm-play .pm-gone { animation: pm-gone 0.3s ease-in forwards; }
.pm-root.pm-play .pm-blip { animation: pm-fade-up 0.4s ease-out forwards, pm-gone 0.3s ease-in forwards; }
.pm-root.pm-play .pm-pulse { animation: pm-pulse 1.2s ease-in-out 2; }

@keyframes pm-fade-up { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
@keyframes pm-draw { to { stroke-dashoffset: 0; } }
@keyframes pm-pop { from { opacity: 0; transform: scale(0.85); } to { opacity: 1; transform: none; } }
@keyframes pm-grow { from { opacity: 1; transform: scaleX(0); } to { opacity: 1; transform: none; } }
@keyframes pm-gone { to { opacity: 0; } }
@keyframes pm-pulse { 50% { stroke-width: 3; } }

@media (prefers-reduced-motion: reduce) {
  .pm-root .pm-in, .pm-root .pm-pop, .pm-root .pm-grow, .pm-root .pm-stat { opacity: 1; animation: none !important; }
  .pm-root .pm-edge { stroke-dashoffset: 0; animation: none !important; }
  .pm-root .pm-gone, .pm-root .pm-blip { opacity: 0; animation: none !important; }
  .pm-root .pm-pulse { animation: none !important; }
}
`;

export const C = {
  accent: '#4169E1',
  dark: '#1A1A1A',
  light: '#666666',
  fill: '#F9F9F9',
  border: '#E5E7EB',
  warn: '#D97706',
  warnText: '#B45309',
  warnFill: '#FFFBEB',
  muted: '#CBD5E1',
};

export type Tone = 'default' | 'accent' | 'warn';

const delay = (...s: number[]): React.CSSProperties => ({ animationDelay: s.map((n) => `${n}s`).join(', ') });

const anim = (cls: string, at?: number) =>
  at === undefined ? {} : { className: cls, style: delay(at) };

const boxTone = (tone: Tone) =>
  tone === 'accent'
    ? { fill: '#FFFFFF', stroke: C.accent, strokeWidth: 1.5, eyebrow: C.accent }
    : tone === 'warn'
      ? { fill: C.warnFill, stroke: C.warn, strokeWidth: 1.5, eyebrow: C.warnText }
      : { fill: C.fill, stroke: C.border, strokeWidth: 1, eyebrow: C.accent };

/** Wraps children so they enter at `at` and, with `until`, leave again. */
export const Show: React.FC<{ at: number; until?: number; children: React.ReactNode }> = ({ at, until, children }) =>
  until === undefined ? (
    <g className="pm-in" style={delay(at)}>
      {children}
    </g>
  ) : (
    <g className="pm-blip" style={delay(at, until)}>
      {children}
    </g>
  );

export const Box: React.FC<{
  x: number;
  y: number;
  w: number;
  eyebrow: string;
  title: string;
  detail?: string;
  /** Replace the detail line (and optionally the tone) at a later time. */
  next?: { detail: string; at: number; tone?: Tone };
  tone?: Tone;
  size?: 'md' | 'sm';
  pop?: boolean;
  pulseAt?: number;
  at?: number;
}> = ({ x, y, w, eyebrow, title, detail, next, tone = 'default', size = 'md', pop, pulseAt, at }) => {
  const t = boxTone(tone);
  const sm = size === 'sm';
  const h = sm ? 64 : 80;
  const pad = sm ? 14 : 16;
  const detailY = y + (sm ? 54 : 67);
  const detailSize = sm ? 12 : 13;
  const nt = next?.tone ? boxTone(next.tone) : null;
  return (
    <g {...anim(pop ? 'pm-pop' : 'pm-in', at)}>
      <rect x={x} y={y} width={w} height={h} rx={sm ? 10 : 12} fill={t.fill} stroke={t.stroke} strokeWidth={t.strokeWidth} />
      {nt && (
        <rect className="pm-in" style={delay(next!.at)} x={x} y={y} width={w} height={h} rx={sm ? 10 : 12} fill={nt.fill} stroke={nt.stroke} strokeWidth={nt.strokeWidth} />
      )}
      {pulseAt !== undefined && (
        <rect className="pm-pulse" style={delay(pulseAt)} x={x} y={y} width={w} height={h} rx={sm ? 10 : 12} fill="none" stroke={nt?.stroke ?? t.stroke} strokeWidth={1.5} />
      )}
      <text x={x + pad} y={y + (sm ? 20 : 24)} fontSize={sm ? 10 : 11} fontWeight={600} letterSpacing={1.5} fill={nt?.eyebrow ?? t.eyebrow}>
        {eyebrow}
      </text>
      <text x={x + pad} y={y + (sm ? 38 : 47)} fontSize={sm ? 14 : 17} fontWeight={700} fill={C.dark}>
        {title}
      </text>
      {detail && !next && (
        <text x={x + pad} y={detailY} fontSize={detailSize} fill={C.light}>
          {detail}
        </text>
      )}
      {detail && next && (
        <>
          <g className="pm-gone" style={delay(next.at)}>
            <text x={x + pad} y={detailY} fontSize={detailSize} fill={C.light}>
              {detail}
            </text>
          </g>
          <g className="pm-in" style={delay(next.at)}>
            <text x={x + pad} y={detailY} fontSize={detailSize} fontWeight={600} fill={next.tone === 'warn' ? C.warnText : C.accent}>
              {next.detail}
            </text>
          </g>
        </>
      )}
    </g>
  );
};

export const Pill: React.FC<{
  x: number;
  y: number;
  w: number;
  h?: number;
  label: string;
  tone?: Tone | 'solid' | 'outline';
  fontSize?: number;
  at?: number;
}> = ({ x, y, w, h = 36, label, tone = 'default', fontSize = 13, at }) => {
  const s =
    tone === 'solid'
      ? { fill: C.accent, stroke: C.accent, text: '#FFFFFF' }
      : tone === 'accent' || tone === 'outline'
        ? { fill: '#FFFFFF', stroke: C.accent, text: C.accent }
        : tone === 'warn'
          ? { fill: C.warnFill, stroke: C.warn, text: C.warnText }
          : { fill: C.fill, stroke: C.border, text: C.dark };
  return (
    <g {...anim('pm-pop', at)}>
      <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={s.fill} stroke={s.stroke} strokeWidth={1.25} />
      <text x={x + w / 2} y={y + h / 2 + fontSize * 0.36} textAnchor="middle" fontSize={fontSize} fontWeight={600} fill={s.text}>
        {label}
      </text>
    </g>
  );
};

export const Row: React.FC<{
  x: number;
  y: number;
  w: number;
  h?: number;
  label: string;
  value: string;
  tone?: Tone;
  next?: { value: string; at: number; tone?: Tone };
  fontSize?: number;
  at?: number;
}> = ({ x, y, w, h = 44, label, value, tone = 'default', next, fontSize = 13, at }) => {
  const t = tone === 'default' ? { fill: '#FFFFFF', stroke: C.border, strokeWidth: 1, eyebrow: C.accent } : boxTone(tone);
  const nt = next?.tone ? boxTone(next.tone) : null;
  const ty = y + h / 2 + 5;
  const valueFill = (tn?: Tone) => (tn === 'warn' ? C.warnText : tn === 'accent' ? C.accent : C.light);
  return (
    <g {...anim('pm-in', at)}>
      <rect x={x} y={y} width={w} height={h} rx={8} fill={t.fill} stroke={t.stroke} strokeWidth={t.strokeWidth} />
      {nt && (
        <rect className="pm-in" style={delay(next!.at)} x={x} y={y} width={w} height={h} rx={8} fill={nt.fill} stroke={nt.stroke} strokeWidth={nt.strokeWidth} />
      )}
      <text x={x + 14} y={ty} fontSize={fontSize} fontWeight={600} fill={C.dark}>
        {label}
      </text>
      {next ? (
        <>
          <g className="pm-gone" style={delay(next.at)}>
            <text x={x + w - 14} y={ty} textAnchor="end" fontSize={fontSize} fill={valueFill(tone)}>
              {value}
            </text>
          </g>
          <g className="pm-in" style={delay(next.at)}>
            <text x={x + w - 14} y={ty} textAnchor="end" fontSize={fontSize} fontWeight={600} fill={valueFill(next.tone ?? 'accent')}>
              {next.value}
            </text>
          </g>
        </>
      ) : (
        <text x={x + w - 14} y={ty} textAnchor="end" fontSize={fontSize} fill={valueFill(tone)}>
          {value}
        </text>
      )}
    </g>
  );
};

export const Edge: React.FC<{
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  at?: number;
  tone?: 'accent' | 'muted' | 'warn';
  width?: number;
  dashed?: boolean;
}> = ({ x1, y1, x2, y2, at, tone = 'accent', width = 2, dashed }) => {
  const stroke = tone === 'muted' ? C.muted : tone === 'warn' ? C.warn : C.accent;
  // A dashed edge fades in instead of drawing, since the draw effect uses the dash pattern.
  if (dashed) {
    return (
      <g {...anim('pm-in', at)}>
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth={width} strokeDasharray="5 5" />
      </g>
    );
  }
  return (
    <line
      {...(at === undefined ? {} : { className: 'pm-edge', style: delay(at) })}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      pathLength={1}
      stroke={stroke}
      strokeWidth={width}
      strokeLinecap="round"
    />
  );
};

export const Bar: React.FC<{ x: number; y: number; w: number; h: number; tone?: 'accent' | 'warn' | 'muted'; at?: number }> = ({
  x,
  y,
  w,
  h,
  tone = 'accent',
  at,
}) => (
  <rect
    {...anim('pm-grow', at)}
    x={x}
    y={y}
    width={w}
    height={h}
    rx={4}
    fill={tone === 'warn' ? '#F59E0B' : tone === 'muted' ? C.muted : C.accent}
  />
);

export const Label: React.FC<{
  x: number;
  y: number;
  children: React.ReactNode;
  size?: number;
  weight?: number;
  fill?: string;
  anchor?: 'start' | 'middle' | 'end';
  spacing?: number;
  at?: number;
}> = ({ x, y, children, size = 13, weight = 400, fill = C.light, anchor = 'start', spacing, at }) => (
  <g {...anim('pm-in', at)}>
    <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor} letterSpacing={spacing}>
      {children}
    </text>
  </g>
);

export interface DiagramStat {
  label: string;
  value: string;
}

const Stats: React.FC<{ stats: DiagramStat[]; at: number; className: string }> = ({ stats, at, className }) => (
  <div className={`grid gap-3 ${stats.length === 4 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-3'} ${className}`}>
    {stats.map((s, i) => (
      <div key={s.label} className="pm-stat rounded-lg bg-portfolio-bg-light p-3 text-center" style={delay(at + i * 0.15)}>
        <p className="text-[10px] sm:text-[11px] uppercase tracking-wide sm:tracking-wider text-portfolio-text-light">{s.label}</p>
        <p className="text-base sm:text-lg font-semibold text-portfolio-text-dark mt-1">{s.value}</p>
      </div>
    ))}
  </div>
);

export const NARROW_WIDTH = 320;

const MotionDiagram: React.FC<{
  height: number;
  /** Height of the 320-wide phone layout; children receive `narrow` to draw it. */
  narrowHeight: number;
  /** Full text alternative for screen readers: what the finished diagram shows. */
  label: string;
  caption: React.ReactNode;
  stats?: DiagramStat[];
  statsAt?: number;
  statsPosition?: 'top' | 'bottom';
  children: (narrow: boolean) => React.ReactNode;
}> = ({ height, narrowHeight, label, caption, stats, statsAt = 0, statsPosition = 'bottom', children }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.35 });
  const [run, setRun] = useState(0);
  const narrow = useIsMobile();

  return (
    <div ref={ref}>
      <style>{styles}</style>
      <div key={run} className={`pm-root ${isVisible ? 'pm-play' : ''}`}>
        {stats && statsPosition === 'top' && <Stats stats={stats} at={statsAt} className="mb-6" />}
        <svg
          viewBox={narrow ? `0 0 ${NARROW_WIDTH} ${narrowHeight}` : `0 0 480 ${height}`}
          className={`w-full h-auto mx-auto block ${narrow ? 'max-w-sm' : 'max-w-xl'}`}
          role="img"
          aria-label={label}
        >
          {children(narrow)}
        </svg>
        {stats && statsPosition === 'bottom' && <Stats stats={stats} at={statsAt} className="mt-6" />}
      </div>

      <div className="flex items-start justify-between gap-4 mt-4">
        <p className="text-xs text-portfolio-text-light italic">{caption}</p>
        <button
          type="button"
          onClick={() => setRun((r) => r + 1)}
          className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-portfolio-accent hover:underline"
        >
          <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
          Replay
        </button>
      </div>
    </div>
  );
};

export default MotionDiagram;

import React from 'react';
import MotionDiagram, { Bar, C, Show } from './MotionDiagram';

// Gross-to-available waterfall: every dollar removed is a visible, labelled row.
const GROSS = 5_000_000;
const CAP = 3_500_000;

const rows: {
  label: string;
  value: string;
  bar?: { from: number; amount: number; tone: 'accent' | 'warn' | 'muted' };
  strong?: boolean;
}[] = [
  { label: 'Gross AR', value: '$5,000,000', bar: { from: 0, amount: GROSS, tone: 'muted' } },
  { label: 'Ineligible AR', value: '−$600,000 · Over 90 Days', bar: { from: 4_400_000, amount: 600_000, tone: 'warn' } },
  { label: 'Reserves', value: '−$200,000', bar: { from: 4_200_000, amount: 200_000, tone: 'warn' } },
  { label: 'Eligible AR', value: '$4,200,000', bar: { from: 0, amount: 4_200_000, tone: 'accent' } },
  { label: '× Advance Rate 85%', value: '$3,570,000', bar: { from: 0, amount: 3_570_000, tone: 'accent' } },
  { label: 'Sublimit / Cap', value: '$3,500,000 · trims $70,000' },
  { label: 'Available for Advance', value: '$3,500,000', bar: { from: 0, amount: CAP, tone: 'accent' }, strong: true },
];

const at = (i: number) => 0.2 + i * 0.6;

const BorrowingBaseDiagram: React.FC = () => (
  <MotionDiagram
    height={336}
    narrowHeight={372}
    label="Borrowing base waterfall: gross AR $5,000,000, less $600,000 ineligible over 90 days and $200,000 reserves, gives eligible AR of $4,200,000. At an 85% advance rate that is $3,570,000, capped by a $3,500,000 sublimit, so $3,500,000 is available for advance."
    stats={[
      { label: 'Reported', value: '$5.0M' },
      { label: 'Removed, Itemized', value: '$1.5M' },
      { label: 'Available', value: '$3.5M' },
    ]}
    statsAt={4.6}
    caption="Every step from what the borrower reported to what can be advanced is a visible row, so an officer can show an examiner where each dollar went. Illustrative sample data."
  >
    {(narrow) => {
      // Desktop: labels on the left, bars on the right. Phone: label and value on one line, bar beneath.
      const g = narrow
        ? { x0: 16, span: 288, step: 50, barDy: 26, barH: 14 }
        : { x0: 200, span: 264, step: 44, barDy: 10, barH: 20 };
      const px = (n: number) => (n / GROSS) * g.span;
      const capX = g.x0 + px(CAP);
      const rowY = (i: number) => 16 + i * g.step;
      return (
        <>
          {rows.map((r, i) => {
            const y = rowY(i);
            const labelFill = r.strong ? C.accent : C.dark;
            const valueFill = r.bar?.tone === 'warn' ? C.warnText : C.light;
            return (
              <g key={r.label}>
                <Show at={at(i)}>
                  <text x={16} y={y + (narrow ? 16 : 18)} fontSize={13} fontWeight={r.strong ? 700 : 600} fill={labelFill}>
                    {r.label}
                  </text>
                  <text
                    x={narrow ? 304 : 16}
                    y={y + (narrow ? 16 : 34)}
                    fontSize={12}
                    fill={valueFill}
                    textAnchor={narrow ? 'end' : 'start'}
                  >
                    {r.value}
                  </text>
                </Show>
                {r.bar && <Bar x={g.x0 + px(r.bar.from)} y={y + g.barDy} w={px(r.bar.amount)} h={g.barH} tone={r.bar.tone} at={at(i) + 0.1} />}
              </g>
            );
          })}
          <Show at={at(5)}>
            <line
              x1={capX}
              y1={rowY(5) + (narrow ? 22 : -4)}
              x2={capX}
              y2={rowY(7) - 6}
              stroke={C.warn}
              strokeWidth={2}
              strokeDasharray="4 4"
            />
            <text x={capX - 6} y={rowY(5) + (narrow ? 38 : 24)} fontSize={11} fontWeight={600} fill={C.warnText} textAnchor="end">
              cap
            </text>
          </Show>
        </>
      );
    }}
  </MotionDiagram>
);

export default BorrowingBaseDiagram;

import React from 'react';
import MotionDiagram, { Box, C, Edge, Pill, Show } from './MotionDiagram';

// Two independent services with their own lifecycles, joined only by an explicit pledge/link.
const modules = [
  { name: 'COLLATERAL SERVICE', short: 'COLLATERAL', steps: ['Created', 'Appraised', 'Priced'] },
  { name: 'LOAN SERVICE', short: 'LOANS', steps: ['Application', 'Underwriting', 'Booked'] },
];

const CollateralPlatformDiagram: React.FC = () => (
  <MotionDiagram
    height={420}
    narrowHeight={420}
    label="Admin policy and taxonomy feed two independent services. The collateral service moves a record through created, appraised, and priced; the loan service moves a loan through application, underwriting, and booked. The two connect only through an explicit pledge or link."
    stats={[
      { label: 'Categories', value: '11' },
      { label: 'Collateral Types', value: '1,798' },
      { label: 'Sub-Types', value: '2,344' },
    ]}
    statsAt={3.4}
    caption="Collateral and loans keep separate lifecycles and connect only through an explicit pledge or link; both read policy set once in Admin. Lifecycle steps simplified; taxonomy counts are from production."
  >
    {(narrow) => {
      const g = narrow
        ? { modX: [16, 164], modW: 140, pad: 14, cx: 160, adminW: 240 }
        : { modX: [16, 264], modW: 200, pad: 16, cx: 240, adminW: 240 };
      const modCx = (mi: number) => g.modX[mi] + g.modW / 2;
      return (
        <>
          <Edge x1={g.cx - 40} y1={80} x2={modCx(0)} y2={128} at={0.6} />
          <Edge x1={g.cx + 40} y1={80} x2={modCx(1)} y2={128} at={0.7} />
          <Edge x1={modCx(0)} y1={328} x2={g.cx - 44} y2={360} at={2.4} />
          <Edge x1={modCx(1)} y1={328} x2={g.cx + 44} y2={360} at={2.4} />

          <Box x={g.cx - g.adminW / 2} y={16} w={g.adminW} size="sm" eyebrow="ADMIN" title="Policy & taxonomy" detail="Advance rates, eligibility" at={0} />
          {modules.map((m, mi) => (
            <g key={m.name}>
              <Show at={0.3}>
                <rect x={g.modX[mi]} y={128} width={g.modW} height={200} rx={14} fill={C.fill} stroke={C.border} />
                <text x={g.modX[mi] + g.pad} y={152} fontSize={11} fontWeight={600} letterSpacing={1.5} fill={C.accent}>
                  {narrow ? m.short : m.name}
                </text>
              </Show>
              {m.steps.map((s, i) => (
                <Pill
                  key={s}
                  x={g.modX[mi] + g.pad}
                  y={168 + i * 46}
                  w={g.modW - g.pad * 2}
                  h={34}
                  label={s}
                  fontSize={narrow ? 12 : 13}
                  at={1.0 + i * 0.3 + mi * 0.15}
                />
              ))}
            </g>
          ))}
          <Pill x={g.cx - 80} y={360} w={160} h={44} label="Pledge / Link" tone="solid" at={2.8} />
        </>
      );
    }}
  </MotionDiagram>
);

export default CollateralPlatformDiagram;

import React from 'react';
import MotionDiagram, { Box, C, Edge, Pill, Show } from './MotionDiagram';

// The serial number is checked as it is typed; a match links the existing record and fills the form.
const typing = [
  { text: '1RW8', at: 0.6, until: 1.2 },
  { text: '1RW8370R', at: 1.2, until: 1.8 },
  { text: '1RW8370RPA012345', at: 1.8 },
];
const fields = [
  { label: 'Year', value: '2023' },
  { label: 'Make', value: 'John Deere' },
  { label: 'Model', value: '8R 370' },
];

const EquipmentSerialDiagram: React.FC = () => (
  <MotionDiagram
    height={316}
    narrowHeight={448}
    label="An analyst types a serial number on the Add Equipment form. As it is typed, the system finds existing collateral record COL-48213, a 2023 John Deere 8R 370, links to it, and fills year, make, and model instead of creating a duplicate."
    stats={[
      { label: 'Identity Key', value: 'Serial' },
      { label: 'Checked', value: 'As you type' },
      { label: 'Duplicates', value: '0' },
    ]}
    statsAt={4.6}
    caption="The serial number is checked against existing collateral while the analyst types; a match links to that record and fills the form instead of creating a second one. Illustrative sample data."
  >
    {(narrow) => {
      // Desktop: the matched record sits beside the form. Phone: it stacks beneath.
      const formW = narrow ? 288 : 250;
      const inputW = formW - 32;
      const rec = narrow ? { x: 16, y: 316, w: 288 } : { x: 290, y: 40, w: 174 };
      const linked = narrow ? { x: 16, y: 396 } : { x: 290, y: 120 };
      return (
        <>
          <Show at={0}>
            <rect x={16} y={16} width={formW} height={284} rx={12} fill="#FFFFFF" stroke={C.border} />
            <text x={32} y={40} fontSize={11} fontWeight={600} letterSpacing={1.5} fill={C.accent}>
              ADD EQUIPMENT
            </text>
            <text x={32} y={64} fontSize={11} fill={C.light}>
              Serial Number *
            </text>
            <rect x={32} y={72} width={inputW} height={36} rx={8} fill={C.fill} stroke={C.accent} strokeWidth={1.25} />
          </Show>
          {typing.map((t) => (
            <Show key={t.text} at={t.at} until={t.until}>
              <text x={44} y={95} fontSize={13} fontWeight={600} fill={C.dark}>
                {t.text}
              </text>
            </Show>
          ))}
          <Show at={2.0} until={2.9}>
            <text x={32} y={126} fontSize={11} fill={C.light}>
              Checking existing collateral…
            </text>
          </Show>
          <Show at={3.0}>
            <text x={32} y={126} fontSize={11} fontWeight={600} fill={C.accent}>
              ✓ Match found · record linked
            </text>
          </Show>

          {fields.map((f, i) => (
            <g key={f.label}>
              <Show at={0.2}>
                <text x={32} y={156 + i * 48} fontSize={11} fill={C.light}>
                  {f.label}
                </text>
                <rect x={32} y={163 + i * 48} width={inputW} height={28} rx={6} fill={C.fill} stroke={C.border} />
              </Show>
              <Show at={3.8 + i * 0.15}>
                <text x={44} y={182 + i * 48} fontSize={12} fill={C.dark}>
                  {f.value}
                </text>
              </Show>
            </g>
          ))}

          {narrow ? (
            <Edge x1={160} y1={300} x2={160} y2={316} at={2.3} />
          ) : (
            <Edge x1={250} y1={90} x2={290} y2={72} at={2.3} />
          )}
          <Box {...rec} size="sm" tone="accent" pop eyebrow="EXISTING RECORD" title="COL-48213" detail="2023 John Deere 8R 370" at={2.6} />
          <Pill {...linked} w={rec.w} h={36} label="Collateral linked" tone="solid" fontSize={12} at={3.2} />
        </>
      );
    }}
  </MotionDiagram>
);

export default EquipmentSerialDiagram;

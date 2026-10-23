import React from 'react';
import MotionDiagram, { C, Label, Pill, Show } from './MotionDiagram';

// Selecting a sub-type swaps the information component: each asks only its own questions.
const subTypes = [
  {
    name: 'Livestock',
    fields: [
      ['Breed', 'Angus'],
      ['Animal Purpose', 'Breeding'],
      ['Quantity', '240 head'],
    ],
  },
  {
    name: 'Vineyard',
    fields: [
      ['Grape Type', 'Cabernet Sauvignon'],
      ['Number of Bottles', '48,000'],
      ['Number of Liters', '36,000'],
    ],
  },
  {
    name: 'Timber',
    fields: [
      ['Timber Type', 'Fir'],
      ['Estimated Timber Volume', '2,100,000 board feet'],
      ['Merchantable Timber Volume', '1,600,000 board feet'],
    ],
  },
];

const windowFor = (i: number) => ({ at: 1.0 + i * 2.2, until: i === subTypes.length - 1 ? undefined : 3.0 + i * 2.2 });

const AgricultureSubtypeDiagram: React.FC = () => (
  <MotionDiagram
    height={292}
    narrowHeight={360}
    label="Three agriculture sub-types each show their own information component. Livestock asks for breed, animal purpose, and quantity. Vineyard asks for grape type, number of bottles, and number of liters. Timber asks for timber type and estimated and merchantable timber volume in board feet."
    stats={[
      { label: 'Sub-Types', value: '13' },
      { label: 'Admin Builder', value: '1' },
      { label: 'Irrelevant Fields', value: '0' },
    ]}
    statsAt={5.9}
    caption="Each sub-type owns a component with only its own fields and vocabulary, so an analyst entering a vineyard is never asked for a breed. Three of thirteen sub-types shown; illustrative sample data."
  >
    {(narrow) => {
      // Desktop: sub-types in a column beside the card. Phone: sub-types in a row above it.
      const pill = (i: number) =>
        narrow ? { x: 16 + i * 99, y: 40, w: 90, h: 40 } : { x: 16, y: 44 + i * 56, w: 150, h: 44 };
      const card = narrow ? { x: 16, y: 96, w: 288 } : { x: 190, y: 44, w: 274 };
      const fx = card.x + 16;
      const fw = card.w - 32;
      return (
        <>
          <Label x={16} y={24} size={11} weight={600} fill={C.accent} spacing={1.5} at={0}>
            AGRICULTURE · 13 SUB-TYPES
          </Label>

          {subTypes.map((s, i) => (
            <Pill key={s.name} {...pill(i)} label={s.name} at={0.2 + i * 0.1} />
          ))}
          {subTypes.map((s, i) => (
            <Show key={`hl-${s.name}`} {...windowFor(i)}>
              <Pill {...pill(i)} label={s.name} tone="solid" />
            </Show>
          ))}
          <Label x={narrow ? 160 : 91} y={narrow ? 350 : 236} size={12} anchor="middle" at={0.5}>
            + 10 more sub-types
          </Label>

          <Show at={0.6}>
            <rect x={card.x} y={card.y} width={card.w} height={232} rx={12} fill="#FFFFFF" stroke={C.border} />
            <text x={fx} y={card.y + 22} fontSize={10} fontWeight={600} letterSpacing={1.5} fill={C.accent}>
              INFORMATION COMPONENT
            </text>
          </Show>
          {subTypes.map((s, i) => (
            <Show key={`f-${s.name}`} {...windowFor(i)}>
              <text x={fx} y={card.y + 48} fontSize={17} fontWeight={700} fill={C.dark}>
                {s.name}
              </text>
              {s.fields.map(([label, value], j) => (
                <g key={label}>
                  <text x={fx} y={card.y + 76 + j * 50} fontSize={11} fill={C.light}>
                    {label}
                  </text>
                  <rect x={fx} y={card.y + 83 + j * 50} width={fw} height={26} rx={6} fill={C.fill} stroke={C.border} />
                  <text x={fx + 10} y={card.y + 100 + j * 50} fontSize={12} fill={C.dark}>
                    {value}
                  </text>
                </g>
              ))}
            </Show>
          ))}
        </>
      );
    }}
  </MotionDiagram>
);

export default AgricultureSubtypeDiagram;

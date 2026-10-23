import React from 'react';
import MotionDiagram, { Label, Pill } from './MotionDiagram';

// Sub-types share one due-diligence component library; only the property facts vary.
const subTypes = [
  { name: 'Industrial', facts: 'Docks · Clear height' },
  { name: 'Hospitality', facts: 'Rooms · RevPAR' },
  { name: 'Healthcare', facts: 'Beds' },
];
const shared = ['Appraisal', 'Flood', 'Title', 'Tax', 'Insurance', 'Lien'];

const CreComponentsDiagram: React.FC = () => (
  <MotionDiagram
    height={344}
    narrowHeight={344}
    label="Commercial real estate sub-types such as Industrial, Hospitality, and Healthcare are each built from the same six due-diligence components: Appraisal, Flood, Title, Tax, Insurance, and Lien. Only the property-facts component differs: docks and clear height, rooms and RevPAR, and beds."
    stats={[
      { label: 'Sub-Types', value: '12' },
      { label: 'Shared Components', value: '6' },
      { label: 'Bespoke Screens', value: '0' },
    ]}
    statsAt={4.2}
    caption="Every sub-type inherits identical Appraisal, Flood, Title, Tax, Insurance, and Lien components; an administrator only chooses the property-facts component. A few of twelve sub-types shown."
  >
    {(narrow) => {
      // Phone shows two sub-type columns instead of three.
      const cols = narrow ? subTypes.slice(0, 2) : subTypes;
      const colX = (i: number) => 16 + i * (narrow ? 148 : 154);
      const center = narrow ? 160 : 240;
      return (
        <>
          {cols.map((s, i) => (
            <Pill key={s.name} x={colX(i)} y={16} w={140} h={40} label={s.name} tone="outline" at={i * 0.1} />
          ))}
          {shared.map((c, r) =>
            cols.map((s, i) => (
              <Pill key={`${c}-${s.name}`} x={colX(i)} y={68 + r * 34} w={140} h={28} label={c} fontSize={12} at={0.6 + r * 0.3} />
            ))
          )}
          <Label x={center} y={286} size={11} anchor="middle" at={2.6}>
            Property facts vary by sub-type
          </Label>
          {cols.map((s, i) => (
            <Pill key={`facts-${s.name}`} x={colX(i)} y={296} w={140} h={40} label={s.facts} tone="solid" fontSize={11} at={3.0 + i * 0.3} />
          ))}
        </>
      );
    }}
  </MotionDiagram>
);

export default CreComponentsDiagram;

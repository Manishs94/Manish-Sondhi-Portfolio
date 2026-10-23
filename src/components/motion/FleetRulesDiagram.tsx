import React from 'react';
import MotionDiagram, { Box, Edge, Pill, Row } from './MotionDiagram';

// Four rule types bundle into one package; loans inherit it, and one override is recorded.
const rules = ['Eligibility', 'Advance', 'Concentration', 'Curtailment'];
const loans = ['Dealer A', 'Dealer B', 'Dealer C'];
const override = { detail: 'Override + reason', tone: 'warn' as const, at: 3.6 };

const FleetRulesDiagram: React.FC = () => (
  <MotionDiagram
    height={384}
    narrowHeight={384}
    label="Eligibility, advance, concentration, and curtailment rules are bundled into one rule package for the Dealer Floor Plan product. Three dealer loans inherit the package; Dealer C has an authorized override recorded with a reason."
    stats={[
      { label: 'Rules Authored', value: '4' },
      { label: 'Loans Inheriting', value: '3' },
      { label: 'Overrides, With Reason', value: '1' },
    ]}
    statsAt={4.3}
    caption="Rules are authored once under the loan product and bundled into a package; each loan inherits it, and an authorized override is recorded with its reason. Illustrative sample data."
  >
    {(narrow) => {
      if (narrow) {
        // Rules in a 2x2 grid, the package beneath, then loans as rows on a rail.
        const rowY = (i: number) => 220 + i * 54;
        return (
          <>
            <Edge x1={160} y1={104} x2={160} y2={128} at={1.0} />
            <Edge x1={28} y1={208} x2={28} y2={rowY(2) + 22} at={2.3} />
            {loans.map((l, i) => (
              <Edge key={`t-${l}`} x1={28} y1={rowY(i) + 22} x2={44} y2={rowY(i) + 22} at={2.5 + i * 0.1} />
            ))}
            {rules.map((r, i) => (
              <Pill key={r} x={16 + (i % 2) * 148} y={16 + Math.floor(i / 2) * 46} w={140} h={38} label={r} fontSize={12} at={i * 0.15} />
            ))}
            <Box x={16} y={128} w={288} tone="accent" pop eyebrow="RULE PACKAGE" title="Dealer Floor Plan" detail="4 rules · set once in Admin" at={1.6} />
            {loans.map((l, i) => (
              <Row
                key={l}
                x={44}
                y={rowY(i)}
                w={260}
                label={l}
                value="Package applied"
                next={i === 2 ? { value: override.detail, at: override.at, tone: override.tone } : undefined}
                at={2.0 + i * 0.1}
              />
            ))}
          </>
        );
      }
      return (
        <>
          {rules.map((r, i) => (
            <Edge key={`e-${r}`} x1={69 + i * 114} y1={56} x2={200 + i * 26} y2={128} at={1.0 + i * 0.1} />
          ))}
          {loans.map((l, i) => (
            <Edge key={`l-${l}`} x1={240} y1={208} x2={86 + i * 154} y2={304} at={2.3 + i * 0.15} />
          ))}
          {rules.map((r, i) => (
            <Pill key={r} x={16 + i * 114} y={16} w={106} h={40} label={r} fontSize={12} at={i * 0.15} />
          ))}
          <Box x={120} y={128} w={240} tone="accent" pop eyebrow="RULE PACKAGE" title="Dealer Floor Plan" detail="4 rules · set once in Admin" at={1.6} />
          {loans.map((l, i) => (
            <Box
              key={l}
              x={16 + i * 154}
              y={304}
              w={140}
              size="sm"
              eyebrow={`LOAN ${String.fromCharCode(65 + i)}`}
              title={l}
              detail="Package applied"
              next={i === 2 ? override : undefined}
              at={2.0 + i * 0.1}
            />
          ))}
        </>
      );
    }}
  </MotionDiagram>
);

export default FleetRulesDiagram;

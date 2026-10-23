import React from 'react';
import MotionDiagram, { Box, Edge, Row } from './MotionDiagram';

// An advance-rate change on the securities master reaches every loan the security backs.
const loans = ['Loan 1042', 'Loan 1187', 'Loan 1203'];

const InvestmentPolicyDiagram: React.FC = () => (
  <MotionDiagram
    height={384}
    narrowHeight={300}
    label="A security on the Admin securities master has its advance rate changed from 70% to 60%. The three loans it is pledged to each update from 70% to 60% without being edited."
    stats={[
      { label: 'Edited In', value: '1 place' },
      { label: 'Loans Updated', value: '3' },
      { label: 'Re-Entered', value: '0' },
    ]}
    statsAt={5.2}
    caption="The advance rate is changed once, on the security record in Admin, and every loan the security is pledged to inherits it. Illustrative sample data."
  >
    {(narrow) => {
      const admin = (
        <Box
          x={narrow ? 16 : 100}
          y={16}
          w={narrow ? 288 : 280}
          eyebrow="ADMIN · SECURITIES MASTER"
          title="ACME Corp · Common"
          detail="Eligible · Advance rate 70%"
          next={{ detail: 'Eligible · Advance rate 60%', at: 3.2, tone: 'accent' }}
          pulseAt={3.2}
          at={0}
        />
      );
      if (narrow) {
        // Loans stack as rows fed by a rail down the left edge.
        const rowY = (i: number) => 128 + i * 56;
        return (
          <>
            <Edge x1={28} y1={96} x2={28} y2={rowY(2) + 22} tone="muted" at={0.9} />
            <Edge x1={28} y1={96} x2={28} y2={rowY(2) + 22} width={3} at={3.6} />
            {loans.map((l, i) => (
              <Edge key={`t-${l}`} x1={28} y1={rowY(i) + 22} x2={44} y2={rowY(i) + 22} tone="muted" at={1.1 + i * 0.1} />
            ))}
            {admin}
            {loans.map((l, i) => (
              <Row
                key={l}
                x={44}
                y={rowY(i)}
                w={260}
                label={l}
                value="Advance 70%"
                next={{ value: 'Advance 60%', at: 4.2 + i * 0.15, tone: 'accent' }}
                at={0.5 + i * 0.1}
              />
            ))}
          </>
        );
      }
      return (
        <>
          {loans.map((l, i) => (
            <Edge key={`base-${l}`} x1={240} y1={96} x2={86 + i * 154} y2={300} tone="muted" at={0.9 + i * 0.2} />
          ))}
          {loans.map((l, i) => (
            <Edge key={`flow-${l}`} x1={240} y1={96} x2={86 + i * 154} y2={300} width={3} at={3.6 + i * 0.15} />
          ))}
          {admin}
          {loans.map((l, i) => (
            <Box
              key={l}
              x={16 + i * 154}
              y={300}
              w={140}
              size="sm"
              eyebrow="PLEDGED LOAN"
              title={l}
              detail="Advance 70%"
              next={{ detail: 'Advance 60%', at: 4.4 + i * 0.15, tone: 'accent' }}
              at={0.5 + i * 0.1}
            />
          ))}
        </>
      );
    }}
  </MotionDiagram>
);

export default InvestmentPolicyDiagram;

import React from 'react';
import MotionDiagram, { Box, Edge } from './MotionDiagram';

// One collateral record pledged to two loans: the pledge facts live on each link.
const PledgeLinkDiagram: React.FC = () => (
  <MotionDiagram
    height={456}
    narrowHeight={380}
    label="One office building worth $2,000,000 is pledged to two loans. The pledge to Loan A is first lien, $1,200,000, 10% discount. The pledge to Loan B is second lien, $400,000, 15% discount. Proposed LTV is 80%."
    stats={[
      { label: 'Total Pledged', value: '$1,600,000' },
      { label: 'Collateral Value', value: '$2,000,000' },
      { label: 'Proposed LTV', value: '80.00%' },
    ]}
    statsAt={4.6}
    caption="Same property, a different lien position, amount, and discount on each loan. Those facts belong to the pledge, so neither the collateral nor the loan can hold them. Illustrative sample data; Proposed LTV = (Proposed Loan Amount + Total Current Loan Commitments) / Collateral Value."
  >
    {(narrow) =>
      narrow ? (
        <>
          <Edge x1={86} y1={96} x2={86} y2={300} at={1.2} />
          <Edge x1={234} y1={96} x2={234} y2={300} at={2.8} />

          <Box x={16} y={16} w={288} eyebrow="COLLATERAL" title="Office Building" detail="Value $2,000,000" at={0} />
          <Box x={16} y={300} w={140} size="sm" eyebrow="LOAN A" title="Term Loan" detail="Booked · $1.2M" at={0.5} />
          <Box x={164} y={300} w={140} size="sm" eyebrow="LOAN B" title="Line of Credit" detail="In process · $400K" at={0.7} />

          <Box x={16} y={168} w={140} size="sm" tone="accent" pop eyebrow="PLEDGE" title="1st Lien" detail="$1.2M · 10% disc." pulseAt={4.4} at={2.0} />
          <Box x={164} y={168} w={140} size="sm" tone="accent" pop eyebrow="PLEDGE" title="2nd Lien" detail="$400K · 15% disc." pulseAt={4.4} at={3.6} />
        </>
      ) : (
        <>
          <Edge x1={200} y1={96} x2={116} y2={360} at={1.2} />
          <Edge x1={280} y1={96} x2={364} y2={360} at={2.8} />

          <Box x={120} y={16} w={240} eyebrow="COLLATERAL" title="Office Building" detail="Value $2,000,000" at={0} />
          <Box x={16} y={360} w={200} eyebrow="LOAN A · BOOKED" title="Term Loan" detail="$1,200,000" at={0.5} />
          <Box x={264} y={360} w={200} eyebrow="LOAN B · IN PROCESS" title="Line of Credit" detail="$400,000" at={0.7} />

          <Box x={80} y={188} w={156} tone="accent" pop eyebrow="PLEDGE" title="1st Lien" detail="$1.2M · 10% discount" pulseAt={4.4} at={2.0} />
          <Box x={244} y={188} w={156} tone="accent" pop eyebrow="PLEDGE" title="2nd Lien" detail="$400K · 15% discount" pulseAt={4.4} at={3.6} />
        </>
      )
    }
  </MotionDiagram>
);

export default PledgeLinkDiagram;

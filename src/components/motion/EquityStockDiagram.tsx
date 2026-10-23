import React from 'react';
import MotionDiagram, { Box, Edge, Row } from './MotionDiagram';

// Bulk upload goes through a review step; a duplicate stock is blocked at entry.
const rows = [
  { label: 'ACME Corp · Common', short: 'ACME Corp', value: 'Policy LTV 50%' },
  { label: 'Beta Industries', short: 'Beta Industries', value: 'Policy LTV 60%' },
  { label: 'ACME Corp · Common', short: 'ACME Corp', value: 'Policy LTV 55%', duplicate: true },
  { label: 'Gamma Holdings', short: 'Gamma Holdings', value: 'Policy LTV 40%' },
];

const EquityStockDiagram: React.FC = () => (
  <MotionDiagram
    height={336}
    narrowHeight={336}
    label="A bulk upload of four stocks goes through a review step. Three are added to the master list with a policy LTV each; one is a duplicate and is blocked."
    stats={[
      { label: 'Rows Uploaded', value: '4' },
      { label: 'Added', value: '3' },
      { label: 'Duplicates Blocked', value: '1' },
    ]}
    statsAt={3.4}
    caption="The upload is reviewed before anything is imported, and a duplicate stock is caught at entry instead of getting a second policy LTV. Illustrative sample data."
  >
    {(narrow) => {
      const cx = narrow ? 160 : 240;
      return (
        <>
          <Edge x1={cx} y1={80} x2={cx} y2={116} at={0.6} />
          <Box x={cx - 100} y={16} w={200} size="sm" eyebrow="BULK UPLOAD" title="stocks.csv" detail="4 rows" at={0} />
          {rows.map((r, i) => (
            <Row
              key={`${r.label}-${i}`}
              x={narrow ? 16 : 40}
              y={116 + i * 52}
              w={narrow ? 288 : 400}
              label={narrow ? r.short : r.label}
              value={r.value}
              next={r.duplicate ? { value: 'Duplicate · blocked', at: 2.6, tone: 'warn' } : undefined}
              at={1.0 + i * 0.25}
            />
          ))}
        </>
      );
    }}
  </MotionDiagram>
);

export default EquityStockDiagram;

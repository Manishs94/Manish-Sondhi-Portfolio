import React from 'react';
import MotionDiagram, { Box, Edge, Pill } from './MotionDiagram';

// Reports and dashboards from separate Cync apps consolidate into one analytics layer.
const sources = [
  { label: 'LOS', short: 'LOS' },
  { label: 'Financial Analyzer', short: 'Fin. Analyzer' },
  { label: 'Other Cync apps', short: 'Other apps' },
];
const outputs = ['Dashboards', 'Reports', 'DWH Query', 'Metadata'];

const AdvanceAnalyticsDiagram: React.FC = () => (
  <MotionDiagram
    height={344}
    narrowHeight={352}
    label="Reports and dashboards from LOS, Financial Analyzer, and other Cync applications flow into Advance Analytics, one place for HMDA and compliance data, which is organized into Dashboards, Reports, DWH Query, and Metadata, among seven top-level sections."
    stats={[
      { label: 'Places to Check', value: '1' },
      { label: 'Top-Level Sections', value: '7' },
      { label: 'Prior Design', value: 'None' },
    ]}
    statsAt={3.6}
    caption="Reports and dashboards from individual Cync applications are consolidated into one product, instead of being checked system by system. Four of seven sections shown."
  >
    {(narrow) => {
      if (narrow) {
        // Sources in a tight row, the hub, then sections in a 2x2 grid.
        const outPos = (i: number) => ({ x: 16 + (i % 2) * 148, y: 256 + Math.floor(i / 2) * 46 });
        return (
          <>
            {sources.map((s, i) => (
              <Edge key={`in-${s.label}`} x1={62 + i * 98} y1={56} x2={120 + i * 40} y2={116} at={0.8 + i * 0.15} />
            ))}
            {[0, 1].map((i) => (
              <Edge key={`out-${i}`} x1={160} y1={196} x2={86 + i * 148} y2={256} at={2.2 + i * 0.1} />
            ))}
            {sources.map((s, i) => (
              <Pill key={s.label} x={16 + i * 98} y={16} w={92} h={40} label={s.short} fontSize={11} at={i * 0.15} />
            ))}
            <Box x={16} y={116} w={288} tone="accent" pop eyebrow="ONE PLACE" title="Advance Analytics" detail="HMDA and compliance data" at={1.5} />
            {outputs.map((o, i) => (
              <Pill key={o} {...outPos(i)} w={140} h={38} label={o} tone="outline" fontSize={12} at={2.6 + i * 0.15} />
            ))}
          </>
        );
      }
      return (
        <>
          {sources.map((s, i) => (
            <Edge key={`in-${s.label}`} x1={86 + i * 154} y1={56} x2={200 + i * 40} y2={136} at={0.8 + i * 0.15} />
          ))}
          {outputs.map((o, i) => (
            <Edge key={`out-${o}`} x1={240} y1={216} x2={68 + i * 114} y2={288} at={2.2 + i * 0.1} />
          ))}
          {sources.map((s, i) => (
            <Pill key={s.label} x={16 + i * 154} y={16} w={140} h={40} label={s.label} fontSize={12} at={i * 0.15} />
          ))}
          <Box x={120} y={136} w={240} tone="accent" pop eyebrow="ONE PLACE" title="Advance Analytics" detail="HMDA and compliance data" at={1.5} />
          {outputs.map((o, i) => (
            <Pill key={o} x={16 + i * 114} y={288} w={104} h={40} label={o} tone="outline" fontSize={12} at={2.6 + i * 0.15} />
          ))}
        </>
      );
    }}
  </MotionDiagram>
);

export default AdvanceAnalyticsDiagram;

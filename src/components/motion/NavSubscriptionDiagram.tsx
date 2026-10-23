import React from 'react';
import MotionDiagram, { Row } from './MotionDiagram';

// Headline numbers on top roll up the rows beneath; one LP is excluded by its side letter.
const lps = [
  { name: 'Pension Fund A', value: '$40M uncalled' },
  { name: 'University Endowment B', short: 'Endowment B', value: '$25M uncalled' },
  { name: 'Family Office C', value: '$15M uncalled', excluded: true },
  { name: 'Sovereign Fund D', value: '$20M uncalled' },
];

const NavSubscriptionDiagram: React.FC = () => (
  <MotionDiagram
    height={224}
    narrowHeight={224}
    label="Four limited partners with $100M of uncalled capital. Family Office C, $15M, is excluded by its side letter. The headline numbers are 4 LPs with 1 excluded, $85M eligible uncalled, 85% eligibility, and 47.1% top-1 concentration."
    stats={[
      { label: 'Total LPs', value: '4 / 1 excl' },
      { label: 'Eligible Uncalled', value: '$85M' },
      { label: 'Eligibility', value: '85%' },
      { label: 'Top-1 Concentration', value: '47.1%' },
    ]}
    statsAt={3.4}
    statsPosition="top"
    caption="The headline numbers on top are a roll-up of the rows beneath, and each row can be excluded for a reason that lives in a side letter or a status. Illustrative sample data."
  >
    {(narrow) =>
      lps.map((lp, i) => (
        <Row
          key={lp.name}
          x={16}
          y={16 + i * 52}
          w={narrow ? 288 : 448}
          label={narrow && lp.short ? lp.short : lp.name}
          value={lp.value}
          fontSize={narrow ? 12 : 13}
          next={lp.excluded ? { value: 'Excluded · side letter', at: 2.0, tone: 'warn' } : undefined}
          at={0.2 + i * 0.15}
        />
      ))
    }
  </MotionDiagram>
);

export default NavSubscriptionDiagram;

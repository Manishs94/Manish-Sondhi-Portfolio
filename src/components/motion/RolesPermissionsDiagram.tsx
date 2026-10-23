import React from 'react';
import MotionDiagram, { Box, Edge } from './MotionDiagram';

// Roles compose permission sets; changing one set updates every role that uses it.
const sets = [
  { title: 'Loans', detail: 'View · Edit' },
  { title: 'Collateral', detail: 'View', next: 'View · Edit' },
  { title: 'Credit Memo', detail: 'Approve' },
];
const roles = [
  { title: 'Credit Analyst', short: 'Analyst', detail: '2 permission sets', shortDetail: '2 sets', uses: [0, 1] },
  { title: 'Credit Officer', short: 'Officer', detail: '3 permission sets', shortDetail: '3 sets', uses: [0, 1, 2] },
];
const setY = (i: number) => 16 + i * 80;
const setCy = (i: number) => setY(i) + 32;

const RolesPermissionsDiagram: React.FC = () => (
  <MotionDiagram
    height={248}
    narrowHeight={248}
    label="Three permission sets, Loans, Collateral, and Credit Memo, compose two roles: Credit Analyst uses Loans and Collateral; Credit Officer uses all three. Editing the Collateral set to add Edit updates both roles at once."
    stats={[
      { label: 'Sets Edited', value: '1' },
      { label: 'Roles Updated', value: '2' },
      { label: 'Role-by-Role Edits', value: '0' },
    ]}
    statsAt={4.8}
    caption="Permissions live in reusable sets and roles are built from them, so changing one set updates every role that uses it. Illustrative sample data."
  >
    {(narrow) => {
      // Phone keeps the same two columns with narrower boxes and shorter labels.
      const g = narrow
        ? { setW: 128, roleX: 192, roleW: 112, roleH: 64, roleY: [40, 152] }
        : { setW: 180, roleX: 284, roleW: 180, roleH: 80, roleY: [32, 144] };
      const setRight = 16 + g.setW;
      const roleCy = (ri: number) => g.roleY[ri] + g.roleH / 2;
      return (
        <>
          {roles.flatMap((r, ri) =>
            r.uses.map((s, k) => (
              <Edge key={`${r.title}-${s}`} x1={setRight} y1={setCy(s)} x2={g.roleX} y2={roleCy(ri)} tone="muted" at={1.0 + ri * 0.3 + k * 0.1} />
            ))
          )}
          {roles.map((r, ri) => (
            <Edge key={`flow-${r.title}`} x1={setRight} y1={setCy(1)} x2={g.roleX} y2={roleCy(ri)} width={3} at={3.6 + ri * 0.15} />
          ))}

          {sets.map((s, i) => (
            <Box
              key={s.title}
              x={16}
              y={setY(i)}
              w={g.setW}
              size="sm"
              eyebrow={narrow ? 'SET' : 'PERMISSION SET'}
              title={s.title}
              detail={s.detail}
              next={s.next ? { detail: s.next, at: 3.2, tone: 'accent' } : undefined}
              pulseAt={s.next ? 3.2 : undefined}
              at={i * 0.15}
            />
          ))}
          {roles.map((r, ri) => (
            <Box
              key={r.title}
              x={g.roleX}
              y={g.roleY[ri]}
              w={g.roleW}
              size={narrow ? 'sm' : 'md'}
              eyebrow="ROLE"
              title={narrow ? r.short : r.title}
              detail={narrow ? r.shortDetail : r.detail}
              next={{ detail: narrow ? 'Updated' : 'Updated from set', at: 4.2 + ri * 0.15, tone: 'accent' }}
              at={0.5 + ri * 0.1}
            />
          ))}
        </>
      );
    }}
  </MotionDiagram>
);

export default RolesPermissionsDiagram;

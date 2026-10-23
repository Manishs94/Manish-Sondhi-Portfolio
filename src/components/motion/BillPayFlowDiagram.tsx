import React from 'react';
import MotionDiagram, { C, Edge, Pill, Show } from './MotionDiagram';

// Simplified recreation of the redesigned scheduling flow, annotated with the three
// additions that came out of usability testing.
const S = [
  { at: 0.6, until: 2.6 },
  { at: 2.8, until: 5.0 },
  { at: 5.2 },
];

const Button: React.FC<{ y: number; label: string; tone?: 'solid' | 'outline' | 'warn' }> = ({ y, label, tone = 'solid' }) => {
  const s =
    tone === 'solid'
      ? { fill: C.accent, stroke: C.accent, text: '#FFFFFF' }
      : tone === 'warn'
        ? { fill: '#FFFFFF', stroke: C.warn, text: C.warnText }
        : { fill: '#FFFFFF', stroke: C.accent, text: C.accent };
  return (
    <g>
      <rect x={76} y={y} width={168} height={36} rx={18} fill={s.fill} stroke={s.stroke} strokeWidth={1.25} />
      <text x={160} y={y + 23} textAnchor="middle" fontSize={13} fontWeight={600} fill={s.text}>
        {label}
      </text>
    </g>
  );
};

const Field: React.FC<{ y: number; label: string; value: string; big?: boolean }> = ({ y, label, value, big }) => (
  <g>
    <text x={76} y={y} fontSize={11} fill={C.light}>
      {label}
    </text>
    <rect x={76} y={y + 8} width={168} height={40} rx={8} fill={C.fill} stroke={C.border} />
    <text x={88} y={y + 34} fontSize={big ? 17 : 13} fontWeight={big ? 700 : 500} fill={C.dark}>
      {value}
    </text>
  </g>
);

const Payee: React.FC<{ y: number; name: string; detail: string; selected?: boolean }> = ({ y, name, detail, selected }) => (
  <g>
    <rect x={76} y={y} width={168} height={52} rx={10} fill={selected ? '#FFFFFF' : C.fill} stroke={selected ? C.accent : C.border} strokeWidth={selected ? 1.5 : 1} />
    <text x={88} y={y + 22} fontSize={13} fontWeight={700} fill={C.dark}>
      {name}
    </text>
    <text x={88} y={y + 40} fontSize={11} fill={C.light}>
      {detail}
    </text>
  </g>
);

const Note: React.FC<{ y: number; label: string; short: string; at: number; narrow: boolean }> = ({ y, label, short, at, narrow }) =>
  narrow ? (
    <>
      <Edge x1={248} y1={y + 18} x2={270} y2={y + 18} at={at} />
      <Pill x={270} y={y} w={90} h={36} label={short} tone="outline" fontSize={11} at={at + 0.3} />
    </>
  ) : (
    <>
      <Edge x1={248} y1={y + 18} x2={284} y2={y + 18} at={at} />
      <Pill x={284} y={y} w={180} h={36} label={label} tone="outline" fontSize={12} at={at + 0.3} />
    </>
  );

const BillPayFlowDiagram: React.FC = () => (
  <MotionDiagram
    height={420}
    narrowHeight={420}
    label="A phone walks through scheduling a bill payment: choose a payee, enter the amount and delivery date with help text explaining when it arrives, then a confirmation with Repeat payment and Delete buttons. Help text, repeat payment, and delete were added after usability testing."
    caption="The redesigned scheduling flow, annotated with the three additions from usability testing: help text, a repeat-payment button, and a delete button for scheduled payments. Simplified recreation, not the production UI; sample payee and amount."
  >
    {(narrow) => (
      // On phones the whole drawing shifts left so short notes fit in the right gutter.
      <g transform={narrow ? 'translate(-44 0)' : undefined}>
        <Show at={0}>
          <rect x={60} y={10} width={200} height={400} rx={28} fill="#FFFFFF" stroke={C.dark} strokeWidth={2} />
          <rect x={125} y={22} width={70} height={8} rx={4} fill={C.border} />
          <text x={76} y={60} fontSize={15} fontWeight={700} fill={C.dark}>
            Bill Pay
          </text>
        </Show>

        <Show {...S[0]}>
          <text x={76} y={88} fontSize={11} fill={C.light}>
            Pay to
          </text>
          <Payee y={96} name="City Power & Light" detail="Utilities · ••• 4821" selected />
          <Payee y={156} name="Metro Wireless" detail="Phone · ••• 0937" />
          <Button y={356} label="Continue" />
        </Show>

        <Show {...S[1]}>
          <Field y={88} label="Amount" value="$84.20" big />
          <Field y={152} label="Deliver by" value="Fri, Oct 30" />
          <rect x={76} y={214} width={168} height={36} rx={8} fill="#EEF2FF" />
          <text x={84} y={236} fontSize={10} fill={C.accent}>
            ⓘ Arrives in 1–2 business days
          </text>
          <Button y={356} label="Review payment" />
          <Note y={214} label="Added: help text" short="+ Help text" at={3.6} narrow={narrow} />
        </Show>

        <Show at={S[2].at}>
          <circle cx={160} cy={112} r={24} fill={C.accent} />
          <path d="M149 112 l8 8 l15 -16" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
          <text x={160} y={164} textAnchor="middle" fontSize={15} fontWeight={700} fill={C.dark}>
            Payment scheduled
          </text>
          <text x={160} y={184} textAnchor="middle" fontSize={11} fill={C.light}>
            $84.20 to City Power & Light
          </text>
          <text x={160} y={200} textAnchor="middle" fontSize={11} fill={C.light}>
            Delivers Fri, Oct 30
          </text>
          <Button y={300} label="Repeat payment" tone="outline" />
          <Button y={346} label="Delete" tone="warn" />
          <Note y={300} label="Added: repeat payment" short="+ Repeat" at={6.0} narrow={narrow} />
          <Note y={346} label="Added: delete button" short="+ Delete" at={6.4} narrow={narrow} />
        </Show>
      </g>
    )}
  </MotionDiagram>
);

export default BillPayFlowDiagram;

import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface NeedsAnswerFlagProps {
  children: React.ReactNode;
}

/**
 * Visible placeholder for content that is intentionally unresolved.
 * Deliberately styled outside the portfolio-accent system (amber, not blue)
 * so it reads as "not final" rather than blending in as shipped content.
 */
const NeedsAnswerFlag: React.FC<NeedsAnswerFlagProps> = ({ children }) => (
  <div className="rounded-lg border-2 border-dashed border-amber-400 bg-amber-50 p-4 flex items-start gap-3 my-4">
    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700 mb-1">
        Needs Your Input
      </p>
      <p className="text-sm text-amber-900 leading-relaxed">{children}</p>
    </div>
  </div>
);

export default NeedsAnswerFlag;

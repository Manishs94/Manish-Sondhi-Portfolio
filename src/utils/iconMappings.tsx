
import React from 'react';
import { Users2, LineChart, Clock, Target, Users } from 'lucide-react';

export type IconType = 'users2' | 'lineChart' | 'clock' | 'target' | 'users';

export const renderIcon = (iconType: IconType): React.ReactNode => {
  switch (iconType) {
    case 'users2':
      return <Users2 className="w-5 h-5" />;
    case 'lineChart':
      return <LineChart className="w-5 h-5" />;
    case 'clock':
      return <Clock className="w-5 h-5" />;
    case 'target':
      return <Target className="w-5 h-5" />;
    case 'users':
      return <Users className="w-5 h-5" />;
    default:
      return null;
  }
};

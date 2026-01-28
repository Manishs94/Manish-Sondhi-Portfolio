
import React from 'react';
import { 
  Users2, LineChart, Clock, Target, Users, Zap, Shield, CheckCircle, 
  AlertCircle, Activity, TrendingUp, Database, BarChart2, Archive, Layers,
  Check, Workflow, FileText, Accessibility
} from 'lucide-react';

export type IconType = 
  | 'users2' 
  | 'lineChart' 
  | 'clock' 
  | 'target' 
  | 'users' 
  | 'zap' 
  | 'shield' 
  | 'check-circle' 
  | 'alert-circle' 
  | 'activity' 
  | 'trending-up' 
  | 'database' 
  | 'bar-chart-2' 
  | 'archive' 
  | 'layers' 
  | 'check' 
  | 'workflow' 
  | 'file-text' 
  | 'accessibility';

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
    case 'zap':
      return <Zap className="w-5 h-5" />;
    case 'shield':
      return <Shield className="w-5 h-5" />;
    case 'check-circle':
      return <CheckCircle className="w-5 h-5" />;
    case 'alert-circle':
      return <AlertCircle className="w-5 h-5" />;
    case 'activity':
      return <Activity className="w-5 h-5" />;
    case 'trending-up':
      return <TrendingUp className="w-5 h-5" />;
    case 'database':
      return <Database className="w-5 h-5" />;
    case 'bar-chart-2':
      return <BarChart2 className="w-5 h-5" />;
    case 'archive':
      return <Archive className="w-5 h-5" />;
    case 'layers':
      return <Layers className="w-5 h-5" />;
    case 'check':
      return <Check className="w-5 h-5" />;
    case 'workflow':
      return <Workflow className="w-5 h-5" />;
    case 'file-text':
      return <FileText className="w-5 h-5" />;
    case 'accessibility':
      return <Accessibility className="w-5 h-5" />;
    default:
      return null;
  }
};

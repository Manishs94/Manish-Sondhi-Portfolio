
import React from 'react';
import { renderIcon, IconType } from '@/utils/iconMappings';

interface Metric {
  icon: string;
  value: string;
  label: string;
}

interface ProjectDetailMetricsProps {
  metrics: Metric[];
}

const ProjectDetailMetrics: React.FC<ProjectDetailMetricsProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {metrics.map((metric: Metric, idx: number) => (
        <div key={idx} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
          <div className="text-portfolio-accent mb-2">{renderIcon(metric.icon as IconType)}</div>
          <div className="font-bold text-xl text-portfolio-text-dark">{metric.value}</div>
          <div className="text-sm text-portfolio-text-light">{metric.label}</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetailMetrics;

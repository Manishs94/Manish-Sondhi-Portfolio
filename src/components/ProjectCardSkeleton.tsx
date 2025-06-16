import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const ProjectCardSkeleton: React.FC = () => {
  return (
    <Card
      className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 animate-pulse"
      // Style ensures it takes up space similarly to ProjectCard, but animation is handled by Skeleton itself
    >
      {/* Image Placeholder */}
      <Skeleton className="h-60 sm:h-64 w-full" />

      <CardHeader className="p-4 sm:p-6 pb-0">
        {/* Category Badge Placeholder */}
        <Skeleton className="h-6 w-24 mb-3 rounded-full" />

        {/* Title Placeholder */}
        <Skeleton className="h-6 w-3/4 mb-2" />

        {/* Subtitle Placeholder */}
        <Skeleton className="h-4 w-1/2 mb-2" />
      </CardHeader>

      <CardContent className="p-4 sm:p-6 pt-3">
        {/* Description Placeholder (multiple lines) */}
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-4" />

        {/* Tools & Technologies Placeholder (optional, but good for structure) */}
        <Skeleton className="h-4 w-1/3 mb-2 mt-4" /> {/* "Tools & Technologies:" text */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Skeleton className="h-6 w-16 rounded" />
          <Skeleton className="h-6 w-20 rounded" />
          <Skeleton className="h-6 w-12 rounded" />
        </div>

        {/* View Project Link Placeholder */}
        <Skeleton className="h-5 w-28" />
      </CardContent>
    </Card>
  );
};

export default ProjectCardSkeleton;


import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const ExperienceSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {[1, 2, 3].map((item) => (
        <div 
          key={item} 
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg animate-pulse transition-all duration-300 ease-in-out"
          style={{ animationDelay: `${item * 150}ms` }}
        >
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Skeleton className="w-5 h-5 rounded-md animate-shimmer" />
                <Skeleton className="h-8 w-[300px] rounded-lg animate-shimmer" />
              </div>
              <Skeleton className="h-6 w-48 mb-2 rounded-md animate-shimmer" 
                style={{ animationDelay: '100ms' }}
              />
              <div className="flex flex-wrap items-center gap-4">
                <Skeleton className="h-4 w-24 rounded-md animate-shimmer" 
                  style={{ animationDelay: '200ms' }}
                />
                <Skeleton className="h-4 w-32 rounded-md animate-shimmer" 
                  style={{ animationDelay: '300ms' }}
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2 mb-6">
            {[1, 2, 3].map((line) => (
              <Skeleton 
                key={line}
                className="h-4 rounded-md animate-shimmer" 
                style={{ 
                  width: line === 3 ? '75%' : '100%',
                  animationDelay: `${400 + line * 100}ms`
                }}
              />
            ))}
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <Skeleton className="h-6 w-32 mb-4 rounded-md animate-shimmer" 
              style={{ animationDelay: '700ms' }}
            />
            <div className="space-y-2">
              {[1, 2, 3, 4].map((highlight) => (
                <div key={highlight} className="flex items-start gap-2">
                  <Skeleton 
                    className="w-2 h-2 rounded-full mt-2 animate-shimmer" 
                    style={{ animationDelay: `${800 + highlight * 100}ms` }}
                  />
                  <Skeleton 
                    className="h-4 flex-1 rounded-md animate-shimmer"
                    style={{ animationDelay: `${800 + highlight * 100}ms` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="mb-6">
            <Skeleton className="h-6 w-28 mb-4 rounded-md animate-shimmer" 
              style={{ animationDelay: '1200ms' }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((metric) => (
                <div key={metric} 
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 overflow-hidden"
                  style={{ animationDelay: `${1300 + metric * 100}ms` }}
                >
                  <Skeleton className="w-8 h-8 mx-auto mb-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <Skeleton className="h-6 w-32 mb-4 rounded-md animate-shimmer" 
              style={{ animationDelay: '1700ms' }}
            />
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6].map((tool) => (
                <Skeleton 
                  key={tool} 
                  className="h-6 w-16 rounded-full animate-shimmer" 
                  style={{ animationDelay: `${1800 + tool * 100}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSkeleton;

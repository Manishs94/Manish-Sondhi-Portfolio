
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

interface BreadcrumbNavProps {
  projectTitle?: string;
}

const BreadcrumbNav = ({ projectTitle }: BreadcrumbNavProps) => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="py-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="flex items-center gap-1 hover:text-portfolio-accent transition-colors">
                <Home className="w-4 h-4" />
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          
          {pathSegments.map((segment, index) => {
            const isLast = index === pathSegments.length - 1;
            const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
            
            return (
              <React.Fragment key={segment}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="text-portfolio-accent font-medium">
                      {segment === 'project' && projectTitle ? projectTitle : segment.charAt(0).toUpperCase() + segment.slice(1)}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={href} className="hover:text-portfolio-accent transition-colors">
                        {segment.charAt(0).toUpperCase() + segment.slice(1)}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbNav;


import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProjectById } from '@/utils/projectData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedProjects from '@/components/RelatedProjects';
import ProjectHierarchy from '@/components/ProjectHierarchy';
import ProjectDetailHeader from '@/components/ProjectDetailHeader';
import ProjectDetailMetrics from '@/components/ProjectDetailMetrics';
import ProjectDetailContent from '@/components/ProjectDetailContent';
import ProjectDetailActions from '@/components/ProjectDetailActions';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const projectData = getProjectById(parseInt(id));
      setProject(projectData);
      setLoading(false);

      window.scrollTo(0, 0);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center py-24">
          <div className="animate-pulse text-portfolio-accent">Loading project details...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-24">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Link to="/#portfolio">
            <Button className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <BreadcrumbNav projectTitle={project?.title} />

          <ProjectDetailHeader project={project} />

          {project.metrics && <ProjectDetailMetrics metrics={project.metrics} />}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <ProjectDetailContent project={project} />
            </div>
            <div className="lg:col-span-1">
              <ProjectHierarchy currentProjectId={project.id} />
            </div>
          </div>

          <ProjectDetailActions project={project} />
        </div>
      </div>

      {project && (
        <RelatedProjects
          currentProjectId={project.id}
          currentProjectCategory={project.category}
        />
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetail;

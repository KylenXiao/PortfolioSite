import ProjectItem from './ProjectItem';
import { ProjectItemProps } from '../types';

interface ProjectListProps {
  title: string;
  projects: ProjectItemProps[];
}

function ProjectList({ title, projects }: ProjectListProps) {
  return (
    <div className="project-list">
      <h2>{title}</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;

import ScrollingBackground from '../components/ScrollingBackground';
import ProjectList from '../components/ProjectList';
import { ProjectItemProps } from '../types';

function SoftwareEngineering() {
  const projects: ProjectItemProps[] = [
    {
      title: "Web Development Project",
      subtitle: "Full-stack Development",
      description: "A modern web application built with React and Node.js",
      technologies: ["React", "TypeScript", "Node.js", "Express"],
      media: {
        type: "image",
        src: "https://brandingforthepeople.com/wp-content/uploads/2019/04/Stock-Photography-vs-Real-Imagery.jpg",
        alt: "Web Project",
      },
      mediaPosition: "left",
      link: "https://example.com/web-project",
      github: "https://github.com/username/web-project",
    },
    {
      title: "Project One",
      subtitle: "A subtitle",
      description: "A brief description of your amazing project. Lorem ipsum blah blah blah blah blah blah",
      technologies: ["React", "TypeScript", "Canvas API"],
      media: {
        type: "image",
        src: "https://brandingforthepeople.com/wp-content/uploads/2019/04/Stock-Photography-vs-Real-Imagery.jpg",
        alt: "Project media",
      },
      mediaPosition: "left",
      link: "https://example.com/project-one",
      github: "https://github.com/username/project-one",
    },
    {
      title: "Project Two",
      subtitle: "A subtitle",
      description: "A brief description of your amazing project",
      technologies: ["React", "TypeScript", "Canvas API"],
      media: {
        type: "image",
        src: "https://brandingforthepeople.com/wp-content/uploads/2019/04/Stock-Photography-vs-Real-Imagery.jpg",
        alt: "Project media",
      },
      mediaPosition: "right",
      link: "https://example.com/project-two",
      github: "https://github.com/username/project-two",
    },
  ];

  return (
    <div className="page">
      <ScrollingBackground 
        images={{
          top: '/backgrounds/PixTop.png',
          middle: '/backgrounds/PixMid.png',
          bottom: '/backgrounds/PixBtm.png'
        }}
      />
      <div className="content">
        <div className="content-overlay">
          <ProjectList title="Software Engineering Projects" projects={projects} />
        </div>
      </div>
    </div>
  );
}

export default SoftwareEngineering;

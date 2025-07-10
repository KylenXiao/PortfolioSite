import ProjectList from '../components/ProjectList';
import ScrollingBackground from '../components/ScrollingBackground';
import { ProjectItemProps } from '../types';
import './Home.css';

function Home() {
  const featuredProjects: ProjectItemProps[] = [
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
          top: '/src/assets/backgrounds/PixTop.png',
          middle: '/src/assets/backgrounds/PixMid.png',
          bottom: '/src/assets/backgrounds/PixBtm.png'
        }}
      />
      <div className="content">
        <div className="content-overlay">
          <ProjectList title="Featured Projects" projects={featuredProjects} />
        </div>
      </div>
    </div>
  );
}

export default Home;
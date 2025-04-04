import ProjectItem from '../components/ProjectItem';
import { ProjectItemProps } from '../types';

const Home: React.FC = () => {
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
    <div className="home-page">
      <div className="home-content">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
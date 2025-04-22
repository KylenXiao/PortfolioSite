import ScrollingBackground from '../components/ScrollingBackground';
import ProjectList from '../components/ProjectList';
import { ProjectItemProps } from '../types';

function GameDev() {
  const projects: ProjectItemProps[] = [
    {
      title: "Unity Game Project",
      subtitle: "3D Game Development",
      description: "A 3D adventure game built with Unity",
      technologies: ["Unity", "C#", "Blender", "FMOD"],
      media: {
        type: "image",
        src: "https://example.com/game-project.jpg",
        alt: "Game Project",
      },
      mediaPosition: "left",
      link: "https://example.com/game-project",
      github: "https://github.com/username/game-project",
    },
    // Add more game development projects here
  ];

  return (
    <div className="page">
      <ScrollingBackground 
        images={{
          top: '/backgrounds/top-bg.jpg',
          middle: '/backgrounds/middle-bg.jpg',
          bottom: '/backgrounds/bottom-bg.jpg'
        }}
      />
      <div className="content">
        <div className="content-overlay">
          <ProjectList title="Game Development Projects" projects={projects} />
        </div>
      </div>
    </div>
  );
}

export default GameDev;

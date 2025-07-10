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
    // TODO
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
          <ProjectList title="Game Development Projects" projects={projects} />
        </div>
      </div>
    </div>
  );
}

export default GameDev;

import ScrollingBackground from '../components/ScrollingBackground';
import ProjectList from '../components/ProjectList';
import { ProjectItemProps } from '../types';

function GameDev() {
  const borderImage = "";
  const projects: ProjectItemProps[] = [
    {
      title: "Armsim",
      subtitle: "2019-2025",
      description: "A 2D platformer-puzzle game where you use your arm to navigate and interact with a physics-based world.",
      technologies: ["Gamemaker Studio 1.4", "Blender", "Reaper", "Audacity"],
      media: {
        type: "video",
        src: "/src/assets/videos/Armsim.mp4",
        alt: "Armsim Clipshow",
      },
      mediaPosition: "left",
      backgroundImage: borderImage,
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

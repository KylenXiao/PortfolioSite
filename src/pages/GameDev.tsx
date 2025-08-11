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
        src: "/videos/Armsim.mp4",
        alt: "Armsim Clipshow",
      },
      mediaPosition: "left",
      backgroundImage: borderImage,
    },
    {
      title: "DotCO",
      subtitle: "2018-2019",
      description: "A game where you have to manage a company by creating products, funding research, managing employees, completing contracts, and adapting to positive or negative events.",
      technologies: ["Gamemaker Studio 1.4"],
      media: {
        type: "video",
        src: "/videos/DotCO.mp4",
        alt: "DotCO Clipshow",
      },
      mediaPosition: "right",
      backgroundImage: borderImage,
    }
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
          <ProjectList title="Game Development Projects" projects={projects} />
        </div>
      </div>
    </div>
  );
}

export default GameDev;

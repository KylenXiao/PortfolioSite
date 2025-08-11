import ScrollingBackground from '../components/ScrollingBackground';
import ProjectList from '../components/ProjectList';
import { ProjectItemProps } from '../types';

function SoftwareEngineering() {
  const borderImage = "";
  const projects: ProjectItemProps[] = [
    {
      title: "TuneTalker",
      subtitle: "2024-2025",
      description: "A fully-functional music-focused social media and recommendation platform. Built in a group of four talented developers as a senior capstone project.",
      technologies: ["React", "TypeScript", ".NET", "MySQL", "AWS", "Gitlab", "APIs"],
      media: {
        type: "gif",
        src: "/images/Tunetalker.gif",
        alt: "TuneTalker Project",
      },
      mediaPosition: "left",
      backgroundImage: borderImage,
    },
    {
      title: "Self-Hosting Experimentation",
      subtitle: "2024-Present",
      description: "A Proxmox server running various applications on virtual machines, linked together with a reverse proxy and authentication.",
      technologies: ["Proxmox", "VirtualBox", "Nginx", "Docker", "Docker Compose", "Github Actions CI/CD", "Authentik", "Gitea"],
      media: {
        type: "image",
        src: "/images/proxmox.png",
        alt: "Project media",
      },
      mediaPosition: "right",
      backgroundImage: borderImage,
      link: "https://lookslikeivelost.xyz/",
    },
    {
      title: "Pepper Flakes",
      subtitle: "2025",
      description: "A chat bot which uses character descriptions and OpenAI API to impersonate characters, with text and voice functionality.",
      technologies: ["OpenAI API", "Google Speech-to-Text", "ElevenLabs", "Python", "Docker Compose", "NodeJS", "npm", "PostgreSQL", "DiscordJS"],
      mediaPosition: "left",
      backgroundImage: borderImage,
      github: "https://github.com/LooksLikeIveLost/PepperFlakes",
    },
    {
      title: "Portfolio Site",
      subtitle: "2025",
      description: "A portfolio website built with React and TypeScript.",
      technologies: ["React", "TypeScript"],
      mediaPosition: "left",
      backgroundImage: borderImage,
      link: "https://portfolio.lookslikeivelost.xyz/",
      github: "https://github.com/KylenXiao/PortfolioSite",
    },
    {
      title: "Bingo Bot",
      subtitle: "2024",
      description: "A program that captures regions of the screen to read bingo numbers and marks cards in a virtual bingo game.",
      technologies: ["Python", "EasyOCR", "pyautogui"],
      mediaPosition: "left",
      backgroundImage: borderImage,
      github: "https://github.com/LooksLikeIveLost/BingoBot",
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

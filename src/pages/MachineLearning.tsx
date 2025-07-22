import ScrollingBackground from '../components/ScrollingBackground';
import ProjectList from '../components/ProjectList';
import { ProjectItemProps } from '../types';

function MachineLearning() {
  const borderImage = "";
  const projects: ProjectItemProps[] = [
    {
      title: "Puyo RL",
      subtitle: "2024",
      description: "A reinforcement learning agent trained to play games of Puyo Puyo.",
      technologies: ["Python", "OpenAI Gym", "Stable Baselines3", "PPO", "DQN"],
      media: {
        type: "gif",
        src: "https://example.com/puyo-rl.gif",
        alt: "Puyo RL Project",
      },
      mediaPosition: "left",
      backgroundImage: borderImage,
      github: "https://github.com/LooksLikeIveLost/PuyoRL",
    },
    {
      title: "Dialogue Generator",
      subtitle: "2024",
      description: "A simple language model fine-tuned to output short tidbits of dialogue, like what would be found in a video game.",
      technologies: ["Python", "Transformers", "distilgpt2"],
      mediaPosition: "left",
      backgroundImage: borderImage,
      github: "https://github.com/LooksLikeIveLost/DialogueGenerator",
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
          <ProjectList title="Machine Learning Projects" projects={projects} />
        </div>
      </div>
    </div>
  );
}

export default MachineLearning;

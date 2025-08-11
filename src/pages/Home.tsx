import ProjectList from '../components/ProjectList';
import ScrollingBackground from '../components/ScrollingBackground';
import { ProjectItemProps } from '../types';
import './Home.css';

function Home() {
  const featuredProjects: ProjectItemProps[] = [
    
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
          <ProjectList title="Featured Projects" projects={featuredProjects} />
        </div>
      </div>
    </div>
  );
}

export default Home;
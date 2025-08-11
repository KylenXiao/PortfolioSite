import ScrollingBackground from '../components/ScrollingBackground';
import ProjectList from '../components/ProjectList';
import { ProjectItemProps } from '../types';

function ArtGallery() {
  const projects: ProjectItemProps[] = [
    
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
          <ProjectList title="Art Gallery" projects={projects} />
        </div>
      </div>
    </div>
  );
}

export default ArtGallery;

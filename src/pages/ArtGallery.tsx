import ScrollingBackground from '../components/ScrollingBackground';
import ProjectList from '../components/ProjectList';
import { ProjectItemProps } from '../types';

function ArtGallery() {
  const projects: ProjectItemProps[] = [
    {
      title: "Digital Art Collection",
      subtitle: "Digital Painting",
      description: "A collection of digital paintings and illustrations",
      technologies: ["Photoshop", "Procreate", "Illustrator"],
      media: {
        type: "image",
        src: "https://example.com/art-project.jpg",
        alt: "Art Project",
      },
      mediaPosition: "left",
      link: "https://example.com/art-gallery",
      github: undefined,
    },
    // Add more art projects here
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

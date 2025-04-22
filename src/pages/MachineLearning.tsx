import ScrollingBackground from '../components/ScrollingBackground';
import ProjectList from '../components/ProjectList';
import { ProjectItemProps } from '../types';

function MachineLearning() {
  const projects: ProjectItemProps[] = [
    {
      title: "ML Research Project",
      subtitle: "Deep Learning",
      description: "A deep learning model for image classification",
      technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV"],
      media: {
        type: "image",
        src: "https://example.com/ml-project.jpg",
        alt: "ML Project",
      },
      mediaPosition: "left",
      link: "https://example.com/ml-project",
      github: "https://github.com/username/ml-project",
    },
    // Add more machine learning projects here
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
          <ProjectList title="Machine Learning Projects" projects={projects} />
        </div>
      </div>
    </div>
  );
}

export default MachineLearning;

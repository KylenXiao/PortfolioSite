import Media from './Media'
import { ProjectItemProps } from '../types'
import './ProjectItem.css'

function ProjectItem({
  title,
  subtitle,
  description,
  technologies,
  media,
  mediaPosition = 'left',
  link,
  github,
  backgroundImage
}: ProjectItemProps) {
  return (
    <div 
      className={`project-item media-${mediaPosition}`}
      style={backgroundImage ? { '--background-image': `url(${backgroundImage})` } as React.CSSProperties : undefined}>

      <div className="project-content-wrapper">
        {media && (
          <div className="project-media-container">
            <Media {...media} />
          </div>
        )}

        <div className="project-content">
          <h2 className="project-title">{title}</h2>

          {subtitle && (
            <h3 className="project-subtitle">{subtitle}</h3>
          )}

          <div className="project-description">
            {description}
          </div>

          <div className="project-technologies">
            <ul>
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className="project-links">
            {link && (
              <a
                className="project-link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            )}

            {github && (
              <a
                className="github-link"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem
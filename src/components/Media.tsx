import { MediaProps } from '../types'

const Media = ({
  type,
  src,
  alt = 'Project media',
  autoPlay = false,
  loop = false,
  controls = true
}: MediaProps) => {
  let content = null;

  switch (type) {
    case 'image':
      content = (
        <img
          className="project-image"
          src={src}
          alt={alt}
        />
      );
      break;

    case 'audio':
      content = (
        <audio
          className="project-audio"
          src={src}
          autoPlay={autoPlay}
          loop={loop}
          controls={controls}
        />
      );
      break;

    case 'video':
      content = (
        <video
          className="project-video"
          src={src}
          autoPlay={autoPlay}
          loop={loop}
          controls={controls}
          muted={autoPlay}
        />
      );
      break;

    case 'gif':
      content = (
        <img
          className="project-gif"
          src={src}
          alt={alt}
        />
      );
      break;
  }

  return (
    <div className={`project-media ${type}-container`}>
      {content}
    </div>
  )
}

export default Media
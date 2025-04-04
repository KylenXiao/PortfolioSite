export interface ArtworkProps {
  color?: string;
  speed?: number;
  topImg: CanvasImageSource;
  middleImg: CanvasImageSource;
  bottomImg: CanvasImageSource;
}

export interface MediaProps {
  type: 'image' | 'audio' | 'video' | 'gif';
  src: string;
  alt?: string;
  autoPlay?: boolean;
  loop?: boolean;
  controls?: boolean;
}

export interface ProjectItemProps {
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  media?: MediaProps;
  mediaPosition?: 'left' | 'right';
  link?: string;
  github?: string;
}
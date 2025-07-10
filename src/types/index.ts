export interface BackgroundImages {
  top: string;
  middle: string;
  bottom: string;
}

export interface ScrollingBackgroundProps {
  images: BackgroundImages;
  className?: string;
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
  backgroundImage?: string;
}
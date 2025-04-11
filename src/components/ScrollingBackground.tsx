import { useEffect, useRef } from 'react';
import { ScrollingBackgroundProps } from '../types';
import './ScrollingBackground.css';

function ScrollingBackground({
  images,
  className = ''
}: ScrollingBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvas = () => {
      // Set canvas size to match window size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Load images
      const topImg = new Image();
      const middleImg = new Image();
      const bottomImg = new Image();

      let loadedImages = 0;
      const totalImages = 3;

      const drawBackground = () => {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate dimensions
        const scale = canvas.width / topImg.width;

        // Set vars
        const tw = topImg.width * scale;
        const th = topImg.height * scale / 2;
        const mw = middleImg.width * scale;
        const mh = middleImg.height * scale / 2;
        const bw = bottomImg.width * scale;
        const bh = bottomImg.height * scale / 2;

        const middleHeight = canvas.height - th - bh;

        // Draw top
        ctx.drawImage(topImg, 0, 0, tw, th);

        // Draw middle
        const middleNum = Math.ceil(middleHeight / mh);
        const tileHeight = (middleHeight / middleNum) / (mh * scale);
        for (let i = 0; i < middleNum; i++) {
          ctx.drawImage(middleImg, 0, th + i * (tileHeight) - 1, mw, mh);
        }

        // Draw bottom
        ctx.drawImage(bottomImg, 0, canvas.height - bh, bw, bh);
      };

      const onImageLoad = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          drawBackground();
        }
      };

      // Load all images
      topImg.onload = onImageLoad;
      middleImg.onload = onImageLoad;
      bottomImg.onload = onImageLoad;

      topImg.src = images.top;
      middleImg.src = images.middle;
      bottomImg.src = images.bottom;
    };

    // Initial update
    updateCanvas();

    // Update on resize
    window.addEventListener('resize', updateCanvas);
    return () => window.removeEventListener('resize', updateCanvas);
  }, [images]);

  return (
    <canvas 
      ref={canvasRef}
      className={`scrolling-background ${className}`}
    />
  );
}

export default ScrollingBackground;
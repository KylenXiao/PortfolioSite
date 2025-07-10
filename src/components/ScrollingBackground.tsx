import { useEffect, useRef, useState } from 'react';
import { ScrollingBackgroundProps } from '../types';
import './ScrollingBackground.css';

function ScrollingBackground({
  images,
  className = ''
}: ScrollingBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pageHeight, setPageHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const imagesRef = useRef<{
    top: HTMLImageElement | null;
    middle: HTMLImageElement | null;
    bottom: HTMLImageElement | null;
    loaded: boolean;
  }>({ top: null, middle: null, bottom: null, loaded: false });

  // Gets the full document height
  const getDocumentHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  // Handles scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update page height
  useEffect(() => {
    const updatePageHeight = () => {
      setPageHeight(getDocumentHeight());
    };

    // Set height
    setTimeout(updatePageHeight, 100);
    
    // Update on resize
    window.addEventListener('resize', updatePageHeight);
    return () => window.removeEventListener('resize', updatePageHeight);
  }, []);

  // Load images once
  useEffect(() => {
    const loadImages = () => {
      const topImg = new Image();
      const middleImg = new Image();
      const bottomImg = new Image();
      
      let loadedCount = 0;
      const totalImages = 3;
      
      const checkAllLoaded = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          imagesRef.current = {
            top: topImg,
            middle: middleImg,
            bottom: bottomImg,
            loaded: true
          };
        }
      };
      
      topImg.onload = checkAllLoaded;
      middleImg.onload = checkAllLoaded;
      bottomImg.onload = checkAllLoaded;
      
      topImg.src = images.top;
      middleImg.src = images.middle;
      bottomImg.src = images.bottom;
    };
    
    loadImages();
  }, [images]);

  // Draw canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || pageHeight === 0 || !imagesRef.current.loaded) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Get images
    const { top: topImg, middle: middleImg, bottom: bottomImg } = imagesRef.current;
    if (!topImg || !middleImg || !bottomImg) return;

    // Calculate scale
    const scale = canvas.width / topImg.width;

    // Set vars
    const tw = topImg.width * scale;
    const th = topImg.height * scale;
    const mw = middleImg.width * scale;
    const mh = middleImg.height * scale;
    const bw = bottomImg.width * scale;
    const bh = bottomImg.height * scale;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate parallax offset
    const parallaxMultiplier = 1;
    const parallaxOffset = scrollY * parallaxMultiplier;

    // Draw top image
    ctx.drawImage(topImg, 0, -parallaxOffset, tw, th);

    // Draw middle with parallax
    const visibleMiddleHeight = pageHeight - th - bh;
    const middleNum = Math.ceil(visibleMiddleHeight / mh);
    const tileHeight = (visibleMiddleHeight / middleNum);
    
    for (let i = 0; i < middleNum; i++) {
      const yPos = th + i * (tileHeight) - parallaxOffset;
      // Draw if visible
      if (yPos > -mh && yPos < canvas.height) {
        ctx.drawImage(middleImg, 0, yPos, mw, tileHeight);
      }
    }

    // Draw bottom image
    const bottomPosition = pageHeight - bh - parallaxOffset;
    if (bottomPosition < canvas.height + bh && bottomPosition > -bh) {
      ctx.drawImage(bottomImg, 0, bottomPosition, bw, bh);
    }
  }, [scrollY, pageHeight, images]);

  return (
    <canvas 
      ref={canvasRef}
      className={`scrolling-background ${className}`}
    />
  );
}

export default ScrollingBackground;
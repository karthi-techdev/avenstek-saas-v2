import React, { useEffect, useRef } from 'react';

export const BackgroundParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { 
      x: number; 
      y: number; 
      dx: number; 
      dy: number; 
      size: number; 
      opacity: number; 
      pulsateSpeed: number;
      baseOpacity: number;
    }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Increased particle density for better visibility
      const particleCount = Math.min(window.innerWidth / 8, 150); 
      
      for (let i = 0; i < particleCount; i++) {
        const baseOpacity = Math.random() * 0.4 + 0.1;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 0.3, // Slower, more elegant movement
          dy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5, // Smaller size as requested
          opacity: baseOpacity,
          baseOpacity: baseOpacity,
          pulsateSpeed: Math.random() * 0.02 + 0.005
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Twinkle effect - oscillate around baseOpacity
        const oscillation = Math.sin(Date.now() * particle.pulsateSpeed) * 0.15;
        particle.opacity = particle.baseOpacity + oscillation;
        
        // Clamp opacity to max 0.7 as requested
        const currentOpacity = Math.max(0.1, Math.min(0.7, particle.opacity));
        
        // Use theme color (Primary Orange) mixed with white for elegance
        if (Math.random() > 0.8) {
             ctx.fillStyle = `rgba(254, 150, 3, ${currentOpacity})`; // Orange
        } else {
             ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`; // White
        }

        ctx.fill();

        // Update position
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
};
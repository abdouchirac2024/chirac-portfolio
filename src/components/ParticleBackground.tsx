
import React, { useEffect, useState } from 'react';

const ParticleBackground: React.FC = () => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    const particlesArray = [];
    const count = window.innerWidth < 768 ? 30 : 50;
    
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 5 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 10;
      
      particlesArray.push(
        <div
          key={i}
          className="absolute rounded-full bg-primary/20 dark:bg-primary/30"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${x}%`,
            top: `${y}%`,
            animation: `float ${duration}s infinite ease-in-out ${delay}s`
          }}
        />
      );
    }
    
    setParticles(particlesArray);
    
    // Add keyframe animation dynamically
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      @keyframes float {
        0% {
          transform: translate(0, 0) rotate(0deg);
          opacity: 0.8;
        }
        50% {
          transform: translate(20px, -20px) rotate(180deg);
          opacity: 0.5;
        }
        100% {
          transform: translate(0, 0) rotate(360deg);
          opacity: 0.8;
        }
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {particles}
    </div>
  );
};

export default ParticleBackground;

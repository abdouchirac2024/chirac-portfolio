import React, { useState, useEffect, useRef } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [delay]);

  return (
    <div className="mb-4" ref={skillRef}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-progress${name === 'Animation : Extrêmement dans le futur' ? ' futuristic-glow' : ''}`}
          style={{
            width: visible ? `${percentage}%` : '0%',
          }}
        ></div>
      </div>
      {name === 'Animation : Extrêmement dans le futur' && (
        <style>{`
          .futuristic-glow {
            background: linear-gradient(90deg, #00fff0, #ff00ea, #00ff94, #ffe600);
            box-shadow: 0 0 20px 5px #00fff0, 0 0 40px 10px #ff00ea;
            animation: glow-future 2s infinite alternate;
          }
          @keyframes glow-future {
            0% { filter: brightness(1) drop-shadow(0 0 10px #00fff0); }
            100% { filter: brightness(1.5) drop-shadow(0 0 30px #ff00ea); }
          }
        `}</style>
      )}
    </div>
  );
};

export default SkillBar;

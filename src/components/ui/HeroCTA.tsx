"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from './AnimatedButton.module.css';

const TiltedArrow: React.FC<{ color?: string; className?: string }> = ({ color = "white", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
    style={{ transform: "scale(1)" }}
  >
    <path
      d="M0.24 15.76L15.76 0.24C15.76 0.24 11.76 4.24 0.24 0.24"
      stroke={color}
      strokeWidth="1.2"
    />
    <path
      d="M0.24 15.76L15.76 0.24C15.76 0.24 11.76 4.24 15.76 15.76"
      stroke={color}
      strokeWidth="1.2"
    />
  </svg>
);

const AnimatedButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current || !isHovered) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const maxDistance = 60;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const angle = Math.atan2(deltaY, deltaX);

      const moveX = Math.min(distance, maxDistance) * Math.cos(angle);
      const moveY = Math.min(distance, maxDistance) * Math.sin(angle);

      setPosition({ x: moveX, y: moveY });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);
    } else {
      handleMouseLeave();
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <div className="h-[150px] aspect-square flex items-center justify-center overflow-visible">
      <button
        ref={buttonRef}
        className={`group relative w-60 h-60 rounded-full transition-all duration-300 ease-in-out overflow-visible ${styles.animatedBackground}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}
      >
        <div className={`absolute inset-0 rounded-full ${styles.backgroundTransition}`}></div>
        {/* Text layer */}
        <div className="absolute inset-0 w-full h-full z-10">
          <div className="absolute inset-4 flex items-center justify-center">
            <div className={`absolute w-full h-full ${isHovered ? styles.spin : ''}`}>
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path
                    id="textCircle"
                    d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  />
                </defs>
                <text className={`text-[0.55rem] tracking-[0.35em] font-bold ${styles.textFill}`}>
                  <textPath href="#textCircle" startOffset="0%">
                    BOOK A CALL
                  </textPath>
                </text>
                <text className={`text-[0.55rem] tracking-[0.35em] font-bold ${styles.textFill}`}>
                  <textPath href="#textCircle" startOffset="50%">
                    BOOK A CALL
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Arrow container */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <TiltedArrow color="currentColor" className={`w-1/4 h-1/4 ${styles.arrowFill}`} />
        </div>
      </button>
    </div>
  );
};

export default AnimatedButton;


"use client";

import React, { useState, useRef, useEffect } from "react";

const TiltedArrow: React.FC<{ color?: string; className?: string }> = ({ color = "white", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
    style={{ transform: "scale(0.8)" }}
  >
    <path
      d="M0.24 15.76L15.76 0.24C15.76 0.24 11.76 4.24 0.24 0.24"
      stroke={color}
      strokeWidth="0.8"
    />
    <path
      d="M0.24 15.76L15.76 0.24C15.76 0.24 11.76 4.24 15.76 15.76"
      stroke={color}
      strokeWidth="0.8"
    />
  </svg>
);

const AnimatedButton: React.FC<{rotatingText: string}> = ({ rotatingText }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current || !isHovered) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const maxDistance = 8;

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
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <button
      ref={buttonRef}
      className="group relative w-40 h-40 z-50 rounded-full bg-black transition-all duration-300 ease-in-out overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.2s ease-out",
      }}
    >
      {/* Background layer with hover effect */}
      <div className="absolute inset-0 rounded-full transition-all duration-500 bg-[#ffffff1d]">
        <div
          className={`
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
            rounded-full bg-white transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${isHovered ? "w-[200%] h-[200%] opacity-100" : "w-0 h-0 opacity-0"}
          `}
        />
      </div>

      {/* Rotating text layer */}
      <div className="absolute inset-0 w-full h-full z-10">
        <div
          className={`
            absolute inset-0 rounded-full overflow-hidden transition-opacity duration-500
            ${isHovered ? "opacity-100" : "opacity-0"}
          `}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-full h-full animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path
                    id="textCircle"
                    d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  />
                </defs>
                <text className="text-[0.5rem] tracking-[0.30em] fill-black font-medium">
                  <textPath href="#textCircle" startOffset="0%">
                    {rotatingText}
                  </textPath>
                </text>
                <text className="text-[0.5rem] tracking-[0.30em] fill-black font-medium">
                  <textPath href="#textCircle" startOffset="50%">
                    {rotatingText}
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow container */}
      <div className="relative w-full h-full">
        {/* White Arrow (default) */}
        <div
          className={`
            absolute inset-0 flex items-center justify-center transition-opacity duration-500
            ${isHovered ? "opacity-0" : "opacity-100"}
          `}
        >
          <TiltedArrow color="white" className="w-1/2 h-1/2" />
        </div>

        {/* Black Arrow (hover) */}
        <div
          className={`
            absolute inset-0 flex items-center justify-center transition-opacity duration-500
            ${isHovered ? "opacity-100" : "opacity-0"}
          `}
        >
          <TiltedArrow color="black" className="w-1/2 h-1/2" />
        </div>
      </div>
    </button>
  );
};

export default AnimatedButton;


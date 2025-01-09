"use client";

import React, { useState } from "react";

// Custom type definitions
type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "filled" | "bordered";

// SVG Arrow component with configurable color
const TiltedArrow = ({ color = "white", className = "" }) => (
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

interface AnimatedButtonProps {
  /** Controls button size */
  size?: ButtonSize;
  /** Additional CSS classes */
  className?: string;
  /** Text that appears in the rotating circle */
  rotatingText?: string;
  /** Number of times the text repeats */
  repeatCount?: number;
  /** Controls lg:hidden behavior */
  hidden?: boolean;
  /** Button style variant */
  variant?: ButtonVariant;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  size = "lg",
  className = "",
  rotatingText = "BOOK A CALL",
  repeatCount = 3,
  hidden = true,
  variant = "filled"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Size mappings for responsive design
  const sizeClasses = {
    sm: "w-[64px] h-[64px]", // 5rem
    md: "w-24 h-24 lg:w-32 lg:h-32", // 6rem mobile, 8rem desktop
    lg: "w-[168px] h-[168px] lg:w-40 lg:h-40", // 6rem mobile, 10rem desktop
  };

  // Combine classes for button styling
  const buttonClasses = `
    group relative rounded-full transition-all duration-300 ease-in-out z-50 overflow-hidden
    ${hidden ? "hidden lg:block" : ""}
    ${sizeClasses[size]}
    ${variant === "bordered" ? "border-2 border-white hover:border-black" : ""}
    ${className}
    `.trim();

  return (
    <button
      className={buttonClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background layer with hover effect */}
      <div
        className={`
        absolute inset-0 rounded-full transition-all duration-500
        ${variant === "filled" ? "bg-[#ffffff1d]" : "bg-transparent"}
      `}
      >
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
                  <textPath href="#textCircle" startOffset="0">
                    {rotatingText.repeat(repeatCount)}
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow container */}
      <div className={`relative ${sizeClasses[size]}`}>
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

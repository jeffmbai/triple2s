"use client";

import React, { useState } from "react";

// Custom type definitions remain the same
type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "filled" | "bordered";

// Inverted SVG Arrow component - default color is now black
const TiltedArrow = ({ color = "black", className = "" }) => (
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
	size?: ButtonSize;
	className?: string;
	rotatingText?: string;
	repeatCount?: number;
	hidden?: boolean;
	variant?: ButtonVariant;
}

const InvertedAnimatedButton: React.FC<AnimatedButtonProps> = ({
	size = "lg",
	className = "",
	rotatingText = "BOOK A CALL ",
	repeatCount = 3,
	hidden = true,
	variant = "filled",
}) => {
	const [isHovered, setIsHovered] = useState(false);

	// Size mappings remain the same
	const sizeClasses = {
		sm: "w-20 h-20",
		md: "w-24 h-24 lg:w-32 lg:h-32",
		lg: "w-24 h-24 lg:w-40 lg:h-40",
	};

	const paddingClasses = {
		sm: "p-6",
		md: "p-7 lg:p-8",
		lg: "p-8 lg:p-10",
	};

	// Updated button classes with inverted colors
	const buttonClasses = `
    group relative rounded-full transition-all duration-300 ease-in-out z-50 overflow-hidden
    ${hidden ? "hidden lg:block" : ""}
    ${variant === "bordered" ? "border-2 border-black hover:border-white" : ""}
    ${className}
  `.trim();

	return (
		<button
			className={buttonClasses}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Inverted background layer */}
			<div
				className={`
          absolute inset-0 rounded-full transition-all duration-500
          ${variant === "filled" ? "bg-black bg-opacity-10" : "bg-transparent"}
        `}
			>
				<div
					className={`
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
            rounded-full bg-black transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${isHovered ? "w-[200%] h-[200%] opacity-100" : "w-0 h-0 opacity-0"}
          `}
				/>
			</div>

			{/* Rotating text layer with inverted colors */}
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
								<text className="text-[0.5rem] tracking-[0.30em] fill-white font-medium">
									<textPath href="#textCircle" startOffset="0">
										{rotatingText.repeat(repeatCount)}
									</textPath>
								</text>
							</svg>
						</div>
					</div>
				</div>
			</div>

			{/* Arrow container with inverted colors */}
			<div className={`relative ${sizeClasses[size]} ${paddingClasses[size]}`}>
				{/* Black Arrow (default) */}
				<div
					className={`
            absolute inset-0 flex items-center justify-center transition-opacity duration-500
            ${isHovered ? "opacity-0" : "opacity-100"}
          `}
				>
					<TiltedArrow color="black" className="w-1/2 h-1/2" />
				</div>

				{/* White Arrow (hover) */}
				<div
					className={`
            absolute inset-0 flex items-center justify-center transition-opacity duration-500
            ${isHovered ? "opacity-100" : "opacity-0"}
          `}
				>
					<TiltedArrow color="white" className="w-1/2 h-1/2" />
				</div>
			</div>
		</button>
	);
};

export default InvertedAnimatedButton;

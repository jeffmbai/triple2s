import React from "react";

export default function GradientBorderButton({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<button className="relative group">
			{/* Gradient border container */}
			<div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3301E0] to-[#CD02DF] blur-sm transition-all duration-300 group-hover:blur-md" />

			{/* Inner button with background mask */}
			<div className="relative px-12 py-6 rounded-full bg-black flex items-center justify-center transition-transform duration-300 group-hover:scale-[0.99]">
				<span className="font-semibold text-[16px] leading-[24px] text-white">{children}</span>
			</div>

			{/* Gradient overlay for hover effect */}
			<div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3301E0] to-[#CD02DF] opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
		</button>
	);
}

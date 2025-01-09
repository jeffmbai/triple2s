"use client";
import { ComponentSimulation } from "./ComponentSimulaton";

export default function ComponentSimulationLayout({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		// Outer container without overflow-hidden to allow button to extend
		<div className="relative">
			{/* Inner container with overflow-hidden for rounded corners and simulation */}
			<div
				className={`relative bg-black text-white overflow-hidden ${className}`}
			>
				{/* Simulation container */}
				<div className="absolute inset-0 z-10 rounded-[inherit]">
					<ComponentSimulation />
				</div>
				{/* Content container */}
				<div className="relative h-full">{children}</div>
			</div>
		</div>
	);
}

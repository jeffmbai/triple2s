"use client";
import { useEffect, useRef } from "react";
import WebGLFluidEnhanced from "webgl-fluid-enhanced";

function ComponentSimulation() {
	const containerRef = useRef<HTMLDivElement>(null);
	// Store the current simulation instance in a ref so we can clean it up
	const simulationRef = useRef<WebGLFluidEnhanced | null>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const parentElement = containerRef.current.parentElement;
		if (!parentElement) return;

		// Initialize simulation with current dimensions
		function initSimulation() {
			// Clean up existing simulation if it exists
			if (simulationRef.current) {
				simulationRef.current.stop();
			}

			// Create new simulation instance
			simulationRef.current = new WebGLFluidEnhanced(
				containerRef.current as HTMLElement,
			);

			// Configure the simulation
			simulationRef.current.setConfig({
				transparent: true,
				curl: 1,
				bloomIntensity: 0.2,
				simResolution: 128,
				pressureIterations: 3,
				bloomThreshold: 0.3,
			});

			// Start the simulation
			simulationRef.current.start();
		}

		// Initialize simulation for the first time
		initSimulation();

		// Debounce function to prevent too frequent reinitializations
		let resizeTimeout: NodeJS.Timeout;

		// Handle resize events
		const handleResize = () => {
			// Clear any existing timeout
			if (resizeTimeout) {
				clearTimeout(resizeTimeout);
			}

			// Set a new timeout to reinitialize after resize ends
			resizeTimeout = setTimeout(() => {
				initSimulation();
			}, 250); // Wait 250ms after resize ends before reinitializing
		};

		// Create ResizeObserver to watch for container size changes
		const resizeObserver = new ResizeObserver(handleResize);
		resizeObserver.observe(parentElement);

		// Cleanup function
		return () => {
			if (resizeTimeout) {
				clearTimeout(resizeTimeout);
			}
			if (simulationRef.current) {
				simulationRef.current.stop();
			}
			resizeObserver.disconnect();
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className="w-full h-full"
			style={{ position: "absolute", top: 0, left: 0 }}
		/>
	);
}

export { ComponentSimulation };

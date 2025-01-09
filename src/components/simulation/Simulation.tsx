"use client";
import { useEffect, useRef } from "react";
import WebGLFluidEnhanced from "webgl-fluid-enhanced";

function Simulation() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initialize the simulation
        const simulation = new WebGLFluidEnhanced(containerRef.current as HTMLElement);
        simulation.setConfig({
			"pressure": 1,
			"pressureIterations": 1,
			"curl": 1,
			densityDissipation: 1,
			velocityDissipation: .05,
			"splatRadius": 0.08,
			"splatForce": 1000,
			"colorUpdateSpeed": 10,
			"transparent": true,
			"bloomIterations": 8,
			colorful: true,
			bloom: false,
			bloomThreshold: 0.3,
			bloomIntensity: 0.2,
			"simResolution": 128,
			"sunrays": false,
            brightness: 0.1
		  });
        simulation.start();

        // Global mousemove listener
        const handleMouseMove = (event: MouseEvent) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                // Calculate coordinates relative to the fixed container
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                // Pass the adjusted coordinates to the simulation
                simulation.splatAtLocation(x + 250, y, event.movementX, event.movementY);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            simulation.stop();
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-full"
            style={{
                position: "fixed", // Matches the "fixed inset-0" style
                top: 0,
                left: 0,
                zIndex: 10,
                pointerEvents: "none", // Prevent this div from blocking interactions
            }}
        />
    );
}

export { Simulation };

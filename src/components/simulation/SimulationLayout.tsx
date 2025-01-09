"use client";

import { Simulation } from "./Simulation";

export default function SimulationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen text-white flex items-center justify-center">
            <div className="fixed inset-0 z-0">
                <Simulation />
            </div>
            <div className="relative z-100">{children}</div>
        </div>
    );
}

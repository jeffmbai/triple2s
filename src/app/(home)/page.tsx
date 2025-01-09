// app/page.tsx
"use client";
import MainLayout from "@/components/layouts/MainLayout";
import SimulationLayout from "@/components/simulation/SimulationLayout";
import Hero from "@/components/home-page/Hero";
import GridCards from "@/components/home-page/GridCards";
import Info from "@/components/home-page/Info";
import Team from "@/components/home-page/Team";
import Blog from "@/components/home-page/Blog";
import FAQ from "@/components/home-page/FAQ";

export default function Home() {
  return (
    <SimulationLayout>
      <MainLayout className="bg-transparent" container="w-full md:max-w-7xl">
        <Hero />
        <GridCards />
        <Info />
        <Team />
        <Blog />
        <FAQ />
      </MainLayout>
    </SimulationLayout>
  );
}

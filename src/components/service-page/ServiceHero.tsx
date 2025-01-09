"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ComponentSimulationLayout from "../simulation/ComponentSimulationLayout";
import AnimatedButton from "../ui/AnimatedButton";

// We've simplified the interfaces to just what we need
interface NavItem {
	id: number;
	name: string;
	href: string;
	icon?: boolean;
}

interface NavButtonProps {
	icon?: boolean;
	children: React.ReactNode;
	className?: string;
	href: string;
}

function NavButton({ icon, children, className = "", href }: NavButtonProps) {
	// Now NavButton is a simpler component that always wraps a Link
	return (
		<Link
			href={href}
			className={`
        group
        flex items-center justify-center
        rounded-full border border-[#ffffff4d]
        px-4 md:px-8 py-2
        text-base
        transition-all duration-300
        hover:bg-gradient-to-r from-[#3301E0] to-[#CD02DF]
        hover:border-transparent
        hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
        focus:ring-offset-black
        ${className}
      `}
		>
			{children}
			{icon && <ChevronDown className="ml-3.5 w-5 h-5" />}
		</Link>
	);
}

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Close mobile menu when screen size changes to desktop
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Navigation data without dropdown items
	const navButtonData: NavItem[] = [
		{
			id: 0,
			name: "Services",
			href: "/services",
			icon: true,
		},
		{
			id: 1,
			name: "Blog",
			href: "/blog",
		},
		{
			id: 2,
			name: "The Team",
			href: "/team",
		},
		{
			id: 3,
			name: "Book a Call",
			href: "/book-a-call",
		},
	];

	return (
		<header className="relative z-50">
			<div className="flex items-center justify-between lg:py-8 lg:px-16 md:px-8">
				{/* Logo with hover effect */}
				<Link
					href="/"
					className="focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
				>
					<Image
						src="/logo.svg"
						alt="logo"
						width={46}
						height={32}
						className="transition-transform duration-300 hover:scale-110"
					/>
				</Link>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
					aria-expanded={isMenuOpen}
					aria-controls="mobile-menu"
				>
					{isMenuOpen ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-4">
					{navButtonData.map((item) => (
						<NavButton key={item.id} href={item.href} icon={item.icon}>
							{item.name}
						</NavButton>
					))}
				</nav>
			</div>

			{/* Mobile Navigation with smooth transitions */}
			<div
				id="mobile-menu"
				className={`
          transform transition-all duration-300 ease-in-out z-50
          ${
						isMenuOpen
							? "translate-y-0 opacity-100"
							: "-translate-y-10 opacity-0 pointer-events-none"
					}
          md:hidden
        `}
			>
				<nav className="absolute top-full left-0 right-0 bg-black/95 border-t border-[#ffffff1a] overflow-hidden">
					{navButtonData.map((item) => (
						<NavButton
							key={item.id}
							href={item.href}
							icon={item.icon}
							className="w-full justify-start rounded-none py-4 border-none hover:bg-white/5"
						>
							{item.name}
						</NavButton>
					))}
				</nav>
			</div>
		</header>
	);
}

export default function ServiceHero() {
	return (
		<section className="rounded-b-3xl max-w-[90%] mx-auto">
			<ComponentSimulationLayout className="h-[650px] rounded-b-3xl">
				<Navbar />
				<div className="relative flex flex-col items-center justify-center mx-auto max-w-[850px] px-4 pt-12 pb-32">
					{/* Text content wrapper */}
					<div className="text-center space-y-6">
						{/* Headline with improved responsive sizing */}
						<h1 className="text-5xl lg:text-[5.5rem] font-medium leading-[1.1] z-50">
							Get #1 on Google Search
						</h1>

						{/* Description text with proper width constraints and opacity */}
						<p className="text-lg mx-auto max-w-[450px] lg:max-w-[600px] text-white/80 z-50">
							Struggling to rank on Google? Triple2s offers tailored SEO
							services in Toronto, helping local businesses overcome visibility
							challenges and achieve higher search engine rankings.
						</p>
					</div>

					{/* Floating button container
      Using absolute positioning to break out of the flow
      translate-y-1/2 moves it halfway down
      A white background creates the floating effect */}
					<div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-50">
						<AnimatedButton />
					</div>
				</div>
			</ComponentSimulationLayout>
		</section>
	);
}

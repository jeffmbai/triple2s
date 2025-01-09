import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";
import GradientBorderButton from "./GradientBorderButton";

// TypeScript interfaces for better type safety
interface NavigationLink {
	name: string;
	href: string;
}

interface NavigationSection {
	primary: NavigationLink[];
	secondary: NavigationLink[];
}

const Footer = () => {
	// Navigation links data structure organized by section
	const navigationLinks: NavigationSection = {
		primary: [
			{ name: "Home", href: "/" },
			{ name: "Services", href: "/services" },
			{ name: "Contact", href: "/contact" },
		],
		secondary: [
			{ name: "Blog", href: "/blog" },
			{ name: "Privacy Policy", href: "/privacy" },
			{ name: "Terms & Conditions", href: "/terms" },
		],
	};

	// Social media links configuration with icon components
	const socialLinks = [
		{ name: "Twitter", icon: Twitter, href: "#" },
		{ name: "Facebook", icon: Facebook, href: "#" },
		{ name: "LinkedIn", icon: Linkedin, href: "#" },
		{ name: "Instagram", icon: Instagram, href: "#" },
	];

	return (
		// Main footer container with elevated z-index and relative positioning
		<footer className="relative w-full text-white py-16">
			{/* Main content wrapper */}
			<div className="relative">
				{/* Call-to-action section */}
				<div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-10 w-full border-b border-[#FFFFFF2D] pb-20">
					<h1 className="capitalize text-5xl leading-[56px] font-bold">
						Let&apos;s create something great
					</h1>
					<div className="relative z-50">
						<GradientBorderButton>Get in Touch</GradientBorderButton>
					</div>
				</div>

				{/* Main content section */}
				<div className="relative my-20 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-10">
					{/* Logo and social links */}
					<div className="space-y-6 z-50">
						<Link href="/" className="relative inline-block">
							<Image
								src="/logo.svg"
								alt="Triple2s Logo"
								width={48}
								height={48}
								className="w-12 h-12"
							/>
						</Link>
						<div className="relative flex space-x-4">
							{socialLinks.map((social) => (
								<Link
									key={social.name}
									href={social.href}
									className="relative p-2 rounded-full border border-white hover:border-purple-500 transition-colors duration-200"
									aria-label={`Visit our ${social.name} page`}
								>
									<social.icon className="w-5 h-5 text-purple-500" />
								</Link>
							))}
						</div>
					</div>

					{/* Navigation links */}
					<div className="relative z-50">
						<div className="grid grid-cols-2 gap-x-16 gap-y-4 lg:text-right">
							{/* Primary Navigation Links */}
							<nav className="relative flex flex-col space-y-4">
								{navigationLinks.primary.map((link) => (
									<Link
										key={link.name}
										href={link.href}
										className="relative text-white hover:text-gray-300 transition-colors duration-200"
									>
										{link.name}
									</Link>
								))}
							</nav>

							{/* Secondary Navigation Links */}
							<nav className="relative flex flex-col space-y-4">
								{navigationLinks.secondary.map((link) => (
									<Link
										key={link.name}
										href={link.href}
										className="relative text-white text-[16px] font-medium hover:text-gray-300 transition-colors duration-200"
									>
										{link.name}
									</Link>
								))}
							</nav>
						</div>
					</div>
				</div>

				{/* Footer information */}
				<div className="relative flex flex-col lg:flex-row items-center justify-between w-full">
					<address className="text-white text-[16px] font-medium not-italic">
						375 University Ave #102, Toronto, ON M5G 2J5, Canada
					</address>
					<p className="text-[16px] text-white font-medium">
						© Copyright {new Date().getFullYear()} Profecient by Triple2s. All
						rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

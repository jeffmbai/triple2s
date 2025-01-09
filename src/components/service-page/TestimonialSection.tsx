"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ComponentSimulationLayout from "../simulation/ComponentSimulationLayout";

const TestimonialSection = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [touchStart, setTouchStart] = useState(0);
	const [touchEnd, setTouchEnd] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	// Check if we're on mobile using window.innerWidth
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 1024);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const testimonials = [
		{
			quote:
				"Triple2s has some of the best marketing & SEO strategies for the cryptocurrency space. They helped us with campaigns, SEO tricks, community building and more. Robert is a very easy person to work with and gets things DONE.",
			author: "Eddy V.",
			position: "Head Marketing at Bybit",
			avatar: "/service/testimonial/bybit.svg",
			logo: "/marquee/bybit_logo.svg",
		},
		{
			quote:
				"Outstanding results in crypto marketing. The team's expertise in SEO and community engagement has been transformative for our platform.",
			author: "Sarah M.",
			position: "Marketing Director",
			avatar: "/service/testimonial/bybit.svg",
			logo: "/marquee/bybit_logo.svg",
		},
		{
			quote:
				"Triple2s delivered exceptional value with their comprehensive SEO strategy. Their deep understanding of the crypto space sets them apart.",
			author: "James R.",
			position: "CEO",
			avatar: "/service/testimonial/bybit.svg",
			logo: "/marquee/bybit_logo.svg",
		},
	];

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
		if (!isMobile) return;
		setTouchStart(e.touches[0].clientX);
	};

	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
		if (!isMobile) return;
		setTouchEnd(e.touches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (!isMobile) return;

		if (touchStart - touchEnd > 75) {
			setCurrentSlide((current) =>
				current === testimonials.length - 1 ? 0 : current + 1,
			);
		}
		if (touchStart - touchEnd < -75) {
			setCurrentSlide((current) =>
				current === 0 ? testimonials.length - 1 : current - 1,
			);
		}
	};

	// Content for both mobile and desktop versions

	return (
		<ComponentSimulationLayout className="rounded-3xl mb-4">
			{isMobile ? (
				// Mobile version with careful z-index layering
				<div className="w-full grid items-center justify-center p-6">
					{/* Main carousel container - z-5 to show simulation */}
					<div
						className="overflow-hidden touch-pan-x relative z-5"
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}
					>
						<div
							className="transition-transform duration-300 ease-in-out"
							style={{ transform: `translateX(-${currentSlide * 100}%)` }}
						>
							<div className="flex">
								{testimonials.map((testimonial, index) => (
									<div
										key={index}
										className="w-full flex-shrink-0"
										style={{ width: "100%" }}
									>
										{/* Text content - z-5 to show simulation */}
										<h1 className="z-50 text-3xl leading-tight mb-10 relative z-5">
											&quot;{testimonial.quote.split(".")[0]}.
											<span className="text-[#FFFFFF5D]">
												{testimonial.quote.split(".").slice(1).join(".")}&quot;
											</span>
										</h1>
										{/* Avatar and info section - z-5 to show simulation */}
										<div className="flex items-center gap-5 relative z-5">
											<div className="rounded-full p-3 border border-[#CD02DF]">
												<Image
													src={testimonial.avatar}
													alt="avatar"
													width={70}
													height={70}
												/>
											</div>
											<div className="space-y-1">
												<h1 className="z-50 text-lg">{testimonial.author}</h1>
												<p className="text-base text-[#8B8B8B] z-50">
													{testimonial.position}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Navigation dots - z-5 to keep interactive but show simulation */}
					<div className="flex justify-center gap-2 mt-6 relative z-5">
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentSlide(index)}
								className={`w-2 h-2 rounded-full transition-colors duration-200 ${
									currentSlide === index ? "bg-white" : "bg-[#FFFFFF5D]"
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			) : (
				// Desktop version with careful z-index layering
				<div className="w-full grid items-center justify-center p-20">
					{/* Main content - z-5 to show simulation */}
					<h1 className="z-50 text-3xl text-white lg:text-[3rem] leading-tight mb-10 relative z-5">
						&quot;Triple2s has some of the best marketing & SEO strategies for
						the cryptocurrency space.{" "}
						<span className="text-[#FFFFFF5D]">
							They helped us with campaigns, SEO tricks, community building and
							more. Robert is a very easy person to work with and gets things
							DONE.&quot;
						</span>
					</h1>
					{/* Bottom section with avatar and navigation - z-5 to show simulation */}
					<div className="flex items-center justify-between w-full relative z-5">
						<div className="flex items-center gap-5">
							<div className="rounded-full p-3 border border-[#CD02DF]">
								<Image
									src="/service/testimonial/bybit.svg"
									alt="image"
									width={70}
									height={70}
								/>
							</div>
							<div className="space-y-1">
								<h1 className="z-50 text-lg text-white">Eddy V.</h1>
								<p className="text-base text-[#8B8B8B] z-50">
									Head Marketing at Bybit
								</p>
							</div>
							<div className="hidden lg:block">
								<Image
									src="/marquee/bybit_logo.svg"
									alt="partners"
									width={100}
									height={100}
									className="mx-10"
								/>
							</div>
						</div>
						{/* Navigation arrows - z-5 to maintain interactivity */}
						<div className="hidden lg:flex gap-1 items-center z-50">
							<Image
								src="/service/left.svg"
								alt="image"
								width={120}
								height={120}
							/>
							<Image
								src="/service/right.svg"
								alt="image"
								width={120}
								height={120}
							/>
						</div>
					</div>
				</div>
			)}
		</ComponentSimulationLayout>
	);
};

export default TestimonialSection;

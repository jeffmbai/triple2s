// "use client";
// import Image from "next/image";
// import React, { useRef, useState, useEffect } from "react";

// export default function ServiceGridCards() {
// 	// State for tracking current card and touch interactions
// 	const scrollContainerRef = useRef<HTMLDivElement>(null);
// 	const [currentCard, setCurrentCard] = useState(0);
// 	const [touchStart, setTouchStart] = useState<number | null>(null);
// 	const [touchEnd, setTouchEnd] = useState<number | null>(null);
// 	const [isMobile, setIsMobile] = useState(false);

// 	// Our card data with all the service offerings
// 	const cardData = [
// 		{
// 			id: 1,
// 			title: "Keyword Research & Strategy",
// 			desc: "Enhance your website's visibility and ranking with expert SEO strategies.",
// 		},
// 		{
// 			id: 2,
// 			title: "Keyword Clustering & Pillar Pages",
// 			desc: "Elevate your brand and engage your audience with expert Social Media strategies.",
// 		},
// 		{
// 			id: 3,
// 			title: "Content Calendar & Planning",
// 			desc: "We specialize in online gaming and crypto PPC campaigns.",
// 		},
// 		{
// 			id: 4,
// 			title: "On-Page SEO Optimization",
// 			desc: "Maximize your ROI with targeted ad campaigns on top digital platforms.",
// 		},
// 		{
// 			id: 5,
// 			title: "Technical SEO Audits",
// 			desc: "Stay ahead with real-time insights through our comprehensive Brand Monitoring.",
// 		},
// 		{
// 			id: 6,
// 			title: "Mobile SEO Opt & AMP",
// 			desc: "Grow your brand's presence with strategic social media campaigns.",
// 		},
// 		{
// 			id: 7,
// 			title: "Content Creation & Optimization",
// 			desc: "Maximize your ROI with targeted ad campaigns on top digital platforms.",
// 		},
// 		{
// 			id: 8,
// 			title: "Local SEO Optimization",
// 			desc: "Stay ahead with real-time insights through our comprehensive Brand Monitoring.",
// 		},
// 		{
// 			id: 9,
// 			title: "SEO Analytics, Monitoring & Reporting",
// 			desc: "Create custom mobile apps with seamless functionality for all devices.",
// 		},
// 	];

// 	// Check for mobile view on mount and window resize
// 	useEffect(() => {
// 		const checkMobile = () => {
// 			setIsMobile(window.innerWidth < 1024);
// 		};

// 		// Initial check
// 		checkMobile();

// 		// Add resize listener
// 		window.addEventListener("resize", checkMobile);

// 		// Cleanup
// 		return () => window.removeEventListener("resize", checkMobile);
// 	}, []);

// 	// Touch event handlers for mobile swipe functionality
// 	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
// 		setTouchStart(e.touches[0].clientX);
// 	};

// 	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
// 		setTouchEnd(e.touches[0].clientX);
// 	};

// 	const handleTouchEnd = () => {
// 		if (!touchStart || !touchEnd) return;

// 		const distance = touchStart - touchEnd;
// 		if (Math.abs(distance) > 50) {
// 			if (distance > 0 && currentCard < cardData.length - 1) {
// 				setCurrentCard((prev) => prev + 1);
// 			} else if (distance < 0 && currentCard > 0) {
// 				setCurrentCard((prev) => prev - 1);
// 			}
// 		}

// 		setTouchStart(null);
// 		setTouchEnd(null);
// 	};

// 	// Handle scroll behavior for the carousel
// 	const handleScroll = () => {
// 		if (scrollContainerRef.current) {
// 			const container = scrollContainerRef.current;
// 			const scrollPosition = container.scrollLeft;
// 			const cardWidth = container.offsetWidth;
// 			const newIndex = Math.round(scrollPosition / cardWidth);

// 			if (newIndex !== currentCard) {
// 				setCurrentCard(newIndex);
// 			}
// 		}
// 	};

// 	// Handle dot navigation clicks
// 	const handleDotClick = (index: number): void => {
// 		setCurrentCard(index);
// 		scrollContainerRef.current?.scrollTo({
// 			left: index * scrollContainerRef.current.offsetWidth,
// 			behavior: "smooth",
// 		});
// 	};

// 	return (
// 		<section className="my-12 lg:my-24 w-full overflow-hidden">
// 			<h1 className="lg:max-w-[500px] text-3xl lg:text-5xl font-light leading-snug mb-20 text-center lg:text-left">
// 				Why Triple2s is the bestSEO Company in Toronto?
// 			</h1>

// 			{/* Conditional rendering based on screen size */}
// 			{isMobile ? (
// 				// Mobile Carousel View
// 				<div className="relative">
// 					<div
// 						ref={scrollContainerRef}
// 						onScroll={handleScroll}
// 						onTouchStart={handleTouchStart}
// 						onTouchMove={handleTouchMove}
// 						onTouchEnd={handleTouchEnd}
// 						className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide gap-4"
// 						style={{
// 							scrollSnapType: "x mandatory",
// 							scrollBehavior: "smooth",
// 						}}
// 					>
// 						{cardData.map((card) => (
// 							<div
// 								key={card.id}
// 								className="flex-none w-full flex flex-col gap-3 p-8 lg:p-6 rounded-3xl bg-[#18181899] backdrop-filter backdrop-blur-xl bg-opacity-60 snap-center"
// 							>
// 								<Image
// 									src="/blog/blogone.svg"
// 									alt="blog image"
// 									width={350}
// 									height={350}
// 									className="rounded-xl max-w-[350px] mx-auto mb-4"
// 								/>
// 								<h2 className="text-white text-xl font-bold">{card.title}</h2>
// 								<p className="text-base text-gray-300">{card.desc}</p>
// 							</div>
// 						))}
// 					</div>

// 					{/* Navigation Dots for Mobile */}
// 					<div className="flex justify-center items-center gap-2 mt-8">
// 						{cardData.map((_, index) => (
// 							<button
// 								key={index}
// 								onClick={() => handleDotClick(index)}
// 								className={`w-2 h-2 rounded-full transition-all duration-300 ${
// 									index === currentCard
// 										? "bg-white w-8"
// 										: "bg-white/30 hover:bg-white/50"
// 								}`}
// 								aria-label={`Go to slide ${index + 1}`}
// 							/>
// 						))}
// 					</div>
// 				</div>
// 			) : (
// 				// Desktop Grid View
// 				<div className="grid grid-cols-3 gap-4 mt-10 mb-24">
// 					{cardData.map((card) => (
// 						<div
// 							key={card.id}
// 							className="flex flex-col gap-y-3 p-12 rounded-3xl bg-[#18181899] backdrop-filter backdrop-blur-xl bg-opacity-60 cursor-pointer"
// 						>
// 							<h2 className="text-white text-2xl font-bold">{card.title}</h2>
// 							<p className="text-lg text-gray-300">{card.desc}</p>
// 						</div>
// 					))}
// 				</div>
// 			)}
// 		</section>
// 	);
// }

// GridCards.tsx / ServiceGridCards.tsx
"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

export default function GridCards() {
	// States and refs remain the same
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [currentCard, setCurrentCard] = useState(0);
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const [touchEnd, setTouchEnd] = useState<number | null>(null);
	const [isMobile, setIsMobile] = useState(false);

	// Card data remains the same
	const cardData = [
		{
			id: 1,
			title: "Keyword Research & Strategy",
			desc: "Enhance your website's visibility and ranking with expert SEO strategies.",
		},
		{
			id: 2,
			title: "Keyword Clustering & Pillar Pages",
			desc: "Elevate your brand and engage your audience with expert Social Media strategies.",
		},
		{
			id: 3,
			title: "Content Calendar & Planning",
			desc: "We specialize in online gaming and crypto PPC campaigns.",
		},
		{
			id: 4,
			title: "On-Page SEO Optimization",
			desc: "Maximize your ROI with targeted ad campaigns on top digital platforms.",
		},
		{
			id: 5,
			title: "Technical SEO Audits",
			desc: "Stay ahead with real-time insights through our comprehensive Brand Monitoring.",
		},
		{
			id: 6,
			title: "Mobile SEO Opt & AMP",
			desc: "Grow your brand's presence with strategic social media campaigns.",
		},
		{
			id: 7,
			title: "Content Creation & Optimization",
			desc: "Maximize your ROI with targeted ad campaigns on top digital platforms.",
		},
		{
			id: 8,
			title: "Local SEO Optimization",
			desc: "Stay ahead with real-time insights through our comprehensive Brand Monitoring.",
		},
		{
			id: 9,
			title: "SEO Analytics, Monitoring & Reporting",
			desc: "Create custom mobile apps with seamless functionality for all devices.",
		},
	];

	// Mobile detection logic remains the same
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 1024);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	// Touch handlers remain the same
	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		setTouchStart(e.touches[0].clientX);
	};

	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		setTouchEnd(e.touches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (!touchStart || !touchEnd) return;
		const distance = touchStart - touchEnd;
		if (Math.abs(distance) > 50) {
			if (distance > 0 && currentCard < cardData.length - 1) {
				setCurrentCard((prev) => prev + 1);
			} else if (distance < 0 && currentCard > 0) {
				setCurrentCard((prev) => prev - 1);
			}
		}
		setTouchStart(null);
		setTouchEnd(null);
	};

	// Scroll handler remains the same
	const handleScroll = () => {
		if (scrollContainerRef.current) {
			const container = scrollContainerRef.current;
			const scrollPosition = container.scrollLeft;
			const cardWidth = container.offsetWidth;
			const newIndex = Math.round(scrollPosition / cardWidth);
			if (newIndex !== currentCard) {
				setCurrentCard(newIndex);
			}
		}
	};

	// Navigation dot handler remains the same
	const handleDotClick = (index: number) => {
		setCurrentCard(index);
		scrollContainerRef.current?.scrollTo({
			left: index * scrollContainerRef.current.offsetWidth,
			behavior: "smooth",
		});
	};

	// Card component with proper mobile handling
	const Card = ({
		card,
		isMobile,
	}: {
		card: (typeof cardData)[0];
		isMobile: boolean;
	}) => (
		<div
			className={`
        flex flex-col gap-3 rounded-3xl bg-[#F3F3F3] backdrop-filter backdrop-blur-xl bg-opacity-60
        ${isMobile ? "w-full snap-center p-4 sm:p-6" : "p-8 lg:p-12"}
      `}
		>
			{isMobile && (
				<div className="relative w-full aspect-[4/3] mb-4">
					<Image
						src="/blog/blogone.svg"
						alt={`${card.title} illustration`}
						fill
						className="object-cover rounded-xl"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						priority={currentCard === card.id - 1}
					/>
				</div>
			)}
			<h2 className="text-black text-xl sm:text-2xl font-bold">{card.title}</h2>
			<p className="text-base sm:text-lg text-black">{card.desc}</p>
		</div>
	);

	return (
		<section className="w-full overflow-hidden py-8 sm:py-12 lg:py-24">
			{/* Header with proper spacing and alignment */}
			<h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-normal mb-8 sm:mb-12 lg:mb-20 text-center lg:text-left max-w-[650px]">
				Why Triple2s is the bestSEO Company in Toronto?
			</h1>

			{isMobile ? (
				// Mobile carousel with proper containment
				<div className="relative px-4 z-50">
					<div
						ref={scrollContainerRef}
						onScroll={handleScroll}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}
						className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide -mx-4 px-4"
						style={{
							scrollSnapType: "x mandatory",
							scrollBehavior: "smooth",
						}}
					>
						{cardData.map((card) => (
							<div key={card.id} className="flex-none w-full pr-4 first:pl-4">
								<Card card={card} isMobile={true} />
							</div>
						))}
					</div>

					{/* Navigation dots with proper spacing */}
					<div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
						{cardData.map((_, index) => (
							<button
								key={index}
								onClick={() => handleDotClick(index)}
								className={`
                  h-2 rounded-full transition-all duration-300
                  ${
										index === currentCard
											? "w-8 bg-[#F3F3F3]"
											: "w-2 bg-white/30 hover:bg-white/50"
									}
                `}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			) : (
				// Desktop grid with proper spacing
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
					{cardData.map((card) => (
						<Card key={card.id} card={card} isMobile={false} />
					))}
				</div>
			)}
		</section>
	);
}

import Image from "next/image";
import GradientBorderButton from "../ui/GradientBorderButton";
import AnimatedText from "../ui/AnimatedText";
import HeroCTA from "../ui/HeroCTA";
import { useCallback } from "react";

export default function Hero() {
	const marqueeImages = [
		{
			id: 1,
			src: "/marquee/binance_logo.svg",
			width: 150,
			height: 30,
			
		},
		{
			id: 2,
			src: "/marquee/bybit_logo.svg",
			width: 76.76,
			height: 30,
			
		},
		{
			id: 3,
			src: "/marquee/axis.svg",
			width: 84.44,
			height: 30,
		},
		{
			id: 4,
			src: "/marquee/shuffle.svg",
			width: 119,
			height: 30,
		},
		{
			id: 5,
			src: "/marquee/duelbits.svg",
			width: 139.81,
			height: 30,
		},
		{
			id: 6,
			src: "/marquee/stake.svg",
			width: 139.81,
			height: 10,
		},
	];

	const Tile = useCallback(
		(props: {
		  imageSrc: string;
		  desc: string;
		  className: string;
		  dims: {
			  width?: number;
			  height?: number;
		  }
		}) => (
		  <div className="flex flex-col items-center h-[253px] justify-center gap-y-6 p-8 lg:p-0 lg:py-16 w-full rounded-3xl bg-[#18181899] backdrop-filter backdrop-blur-xl bg-opacity-60">
			  <div className="h-full w-full flex items-center justify-center">
				  <Image src={props.imageSrc} alt="something" width={props.dims.width} height={props.dims.height} />
			  </div>
			  <p className="text-lg text-center z-50">
				  {props.desc}
			  </p>
		  </div>
		),
		[],
	  )

	return (
		<section className="mt-[88px] w-full">
			<div className="flex flex-col lg:flex-row w-full md:items-center md:justify-center lg:justify-normal gap-x-20">
				<div className="flex flex-col gap-6 w-full md:w-[70%]">
						<h1>
							<AnimatedText className="text-5xl leading-normal lg:text-[90.201px] w-full text-left z-50">
								Crypto Marketing
							</AnimatedText>
							<AnimatedText delay={0.2} className="text-5xl leading-normal lg:text-[90.201px] w-full text-left z-50">
								<span className="font-gildDisplay z-50"> & SEO{" "}Agency in</span>{" "}
							</AnimatedText>
							<AnimatedText delay={0.4} className="text-5xl leading-normal lg:text-[90.201px] w-full text-left z-50">
								<span className="font-psygen text-6xl lg:text-[7.5rem] z-50">
									Toronto
								</span>
							</AnimatedText>
						</h1>
						<AnimatedText delay={0.6}>
							<div className="block max-w-[370px] lg:max-w-[600px] text-justify leading-8 font-normal text-[#B0B0B0] text-lg z-50">
								Since 2016, we’ve been the go-to marketing and SEO experts for
								cryptocurrency, and CS2 sites. At Triple2s, our team specializes in
								turning niche market challenges into growth opportunities.
							</div>
						</AnimatedText>
				</div>
				<AnimatedText className="hidden h-full md:flex items-center justify-center">
					<HeroCTA />
				</AnimatedText>
			</div>
			<div className="block lg:hidden max-w-[400px] z-50">
				<GradientBorderButton>Book a Call</GradientBorderButton>
			</div>
			<div className="my-10 lg:mb-28 flex flex-wrap items-center justify-between w-full gap-6">
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:flex items-center justify-between gap-6 w-full">
					{marqueeImages.map((image) => (
						<div
							key={image.id}
							className="relative w-[126.535px] h-[25.307px] lg:w-24 lg:h-24"
						>
							<Image
								src={image.src}
								alt="partners"
								fill
								className="object-contain"
								sizes={`${image.width}px, ${image.height}px`}
							/>
						</div>
					))}
				</div>
			</div>



			<div className="flex flex-col lg:flex-row items-center justify-center h-full w-full gap-2">
				<Tile className="flex-grow" imageSrc="/clutch.svg" desc="Top Digital Marketing Agencies For Startups" dims={{ width: 112, height: 29 }} />
				<Tile className="flex-grow" imageSrc="/sortlist.svg" desc="Best Advertising Agency in the US" dims={{ width: 252, height: 72 }} />
			</div>
		</section>
	);
}

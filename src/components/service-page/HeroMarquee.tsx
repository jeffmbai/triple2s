import Image from "next/image";

export default function HeroMarquee() {
	const marqueeImages = [
		{
			id: 1,
			src: "/service/marquee/binance_logo.svg",
		},
		{
			id: 2,
			src: "/service/marquee/bybit_logo.svg",
		},
		{
			id: 3,
			src: "/service/marquee/axis.svg",
		},
		{
			id: 4,
			src: "/service/marquee/shuffle.svg",
		},
		{
			id: 5,
			src: "/service/marquee/duelbits.svg",
		},
		{
			id: 6,
			src: "/service/marquee/stake.svg",
		},
	];

	return (
		<div className="my-10 flex items-center justify-around">
			{marqueeImages.map((image) => (
				<div
					key={image.id}
					className="relative w-16 h-16 lg:w-24 lg:h-24 mx-10"
				>
					<Image
						src={image.src}
						alt="partners"
						fill
						className="object-contain"
						sizes="(max-width: 768px) 64px, 100px"
					/>
				</div>
			))}
		</div>
	);
}

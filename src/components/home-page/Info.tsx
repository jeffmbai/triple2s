import AnimatedButton from "../ui/AnimatedButton";
import NumberCountUp from "../ui/CountUp";

export default function Info() {
	return (
		<section className="w-full">
			<h1 className="text-[32px] lg:text-[5.5rem] font-normal w-full lg:max-w-[830px] leading-[98.032px] mb-14 z-50">
				Why Choose Triple2s as your SEO Agency?
			</h1>
			<div className="">
				<div className="flex flex-col lg:flex-row justify-center items-center lg:items- lg:justify-evenly w-full gap-2">
					<div className="w-full md:w-[20rem] grid place-items-center px-8 py-10 rounded-3xl bg-[#18181899]">
						<h1 className="font-gilroy text-6xl z-50">
							<NumberCountUp end={93}/> <span className="text-3xl">%</span>
						</h1>
						<p className="text-[#FFFFFF5D] text-2xl z-50">Conversion Rate</p>
					</div>
					<div className="w-full md:w-[20rem] grid place-items-center px-8 py-10 rounded-3xl bg-[#18181899]">
						<h1 className="font-gilroy text-6xl z-50">
							<NumberCountUp end={50}/> <span className="text-3xl">M+</span>
						</h1>
						<p className="text-[#FFFFFF5D] text-2xl z-50">Traffic Generated</p>
					</div>
					<div className="w-full md:w-[20rem] grid place-items-center px-8 py-10 rounded-3xl bg-[#18181899]">
						<h1 className="font-gilroy text-6xl z-50">
							<NumberCountUp end={98}/> <span className="text-3xl">%</span>
						</h1>
						<p className="text-[#FFFFFF5D] text-2xl z-50">Revenue Growth</p>
					</div>
					<div className="w-full md:w-[20rem] grid place-items-center px-8 py-10 rounded-3xl bg-[#18181899]">
						<h1 className="font-gilroy text-6xl z-50">
							<NumberCountUp end={124} /> <span className="text-3xl">M+</span>
						</h1>
						<p className="text-[#FFFFFF5D] text-2xl z-50">Return Ad Spent</p>
					</div>
				</div>
				<p className="text-[#B0B0B0] z-50 text-justify text-lg leading-[32px] max-w-[530px] mt-14">
					At triple2s, our marketing and SEO team is your round-the-clock
					partner in digital excellence. Specializing in Cyrpto and Gaming
					services from consultations to ad management, backlink outreach, and
					compelling blog writing, we ensure your cryptocurrency business
					thrives online.
				</p>
			</div>
			<div className="w-full mt-[96px] md:mt-[280px]">
				<h1 className="text-3xl lg:text-[5.5rem] lg:max-w-[730px] leading-[98.032px] mb-14 z-50">
					Instantly Boost Your Digital Footprint
				</h1>
				<div className="flex flex-col gap-y-10 lg:flex-row-reverse justify-between w-full">
					<div className="space-y-10">
						<div className="flex flex-col justify-center items-center lg:items- lg:justify-normal lg:flex-row gap-2">
							<div className="w-full md:w-[20rem] grid place-items-center px-8 py-10 rounded-3xl bg-[#18181899]">
								<h1 className="font-gilroy text-6xl z-50">
									<NumberCountUp end={93}/> <span className="text-3xl">%</span>
								</h1>
								<p className="text-[#FFFFFF5D] text-2xl z-50">
									Conversion Rate
								</p>
							</div>
							<div className="w-full md:w-[20rem] grid place-items-center px-8 py-10 rounded-3xl bg-[#18181899]">
								<h1 className="font-gilroy text-6xl z-50">
									<NumberCountUp end={50}/> <span className="text-3xl">M+</span>
								</h1>
								<p className="text-[#FFFFFF5D] text-2xl z-50">
									Backlink Connections
								</p>
							</div>
						</div>
						<div className="">
							<p className="text-[#B0B0B0] text-lg max-w-[670px] text-justify z-50">
								At triple2s, our edge in the cryptocurrency market is powered by
								an extensive network and a masterful approach to building
								backlinks. We’re not just well-connected; we’re deeply embedded
								in the industry.
							</p>
							<p className="text-[#B0B0B0] text-lg max-w-[670px] text-justify mt-8 z-50">
								Our relationships span influencers, key decision-makers, and
								leading platforms, allowing us to craft high-quality backlinks
								that boost your SEO and enhance your visibility. With us, you
								gain access to a network that’s rich in opportunities and geared
								for substantial digital growth.
							</p>
						</div>
					</div>
					<div className="flex items-center justify-center w-full">
						<AnimatedButton variant="bordered" />
					</div>
				</div>
			</div>
		</section>
	);
}

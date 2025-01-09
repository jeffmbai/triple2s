import InvertedAnimatedButton from "../ui/InvertedAnimatedButton";
import TestimonialSection from "./TestimonialSection";

export default function ServiceInfo() {
	return (
		<section className="my-12 lg:my-24 w-full">
			<div className="mb-20">
				<div className="flex flex-col lg:flex-row justify-center items-center lg:items- lg:justify-evenly w-full gap-4">
					<div className="w-[20rem] grid place-items-center px-8 py-10 rounded-3xl bg-[#F3F3F3]">
						<h1 className="font-gilroy text-6xl z-50">
							93<span className="text-3xl">%</span>
						</h1>
						<p className="z-50 text-[#00000080] text-2xl">Conversion Rate</p>
					</div>
					<div className="w-[20rem] grid place-items-center px-8 py-10 rounded-3xl bg-[#F3F3F3]">
						<h1 className="font-gilroy text-6xl z-50">
							50<span className="text-3xl">M+</span>
						</h1>
						<p className="z-50 text-[#00000080] text-2xl">Traffic Generated</p>
					</div>
					<div className="w-[20rem] grid place-items-center px-8 py-10 rounded-3xl bg-[#F3F3F3]">
						<h1 className="font-gilroy text-6xl z-50">
							98<span className="text-3xl">%</span>
						</h1>
						<p className="z-50 text-[#00000080] text-2xl">Revenue Growth</p>
					</div>
					<div className="w-[20rem] grid place-items-center px-8 py-10 rounded-3xl bg-[#F3F3F3]">
						<h1 className="font-gilroy text-6xl z-50">
							124<span className="text-3xl">M+</span>
						</h1>
						<p className="z-50 text-[#00000080] text-2xl">Return Ad Spent</p>
					</div>
				</div>
				<p className="z-50 text-[#000] text-justify text-lg max-w-[530px] mt-14">
					At triple2s, our marketing and SEO team is your round-the-clock
					partner in digital excellence. Specializing in Cyrpto and Gaming
					services from consultations to ad management, backlink outreach, and
					compelling blog writing, we ensure your cryptocurrency business
					thrives online.
				</p>
			</div>
			<div className="my-12 lg:my-24 w-full lg:mb-40">
				<h1 className="text-3xl lg:text z-50-[5.5rem] lg:max-w-[730px] leading-tight mb-14">
					Instantly Boost Your Digital Footprint
				</h1>
				<div className="flex flex-col gap-y-10 lg:flex-row-reverse justify-between w-full">
					<div className="space-y-10">
						<div className="flex flex-col justify-center items-center lg:items- lg:justify-normal lg:flex-row gap-10">
							<div className="w-[20rem] grid place-items-center px-8 py-10 rounded-3xl bg-[#F3F3F3]">
								<h1 className="font-gilroy text-6xl z-50">
									93<span className="text-3xl">%</span>
								</h1>
								<p className="z-50 text-[#00000080] text-2xl">
									Conversion Rate
								</p>
							</div>
							<div className="w-[20rem] grid place-items-center px-8 py-10 rounded-3xl bg-[#F3F3F3]">
								<h1 className="font-gilroy text-6xl z-50">
									50<span className="text-3xl">M+</span>
								</h1>
								<p className="z-50 text-[#00000080] text-2xl">
									Backlink Connections
								</p>
							</div>
						</div>
						<div className="">
							<p className="z-50 text-[#000] text-lg max-w-[670px] text-justify">
								At triple2s, our edge in the cryptocurrency market is powered by
								an extensive network and a masterful approach to building
								backlinks. We’re not just well-connected; we’re deeply embedded
								in the industry.
							</p>
							<p className="z-50 text-[#000] text-lg max-w-[670px] text-justify mt-8">
								Our relationships span influencers, key decision-makers, and
								leading platforms, allowing us to craft high-quality backlinks
								that boost your SEO and enhance your visibility. With us, you
								gain access to a network that’s rich in opportunities and geared
								for substantial digital growth.
							</p>
						</div>
					</div>
					<div className="flex items-center justify-center w-full z-50">
						<InvertedAnimatedButton
							variant="bordered"
							rotatingText="READ MORE"
						/>
					</div>
				</div>
			</div>
			<TestimonialSection />
		</section>
	);
}

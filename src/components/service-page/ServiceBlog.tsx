import Image from "next/image";
import Link from "next/link";
import InvertedAnimatedButton from "../ui/InvertedAnimatedButton";

interface BlogPost {
	title: string;
	image: string;
	slug: string;
}

const blogPosts: BlogPost[] = [
	{
		title: "Marketing Strategies for Crypto Gambling Websites",
		image: "/blog/blogone.svg",
		slug: "/blog/marketing-strategies",
	},
	{
		title: "What is Black Hat PPC?",
		image: "/blog/blogtwo.svg",
		slug: "/blog/black-hat-ppc",
	},
	{
		title: "Best Digital Marketing Tools & Platforms for 2024",
		image: "/blog/blogthree.svg",
		slug: "/blog/digital-marketing-tools",
	},
];

export default function ServiceBlog() {
	return (
		<section className="container mx-auto px-4 py-24">
			<h2 className="text-3xl lg:text-[3.5rem] font-medium max-w-[630px] leading-tight mb-14">
				Explore Our Blog Your Source for SEO Brilliance
			</h2>

			<div className="grid lg:grid-cols-2 gap-6">
				{/* Featured Post */}
				<article className="group relative bg-[#F3F3F3] rounded-3xl p-8 flex flex-col gap-8">
					<Image
						src={blogPosts[0].image}
						alt=""
						width={500}
						height={550}
						className="w-full object-cover rounded-xl"
					/>
					<div className="flex items-end justify-between gap-4">
						<h3 className="text-2xl lg:text-3xl font-bold">
							{blogPosts[0].title}
						</h3>
						<Link
							href={blogPosts[0].slug}
							className="shrink-0 p-4 rounded-full  transition-transform duration-300 group-hover:scale-110 z-50"
						>
							<InvertedAnimatedButton
								variant="bordered"
								rotatingText="READ MORE"
								size="sm"
							/>
							<span className="sr-only">
								Read more about {blogPosts[0].title}
							</span>
						</Link>
					</div>
				</article>

				{/* Secondary Posts */}
				<div className="flex flex-col gap-6">
					{blogPosts.slice(1).map((post, index) => (
						<article
							key={index}
							className="group relative bg-[#F3F3F3] rounded-3xl p-8 flex flex-col gap-8"
						>
							<Image
								src={post.image}
								alt=""
								width={600}
								height={250}
								className="w-full object-cover rounded-xl"
							/>
							<div className="flex items-end justify-between gap-4">
								<h3 className="text-2xl lg:text-3xl font-bold">{post.title}</h3>
								<Link
									href={post.slug}
									className="shrink-0 p-4 rounded-full transition-transform duration-300 group-hover:scale-110 z-50"
								>
									<InvertedAnimatedButton
										variant="bordered"
										rotatingText="READ MORE"
										size="sm"
									/>
									<span className="sr-only">Read more about {post.title}</span>
								</Link>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

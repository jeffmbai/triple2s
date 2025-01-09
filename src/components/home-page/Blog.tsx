import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../ui/AnimatedButton";
import useDeviceType from "@/hooks/useDeviceType";

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

export default function Blog() {
  const { isMobile } = useDeviceType();
  return (
    <section className="container mt-[145px]">
      <h2 className="text-[56px] lg:text-[3.5rem] font-medium max-w-[630px] leading-[79.184px] mb-14">
        Explore Our Blog Your Source for SEO Brilliance
      </h2>

      <div className="flex md:flex-row flex-col gap-2">
        {/* Featured Post */}
        <article className="group relative bg-[#18181899] rounded-[40px] p-8 flex flex-col gap-8">
          <Image
            src={blogPosts[0].image}
            alt=""
            width={isMobile ? 600 : 500}
            height={isMobile ? 250 : 550}
            className="w-full object-cover rounded-[40px]"
          />
          <div className="flex md:flex-row flex-col md:items-center justify-between gap-4">
            <h3 className="text-2xl lg:text-[32px] leading-primary font-bold">
              {blogPosts[0].title}
            </h3>
            <Link
              href={blogPosts[0].slug}
              className="shrink-0 p-4 rounded-full transition-transform duration-300 group-hover:scale-110 z-50"
            >
              <AnimatedButton
                hidden={false}
                variant="bordered"
                size="sm"
				className="sm:self-end"
                rotatingText="READ MORE"
              />
              <span className="sr-only">
                Read more about {blogPosts[0].title}
              </span>
            </Link>
          </div>
        </article>

        {/* Secondary Posts */}
        <div className="flex flex-col gap-2 justify-between">
          {blogPosts.slice(1).map((post, index) => (
            <article
              key={index}
              className="group relative bg-[#18181899] rounded-[40px] p-8 h-full flex flex-col gap-8"
            >
              <Image
                src={post.image}
                alt=""
                width={600}
                height={250}
                className="w-full object-cover rounded-[40px]"
              />
              <div className="flex md:flex-row flex-col md:items-center justify-between gap-4">
                <h3 className="text-2xl lg:text-[32px] leading-primary font-bold">
                  {post.title}
                </h3>
                <Link
                  href={post.slug}
                  className="shrink-0 p-4 self-end rounded-full transition-transform duration-300 group-hover:scale-110 z-50"
                >
                  <AnimatedButton
                    hidden={false}
                    className="sm:self-end"
                    variant="bordered"
                    size="sm"
                    rotatingText="READ MORE"
                  />
                  <span className="sr-only">Read more about {post.title}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-[274px] mb-[96px] md:mb-[274px]">
        <Link
          href="/blog"
          className="rounded-full transition-transform duration-300 hover:scale-110 z-50"
        >
          <AnimatedButton variant="bordered" rotatingText="READ MORE" />
        </Link>
      </div>
    </section>
  );
}

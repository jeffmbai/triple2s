// app/services/page.tsx
import MainLayout from "@/components/layouts/MainLayout";
import HeroMarquee from "@/components/service-page/HeroMarquee";
import ServiceBlog from "@/components/service-page/ServiceBlog";
import ServiceFAQ from "@/components/service-page/ServiceFAQ";
import ServiceFooter from "@/components/service-page/ServiceFooter";
import ServiceGridCards from "@/components/service-page/ServiceGridCards";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceInfo from "@/components/service-page/ServiceInfo";
import ServiceQuestion from "@/components/service-page/ServiceQuestion";

export default function Service() {
	return (
		<div>
			<ServiceHero />
			<MainLayout className="bg-white text-black" container="max-w-7xl">
				<HeroMarquee />
				<ServiceGridCards />
				<ServiceQuestion />
				<ServiceInfo />
				<ServiceBlog />
				<ServiceFAQ />
			</MainLayout>
			<ServiceFooter />
		</div>
	);
}

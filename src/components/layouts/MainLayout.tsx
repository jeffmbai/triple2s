// components/layouts/MainLayout.tsx
import NavigationWrapper from "@/components/ui/NavigationWrapper";
import FooterWrapper from "../ui/FooterWrapper";

export default function MainLayout({
	children,
	className = "",
	container = "",
}: {
	children: React.ReactNode;
	className?: string;
	container?: string;
}) {
	return (
		<div className={`min-h-screen px-4 sm:px-8 md:px-32 ${className} z-1`}>
			<div className={`${container} mx-auto px-4 sm:px-8 py-8 lg:px-0`}>
				<NavigationWrapper />
				<main className="relative">{children}</main>
				<FooterWrapper />
			</div>
		</div>
	);
}

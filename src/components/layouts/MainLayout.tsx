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
		<div className={`min-h-screen px-4 sm:px-6 lg:px-32 ${className} z-1`}>
			<div className={`${container} mx-auto p-4 sm:p-6 lg:p-0 max-w-screen-xl`}>
				<NavigationWrapper />
				<main className="relative">{children}</main>
				<FooterWrapper />
			</div>
		</div>
	);
}

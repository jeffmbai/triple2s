"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
	const pathname = usePathname();

	// We can implement more complex route matching logic here if needed
	if (pathname === "/services") {
		return null;
	}

	return <Footer />;
}

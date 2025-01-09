"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavigationWrapper() {
	const pathname = usePathname();

	// We can implement more complex route matching logic here if needed
	if (pathname === "/services") {
		return null;
	}

	return <Navbar />;
}

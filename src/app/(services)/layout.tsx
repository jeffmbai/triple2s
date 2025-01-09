// app/(services)/layout.tsx
export default function ServicesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="min-h-screen bg-white text-black">{children}</div>;
}

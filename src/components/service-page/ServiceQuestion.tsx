import ComponentSimulationLayout from "../simulation/ComponentSimulationLayout";
import AnimatedButton from "../ui/AnimatedButton";

export default function ServiceQuestion() {
	return (
		<ComponentSimulationLayout className="h-[500px] rounded-3xl">
			{/* Using a flex container to center content both vertically and horizontally */}
			<div className="bottom-0 w-full h-full flex items-center justify-center">
				{/* Container with max-width constraint for content */}
				<div className="container mx-auto px-8">
					{/* Inner flex container for the row/column layout */}
					<div className="flex flex-col lg:flex-row items-center justify-center gap-12">
						{/* Text container with improved spacing */}
						<div className="flex-1 max-w-xl text-center lg:text-left">
							<h1 className="text-white text-3xl lg:text-7xl font-normal leading-[1.2]">
								Why Choose Triple2s as your SEO Agency?
							</h1>
						</div>

						{/* Button container with maintained positioning */}
						<div className="hidden lg:block flex-shrink-0 z-50">
							<AnimatedButton />
						</div>
					</div>
				</div>
			</div>
		</ComponentSimulationLayout>
	);
}

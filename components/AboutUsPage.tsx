import React from 'react';

interface AboutUsPageProps {
	navigateToHome: () => void;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ navigateToHome }) => {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero */}
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-b from-api-blue to-api-blue-900"></div>
				<div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
					<div className="max-w-5xl">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">Building the backbone for API‑first products</h1>
						<p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">API Hub helps teams discover, evaluate, and integrate high‑quality public APIs faster. We obsess over developer experience so you can ship delightful products.</p>
						<div className="mt-8 flex flex-wrap items-center gap-3">
							<button onClick={navigateToHome} className="px-6 py-3 bg-white text-api-blue font-semibold rounded-full hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/60 transition-colors">Get Started</button>
							<a href="#our-mission" className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors">Our Mission</a>
						</div>
					</div>
				</div>
			</section>

			{/* Stats */}
			<section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
						<p className="text-3xl font-extrabold text-api-blue">250+</p>
						<p className="text-gray-500 mt-1 text-sm">Public APIs listed</p>
					</div>
					<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
						<p className="text-3xl font-extrabold text-api-blue">8 mins</p>
						<p className="text-gray-500 mt-1 text-sm">Avg. time to evaluate</p>
					</div>
					<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
						<p className="text-3xl font-extrabold text-api-blue">99.9%</p>
						<p className="text-gray-500 mt-1 text-sm">Ping monitoring coverage</p>
					</div>
					<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
						<p className="text-3xl font-extrabold text-api-blue">10k+</p>
						<p className="text-gray-500 mt-1 text-sm">Developers onboarded</p>
					</div>
				</div>
			</section>

			{/* Mission */}
			<section id="our-mission" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
				<div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
					<div className="order-2 lg:order-1">
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">Our Mission</h2>
						<p className="mt-4 text-gray-700 leading-7">We believe great software emerges when developers can focus on their core product. API Hub removes friction from discovering APIs, comparing capabilities and pricing, and integrating securely with best‑in‑class providers.</p>
						<ul className="mt-6 space-y-3 text-gray-700">
							<li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-api-orange"></span><span>Human-curated listings with clear docs, examples, and SLAs.</span></li>
							<li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-api-orange"></span><span>Monitoring and status insights so you can trust critical integrations.</span></li>
							<li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-api-orange"></span><span>Developer-first UX: fast search, rich filters, and smart comparisons.</span></li>
						</ul>
					</div>
					<div className="order-1 lg:order-2">
						<div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 shadow-sm p-6">
							<div className="grid grid-cols-2 gap-4">
								<div className="p-4 rounded-lg bg-white border">
									<p className="text-xs text-gray-500">Category</p>
									<p className="text-sm font-semibold">Finance</p>
								</div>
								<div className="p-4 rounded-lg bg-white border">
									<p className="text-xs text-gray-500">Latency p95</p>
									<p className="text-sm font-semibold">310ms</p>
								</div>
								<div className="p-4 rounded-lg bg-white border">
									<p className="text-xs text-gray-500">Uptime</p>
									<p className="text-sm font-semibold">99.98%</p>
								</div>
								<div className="p-4 rounded-lg bg-white border">
									<p className="text-xs text-gray-500">Pricing</p>
									<p className="text-sm font-semibold">Pay-as-you-go</p>
								</div>
							</div>
							<p className="mt-4 text-sm text-gray-500">Illustrative metrics shown. Actual data varies per provider.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Values */}
			<section className="bg-white/60">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center tracking-tight">What We Value</h2>
					<p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">Principles that guide how we build and support the API ecosystem.</p>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
							<h3 className="text-lg font-semibold text-api-blue">Reliability</h3>
							<p className="mt-2 text-gray-600">Curated providers with strong SLAs and transparent status so your apps stay online.</p>
						</div>
						<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
							<h3 className="text-lg font-semibold text-api-blue">Speed</h3>
							<p className="mt-2 text-gray-600">Lightning-fast search, filters, and examples to evaluate and integrate in minutes.</p>
						</div>
						<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
							<h3 className="text-lg font-semibold text-api-blue">Security</h3>
							<p className="mt-2 text-gray-600">Best practices for key management, encryption, and role-based access by default.</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="rounded-2xl bg-gradient-to-r from-api-blue to-api-blue-900 p-10 text-center text-white">
					<h3 className="text-2xl lg:text-3xl font-bold tracking-tight">Ready to explore the best APIs?</h3>
					<p className="mt-2 text-white/85">Browse categories, compare providers, and start building today.</p>
					<div className="mt-6 flex items-center justify-center gap-3">
						<button onClick={navigateToHome} className="px-6 py-3 bg-white text-api-blue font-semibold rounded-full hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/60 transition-colors">Back to Home</button>
						<a href="#" className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors">View API Directory</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutUsPage;


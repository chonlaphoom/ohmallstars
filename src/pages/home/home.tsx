import { A } from '@solidjs/router';
import { createSignal } from 'solid-js';
import Container from '../../components/Container';

export default function Home() {
	return (
		<Container class="py-16 relative">
			<div class="text-center space-y-12 relative z-10">
				<section class="space-y-6">
					<TitleComponent />
				</section>
				<section class="py-6">
					<div class="max-w-2xl mx-auto text-left space-y-4">
						<p class="text-gray-700 dark:text-gray-300 leading-relaxed">
							I lead the development of high-performance enterprise platforms at the intersection of Finance and AI. Currently architecting the next generation of financial tools at <span class="font-mono text-gray-900 dark:text-gray-100">LSEG</span>, integrating AI Agents into the products in collaboration with <span class="font-mono text-gray-900 dark:text-gray-100">Microsoft</span>.
						</p>
						<p class="text-gray-600 dark:text-gray-400 font-mono text-sm">
							// Base in Bangkok, Thailand 🇹🇭
						</p>
						<div class="flex flex-wrap gap-2 font-mono text-sm text-gray-600 dark:text-gray-400">
							<span class="text-gray-400">»</span> Agentic AI
							<span class="text-gray-300 dark:text-gray-600">|</span>
							<span class="text-gray-400">»</span> Systems Architecture
							<span class="text-gray-300 dark:text-gray-600">|</span>
							<span class="text-gray-400">»</span> FinTech
						</div>
					</div>
				</section>
				<section class="pt-8">
					<A
						href="/hire-me"
						class="inline-block px-6 py-2 border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 transition-all duration-300 no-underline hover-lift shadow-sm font-mono"
					>
						Hire Me →
					</A>
					<p class="text-xs text-gray-500 dark:text-gray-500 font-mono mt-2">
						// For more details about my experience
					</p>
				</section>
			</div>
		</Container>
	);
}

type Status = ('ONLINE' | 'AFK' | 'CODING' | 'DEBUGGING')[];
const TitleComponent = () => {
	const statuses: Status = ['ONLINE', 'AFK', 'CODING', 'DEBUGGING']
	const statusColors = {
		'ONLINE': 'text-green-600 dark:text-green-400',
		'AFK': 'text-yellow-600 dark:text-yellow-400',
		'CODING': 'text-blue-600 dark:text-blue-400',
		'DEBUGGING': 'text-red-600 dark:text-red-400'
	};
	const [currentStatusIndex, setCurrentStatusIndex] = createSignal(0);

	const toggleStatus = () => {
		setCurrentStatusIndex((prev) => (prev + 1) % statuses.length);
	};

	const currentStatus = () => statuses[currentStatusIndex()];

	return (
		<div class="space-y-2">
			<div class="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-500 font-mono font-normal cursor-blink">
				<span class="text-gray-600 dark:text-gray-400">$</span> whoami
			</div>
			<h1 class="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100">
				<span class="font-bold">Chonlaphoom T.</span>
			</h1>
			<div class="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-500 font-normal">
				Software Engineer{' '}
				<span
					class={`font-mono ${statusColors[currentStatus()]} status-online cursor-pointer hover:opacity-80 transition-opacity`}
					onClick={toggleStatus}
					title="Click to change status"
				>
					[{currentStatus()}]
				</span>
			</div>
		</div>
	);
}

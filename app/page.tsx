import Hero from '@/components/server/Hero';
import Newest from '@/components/server/Newest';
import type { JSX } from 'react';

export const dynamic = 'force-dynamic';

export default function Home(): JSX.Element {
	return (
		<div className="bg-white pb-6 sm:pb-8 lg:pb-12">
			<Hero />
			<Newest />
		</div>
	);
}

'use client';

import { Button } from '@/components/ui/button';
import type { NavLink } from '@/constants';
import { navLinks } from '@/constants';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { JSX } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

export default function Navbar(): JSX.Element {
	const pathname: string = usePathname();
	const { handleCartClick } = useShoppingCart();

	return (
		<header className="mb-8 border-b">
			<div className="mx-auto flex max-w-2xl items-center justify-between px-4 sm:px-6 lg:max-w-7xl">
				<Link href="/">
					<h1 className="text-2xl font-bold md:text-4xl">
						Next<span className="text-primary">Commerce</span>
					</h1>
				</Link>
				<nav className="hidden gap-12 lg:flex 2xl:ml-16">
					{navLinks.map((link: NavLink, idx: number) => (
						<div key={idx}>
							{pathname === link.href ? (
								<Link
									href={link.href}
									className="text-lg font-semibold text-primary"
								>
									{link.name}
								</Link>
							) : (
								<Link
									href={link.href}
									className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
								>
									{link.name}
								</Link>
							)}
						</div>
					))}
				</nav>
				<div className="flex divide-x border-r sm:border-l">
					<Button
						variant="outline"
						className="sds flex h-12 w-12 flex-col gap-y-1.5 rounded-none sm:h-20 sm:w-20 md:h-24 md:w-24"
						onClick={() => handleCartClick()}
					>
						<ShoppingBag />
						<span className="hidden text-xs font-semibold sm:block">
							Cart
						</span>
					</Button>
				</div>
			</div>
		</header>
	);
}

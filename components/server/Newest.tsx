import { getNewestProducts } from '@/lib/sanity/queries';
import type { NewestProduct } from '@/studio/types/NextCommerce';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { JSX } from 'react';

export default async function Newest(): Promise<JSX.Element> {
	const data: NewestProduct[] = await getNewestProducts();

	return (
		<div className="bg-white">
			<div className="sdfsd mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<div className="flex items-center justify-between">
					<h2 className="text-2xl font-bold tracking-tight text-gray-900">
						Our Newest Products
					</h2>
					<Link
						href="/all"
						className="primary flex items-center gap-x-1"
					>
						See All{' '}
						<span>
							<ArrowRight />
						</span>
					</Link>
				</div>
				<div className="xl:gap-x8 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 ">
					{data.map((product: NewestProduct) => (
						<div
							key={product._id}
							className="group relative"
						>
							<div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
								<Image
									src={product.imageUrl}
									alt={product.imageCaption}
									width={300}
									height={300}
									className="h-full w-full object-cover object-center lg:h-full lg:w-full"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700">
										<Link href={`/product/${product.slug}`}>
											{product.name}
										</Link>
									</h3>
									<p className="mt-1 text-sm text-gray-500">
										{product.category}
									</p>
								</div>
								<p className="text-sm font-medium text-gray-900">
									${product.price}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

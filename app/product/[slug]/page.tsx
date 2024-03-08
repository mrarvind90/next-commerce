import AddToCart from '@/components/client/AddToCart';
import CheckoutNow from '@/components/client/CheckoutNow';
import ImageGallery from '@/components/client/ImageGallery';
import { Button } from '@/components/ui/button';
import { getProductDetails } from '@/lib/sanity/queries';
import type { ProductDetails } from '@/studio/types/NextCommerce';
import { Star, Truck } from 'lucide-react';
import type { JSX } from 'react';

export default async function ProductDetailsPage({
	params,
}: {
	params: { slug: string };
}): Promise<JSX.Element> {
	const data: ProductDetails = await getProductDetails(params.slug);

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-screen-xl px-4 md:px-8">
				<div className="grid gap-8 md:grid-cols-2">
					<ImageGallery images={data.images} />
					<div className="md:py-8">
						<div className="mb-2 md:mb-3">
							<span className="mb-0.5 inline-block text-gray-500">
								{data.category}
							</span>
							<h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
								{data.name}
							</h2>
						</div>
						{/* TODO: Start - Need to add dynamic logic here for rating, discount and shipping details */}
						<div className="mb-6 flex items-center gap-3 md:mb-10">
							<Button className="gap-x-2 rounded-full">
								<span className="text-sm">4.2</span>
								<Star className="h-5 w-5" />
							</Button>
							<span className="text-sm text-gray-500 transition duration-100">
								56 Ratings
							</span>
						</div>
						<div className="mb-4">
							<div className="flex items-end gap-2">
								<span className="text-xl font-bold text-gray-800 md:text-2xl">
									${data.price}
								</span>
								<span className="mb-0.5 text-red-500 line-through">
									${data.price + 30}
								</span>
							</div>
							<span className="text-sm text-gray-500">
								Incl. VAT plus shipping
							</span>
						</div>
						<div className="mb-6 flex items-center gap-2 text-gray-500">
							<Truck className="h-6 w-6" />
							<span className="text-sm">2 - 4 Days Shipping</span>
						</div>
						{/* TODO: End - Need to add dynamic logic here for rating, discount and shipping details */}
						<div className="flex gap-2.5">
							<AddToCart
								name={data.name}
								description={data.description}
								currency="USD"
								priceId={data.priceId}
								price={data.price}
								image={data.images[0]}
							/>
							<CheckoutNow
								name={data.name}
								description={data.description}
								currency="USD"
								priceId={data.priceId}
								price={data.price}
								image={data.images[0]}
							/>
						</div>
						<p className="mt-12 text-base tracking-wide text-gray-500">
							{data.description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

'use client';

import type { ProductCart } from '@/components/client/AddToCart';
import { Button } from '@/components/ui/button';
import { urlFor } from '@/lib/sanity/config';
import type { JSX } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import type { Product } from 'use-shopping-cart/core';

export default function CheckoutNow({
	name,
	description,
	currency,
	image,
	priceId,
	price,
}: ProductCart): JSX.Element {
	const { checkoutSingleItem } = useShoppingCart();

	async function buyNow(priceId: string): Promise<void> {
		await checkoutSingleItem(priceId);
	}

	const product: Product = {
		name,
		description,
		price_id: priceId,
		price,
		currency,
		image: urlFor(image).url(),
	};

	return (
		<Button
			variant={'secondary'}
			onClick={(): Promise<void> => buyNow(product.price_id)}
		>
			Checkout Now
		</Button>
	);
}

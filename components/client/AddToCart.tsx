'use client';

import { Button } from '@/components/ui/button';
import { urlFor } from '@/lib/sanity/config';
import type { JSX } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import type { Product } from 'use-shopping-cart/core';

export type ProductCart = {
	name: string;
	description: string;
	currency: string;
	priceId: string;
	price: number;
	image: any;
};

export default function AddToCart({
	name,
	description,
	currency,
	image,
	priceId,
	price,
}: ProductCart): JSX.Element {
	const { addItem, handleCartClick } = useShoppingCart();

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
			onClick={(): void => {
				addItem(product);
				handleCartClick();
			}}
		>
			Add to Cart
		</Button>
	);
}

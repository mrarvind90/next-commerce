'use client';

import type { JSX, ReactNode } from 'react';
import { CartProvider as USCProvider } from 'use-shopping-cart';

export default function CartProvider({
	children,
}: {
	children: ReactNode;
}): JSX.Element {
	return (
		<USCProvider
			mode="payment"
			cartMode="client-only"
			stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
			successUrl={
				process.env.ENVIRONMENT === 'local'
					? 'http://localhost:3000/stripe/success'
					: 'https://next-commerce-jpsu.vercel.app/stripe/success'
			}
			cancelUrl={
				process.env.ENVIRONMENT === 'local'
					? 'http://localhost:3000/stripe/error'
					: 'https://next-commerce-jpsu.vercel.app/stripe/error'
			}
			currency="USD"
			billingAddressCollection={false}
			shouldPersist={true}
			language="en-US"
		>
			{children}
		</USCProvider>
	);
}

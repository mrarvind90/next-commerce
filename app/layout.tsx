import Navbar from '@/components/client/Navbar';
import CartProvider from '@/components/client/Providers';
import ShoppingCartModal from '@/components/client/ShoppingCartModal';
import type { Metadata } from 'next';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Inter } from 'next/font/google';
import React from 'react';
import '../styles/globals.css';

const inter: NextFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'NextCommerce',
	description: 'Your one-stop shop for all your clothing needs',
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<CartProvider>
					<ShoppingCartModal />
					<Navbar />
					{children}
				</CartProvider>
			</body>
		</html>
	);
}

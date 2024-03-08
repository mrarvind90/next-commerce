'use client';

import { urlFor } from '@/lib/sanity/config';
import Image from 'next/image';
import { useState } from 'react';

type ImageGalleryProps = {
	images: any;
};

export default function ImageGallery({ images }: ImageGalleryProps) {
	const [bigImage, setBigImage] = useState(images[0]);

	const handleClick = (image: any) => setBigImage(image);

	return (
		<div className="grid gap-4 lg:grid-cols-5">
			<div className="order-last flex gap-4 lg:order-none lg:flex-col">
				{images.map((image: any, idx: number) => (
					<div
						key={idx}
						className="overflow-hidden rounded-lg bg-gray-100"
					>
						<Image
							src={urlFor(image).url()}
							alt={image.alt}
							width={200}
							height={200}
							className="h-full w-full cursor-pointer object-cover object-center"
							onClick={() => handleClick(image)}
						/>
					</div>
				))}
			</div>
			<div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
				<Image
					src={urlFor(bigImage).url()}
					alt={bigImage.alt}
					width={500}
					height={500}
					className="h-full w-full object-cover object-center"
				/>
				{/* TODO: Make this such that we can add a Sale tag to the product via CMS */}
				<span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
					Sale
				</span>
			</div>
		</div>
	);
}

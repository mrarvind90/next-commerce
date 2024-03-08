import { client } from '@/lib/sanity/config';
import {
	HeroImages,
	NewestProduct,
	ProductDetails,
	ProductDetailsSummary,
} from '@/types';
import upperFirst from 'lodash/upperFirst';
import { groq } from 'next-sanity';

export async function getHeroImages(): Promise<HeroImages> {
	const query: string = groq`*[_type == "heroImages"][0]`;

	return await client.fetch(query);
}

export async function getNewestProducts(): Promise<NewestProduct[]> {
	const query: string = groq`*[_type == "product"][0...4] | order(_createdAt desc) {
		  _id,
		  price,
		  name,
		  "slug": slug.current,
		  "category": category->name,
		  "imageUrl": images[0].asset->url,
		  "imageCaption": images[0].alt
		}`;

	return await client.fetch(query);
}

export async function getProductDetails(slug: string): Promise<ProductDetails> {
	const query: string = groq`*[_type == "product" && slug.current == "${slug}"][0] {
		  _id,
		  images,
		  price,
		  name,
		  description,
		  "slug": slug.current,
		  "category": category->name,
		  "priceId": price_id
		}`;

	return await client.fetch(query);
}

export async function getListOfProductsByCategory(
	category: string,
): Promise<ProductDetailsSummary[]> {
	const query: string = groq`*[_type == "product" && category->name match "${upperFirst(category)}"] {
		  _id,
		  "slug": slug.current,
		  "category": category->name,
		  name,
		  price,
		  "imageUrl": images[0].asset->url,
		  "imageCaption": images[0].alt
		}`;

	return await client.fetch(query);
}

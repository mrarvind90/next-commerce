import imageUrlBuilder from '@sanity/image-url';
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { SanityClient } from 'next-sanity';
import { createClient } from 'next-sanity';

export const client: SanityClient = createClient({
	projectId: '9rjvksg0',
	dataset: 'production',
	apiVersion: '2022-03-25',
	useCdn: true,
});

const builder: ImageUrlBuilder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource): ImageUrlBuilder {
	return builder.image(source);
}

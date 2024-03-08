export type HeroImages = {
	image1: any;
	image2: any;
};

export type NewestProduct = {
	_id: string;
	slug: string;
	category: string;
	name: string;
	price: number;
	imageUrl: string;
	imageCaption: string;
};

export type ProductDetails = {
	_id: string;
	slug: string;
	category: string;
	name: string;
	description: string;
	images: any[];
	priceId: string;
	price: number;
};

export type ProductDetailsSummary = {
	_id: string;
	slug: string;
	category: string;
	name: string;
	price: number;
	imageUrl: string;
	imageCaption: string;
};

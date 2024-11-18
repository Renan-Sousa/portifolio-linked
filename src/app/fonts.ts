import { Roboto, Outfit } from "next/font/google";

export const outfit = Outfit({
	subsets: ['latin'],
	weight: ['400', '600', '700']
});

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700']
});
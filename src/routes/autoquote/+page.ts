import type { PageLoad } from "./$types";
import { fetchPrices } from "$lib/FetchPrices.ts";

export const load: PageLoad = async ({ fetch, params }) => {
	const prices = await fetchPrices(fetch);
	return prices;
};

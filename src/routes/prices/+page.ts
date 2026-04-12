import type { PageLoad } from "./$types";
import { FetchPrices } from "$lib/FetchPrices.ts";

export const load: PageLoad = ({ fetch, _ }) => {
	return FetchPrices(fetch);
};

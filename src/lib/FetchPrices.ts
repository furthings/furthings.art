export type PriceData = {
	framing: {
		headshot: number,
		bust: number,
		halfbody: number,
		thighup: number,
		fullbody: number
	},
	backgrounds: {
		none: number,
		abstract: number,
		scenic: number
	},
	addons: {
		shading: number,
		props: number,
		'no color': number,
		'unclear reference': number[]
	}
};

export async function FetchPrices(fetch: Function): Promise<PriceData> {
	const result: Promise<PriceData> = new Promise((resolve, reject) => {
		const csvPromise: Promise<any> = fetch("Prices.csv");
		csvPromise.then(csvResult => {
			const stringPromise: Promise<string> = csvResult.text();
			stringPromise.then(stringResult => {
				let result: PriceData = {
					framing: {
						headshot: 0,
						bust: 0,
						halfbody: 0,
						thighup: 0,
						fullbody: 0
					},
					backgrounds: {
						none: 0,
						abstract: 0,
						scenic: 0
					},
					addons: {
						shading: 0,
						props: 0,
						'no color': 0,
						'unclear reference': [0, 0]
					}
				};
				let category = '';
				let listingName: string;
				let listingCost: number[];
				const lines: string[] = stringResult.split('\n');
				lines.forEach((line) => {
					if (!(line === "")) { // if not empty
						line = line.toLowerCase();
						if (!line.includes(',')) { // if single
							category = line;
						} else { // if multiple
							let item: string[] = line.split(',');
							listingName = item[0];
							if (category === 'addons' && listingName === 'unclear reference') {
								listingCost = [Number(item[1]), Number(item[2])];
							} else {
								listingCost = [Number(item[1])];
							}
							if (category === 'framing') {
								if (listingName === 'headshot') {
									result.framing.headshot = listingCost[0];
								} else if (listingName === 'bust') {
									result.framing.bust = listingCost[0];
								} else if (listingName === 'halfbody') {
									result.framing.halfbody = listingCost[0];
								} else if (listingName === 'thighup') {
									result.framing.thighup = listingCost[0];
								} else if (listingName === 'fullbody') {
									result.framing.fullbody = listingCost[0];
								}
							} else if (category === 'backgrounds') {
								if (listingName === 'none') {
									result.backgrounds.none = listingCost[0];
								} else if (listingName === 'abstract') {
									result.backgrounds.abstract = listingCost[0];
								} else if (listingName === 'scenic') {
									result.backgrounds.scenic = listingCost[0];
								}
							} else if (category === 'addons') {
								if (listingName === 'shading') {
									result.addons.shading = listingCost[0];
								} else if (listingName === 'props') {
									result.addons.props = listingCost[0];
								} else if (listingName === 'no color') {
									result.addons['no color'] = listingCost[0];
								} else if (listingName === 'unclear reference') {
									result.addons['unclear reference'] = [listingCost[0], listingCost[1]];
								}
							}
						}
					}
				});
				resolve(result);
			}).catch(error => {
				reject(`Error loading price data: ${error}`);
			})
		})
		.catch(error => {
			reject(`Error fetching price data: ${error}`);
		});
	});
	return result;
}

export async function fetchPrices(fetch) {
	let prices = {
		framing: {
			'headshot': 0,
			'bust': 0,
			'halfbody': 0,
			'thighup': 0,
			'fullbody': 0,
		},
		backgrounds: {
			'none': 0,
			'abstract': 0,
			'scenic': 0
		},
		addons: {
			'shading': 0,
			'props': 0,
			'no color': 0,
			'unclear reference': [],
		}
	};
	try {
		const response = await fetch("Prices.csv");
		const data = await response.text();
		let category = '';
		let listingName = '';
		let listingCost = [];
		const lines = data.split('\n');
		lines.forEach((line) => {
			if (!(line === "")) { // if not empty
				line = line.toLowerCase();
				if (!line.includes(',')) { // if single
					category = line;
				} else { // if multiple
					line = line.split(',');
					listingName = line[0];
					listingCost = Number(line[1]);
					if (category === 'framing') {
						prices.framing[listingName] = listingCost;
					} else if (category === 'backgrounds') {
						prices.backgrounds[listingName] = listingCost;
					} else if (category === 'addons') {
						if (listingName === 'unclear reference') {
							prices.addons[listingName] = [Number(line[1]), Number(line[2])];
						} else {
							prices.addons[listingName] = listingCost;
						}
					}
				}
			}
		});
		return prices;
	} catch (err) {
		console.error("Error fetching prices", err);
	}
}

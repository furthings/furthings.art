let framingPrices = {
}

let addonsPrices = {
	"backgrounds": {}
}


async function fetchPrices() {
	try {
		const response = await fetch("prices.csv");
		const data = await response.text();
		const prices = data.split("\n");
		let costType = "framing";
		for (const price of prices) {
			if (price.includes(",")) {
				let formatted = price.split(",");
				if (costType == "Framing") {
					framingPrices[formatted[0]] = formatted[1];
				} else if (costType == "Addons") {
					if (formatted[0] == "Unclear Reference") {
						addonsPrices[formatted[0]] = [formatted[1], formatted[2]];
					} else {
						addonsPrices[formatted[0]] = formatted[1];
					}
				} else if (costType == "Backgrounds") {
					addonsPrices["backgrounds"][formatted[0]] = formatted[1];
				}
			} else {
				costType = price;
			}
		}
		console.log(addonsPrices);
		// framing
		document.getElementById("headshot_cost").innerHTML = '$' + framingPrices["Headshot"];
		document.getElementById("bust_cost").innerHTML = '$' + framingPrices["Bust"];
		document.getElementById("halfbody_cost").innerHTML = '$' + framingPrices["Halfbody"];
		document.getElementById("thighup_cost").innerHTML = '$' + framingPrices["Thighup"];
		document.getElementById("fullbody_cost").innerHTML = '$' + framingPrices["Fullbody"];

		// addons
		document.getElementById("shading_cost").innerHTML = '+ $' + addonsPrices["Shading"] + ' per character';
		document.getElementById("props_cost").innerHTML = '+ $' + addonsPrices["Props"];
		document.getElementById("abstract_background_cost").innerHTML = '+ $' + addonsPrices["backgrounds"]["Abstract"];
		document.getElementById("simple_scene_background_cost").innerHTML = '+ $' + addonsPrices["backgrounds"]["Simple Scene"];
		document.getElementById("unclear_reference_cost").innerHTML = '+ $' + addonsPrices["Unclear Reference"][0] + ' or $' + addonsPrices["Unclear Reference"][1];
		document.getElementById("no_color_cost").innerHTML = '- $' + addonsPrices["No Color"];
	} catch (err) {
		console.error("Error fetching prices", err);
	}
}
fetchPrices();

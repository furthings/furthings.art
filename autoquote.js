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
					framingPrices[formatted[0]] = Number(formatted[1]);
				} else if (costType == "Addons") {
					if (formatted[0] == "Unclear Reference") {
						addonsPrices[formatted[0]] = [Number(formatted[1]), Number(formatted[2])];
					} else {
						addonsPrices[formatted[0]] = Number(formatted[1]);
					}
				} else if (costType == "Backgrounds") {
					addonsPrices["backgrounds"][formatted[0]] = Number(formatted[1]);
				}
			} else {
				costType = price;
			}
		}
	} catch (err) {
		console.error("Error fetching prices", err);
	}
}
fetchPrices();

let numOfCharacters = 0;
let total = 0;
let overview = {
  framingOptions: {
    mostExpensive: "",
    discounted: []
  },
  addons: {
    background: "",
    props: 0,
    shading: false,
    noColor: false
  },
  details: ""
};

// for fomatting
let currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// autoquote form submission
document.getElementById("autoquote_form").addEventListener("submit", function(e) {
  e.preventDefault(); // keep browser from reloading on submit
  var formData = new FormData(e.target);

  // reset overview vals
  overview.framingOptions.mostExpensive = "";
  overview.framingOptions.discounted = [];
  overview.addons.background = "";
  overview.addons.props = 0;
  overview.addons.shading = false;
  overview.addons.noColor = false;
  overview.details = "";
  total = 0;

  // hide form, show results
  document.getElementById("results").style.display = "grid";
  document.getElementById("autoquote_form").style.display = "none";

  // find most expensive framing cost
  let highestFramingCost = 0;
  let highestFramingOption = "";
  for (let i = 0; i <= numOfCharacters; ++i) {
    let framingOption = formData.get(`framing_${i}`);
    if (highestFramingCost < framingPrices[framingOption]) {
      highestFramingCost = framingPrices[framingOption];
      highestFramingOption = framingOption;
    }
  }
  overview.framingOptions.mostExpensive = `${highestFramingOption}`;

  // add that to total as is,
  // apply 35% discount for all other framing options selected 
  total += highestFramingCost;
  let skippedHighest = false;
  for (let i = 0; i <= numOfCharacters; ++i) {
    let framingOption = formData.get(`framing_${i}`);
    if (highestFramingCost != framingPrices[framingOption] || skippedHighest) {
      total += framingPrices[framingOption] * 0.65; // discount
      overview.framingOptions.discounted.push(framingOption);
    } else {
      skippedHighest = true;
    }
  }

  // addons
  // backgrounds
  let background = formData.get("background");
  total += addonsPrices.backgrounds[background];
  overview.addons.background = background;

  // props
  let props = formData.get("props");
  if (props > 3) {
    total += addonsPrices.Props * (props - 3);
  }
  overview.addons.Props = props;

  // shading
  if (formData.get("shading") == "on") {
    total += addonsPrices.Shading * (numOfCharacters + 1);
    overview.addons.Shading = true;
  }

  // no color
  if (formData.get("no color") == "on") {
    total -= addonsPrices["No Color"] * (numOfCharacters + 1);
    overview.addons["No Color"] = true;
  }

  let details = formData.get("details");
  if (details != "") {
    overview.details = details;
  } else {
    overview.details = "[Empty]";
  }

  // create HTML
  let largeDelimeter = " &nbsp;-&nbsp; ";
  let smallDelimeter = " &nbsp;";
  let item = "";
  let cost = "";
  let math = "";
  let overviewDOM = document.getElementById("overview");
  let detailsDOM = document.getElementById("details");

  // clear out existing HTML
  overviewDOM.replaceChildren();
  detailsDOM.replaceChildren();


  let appendEntry = function(item, cost, math) {
    let newPar = document.createElement("p");
    newPar.innerHTML += item + largeDelimeter + cost;
    if (math != null) {
      newPar.innerHTML += smallDelimeter + math;
    }
    overviewDOM.append(newPar);
  }

  // highest framing option
  item = `${overview.framingOptions.mostExpensive}`;
  cost = `$${framingPrices[overview.framingOptions.mostExpensive]}`;
  appendEntry(item, cost, null);

  // discounted framing options
  for (let i = 0; i < overview.framingOptions.discounted.length; ++i) {
    item = `${overview.framingOptions.discounted[i]}`;
    cost = `$${framingPrices[overview.framingOptions.discounted[i]] * 0.65}`;
    math = `(65% of $${framingPrices[overview.framingOptions.discounted[i]]})`;
    appendEntry(item, cost, math);
  }

  if (overview.addons.Shading) {
    item = "Shading";
    cost = `$${addonsPrices.Shading * (numOfCharacters + 1)}`;
    math = `($${addonsPrices.Shading} per character)`;
    appendEntry(item, cost, math);
  }

  if (overview.addons["No Color"]) {
    item = "No Color";
    cost = `-$${addonsPrices["No Color"] * (numOfCharacters + 1)}`;
    math = `(-$${addonsPrices["No Color"]} per character)`;
    appendEntry(item, cost, math);
  }

  if (overview.addons.background != "None") {
    let background = overview.addons.background;
    let backgroundDOM = document.createElement("p");
    if (background == "Abstract") {
      item = "Abstract Background";
    } else if (background == "Simple Scene") {
      item = "Simple Scene";
    } else if (background == "Complex Scene") {
      item = "Complex Scene";
    }
    cost = `$${addonsPrices.backgrounds[background]}`;
    appendEntry(item, cost, null);
  }

  if (overview.addons.Props > 0) {
    item = `${overview.addons.Props} Props`;
    if (overview.addons.Props > 3) {
      cost = `$${addonsPrices.Props * (overview.addons.Props - 3)}`;
    } else {
      cost = "$0";
    }
    math = `($${addonsPrices.Props} each, first 3 are free)`;
    appendEntry(item, cost, math);
  }

  let boldPrompt = document.createElement("strong");
  boldPrompt.innerHTML = "Extra Details: ";
  detailsDOM.appendChild(boldPrompt);
  detailsDOM.innerHTML += overview.details;

  document.getElementById("total_value").innerHTML = `${currency.format(total)}`;
});

function hideResults() {
  document.getElementById("results").style.display = "none";
  document.getElementById("autoquote_form").style.display = "grid";
}

function copyResults() {
  let largeDelimeter = "  -  ";
  let smallDelimeter = " ";

  let result = "FURTHINGS QUOTE OVERVIEW\n";
  let appendEntry = function(item, cost, math) {
    if (math != undefined) {
      result += item + largeDelimeter + cost + smallDelimeter + math;
    } else {
      result += item + largeDelimeter + cost;
    }
    result += '\n';
  }

  let item = "";
  let cost = "";
  let math = "";

  // highest framing option
  item = `${overview.framingOptions.mostExpensive}`;
  cost = `$${framingPrices[overview.framingOptions.mostExpensive]}`;
  appendEntry(item, cost, null);

  // discounted framing options
  for (let i = 0; i < overview.framingOptions.discounted.length; ++i) {
    item = `${overview.framingOptions.discounted[i]}`;
    cost = `$${framingPrices[overview.framingOptions.discounted[i]] * 0.65}`;
    math = `(65% of $${framingPrices[overview.framingOptions.discounted[i]]})`;
    appendEntry(item, cost, math);
  }

  if (overview.addons.shading) {
    item = "Shading";
    cost = `$${addonsPrices.shading * (numOfCharacters + 1)}`;
    math = `($${addonsPrices.shading} per character)`;
    appendEntry(item, cost, math);
  }

  if (overview.addons.noColor) {
    item = "No Color";
    cost = `-$${addonsPrices.noColor * (numOfCharacters + 1)}`;
    math = `(-$${addonsPrices.noColor} per character)`;
    appendEntry(item, cost, math);
  }

  if (overview.addons.background != "None") {
    let background = overview.addons.background;
    let backgroundDOM = document.createElement("p");
    if (background == "Abstract") {
      item = "Abstract Background";
    } else if (background == "Simple Scene") {
      item = "Simple Scene";
    } else if (background == "Complex Scene") {
      item = "Complex Scene";
    }
    cost = `$${addonsPrices.backgrounds[background]}`;
    appendEntry(item, cost, null);
  }

  if (overview.addons.props > 0) {
    item = `${overview.addons.props} Props`;
    if (overview.addons.props > 3) {
      cost = `$${addonsPrices.props * (overview.addons.props - 3)}`;
    } else {
      cost = "$0";
    }
    math = `($${addonsPrices.props} each, first 3 are free)`;
    appendEntry(item, cost, math);
  }

  result += `TOTAL  -  ${currency.format(total)}\n`;

  if (overview.details != "[Empty]") {
    result += "Prompt  -  " + overview.details;
  }

  navigator.clipboard.writeText(result);
}

function createFramingOption(value) {
  let option = document.createElement("option");
  option.setAttribute("value", value);
  option.innerHTML = value;
  return option;
}

function addCharacter() {
  numOfCharacters += 1;
  // select
  let select = document.createElement("select");
  select.setAttribute("name", `framing_${numOfCharacters}`);

  // options
  //let closeup = createFramingOption("Closeup");
  const headshot = createFramingOption("Headshot");
  const bust = createFramingOption("Bust");
  const halfbody = createFramingOption("Halfbody");
  const thighup = createFramingOption("Thighup");
  const fullbody = createFramingOption("Fullbody");
  //let scenic = createFramingOption("Scenic");
  const all_options = [headshot, bust, halfbody, thighup, fullbody];

  // add all options to select
  for (const option of all_options) {
    select.appendChild(option);
  }

  // add a new row for every 3 characters
  let rowNumber = Math.floor(numOfCharacters / 3);
  if (numOfCharacters % 3 == 0) {
    let form = document.getElementById("autoquote_form");
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    row.appendChild(select);
    form.children[rowNumber - 1].after(row);
  } else {
    let framingRow = document.getElementById("autoquote_form").children[rowNumber];
    framingRow.appendChild(select);
  }
}

let numOfCharacters = 0;

let framingCosts = {
  "Closeup": 20,
  "Headshot": 30,
  "Bust": 35,
  "Halfbody": 40,
  "Thighup": 45,
  "Fullbody": 50,
  "Scenic": 50,
}

let addonsCosts = {
  backgrounds: {
    "None": 0,
    "Abstract": 6,
    "Simple Scene": 15,
    "Complex Scene": 30
  },
  props: 5,      // per character (first 3 are free)
  cleanup: 10,   // per character
  shading: 10,   // per character
  noColor: 8,    // per character (subtract this value, don't add)
}

let total = 0;
let overview = {
  framingOptions: {
    mostExpensive: "",
    discounted: []
  },
  addons: {
    background: "",
    props: 0,
    cleanup: false,
    shading: false,
    noColor: false
  },
  details: ""
};

// autoquote form submission
document.getElementById("autoquote_form").addEventListener("submit", function(e) {
  e.preventDefault(); // keep browser from reloading on submit
  var formData = new FormData(e.target);

  // reset overview vals
  overview.framingOptions.mostExpensive = "";
  overview.framingOptions.discounted = [];
  overview.addons.background = "";
  overview.addons.props = 0;
  overview.addons.cleanup = false;
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
    if (highestFramingCost < framingCosts[framingOption]) {
      highestFramingCost = framingCosts[framingOption];
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
    if (highestFramingCost != framingCosts[framingOption] || skippedHighest) {
      total += framingCosts[framingOption] * 0.65; // discount
      overview.framingOptions.discounted.push(framingOption);
    } else {
      skippedHighest = true;
    }
  }

  // addons
  // backgrounds
  let background = formData.get("background");
  total += addonsCosts.backgrounds[background];
  overview.addons.background = background;

  // props
  let props = formData.get("props");
  if (props > 3) {
    total += addonsCosts.props * (props - 3);
  }
  overview.addons.props = props;

  // cleanup
  if (formData.get("cleanup") == "on") {
    total += addonsCosts.cleanup * (numOfCharacters + 1);
    overview.addons.cleanup = true;
  }

  // shading
  if (formData.get("shading") == "on") {
    total += addonsCosts.shading * (numOfCharacters + 1);
    overview.addons.shading = true;
  }

  // no color
  if (formData.get("no color") == "on") {
    total -= addonsCosts.noColor * (numOfCharacters + 1);
    overview.addons.noColor = true;
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

  // for fomatting
  let currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

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
  cost = `$${framingCosts[overview.framingOptions.mostExpensive]}`;
  appendEntry(item, cost, null);

  // discounted framing options
  for (let i = 0; i < overview.framingOptions.discounted.length; ++i) {
    item = `${overview.framingOptions.discounted[i]}`;
    cost = `$${framingCosts[overview.framingOptions.discounted[i]] * 0.65}`;
    math = `(65% of $${framingCosts[overview.framingOptions.discounted[i]]})`;
    appendEntry(item, cost, math);
  }

  // cleanup
  if (overview.addons.cleanup) {
    item = "Cleanup";
    cost = `$${addonsCosts.cleanup * (numOfCharacters + 1)}`;
    math = `($${addonsCosts.cleanup} per character)`;
    appendEntry(item, cost, math);
  }

  if (overview.addons.shading) {
    item = "Shading";
    cost = `$${addonsCosts.shading * (numOfCharacters + 1)}`;
    math = `($${addonsCosts.shading} per character)`;
    appendEntry(item, cost, math);
  }

  if (overview.addons.noColor) {
    item = "No Color";
    cost = `-$${addonsCosts.noColor * (numOfCharacters + 1)}`;
    math = `(-$${addonsCosts.noColor} per character)`;
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
    cost = `$${addonsCosts.backgrounds[background]}`;
    appendEntry(item, cost, null);
  }

  if (overview.addons.props > 0) {
    item = `${overview.addons.props} Props`;
    if (overview.addons.props > 3) {
      cost = `$${addonsCosts.props * (overview.addons.props - 3)}`;
    } else {
      cost = "$0";
    }
    math = `($${addonsCosts.props} each, first 3 are free)`;
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

  let result = "";
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
  cost = `$${framingCosts[overview.framingOptions.mostExpensive]}`;
  appendEntry(item, cost, null);

  // discounted framing options
  for (let i = 0; i < overview.framingOptions.discounted.length; ++i) {
    item = `${overview.framingOptions.discounted[i]}`;
    cost = `$${framingCosts[overview.framingOptions.discounted[i]] * 0.65}`;
    math = `(65% of $${framingCosts[overview.framingOptions.discounted[i]]})`;
    appendEntry(item, cost, math);
  }

  // cleanup
  if (overview.addons.cleanup) {
    item = "Cleanup";
    cost = `$${addonsCosts.cleanup * (numOfCharacters + 1)}`;
    math = `($${addonsCosts.cleanup} per character)`;
    appendEntry(item, cost, math);
  }

  if (overview.addons.shading) {
    item = "Shading";
    cost = `$${addonsCosts.shading * (numOfCharacters + 1)}`;
    math = `($${addonsCosts.shading} per character)`;
    appendEntry(item, cost, math);
  }

  if (overview.addons.noColor) {
    item = "No Color";
    cost = `-$${addonsCosts.noColor * (numOfCharacters + 1)}`;
    math = `(-$${addonsCosts.noColor} per character)`;
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
    cost = `$${addonsCosts.backgrounds[background]}`;
    appendEntry(item, cost, null);
  }

  if (overview.addons.props > 0) {
    item = `${overview.addons.props} Props`;
    if (overview.addons.props > 3) {
      cost = `$${addonsCosts.props * (overview.addons.props - 3)}`;
    } else {
      cost = "$0";
    }
    math = `($${addonsCosts.props} each, first 3 are free)`;
    appendEntry(item, cost, math);
  }

  result += overview.details;

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
  let closeup = createFramingOption("Closeup");
  let headshot = createFramingOption("Headshot");
  let bust = createFramingOption("Bust");
  let halfbody = createFramingOption("Halfbody");
  let thighup = createFramingOption("Thighup");
  let fullbody = createFramingOption("Fullbody");
  let scenic = createFramingOption("Scenic");

  select.appendChild(closeup);
  select.appendChild(headshot);
  select.appendChild(bust);
  select.appendChild(halfbody);
  select.appendChild(thighup);
  select.appendChild(fullbody);
  select.appendChild(scenic);

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

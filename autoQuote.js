let number_of_characters = 1
function addCharacter(){
    number_of_characters += 1;
    // create label
    const label = document.createElement("label");
    label.setAttribute("for", `framing_${number_of_characters}`);
    label.setAttribute("class", "framing_label");
    label.innerHTML = `Framing: `;

    // create drop doown
    const select = document.createElement("select");
    select.setAttribute("name", `framing_${number_of_characters}`);
    select.setAttribute("class", "framing_input");

    // create drop down options
    const options = ["Extreme Closeup", "Headshot", "Bust", "Halfbody", "Thighup", "Fullbody", "Scenic"];
    let option_elements = [];
    for (i = 0; i < options.length; i++) {
        let option = document.createElement("option");
        value = options[i];
        option.setAttribute("value", value);
        option.innerHTML = value;
        option_elements.push(option);
    }
    option_elements.forEach((element) => select.appendChild(element));

    // display to client
    const dest = document.getElementById("framing");
    const wrap = document.createElement("div");
    wrap.setAttribute("class", "row");
    wrap.appendChild(label);
    wrap.appendChild(select);
    dest.appendChild(wrap);
}

function get_inputs(){
    let inputs = new Map();
    const framing_elements = document.getElementsByClassName("framing_input");
    inputs.set("characters", framing_elements.length);
    for (i=0; i < framing_elements.length; i++) {
        inputs.set(`framing_${i}`, framing_elements[i].value);
    }

    const boolean_properties = ["shading", "no_color"];
    boolean_properties.forEach((property) => inputs.set(property, document.getElementById(property).checked));

    const remaining_properties = ["render_quality", "chosen_background", "props", "details"];
    remaining_properties.forEach((property) => inputs.set(property, document.getElementById(property).value));
    return inputs
}

function show_cost(label, math, cost, DOM_result) {
    // let DOM_partial_result = document.createElement("div");
    let DOM_label = document.createElement("p");
    let DOM_math = document.createElement("p");
    let DOM_cost = document.createElement("p");
    // DOM_partial_result.setAttribute("class", "partial_result_wrap");
    DOM_label.setAttribute("class", "label");
    DOM_cost.setAttribute("class", "partial_result");
    DOM_label.innerHTML = label;
    DOM_math.innerHTML = math;
    if (cost >= 0) {
        DOM_cost.innerHTML = `$${cost}`;
    } else {
        DOM_cost.innerHTML = `-$${cost * -1}`
    }
    DOM_result.appendChild(DOM_label);
    DOM_result.appendChild(DOM_math);
    DOM_result.appendChild(DOM_cost);
}

function showHeader(header, DOM_result) {
    let DOM_header = document.createElement("h3");
    DOM_header.innerHTML = header;
    DOM_result.appendChild(DOM_header);
}

function compute_cost(DOM_result, inputs){
    const framing_data = {
        "Rough": {
            "Extreme Closeup": 20,
            "Headshot": 30,
            "Bust": 35,
            "Halfbody": 40,
            "Thighup": 45,
            "Fullbody": 50,
            "Scenic": 0 
        },
        "Clean": {
            "Extreme Closeup": 28,
            "Headshot": 38,
            "Bust": 43,
            "Halfbody": 48,
            "Thighup": 53,
            "Fullbody": 58,
            "Scenic": 0
        }
    };
    const background_data = {
        "Default Background": 0,
        "Abstract Background": 6,
        "Simple Scenic Background": 15,
        "Complex Scenic Background": 30
    };
    const addons_data = {
        "Shading": 10,
        "No Color": -8
    };
    const props_data = 5;
    const free_props = 3;

    // constant inputs
    const characters = inputs.get("characters");
    const render_quality = inputs.get("render_quality");
    const background = inputs.get("chosen_background");
    const props = Number(inputs.get("props"));
    const shading = inputs.get("shading");
    const no_color = inputs.get("no_color");

    // to be used if the user wants to send it as an email
    const space_char = "%20";
    const line_break = "%0D%0A";
    const indent = `---${space_char}${space_char}`;
    const separator = `${space_char}${space_char}-${space_char}${space_char}`
    let email_body = `Commission${space_char}Overview${line_break}`;
    email_body += `${indent}${render_quality}${space_char}Render${line_break}`

    let total = 0;

    let DOM_header = document.createElement("h2");
    DOM_header.innerHTML = "RESULTS";
    DOM_result.appendChild(DOM_header);

    // create HTML for framing results
    showHeader("Framing", DOM_result);

    // compute framing
    // figure out which framing style costs the most, then apply a discount to the others
    let max_framing_cost = 0;
    let max_framing_style = 0; // represents index
    for (i=0; i<characters; i++) {
        const framing_style = inputs.get(`framing_${i}`);
        const framing_cost = framing_data[render_quality][framing_style];
        max_framing_style = framing_cost > max_framing_cost ? i : max_framing_style;
        max_framing_cost = framing_cost > max_framing_cost ? framing_cost : max_framing_cost;
    }

    email_body += indent + inputs.get(`framing_${max_framing_style}`).replace(/ /g, space_char) + separator;
    email_body += `$${max_framing_cost}${line_break}`;
    show_cost(render_quality + " " + inputs.get(`framing_${max_framing_style}`), "", max_framing_cost, DOM_result);
    total += max_framing_cost;
    let framing_costs = [];
    framing_costs.push(max_framing_cost);

    let discount = 0.65
    for (i=0; i<characters; i++) {
        if (i != max_framing_style) {
            const framing_style = inputs.get(`framing_${i}`);
            let framing_cost = framing_data[render_quality][framing_style];
            const math = `${framing_cost} * ${discount}`;
            framing_cost *= discount;
            framing_cost = Math.round(framing_cost * 100) / 100;
            framing_costs.push(framing_cost);
            email_body += indent + framing_style.replace(/ /g, space_char) + separator;
            email_body += `$${framing_cost}${space_char}${space_char}`
            email_body += `(65%${space_char}of${space_char}$${framing_data[render_quality][framing_style]})${line_break}`;
            show_cost(render_quality + " " + framing_style, math, framing_cost, DOM_result);
            total += framing_cost;
        }
    }
    let math = ``
    let total_framing_costs = 0;
    framing_costs.forEach((cost) => {
        math += `${cost} + `;
        total_framing_costs += cost;
    });
    total_framing_costs = Math.round(total_framing_costs * 100) / 100;
    math = math.substring(0, math.length - 3);
    show_cost("Total Framing Costs", math, total_framing_costs, DOM_result);

    // shading
    let shading_cost = 0;
    if (shading) {
        showHeader("Shading", DOM_result);
        shading_cost = addons_data.Shading * characters;
        email_body += `${indent}Shading${separator}`;
        email_body += `$${shading_cost}${space_char}${space_char}`;
        email_body += `($${addons_data.Shading}${space_char}per${space_char}character)${line_break}`;
        show_cost("Shading", `${addons_data.Shading} per character | ${addons_data.Shading} * ${characters}`, shading_cost, DOM_result);
        total += shading_cost
    }

    // compute all other inputs
    // background
    showHeader("Background", DOM_result);
    let background_cost = background_data[background];
    background_cost = Math.round(background_cost * 100) / 100;
    email_body += indent + background.replace(/ /g, space_char) + separator;
    email_body += `$${background_cost}` + line_break;
    show_cost(background, "", background_cost, DOM_result);
    total += background_cost

    // props
    showHeader("Props", DOM_result);
    let props_cost = 0;
    if (props > free_props) {
        props_cost = props * free_props - props;
    }
    email_body += `${indent}Props:${space_char}${props}${separator}`;
    email_body += `$${props_cost}${space_char}${space_char}`;
    email_body += `(${props}${space_char}times${space_char}$${props_data},${space_char}first${space_char}${free_props}${space_char}are${space_char}free)${line_break}`;
    show_cost(`${props} prop(s)`, `${props_data} per prop, first three free | ${props_data} * (${props} - ${free_props}) | 5 * ${props > free_props ? props - free_props : 0}`, props_cost, DOM_result);
    total += props_cost


    // no color
    let no_color_cost = 0;
    if (no_color) {
        showHeader("No Color", DOM_result);
        no_color_cost = addons_data["No Color"] * characters;
        email_body += `${indent}No${space_char}Color${separator}`;
        email_body += `-$${no_color_cost * -1}${space_char}${space_char}`;
        email_body += `(-$${addons_data["No Color"] * -1}${space_char}per${space_char}character)${line_break}`;
        show_cost("No Color", `${addons_data["No Color"]} per character | ${addons_data["No Color"]} * ${characters}`, no_color_cost, DOM_result);
        total += no_color_cost
    }
    
    // total cost
    showHeader("Total Cost", DOM_result);
    math = ""
    let msg = "I used autoquote for this commission! My total came out to: "
    email_body += msg.replace(/ /g, space_char);
    const fields = [total_framing_costs, background_cost, props_cost, shading_cost, no_color_cost];
    fields.forEach((field) => {
        if (field != 0) {
            math += `${field} + `
        }
    })
    math = math.substring(0, math.length - 3);
    total = Math.round(total * 100) / 100;
    email_body += `$${total}${line_break}`
    email_body += inputs.get("details").replace(/ /g, space_char);
    create_email("furthingsart@gmail.com", "Commission Request", email_body);
    show_cost("Total", math, total, DOM_result);
}

function create_email(recipient, subject, body) {
    const anchor = document.createElement("a");
    const href = `mailto:${recipient}?subject=${subject}&body=${body}`
    anchor.setAttribute("href", href);
    anchor.innerHTML = "Email this quote to Red >";
    const dest = document.getElementById("follow_up");
    dest.appendChild(anchor);
    dest.style.display = "grid";
}

let quote_form = document.getElementById("quote_form");
quote_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = get_inputs();
    const result = document.getElementById("result");
    result.innerHTML = "";
    compute_cost(result, inputs);
    result.style.display = "grid";
});
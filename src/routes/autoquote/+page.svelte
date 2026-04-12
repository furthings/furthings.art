<script lang="ts">
import type { PageProps } from "./$types";
import { base } from "$app/paths";
import Footer from "$lib/Footer.svelte";
import HomeButton from "$lib/HomeButton.svelte";
const { data }: PageProps = $props();

let showForm: boolean = $state(true);
// must show/hide from using CSS
// since the form will be wiped if removed from DOM
$effect(() => {
	const form = document.getElementById("form") as HTMLElement | null;
	const quote = document.getElementById("quote") as HTMLElement | null;
	if (form != null && quote != null) {
		if (showForm) {
			form.style.display = "grid";
			quote.style.display = "none";
		} else {
			quote.style.display = "grid";
			form.style.display = "none";
		}
	}
});

type Quote = {
	breakdown: string[],
	details: string,
	total: string
}
type Commission = {
	framing: string[],
	background: string,
	props: number,
	shading: boolean,
	noColor: boolean,
	details: string,
}

function getFormData(e: SubmitEvent): Commission | null{
	const form = e.target as HTMLFormElement;
	const formData: FormData = new FormData(form);
	if (formData != null) {
		const framing = formData.getAll("framing") as string[] | null;
		const background = formData.get("background") as string | null;
		const props = formData.get("props") as string | null;
		const shading = formData.get("shading") as string | null;
		const noColor = formData.get("noColor") as string | null;
		const details = formData.get("details") as string | null;
		if (framing != null &&
			background != null &&
			props != null &&
			details != null) {
			const com: Commission = {
				framing: framing,
				background: background,
				props: Number(props),
				shading: shading === "on" ? true : false,
				noColor: noColor === "on" ? true : false,
				details: details
			};
			return com;
		}
	}
	console.error("Error getting form data");
	return null;
}

// Business logic to build a quote
// from the HTML form
function buildQuote(com: Commission): Quote {
	let total: number = 0;
	let result: Quote = {
		breakdown: [],
		details: '',
		total: '',
	};
	if (com.details != "") {
		result.details = com.details;
	} else {
		result.details = "[Empty]";
	}
	const delimiter = "  -  ";
	// helpful lambda for capitalizing first letter of word
	// source: https://stackoverflow.com/questions/42755664/capitalize-first-letter-of-each-word-in-js
	const capitalize = (input: string) => {
		return input.toLowerCase()
			.split(' ').map(
				function(word) {
					return word[0].toUpperCase() + word.slice(1);
				}
			).join(' ');
	};
	// find framing option with highest cost 
	// and add that cost first
	let maxFramingCost: number = 0;
	let maxFramingOption = "";
	com.framing.forEach((option) => {
		Object.entries(data.framing).forEach(([framingStyle, cost]) => {
			if (option === framingStyle) {
				if (maxFramingCost < cost) {
					maxFramingCost = cost;
					maxFramingOption = framingStyle;
				}
			}
		});
	});
	total += maxFramingCost;
	// quote.breakdown.push(`${prefix}${capitalize(maxFramingOption)} - $${maxFramingCost}`);
	result.breakdown.push(`${capitalize(maxFramingOption)}${delimiter}$${maxFramingCost}`);
	// get the other framing options
	// and add a 35% discount
	let skippedHighest = false;
	com.framing.forEach((framingOption) => {
		if (!skippedHighest && framingOption === maxFramingOption) {
			skippedHighest = true;
		} else {
			Object.entries(data.framing).forEach(([framingStyle, cost]) => {
				if (framingOption === framingStyle) {
					const price = 0.65 * cost;
					result.breakdown.push(`${capitalize(framingOption)}${delimiter}$${price}  (65% of $${cost})`);
					total += price;
				}
			});
		}
	});
	if (com.shading) {
		const price: number = data.addons.shading * com.framing.length;
		total += price;
		result.breakdown.push(`Shading${delimiter}$${price}  ($${data.addons.shading} per character)`);
	}
	if (com.noColor) {
		const price: number = data.addons['no color'] * com.framing.length;
		total -= price;
		result.breakdown.push(`No Color${delimiter}-$${price}  (-$${data.addons['no color']} per character)`)
	}
	Object.entries(data.backgrounds).forEach(([backgroundStyle, cost]) => {
		if (com.background === backgroundStyle) {
			const price: number = cost;
			if (price > 0) { // only show if greater than zero
				total += price;
				result.breakdown.push(`${capitalize(com.background)} Background${delimiter}$${price}`);
			}
		}
	});
	if (com.props > 3) { // first three are free
		const price: number = data.addons.props * (com.props - 3);
		total += price;
		result.breakdown.push(`${com.props} Props${delimiter}$${price}  ($${data.addons['props']} each, first 3 are free)`);
	}
	let currency = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});
	result.total = "TOTAL  -  " + currency.format(total);
	return result;
}

let currentQuote: Quote = $state({
	breakdown: [],
	details: '',
	total: ''
});
function processForm(e: SubmitEvent) {
	e.preventDefault(); // keep browser from reloading
	let com = getFormData(e) as Commission | null;
	if (com) {
		currentQuote = buildQuote(com);
		showForm = false;
	}
}

function copyQuote(): void {
	let result = "FURTHINGS QUOTE OVERVIEW\n";
	currentQuote.breakdown.forEach((item) => {
		result += item + '\n';
	})
	if (currentQuote.details != "[Empty]") {
		result += `\nPrompt  -  ${currentQuote.details}`;
	}
	result += `${currentQuote.total}`;
	navigator.clipboard.writeText(result);
}

const FIRST_ROW_CHAR_MAX = 3;
const OTHER_ROWS_CHAR_MAX = 4;
let characterCount: number = $state(1);
let completeRowCount: number = $derived(
	characterCount > FIRST_ROW_CHAR_MAX ?
	Math.floor((characterCount - FIRST_ROW_CHAR_MAX) / OTHER_ROWS_CHAR_MAX)
	: 0
);
let incompleteRowLength: number = $derived(
	characterCount > FIRST_ROW_CHAR_MAX ?
	(characterCount - FIRST_ROW_CHAR_MAX) - completeRowCount * OTHER_ROWS_CHAR_MAX
	: 0
);
function addCharacter() {
	// states derived from characterCount will be automatically recalculated
	++characterCount;
}
</script>

<style>
@import '$lib/SharedStyles.css';
#tos-warning {
	background-color: var(--background);
	padding: 8px 0;
	border-radius: 8px;
	margin: 12px 64px;
	padding: 12px 0;
	display: grid;
	place-items: center;
	grid-template-rows: 1.5rem;
}
#tos-warning p {
	color: var(--body_white);
	width: 90%;
	margin: 8px 5%;
}
#tos-warning a {
	background-color: var(--button_red);
	color: var(--body_white);
	font-weight: bold;
	text-decoration: none;
	border-radius: 8px;
	padding: 8px 16px;
	margin: 8px 0;
}
#tos-warning a:hover {
	background-color: var(--text_red);
}
#tos-warning i {
	color: #e09932;
}
form {
	display: grid;
	row-gap: 16px;
	place-items: center;
	width: 100%;
}
form .row {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(auto, max-content));
	grid-auto-flow: column;
	column-gap: 16px;
	place-items: center;
}
form label {
	text-align: right;
	color: var(--orange);
	font-weight: bold;
	font-size: 14pt;
}
form input[type=number], form select, form input[type=submit] {
	background-color: var(--button_red);
	border: none;
	font-weight: bold;
	font-size: 14pt;
	color: var(--body_white);
	border-radius: 8px;
	text-align: center;
	height: 40px;
}
form input[type=submit] {
	padding: 0 16px;
}
form input[type=number] {
	appearance: none;
	-webkit-appearance: none;
	margin: 0;
	-moz-appearance: textfield;
}
form input[type=checkbox] {
	/* remove default appearance */
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	/* custom style */
	width: 24px;
	height: 24px;
	margin: 0;
	padding: 0;
	border-radius: 8px;
	background-color: var(--button_red);
}
form input[type=number]:hover, form input[type=submit]:hover, form input[type=checkbox]:hover, form select:hover, #controls button:hover {
	background-color: var(--orange);
	cursor: pointer;
}
form input[type=checkbox]:checked {
	background-repeat: no-repeat;
	background-position: center;
	background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 32 32" xml:space="preserve"><path style="fill: %23D6C9C7" d="M11.941,28.877l-11.941-11.942l5.695-5.696l6.246,6.246l14.364-14.364L32,8.818"/></svg>');
}
form textarea {
	background-color: var(--background);
	color: var(--body_white);
	font-size: var(--body_text_size);
	border: none;
	border-radius: 8px;
	resize: vertical;
	padding: 16px;
	line-height: 1.5;
}
form .row:first-of-type label button {
	background: none;
	border: none;
	text-decoration: underline;
	color: var(--text_red);
	font-size: 10pt;
	font-weight: bold;
}
form .row:first-of-type label button:hover {
	cursor: pointer;
	color: var(--orange);
}
#quote {
	display: none;
	margin: 0 96px;
}
#quote #breakdown {
	min-height: 224px;
	display: grid;
	align-content: center;
}
#breakdown h1 {
	font-size: 14pt;
}
#breakdown h2 {
	font-size: 12pt;
}
#breakdown p {
	font-size: var(--body_text_size);
	color: var(--body_white);
	line-height: 2;
	margin: 8px 32px;
}
#controls {
	margin: 8px 32px 0 32px;
}
#controls button {
	background-color: var(--button_red);
	color: var(--body_white);
	font-weight: bold;
	font-size: 14pt;
	border: none;
	border-radius: 8px;
	padding: 8px 16px;
	min-width: 128px;
}
#controls button:first-of-type {
	float: left;
}
#controls button:last-of-type {
	float: right
}

@media screen and (max-width: 639px) {
	form textarea {
		width: 80%;
	}
	form .row {
		grid-template-columns: repeat(2, minmax(auto, max-content));
		grid-auto-flow: row;
		row-gap: 8px;
		column-gap: 8px;
	}
}
</style>

<main>
	<HomeButton />
	<h1 class="largeTitle centerText">AUTO QUOTE</h1>
	<!-- TOS WARNING -->
	<div id="tos-warning">
		<p style="color: var(--orange); font-weight: bold;" class="centerText">
			<i class="fa-solid fa-triangle-exclamation"></i>&nbsp; BEFORE YOU BUY &nbsp;<i class="fa-solid fa-triangle-exclamation"></i>
		</p>
		<p class="centerText">
			Ordering from me assumes that you have read, understood, and agreed to the conditions linked below.
		</p>
		<a href="{base}/tos">Terms of Service</a>
	</div>
	<p class="bodyText centerText">
		Curious to see how much a commission may cost but don't want to do the math yourself? Fill out this form and a price estimate will be automatically generated for you!
	</p>
	<form id="form" onsubmit={processForm}>
		<!--
			There is a variable number of Framing inputs, one for each character
			Create up to FIRST_ROW_CHAR_MAX for the first row,
			and up to OTHER_ROWS_CHAR_MAX for the other rows,
			but no more than the current number of characters
		-->
		<!-- The first row -->
		<div class="row">
			<label for="framing">Framing:<br/>
			<button type="button" onclick={addCharacter}>+ Add Character?</button>
			</label>
			{#each {length: characterCount <= FIRST_ROW_CHAR_MAX ? characterCount : FIRST_ROW_CHAR_MAX}}
				<select name="framing">
					<option value="headshot">Headshot</option>
					<option value="bust">Bust</option>
					<option value="halfbody">Halfbody</option>
					<option value="thighup">Thighup</option>
					<option value="fullbody">Fullbody</option>
				</select>
			{/each}
		</div>
		<!-- Completed Rows -->
		{#if completeRowCount > 0}
			{#each {length: completeRowCount}}
				<div class="row">
					{#each {length: OTHER_ROWS_CHAR_MAX}}
						<select name="framing">
							<option value="headshot">Headshot</option>
							<option value="bust">Bust</option>
							<option value="halfbody">Halfbody</option>
							<option value="thighup">Thighup</option>
							<option value="fullbody">Fullbody</option>
						</select>
					{/each}
				</div>
			{/each}
		{/if}
		<!-- The incomplete row -->
		{#if incompleteRowLength > 0}
			<div class="row">
				{#each {length: incompleteRowLength}}
					<select name="framing">
						<option value="headshot">Headshot</option>
						<option value="bust">Bust</option>
						<option value="halfbody">Halfbody</option>
						<option value="thighup">Thighup</option>
						<option value="fullbody">Fullbody</option>
					</select>
				{/each}
			</div>
		{/if}
		<div class="row">
			<label for="background">Background: </label>
			<select name="background">
				<option value="none">None</option>
				<option value="abstract">Abstract</option>
				<option value="scenic">Scenic</option>
			</select>
			<label for="props">Props: </label>
			<input name="props" value="0" type="number" min="0" max="9">
		</div>
		<div class="row">
			<label for="shading">Shading: </label>
			<input name="shading" type="checkbox">
			<label for="noColor">No Color: </label>
			<input name="noColor" type="checkbox">
		</div>
		<textarea name="details" rows="2" cols="50" placeholder="Write additional prompt info here if needed..."></textarea>
		<input type="submit" value="Results   >">
	</form>
	<div id="quote">
		<div id="breakdown">
			<h1 class="mediumTitle">QUOTE OVERVIEW:</h1>
			<p>
				{#each currentQuote.breakdown as item}
					-- {item}<br/>
				{/each}
			</p>
			<h2 class="mediumTitle">{currentQuote.total}</h2>
			<p><strong>Extra Details:</strong> {currentQuote.details}</p>
		</div>
		<div id="controls">
			<button onclick={() => showForm = true}><i class="fa-solid fa-angle-left"></i>Go Back</button>
			<button onclick={copyQuote}>Copy to Clipboard</button>
		</div>
	</div>
</main>
<Footer />

<script lang="ts">
import type { PageProps } from "./$types";
const { data }: PageProps = $props();
import { base } from "$app/paths";
import Footer from "$lib/Footer.svelte";
import Price from "$lib/Price.svelte";
import HomeButton from "$lib/HomeButton.svelte";
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
#price-listings {
	padding: 0 32px;
}
.title {
	color: var(--text_red);
	font-size: var(--small_title_size);
	margin: 0;
}
.description {
	color: var(--body_white);
	line-height: 1.5;
	font-size: var(--body_text_size);
	margin: 8px 0;
}
</style>

<main>
	<HomeButton/>
	<h1 class="largeTitle centerText bigLines">PRICE SHEET</h1>
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

	<!-- BASE FRAMING PRICE LISTINGS -->
	<div id="price-listings">
		<h1 class="title">BASE PRICE</h1>
		<p class="description">
			The framing of your character. By default, will be a lined render with color and a solid or gradient background.
		</p>
		<Price priceData={{
			title: "Headshot",
			cost: `$${data.framing['headshot']}`,
			description: "Also called a closeup. Shows the head and shoulder area.",
			examples: [
				"head 1.png",
				"head 2.png",
				"head 3.png",
				"head 4.png",
				"head 5.gif",
				"head 6.png",
			]
		}}/>
		<Price priceData={{
			title: "Bust",
			cost: `$${data.framing['bust']}`,
			description: "Also called a medium closeup. Shows the elbow/chest and above.",
			examples: [
				"bust 1.png",
				"bust 2.png",
				"bust 3.png",
				"bust 4.png",
				"bust 5.png",
				"coming soon.png",
			]
		}}/>
		<Price priceData={{
			title: "Halfbody",
			cost: `$${data.framing['halfbody']}`,
			description: "Also called a mid shot. Shows about half the character. Shows the belly area and above.",
			examples: [
				"half 1.png",
				"half 2.png",
				"coming soon.png",
			]
		}}/>
		<Price priceData={{
			title: "Thighup",
			cost: `$${data.framing['thighup']}`,
			description: "Also called a medium full shot. Shows the thigh/knee area and above.",
			examples: [
				"thigh 1.png",
				"thigh 2.png",
				"thigh 3.png"
			]
		}}/>
		<Price priceData={{
			title: "Fullbody",
			cost: `$${data.framing['fullbody']}`,
			description: "Also called a full shot. Shows your entire character in full and in focus.",
			examples: [
				"full 1.png",
				"full 2.png",
				"full 3.png",
				"full 4.png",
				"full 5.png",
				"full 6.png"
			]
		}}/>
		<!-- ADDONS -->
		<h1 class="title">ADD-ONS</h1>
		<p class="description">
			The following is entirely optional. The prices below will be added on top of the base.
		</p>
		<Price priceData={{
			title: "Additional Characters",
			cost: '+ 65% of base',
			description: `Per additional character. For example, if a fullbody costs $65, two fullbodies would be $65.00 + $42.25 (65% of $65) = $107.24. Different characters do not have to share the same level of framing!`,
			examples: [
				"add 1.png",
				"add 2.png",
				"add 3.png",
			]
		}}/>
		<Price priceData={{
			title: "Shading",
			cost: `+ $${data.addons.shading} per character`,
			description: "Adds light and shadow to the drawing. Color/style/atmosphere suggestions are always welcome!",
			examples: [
				"shade 1.png",
				"shade 2.png",
				"shade 3.png",
				"shade 4.png",
				"shade 5.png",
				"shade 6.png"
			]
		}}/>
		<Price priceData={{
			title: "Props",
			cost: `+ $${data.addons.props}`,
			description: "First three props are free by default! This is the price for the fourth one and above. Props are any non-character item that is included in the piece or smaller closeups (AKA inserts) of a character.",
			examples: [
				"prop 1.png",
				"prop 2.png",
				"prop 3.png",
				"prop 4.gif",
				"prop 5.png",
				"coming soon.png"
			]
		}}/>
		<Price priceData={{
			title: "Abstract Background",
			cost: `$${data.backgrounds['abstract']}`,
			description: "Examples include simple repeating patterns, graphics, et cetera. Anything that doesn't resemble a concrete environment or location.",
			examples: [
				"abstract 1.png",
				"abstract 2.png",
				"abstract 3.png",
			]
		}}/>
		<Price priceData={{
			title: "Scenic Background",
			cost: `$${data.backgrounds['scenic']}`,
			description: "Puts your character into a simplified environment.",
			examples: [
				"scene 1.png",
				"scene 2.png",
				"scene 3.png",
				"scene 4.png",
				"scene 5.png",
				"scene 6.png"
			]
		}}/>
		<Price priceData={{
			title: "Unclear Reference Fee",
			cost: `+ $${data.addons["unclear reference"][0]} or $${data.addons["unclear reference"][1]}`,
			description: "If the reference provided is a fursuit photo, screenshot of a 3D model, traditional drawing, shaded reference sheet, or similar, the higher fee will be added, as these kinds of references can be unclear in design and color. If you provide a digital color palette, this lowers to the smaller fee.",
			examples: [
				"coming soon.png",
				"coming soon.png",
				"coming soon.png",
				"coming soon.png",
				"coming soon.png",
				"coming soon.png"
			]
		}}/>
		<Price priceData={{
			title: "No Color",
			cost: `- $${data.addons["no color"]}`,
			description: "Looking for an empty sketch/lineart instead? Take this amount away from the base price, per character!",
			examples: [
				"colorless 1.png",
				"coming soon.png",
				"coming soon.png",
				"coming soon.png",
			]
		}}/>
	</div>
</main>
<Footer />

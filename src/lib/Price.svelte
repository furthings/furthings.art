<script lang="ts">
	import Viewer from "./Viewer.svelte";
	let { priceData }: {
		title: string,
		cost: string,
		description: string,
		examples: array<Object>
	} = $props();
	const uid = $props.id();
	let isDropped = $state(false);
	let viewer: Viewer;
</script>

<style>
.listing {
	padding: 4px 32px;
	border-radius: 8px;
	border: none;
	border-radius: 8px;
	background: none;
	width: 100%;
	text-align: left;
}
.listing h1 {
	color: var(--orange);
	font-size: 16pt;
	margin: 0;
	display: inline;
	overflow-y: auto;
}
.listing h1 i {
	width: 16px;
	margin-left: -28px;
	margin-right: 4px;
}
.listing p {
	color: var(--body_white);
	line-height: 1.5;
	font-size: var(--body_text_size);
	grid-column: span 2;
	margin: 8px 0;
}
.listingCost {
	float: right;
}
.listing div {
	grid-column: span 2;
	display: grid;
	place-items: center;
	grid-template-rows: repeat(auto-fill, minmax(auto, max-content));
	grid-auto-flow: row;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 8px;
	row-gap: 8px;
}
.listing div img {
	object-fit: contain;
	max-height: 200px;
	max-width: 100%;
}
.listing:hover {
	background: linear-gradient(var(--background), transparent);
	cursor: pointer;
}
.listing:hover h1, .listing:hover .listingCost {
	color: var(--text_red);
}
.listing div img:hover {
	scale: 1.2;
}
.active {
	background: linear-gradient(var(--background), transparent);
}
.active .listingTitle, .active .listingCost {
	color: var(--text_red);
}
</style>

{#if isDropped}
	<button type="button" id={uid} class="active listing" onclick={() => isDropped = !isDropped}>
		<h1 class="listingTitle">
			<i class="fa-solid fa-caret-down"></i>
			{ priceData.title }
		</h1>
		<h1 class="listingCost">{priceData.cost}</h1>
		<p class="listingDescription">{ priceData.description }</p>
		<!-- EXAMPLE IMAGES -->
		<div>
			{#each priceData.examples as example, i}
				<img
					src={ example.default }
					alt={"Example of Fade's " + priceData.title}
					onclick={() => viewer.view(i)}
				/>
			{/each}
		</div>
	</button>
{:else}
	<button type="button" id={uid} class="listing" onclick={() => isDropped = !isDropped}>
		<h1>
			<i class="fa-solid fa-caret-right"></i>
			{ priceData.title }
		</h1>
		<h1 class="listingCost">{ priceData.cost }</h1>
		<p>{ priceData.description }</p>
	</button>
{/if}

<Viewer bind:this={viewer} IMAGES={priceData.examples}/>

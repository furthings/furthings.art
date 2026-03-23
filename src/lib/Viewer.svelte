<script lang="ts">
	const { IMAGES }: { IMAGES: Array<string> } = $props();
	const uid = $props.id();
	let running = $state(false);
	let current = $state(0); // index to determine the 'currentImage'
	// display the viewer
	// imageIndex determines what the currentImage will start as
	export function view(imageIndex: number): void {
		running = true;
		current = imageIndex;
	}
	function prev(): void {
		if (--current < 0) { current = IMAGES.length - 1; }
	}
	function next(): void {
		if (++current > IMAGES.length - 1) { current = 0; }
	}
	// given a click anywhere inside the viewer,
	// if the click's target was not a child of viewer
	// quit the viewer
	function clickHandler(e: Event): void {
		const viewer = document.getElementById(uid);
		if (e.target === viewer) {
			running = false;
		}
	}
</script>

<style>
.viewer {
	display: grid;
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	grid-template-columns: 10% 80% 10%;
	grid-template-rows: 80% 20%;
	place-items: center;
	background-color: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(2px);
}
.viewer .currentImage {
	object-fit: contain;
	max-width: 100%;
	max-height: 95%;
	margin: 2.5% 0;
	padding: 0;
}
.viewer button {
	border: none;
	border-radius: 0;
	width: 100%;
	height: 33%;
	cursor: pointer;
	background-color: transparent;
	color: var(--button_red);
	font-size: 28pt;
}
.viewer button:hover {
	color: var(--orange);
}
.viewerImages {
	width: 100%;
	display: grid;
	grid-auto-flow: column;
	grid-column: 1 / span all;
	justify-content: center;
}
.viewerImages img {
	object-fit: fit;
	width: 95%;
	max-height: 128px;
	margin: 0;
	padding: 0;
}
.viewerImages img:hover {
	cursor: pointer;
	scale: 1.2;
}
.viewerImages .active {
	scale: 1.2;
}
</style>

{#if running}
	<div id={uid} class="viewer" onclick={clickHandler}>
		<button onclick={ prev }><i class="fa-solid fa-chevron-left"></i></button>
		<img class="currentImage" src={IMAGES[current].default} alt={ "Example" }/>
		<button onclick={ next }><i class="fa-solid fa-chevron-right"></i></button>
		<div class="viewerImages">
			{#each IMAGES as example, i}
				{#if current === i}
					<img class="active" src={ example.default } alt={"Example"} onclick={() => view(i)}/>
				{:else}
					<img src={ example.default } alt={"Example"} onclick={() => view(i)}/>
				{/if}
			{/each}
		</div>
	</div>
{/if}

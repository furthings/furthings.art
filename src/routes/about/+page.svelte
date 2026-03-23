<script lang="ts">
	import Footer from "$lib/Footer.svelte";
	import HomeButton from "$lib/HomeButton.svelte";
</script>

<style>
	@import '$lib/SharedStyles.css';
	main p {
		font-size: 14pt;
	}
	#thank-you {
		color: var(--orange);
		font-weight: bold;
	}
</style>

<main>
	<HomeButton />
	<h1 class="largeTitle centerText bigLines">HOWDY! I'M...</h1>
	<h1 class="mediumTitle centerText bigLines">FADE <i class="fa-solid fa-venus"></i> Young Adult</h1>
	<h1 class="smallTitle centerText bigLines">ILLUSTRATOR &nbsp;/&nbsp; ANIMATOR &nbsp;/&nbsp; DESIGNER</h1>
	<p class="bodyText centerText">
		Hiya, you can call me Fade! I like to draw and I'm tired :) I create character-focused digital artwork, ranging from illustrations, to animations, designs, pixelart, and 3D modeling. I also dabble in crafting/costume-making from time to time, but it's more of a hobby at this stage. My love for nature, creativity, self-expression, and my various animal friends inspire me to create and do what I do.
	</p>
	<p class="bodyText centerText">
		If you're looking to get in touch, I am currently most active on Discord and Bluesky, or you can check out any of my links below. If you're interested in my Telegram, please ask me for my username!
	</p>
	<p id="thank-you" class="centerText">
		Thank you so much for visiting! <span style="color: var(--text_red)">&lt;3</span>
	</p>
</main>
<Footer />

<script lang="ts">
	import Footer from "$lib/Footer.svelte";
	import HomeButton from "$lib/HomeButton.svelte";
	import DiscordADImg from "$lib/images/other/discord ad.png";
</script>

<style>
	@import '$lib/SharedStyles.css';
	img {
		display: block;
		height: 256px;
		margin: auto;
		border-radius: 24px;
	}
	a {
		text-decoration: none;
		color: var(--title_white);
		background-color: var(--button_red);
		border-radius: 8px;
		text-align: center;
		line-height: 3;
		font-weight: bold;
		width: 26%;
		margin: 0 37%;
	}
	a:hover {
		background-color: var(--orange);
	}
</style>

<main>
	<HomeButton />
	<h1 class="largeTitle centerText bigLines"><i class="fa-brands fa-discord"></i> THE FART CLOUD <i class="fa-brands fa-discord"></i></h1>
	<h2 class="mediumTitle centerText bigLines">Furry Artist Discord Server</h2>
	<img src={DiscordADImg} alt="Discord Server Advertisement"/>
	<h3 class="smallTitle centerText bigLines">Adults 21+ ONLY</h3>
	<p class="bodyText centerText">
		We are a furry-centered community, art games, and general freak hangout server :] We have two main focuses: artist community-building, and art trading minigames. We also have a completely optional After Dark (AD) section of the server with matching AD versions of our art and minigames channels, if you're into that sort of thing :3c
	</p>
	<a class="centerText" href="https://discord.gg/pn4HPgYA83">Join Us >:] </a>
</main>

<Footer />

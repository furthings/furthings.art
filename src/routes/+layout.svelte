<script lang="ts">
    let { children } = $props();
</script>

<style>
footer {
  width: var(--main_width);
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-flow: column;
  align-items: center;
  justify-items: center;
}

footer a {
  text-decoration: none;
  color: var(--body_white);
  text-align: center;
}

footer a enhanced\:img {
  width: calc(var(--main_width) / 16);
  height: auto;
  margin: 0;
  padding: 0;
  stroke: var(--body_white);
  fill: var(--body_white);
}

footer a:hover enhanced\:img {
  filter: brightness(200%);
  transition-duration: .1s;
  transform: scale(1.5);
}
@media screen and (max-width: 639px) {
	footer {
		padding: calc(env(safe-area-inset-bottom) + 16px) 0;
		grid-template-rows: 1fr 1fr;
		grid-template-columns: repeat(6, 1fr);
		row-gap: 8px;
	}
	footer a enhanced\:img {
		width: calc(var(--main_width) / 13);
		height: auto;
	}
}
</style>

<svelte:head>
</svelte:head>
<main>
    {@render children()}
</main>
<footer>
	<!-- email -->
	<a href="mailto:furthingsart@gmail.com" aria-label="Fade's Email">
		<enhanced:img src="/static/images/footer/envelope.svg" alt="Email logo"/>
	</a>
	<!-- bluesky -->
	<a href="https://bsky.app/profile/furthings.art" aria-label="Fade's Bluesky">
		<enhanced:img src="/static/images/footer/bsky.svg" alt="Bluesky logo"/>
	</a>
	<!-- fur affinity -->
	<a href="https://www.furaffinity.net/user/furthings#" aria-label="Fade's Furaffinity">
		<enhanced:img src="/static/images/footer/fa-logo.svg" alt="Furaffinity logo"/>
	</a>
	<!-- instagram -->
	<a href="https://www.instagram.com/furthingsart/" aria-label="Fade's Instagram">
		<enhanced:img src="/static/images/footer/instagram.svg" alt="Instagram logo"/>
	</a>
	<!-- tumblr? go here -->
	<!-- toyhouse -->
	<a href="https://toyhou.se/furthings" aria-label="Fade's Toyhouse">
		<enhanced:img src="/static/images/footer/toyhouse_icon.svg" alt="Toyhouse logo"/>
	</a>
	<!-- youtube -->
	<a href="https://www.youtube.com/@furthings" aria-label="Fade's Youtube">
		<enhanced:img src="/static/images/footer/youtube.svg" alt="Youtube logo"/>
	</a>
	<!-- paypal -->
	<a href="https://paypal.me/Avrey" aria-label="Fade's Paypal">
		<enhanced:img src="/static/images/footer/paypal.svg" alt="Paypal logo"/>
	</a>
	<!-- kofi -->
	<a href="https://ko-fi.com/furthings" aria-label="Fade's Ko-fi">
		<enhanced:img src="/static/images/footer/kofi-logo.svg" alt="Ko-fi logo"/>
	</a>
	<a href="https://vgen.co/furthings" aria-label="Fade's Vgen">
		<enhanced:img src="/static/images/footer/vgen-logo.svg" alt="Vgen logo"/>
	</a>
	<!-- etsy -->
	<a class="etsy-logo" href="https://www.etsy.com/shop/furthingsart" aria-label="Fade's Etsy">
		<enhanced:img src="/static/images/footer/etsy.svg" alt="Etsy logo"/>
	</a>
	<!-- discord -->
	<a href="/about/discord" aria-label="Fade's Discord Server">
		<enhanced:img src="/static/images/footer/discord.svg" alt="Discord logo"/>
	</a>
	<!-- telegram -->
	<a href="/about" aria-label="Fade's Telegram">
		<enhanced:img src="/static/images/footer/telegram.svg" alt="Telegram logo"/>
	</a>
	<!-- artfight -->
	<a href="https://artfight.net/~furthings" aria-label="Fade's Artfight">
		<enhanced:img src="/static/images/footer/af-logo.svg" alt="Artfight logo"/>
	</a>
</footer>

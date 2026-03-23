<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import { base } from "$app/paths";
</script>

<style>
footer {
  width: var(--main_width);
  margin: 16px calc(50% - var(--main_width) / 2);
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

footer a * {
  width: calc(var(--main_width) / 16);
  font-size: var(--medium_title_size);
  margin: 0;
  padding: 0;
}

footer a:hover i, footer a:hover img {
  filter: brightness(200%);
  transition-duration: .1s;
  transform: scale(1.5);
}
</style>

<footer>
	<!-- email -->
	<a href="mailto:furthingsart@gmail.com" aria-label="Fade's Email">
		<i class="fa-solid fa-envelope"></i>
	</a>
	<!-- youtube -->
	<a href="https://www.youtube.com/@furthings" aria-label="Fade's Youtube">
		<i class="fa-brands fa-youtube"></i>
	</a>
	<!-- bluesky -->
	<a href="https://bsky.app/profile/furthings.art" aria-label="Fade's Bluesky">
		<i class="fa-brands fa-bluesky"></i>
	</a>
	<!-- fur affinity -->
	<a href="https://www.furaffinity.net/user/furthings#" aria-label="Fade's Furaffinity">
		<img src={base + "/images/footer/fa-logo.svg"} alt="Furaffinity logo"/>
	</a>
	<!-- instagram -->
	<a href="https://www.instagram.com/furthingsart/" aria-label="Fade's Instagram">
		<i class="fa-brands fa-instagram"></i>
	</a>
	<!-- tumblr? go here -->
	<!-- toyhouse -->
	<a href="https://toyhou.se/furthings" aria-label="Fade's Toyhouse">
		<img src={base + "/images/footer/toyhouse_icon.svg"} alt="Toyhouse logo"/>
	</a>
	<!-- paypal -->
	<a href="https://paypal.me/Avrey" aria-label="Fade's Paypal">
		<i class="fa-brands fa-paypal"></i>
	</a>
	<!-- kofi -->
	<a href="https://ko-fi.com/furthings" aria-label="Fade's Ko-fi">
		<img src={base + "/images/footer/kofi-logo.svg"} alt="Ko-fi logo"/>
	</a>
	<!-- etsy -->
	<a href="https://www.etsy.com/shop/furthingsart" aria-label="Fade's Etsy">
		<i class="fa-brands fa-etsy"></i>
	</a>
	<!-- discord -->
	<a href="{base}/about/discord" aria-label="Fade's Discord Server">
		<i class="fa-brands fa-discord"></i>
	</a>
	<!-- telegram -->
	<a href="{base}/about" aria-label="Fade's Telegram">
		<i class="fa-brands fa-telegram"></i>
	</a>
	<!-- artfight -->
	<a href="https://artfight.net/~furthings" aria-label="Fade's Artfight">
		<img src={base + "/images/footer/af-logo.svg"} alt="Artfight logo"/>
	</a>
</footer>

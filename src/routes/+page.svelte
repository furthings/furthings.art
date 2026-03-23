<script lang="ts">
// import images
// import WhipmerImg from "$lib/images/whimper.png";
import { base } from "$app/paths";
import PiperImg from "$lib/images/Piper.png";
import Footer from "$lib/Footer.svelte";
</script>

<style>
@import '$lib/SharedStyles.css';
#home_logo {
  width: 40%;
  margin: 12px 30% -21px 30%;
  position: relative;
}
nav {
  width: 80%;
  margin: 0 10%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  row-gap: 12px;
}
nav a {
	text-decoration: none;
	color: var(--title_white);
	background-color: var(--button_red);
	border-radius: 8px;
	text-align: center;
	line-height: 3;
	font-weight: bold;
}
nav a:hover {
	background-color: var(--orange);
}
.underlineHover {
	text-decoration: none;
}
.underlineHover:hover {
  text-decoration: underline;
}
</style>

<main>
	<h1 class="largeTitle centerText bigLines">FURTHINGS COMMISSION HUB</h1>

	<!-- COMMISSIONS OPEN -->
	<!-- <a style="margin-bottom: 8px; font-weight: bold" class="mediumTitle centerText">
		COMMISSIONS ARE OPEN!<br/></a> -->

	<!-- SPECIFIC OPENINGS -->
	<!-- <a style="margin-bottom: 8px; font-weight: bold" class="mediumTitle centerText underlineHover" href="https://ko-fi.com/c/f8c7b2d012">
			CURRENT OPENING:<br/>
			<span class="smallTitle" style="color: var(--orange)">Fursona ID Cards! [1/6 left]</span></a> -->

      <a class="smallTitle centerText bigLines underlineHover" href="https://trello.com/b/GwqS2tYQ/Fades-Queue">CLICK TO VISIT MY QUEUE ></a>
		
	  <a href="https://bsky.app/profile/furthings.art/post/3mg4l3ts6ys2l" aria-label="Piper fundraiser">
		  <img id="home_logo" src={ PiperImg } style="margin-bottom: 8px" alt="Piper Fundraiser">
	  </a>
		
	<!-- WHIMPER.PNG -->
	<!-- <img id="home_logo" src={ WhipmerImg }> -->
	<nav>
		<a href="{base}/prices">Price Sheet</a>
		<a href="{base}/autoquote">Auto Quote</a>
		<a href="{base}/about">About Me</a>
		<a href="{base}/tos">Terms of Service</a>
	</nav>
</main>
<Footer />

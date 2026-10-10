<script lang="ts">
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

	<!-- <a style="margin-bottom: 8px; font-weight: bold" class="mediumTitle centerText">
		COMMISSIONS ARE OPEN!<br/></a> -->

	
	<a style="margin-bottom: 8px; font-weight: bold" class="mediumTitle centerText underlineHover" href="https://vgen.co/furthings">
		COMMISSIONS ARE OPEN!<br/>
	<span class="smallTitle" style="color: var(--orange); font-size: 18pt"><i>(Vgen only until I get verified!)</i></span></a>

	<a class="smallTitle centerText bigLines underlineHover" href="https://trello.com/b/GwqS2tYQ/Fades-Queue">CLICK TO VISIT MY QUEUE ></a>
		
	<a href="https://bsky.app/profile/furthings.art/post/3mg4l3ts6ys2l" aria-label="Piper fundraiser">
		<img id="home_logo" src={base + "/images/Piper.png"} style="margin-bottom: 8px" alt="Piper Fundraiser">
	</a>
		
	<!-- WHIMPER.PNG -->
	<!-- <img id="home_logo" src="images/whimper.png"> -->
	<nav>
		<a href="/prices">Price Sheet</a>
		<a href="/autoquote">Auto Quote</a>
		<a href="/about">About Me</a>
		<a href="/tos">Terms of Service</a>
	</nav>
</main>
<Footer />

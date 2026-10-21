<script>
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from 'fontawesome-svelte';

  library.add(faAngleLeft);
</script>
<style>
a {
  color: var(--text_red);
  text-decoration: none;
  font-size: 32pt;
  font-weight: bold;
  position: absolute;
  left: calc((50% - var(--main_width) / 2) + 16px);
}
a:hover {
  color: var(--orange);
}
@media screen and (max-width: 639px) {
	a {
		display: none;
	}
}
</style>
<a href="/" aria-label="Home">
  <FontAwesomeIcon icon={faAngleLeft} />
	<i class="fa-solid fa-angle-left"></i>
</a>

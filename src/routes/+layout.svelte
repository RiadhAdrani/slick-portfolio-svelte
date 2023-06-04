<script lang="ts">
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
	import '$lib/index.scss';
	import { theme } from '$lib/stores/theme';

	export const prerender = true;
</script>

<div class={`body contents ${$theme ? 'theme-dark' : 'theme-light'}`}>
	<NavMenu />
	<div class="content container"><slot /></div>
</div>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 40px 0px;
	}

	@media (max-width: 950px) {
		.content {
			padding-left: 15px;
			padding-right: 15px;
		}
	}

	@media (max-width: 750px) {
		.content {
			padding-left: 10px;
			padding-right: 10px;
		}
	}

	.body {
		margin: 0px;
		background-color: var(--main);
		color: var(--main-text);
		font-family: var(--text-f);
		display: flex;
		flex-direction: column;
		transition-duration: 200ms;

		letter-spacing: 1px;

		min-height: 100vh;
	}

	:global(p) {
		margin: 0px;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 5px 0px;
	}
</style>

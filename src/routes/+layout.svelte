<script lang="ts">
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';

	export const prerender = true;
</script>

<NavMenu />
<div class="content container"><slot /></div>

<style lang="scss">
	:global(:root) {
		color-scheme: dark;

		--primary-c: #000;
		--variant-c: #0e0e0e;
		--secondary-c: #1e1e1e;
		--accent-c: #2e2e2e;
		--extra-c: #4e4e4e;

		--primary-text-c: #fff;
		--secondary-text-c: #f0f0f0;
		--accent-text-c: #a0a0a0;
		--extra-text-c: #707070;

		--text-f: 'Ubuntu';
		--title-f: 'Fira Sans';
	}

	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 40px 0px;
	}

	.container {
		max-width: 1200px;
		min-width: 1200px;
		margin: 0px auto;

		@media (max-width: 1350px) {
			& {
				max-width: 1000px;
				min-width: 1000px;
			}
		}

		@media (max-width: 1075px) {
			& {
				max-width: -webkit-fill-available;
				min-width: -webkit-fill-available;
			}
		}
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

	:global(body) {
		margin: 0px;
		background-color: var(--primary-c);
		color: var(--primary-text-c);
		font-family: var(--text-f);
		display: flex;
		flex-direction: column;

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

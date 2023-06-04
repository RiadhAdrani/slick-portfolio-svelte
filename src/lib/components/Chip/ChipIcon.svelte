<script lang="ts">
	import { theme } from '$lib/stores/theme';

	export let name: string;
	export let logo: string;
	export let inverted = false;
	export let grayscale = true;
</script>

<div class="chip-icon" data-help={name} class:chip-icon-grayscale={grayscale}>
	<img
		class="chip-icon-logo"
		class:chip-icon-logo-inverted={$theme && inverted}
		src={logo}
		alt={name}
	/>
</div>

<style lang="scss">
	.chip-icon {
		display: flex;
		position: relative;
		padding: 10px;
		margin-right: 5px;
		margin-bottom: 5px;
		border: 1px solid var(--border);
		justify-content: center;
		border-radius: 10px;

		&-grayscale {
			filter: grayscale(0.65);

			&:hover {
				filter: grayscale(0);
			}
		}

		&:hover {
			border-color: var(--border-hover);
			cursor: help;

			&:after {
				content: attr(data-help);
				display: inline-block;
				position: absolute;
				width: max-content;
				background-color: var(--secondary);
				padding: 5px 10px;
				left: 10px;
				top: calc(100% + 0px);
				border: 1px solid var(--border);
				border-radius: 15px;
			}
		}

		&-logo {
			height: 15px;
			width: 15px;

			&-inverted {
				filter: invert(100);
			}
		}
	}
</style>

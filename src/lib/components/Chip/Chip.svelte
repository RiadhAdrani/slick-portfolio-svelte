<script lang="ts">
	import { onMount } from 'svelte';

	let el: HTMLElement;

	export let label = '';
	export let active = false;
	export let hoverable = true;
	export let size = 'auto';

	onMount(() => {
		el.style.setProperty('--size', size);
	});
</script>

<p
	bind:this={el}
	class="chip"
	class:chip-active={active}
	class:chip-hoverable={hoverable}
	data-size={size}
	on:click
	on:keydown
	on:keypress
	on:keyup
>
	{label}
</p>

<style lang="scss">
	.chip {
		--size: auto;

		padding: 5px 15px;
		margin: 2.5px;
		display: inline-block;
		border: 1px solid var(--accent-c);
		border-radius: 20px;
		cursor: pointer;
		font-weight: 200;
		font-size: 0.95em;
		transition-duration: 150ms;
		font-size: var(--size);

		&-hoverable {
			&:hover {
				background-color: var(--secondary-c);
			}
		}

		&-active {
			background-color: var(--extra-text-c);

			&:hover {
				background-color: var(--extra-c);
			}
		}
	}
</style>

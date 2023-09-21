<script lang="ts">
	import { onMount } from 'svelte';

	let el: HTMLElement;

	export let active = false;
	export let size = 'auto';
	export let classes = '';
	export let href = '';

	$: className = `py-[5px] px-[15px] m-[2.5px] inline-block border-[1px] border-solid border-[var(--border)] rounded-[20px] tracking-wider text-[0.8em] text-[var(--tertiary-text)] duration-[150ms] font-light ${
		active ? 'hover:bg-[var(--accent-hover)] bg-[var(--accent)]' : 'hover:bg-[var(--secondary)]'
	} ${classes}`;

	onMount(() => {
		el.style.setProperty('--size', size);
	});
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	bind:this={el}
	{href}
	class={className}
	on:click
	on:keydown
	on:keypress
	on:keyup
>
	<slot />
</svelte:element>

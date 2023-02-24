<script lang="ts">
	import { changeColorOpacity } from '@riadh-adrani/utility-js';
	import { onMount } from 'svelte';

	let el: HTMLElement;

	export let color = '#ffffff00';
	export let margin = '0px';
	export let tiltDegree = 5;

	$: borderColor = changeColorOpacity(color, 0.5);
	$: dropColor = changeColorOpacity(color, 0.15);
	$: bgColor = changeColorOpacity(color, 0.01);

	$: {
		if (el) {
			el.style.setProperty('--border-color', borderColor);
			el.style.setProperty('--drop-color', dropColor);
			el.style.setProperty('--bg-color', bgColor);
		}
	}

	const onHover = (ev: MouseEvent) => {
		const target = ev.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();

		const x = ev.clientX - rect.left;
		const y = ev.clientY - rect.top;

		el.style.setProperty('--drop-x', `${x}px`);
		el.style.setProperty('--drop-y', `${y}px`);

		const width = el.offsetWidth;
		const height = el.offsetHeight;

		const cX = rect.x + width / 2;
		const cY = rect.y + height / 2;

		const mX = ev.clientX - cX;
		const mY = ev.clientY - cY;

		const rY = ((tiltDegree * mX) / (width / 2)).toFixed(2);
		const rX = ((-1 * (tiltDegree * mY)) / (height / 2)).toFixed(2);

		el.style.setProperty('--rot-x', `${rX}deg`);
		el.style.setProperty('--rot-y', `${rY}deg`);
	};

	onMount(() => {
		el.style.setProperty('margin', margin);
	});
</script>

<div bind:this={el} on:mousemove={onHover} class="card">
	<slot />
</div>

<style lang="scss">
	.card {
		--border-color: transparent;
		--bg-color: transparent;
		--drop-color: transparent;

		--drop-x: 0;
		--drop-y: 0;

		--rot-x: 0;
		--rot-y: 0;

		display: inline-flex;
		flex-direction: column;
		border: 1px solid var(--accent-c);
		padding: 25px;
		border-radius: 15px;
		transition-duration: 200ms;
		position: relative;

		&:hover {
			transform: perspective(1000px) rotateX(var(--rot-x)) rotateY(var(--rot-y)) scale(1.01);
			background-color: var(--bg-color);
			background-image: radial-gradient(
				circle at var(--drop-x) var(--drop-y),
				var(--drop-color),
				transparent
			);
			border-color: var(--border-color);
		}
	}
</style>

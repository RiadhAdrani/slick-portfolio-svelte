<script lang="ts">
	import { changeColorOpacity } from '@riadh-adrani/utils';
	import { onMount } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	let el: HTMLElement;

	export let color = '#ffffff00';
	export let margin = '0px';
	export let tiltDegree = 5;
	export let classes: Array<string> = [];
	export let href: undefined | string = undefined;
	export let bgImg: string | undefined = undefined;

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

	// svelte typing is broken...
	const onHover: MouseEventHandler<HTMLDivElement> = (ev) => {
		const target = ev.currentTarget;

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
		el.style.setProperty('--bg-img', bgImg ? `url(${bgImg})` : '');
	});
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={href ? 'a' : 'div'}
	{href}
	bind:this={el}
	on:mousemove={onHover}
	class={`card text-inherit decoration-none inline-flex flex-col border-1px border-solid border-[var(--border)] rounded-15px duration relative ${classes.join(
		' '
	)}`}
	style:bgColor={'red'}
>
	<div class="card-bg-img flex-1 flex flex-col p-25px rounded-15px">
		<slot />
	</div>
</svelte:element>

<style lang="scss">
	.card {
		--border-color: transparent;
		--bg-color: transparent;
		--drop-color: transparent;

		--bg-img: url();

		--drop-x: 0;
		--drop-y: 0;

		--rot-x: 0;
		--rot-y: 0;

		background: linear-gradient(90deg, var(--main) 0%, var(--main) 60%, var(--main-60) 100%),
			no-repeat right 40% / 40% var(--bg-img);

		&-bg-img {
			&:hover {
				background-color: var(--bg-color);
				background-image: radial-gradient(
					circle at var(--drop-x) var(--drop-y),
					var(--drop-color),
					transparent
				);
			}
		}

		&:hover {
			transform: perspective(1000px) rotateX(var(--rot-x)) rotateY(var(--rot-y)) scale(1.01);
			border-color: var(--border-hover);
		}
	}
</style>

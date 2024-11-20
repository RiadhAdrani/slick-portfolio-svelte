<script lang="ts">
	import type { Icons } from '$lib/utils';
	import { viewBox } from './Icons';

	let el: SVGElement = $state();


	interface Props {
		size?: string;
		color?: string;
		icon: Icons;
	}

	let { size = '30px', color = 'var(--main-text)', icon }: Props = $props();
</script>

<svg
	bind:this={el}
	class="inline-block"
	viewBox={viewBox(icon)}
	fill={color}
	height={size}
	width={size}
>
	<path d={icon} />
</svg>

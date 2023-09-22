<script lang="ts">
	import type { Icons } from '$lib/utils';
	import { viewBox } from './Icons';

	let el: SVGElement;

	export let size = '30px';
	export let color = 'var(--main-text)';

	export let icon: Icons;
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

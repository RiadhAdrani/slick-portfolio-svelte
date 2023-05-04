<script lang="ts">
	import type { Icons } from '$lib/utils';
	import { viewBox } from './Icons';

	let el: SVGElement;

	export let size = '30px';
	export let color = '#fff';

	export let icon: Icons;
</script>

<svg bind:this={el} viewBox={viewBox(icon)} fill={color} height={size} width={size}>
	<path d={icon} />
</svg>

<style lang="scss">
	svg {
		display: inline-block;
	}
</style>

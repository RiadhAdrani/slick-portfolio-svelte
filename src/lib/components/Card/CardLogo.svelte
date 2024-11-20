<script lang="ts">
	interface Props {
		src: string;
		alt: string;
		size?: number;
		radius?: string;
		classes?: string;
	}

	let {
		src,
		alt,
		size = 50,
		radius = '15px',
		classes = ''
	}: Props = $props();
</script>

<img class={`rounded-${radius} ${classes} aspect-square`} {src} {alt} height={size} width={size} />

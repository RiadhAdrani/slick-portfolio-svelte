<script lang="ts">
	export let src: string;
	export let alt: string;
	export let size = 50;
	export let radius = '15px';
</script>

<img class="card-logo" {src} {alt} height={size} width={size} style={`border-radius:${radius};`} />

<script>
	import Assets from '$lib/Assets';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { useTitle } from '$lib/Utils';

	const title = useTitle('Resumé');
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<div />
<MainTitle>Resume</MainTitle>
<div class="resume">
	<a href={Assets.CV}>
		<Chip label="Download" size={'1.25em'} />
	</a>
</div>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>

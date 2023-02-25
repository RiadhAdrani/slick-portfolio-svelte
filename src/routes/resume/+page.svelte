<script>
	import Assets from '$lib/Assets';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { ResumeParams } from '$lib/Params';
	import { useTitle } from '$lib/Utils';

	const { cv, title } = ResumeParams;
</script>

<svelte:head>
	<title>{useTitle(title)}</title>
</svelte:head>
<div />
<MainTitle>{title}</MainTitle>
<div class="resume">
	{#if cv}
		<a href={Assets.CV}>
			<Chip label="Download" size={'1.25em'} />
		</a>
	{:else}
		<Chip label="Ooops! no CV at the moment. You should input your cv link in $lib/Params.ts" />
	{/if}
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

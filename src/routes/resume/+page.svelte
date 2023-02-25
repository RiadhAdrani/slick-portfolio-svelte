<script>
	import Chip from '$lib/components/Chip/Chip.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { ResumeParams, PortfolioTitle } from '$lib/params';
	import { useTitle } from '$lib/utils';

	const { cv, title } = ResumeParams;
</script>

<svelte:head>
	<title>{useTitle(title, PortfolioTitle)}</title>
</svelte:head>
<div />
<MainTitle>{title}</MainTitle>
<div class="resume">
	{#if cv}
		<a href={cv}>
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

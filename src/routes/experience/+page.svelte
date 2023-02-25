<script>
	import ExperienceCard from '$lib/components/ExperienceCard/ExperienceCard.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { ProfessionalCareerParams, PortfolioTitle } from '$lib/params';
	import { useTitle } from '$lib/utils';

	const { items, title } = ProfessionalCareerParams;
</script>

<svelte:head>
	<title>{useTitle(title, PortfolioTitle)}</title>
</svelte:head>
<div class="experience">
	<MainTitle>{title}</MainTitle>
	<div class="experience-experiences">
		{#each items as job}
			<ExperienceCard experience={job} />
		{/each}
	</div>
</div>

<style lang="scss">
	.experience {
		display: flex;
		flex-direction: column;

		&-experiences {
			display: flex;
			flex-direction: column;
			margin-top: 40px;
		}
	}
</style>

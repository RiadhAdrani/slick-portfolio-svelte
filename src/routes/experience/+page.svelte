<script>
	import { JobExperiencesList as jobs } from '$lib/Career';
	import ExperienceCard from '$lib/components/ExperienceCard/ExperienceCard.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { ProfessionalCareerParams } from '$lib/Params';
	import { useTitle } from '$lib/Utils';

	const { items, title } = ProfessionalCareerParams;
</script>

<svelte:head>
	<title>{useTitle(title)}</title>
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

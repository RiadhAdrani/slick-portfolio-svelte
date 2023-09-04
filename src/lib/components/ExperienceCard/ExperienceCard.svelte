<script lang="ts">
	import type { Experience } from '$lib/types';
	import { countMonths, getMonthName } from '$lib/utils/helpers';
	import Card from '../Card/Card.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import Chip from '../Chip/Chip.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import { getAssetURL } from '$lib/data/assets';

	export let experience: Experience;

	const months = countMonths(experience.period.from, experience.period.to);
	const from = `${getMonthName(
		experience.period.from.getMonth()
	)} ${experience.period.from.getFullYear()}`;
	const to = experience.period.to
		? `${getMonthName(experience.period.to.getMonth())} ${experience.period.to.getFullYear()}`
		: 'Present';

	const period = `${from} - ${to} · ${months} month${months > 1 ? 's' : ''}`;
</script>

<Card margin="0px 0px 20px 0px" tiltDegree={2}>
	<div class="experience flex flex-col md:flex-row items-start gap-5 md:gap-1">
		<CardLogo src={getAssetURL(experience.logo)} alt={experience.company} size={75} />
		<div class="flex flex-col ml-0 md:ml-[20px] gap-1.5 w-full">
			<h3
				class="flex flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"
			>
				<CardTitle title={experience.name} />
				<Chip label={experience.contract} size="0.7em" classes="!mx-0" />
			</h3>
			<span class="font-[var(--title-f)] ">{experience.company}</span>
			<div class="text-[var(--accent-text)] text-[0.9em]">{period}</div>
			<div class="text-[var(--accent-text)] text-[0.9em]">{experience.location}</div>
			<div class="experience-description">{experience.description}</div>
			<div class="flex flex-row flex-wrap mt-5">
				{#each experience.skills as skill}
					<ChipIcon logo={getAssetURL(skill.logo)} name={skill.name} />
				{/each}
			</div>
		</div>
	</div>
</Card>

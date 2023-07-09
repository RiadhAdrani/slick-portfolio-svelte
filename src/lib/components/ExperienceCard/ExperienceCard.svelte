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
	<div class="experience">
		<CardLogo src={getAssetURL(experience.logo)} alt={experience.company} size={75} />
		<div class="experience-data">
			<h3 class="experience-title">
				<CardTitle title={experience.name} />
				<div class="experience-title-divider" />
				<Chip label={experience.contract} size="0.75em" />
			</h3>
			<span class="experience-company-name">{experience.company}</span>
			<div class="experience-period">{period}</div>
			<div class="experience-location">{experience.location}</div>
			<div class="experience-description">{experience.description}</div>
			<div class="experience-skills">
				{#each experience.skills as skill}
					<ChipIcon logo={getAssetURL(skill.logo)} name={skill.name} />
				{/each}
			</div>
		</div>
	</div>
</Card>

<style lang="scss">
	.experience {
		display: flex;
		align-items: flex-start;

		&-data {
			display: flex;
			flex-direction: column;
			margin-left: 20px;
		}

		@media (max-width: 800px) {
			flex-direction: column;

			&-data {
				margin-left: 0px;
			}
		}

		&-title {
			margin: 0;
			display: flex;
			align-items: center;

			&-divider {
				width: 10px;
			}

			@media (max-width: 800px) {
				& {
					align-items: center;
					margin: 5px 0px;
				}
			}
		}

		&-company-name {
			margin-bottom: 5px;
			font-family: var(--title-f);
			font-size: 1.15em;
		}

		&-period,
		&-location {
			color: var(--accent-text);
			font-size: 0.9em;
			margin-bottom: 5px;
		}

		&-location {
			margin-bottom: 15px;
		}

		&-description {
			margin-bottom: 20px;
		}

		&-skills {
			display: flex;
			flex-wrap: wrap;
		}
	}
</style>

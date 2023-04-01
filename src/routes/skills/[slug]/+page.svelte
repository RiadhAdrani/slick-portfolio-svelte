<script lang="ts">
	import CardDivider from '$lib/components/Card/CardDivider.svelte';
	import CardLogo from '$lib/components/Card/CardLogo.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import {
		MySkillsParams,
		PortfolioTitle,
		PersonalProjects,
		ProfessionalCareerParams
	} from '$lib/params';
	import { useTitle, type FeaturedSkill } from '$lib/utils';

	import { base } from '$app/paths';

	type Related = { name: string; img: string; type: 'projects' | 'experience' };

	export let data: { skill?: FeaturedSkill };

	const { title } = MySkillsParams;

	const getRelatedProjects = (): Array<Related> => {
		const out: Array<Related> = [];

		const skill = data.skill;

		if (!skill) {
			return [];
		}

		PersonalProjects.items.forEach((item) => {
			if (item.technologies.some((tech) => tech.name === skill.technology.name)) {
				out.push({ img: item.logo, name: item.name, type: 'projects' });
			}
		});

		ProfessionalCareerParams.items.forEach((item) => {
			if (item.skills.some((tech) => tech.name === skill.technology.name)) {
				out.push({ img: item.company.logo, name: item.title, type: 'experience' });
			}
		});

		return out;
	};

	$: computedTitle = data.skill ? `${data.skill.technology.name} - ${title}` : title;

	$: related = data.skill ? getRelatedProjects() : [];
</script>

<svelte:head>
	<title>{useTitle(computedTitle, PortfolioTitle)}</title>
</svelte:head>

<div>
	{#if data.skill === undefined}
		<div>Could not load skill data.</div>
	{:else}
		<div class="flex flex-col items-center">
			<CardLogo
				src={data.skill.technology.logo}
				alt={data.skill.technology.name}
				size={100}
				classes="mb-3"
			/>
			<MainTitle classes="mb-3">{data.skill.technology.name}</MainTitle>
			<div class="self-stretch mb-3">
				<CardDivider />
			</div>
			<p class="mb-5">
				{data.skill.description}
			</p>
			<div class="self-stretch mb-3">
				<CardDivider />
			</div>
			<div class="flex flex-row self-stretch flex-wrap">
				{#each related as item}
					<span>
						<a
							class="flex flex-row items-center mr-3 my-2"
							href={`${base}/${item.type}/?item=${item.name}`}
						>
							<CardLogo src={item.img} alt={item.name} size={20} classes="mr-2" />
							<span>{item.name}</span>
						</a>
					</span>
				{/each}
			</div>
		</div>
	{/if}
</div>

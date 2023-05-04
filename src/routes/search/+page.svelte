<script lang="ts">
	import Input from '$lib/components/Input/Input.svelte';
	import { browser } from '$app/environment';
	import {
		MySkillsParams,
		PersonalProjects,
		PortfolioTitle,
		ProfessionalCareerParams,
		SearchPageParams
	} from '$lib/params';
	import { useTitle, type Project, type Technology, type Experience } from '$lib/utils';
	import ExperienceCard from '$lib/components/ExperienceCard/ExperienceCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard/ProjectCard.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import slugify from 'slugify';
	import { base } from '$app/paths';
	import CardTitle from '$lib/components/Card/CardTitle.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';

	let query = '';

	let projects: Array<Project> = [];
	let skills: Array<Technology> = [];
	let career: Array<Experience> = [];

	const skillHref = (skill: string): string => `${base}/skills/${slugify(skill.toLowerCase())}`;

	$: {
		if (browser) {
			let searchParams = new URLSearchParams(window.location.search);

			searchParams.set('q', query);

			const url = `${window.location.protocol}//${window.location.host}${
				window.location.pathname
			}?${searchParams.toString()}`;

			window.history.replaceState({ path: url }, '', url);

			// filter
			projects = PersonalProjects.items.filter(
				(item) => query.trim() && item.name.toLowerCase().includes(query.trim().toLowerCase())
			);

			skills = MySkillsParams.skills
				.filter(
					(item) =>
						query.trim() && item.technology.name.toLowerCase().includes(query.trim().toLowerCase())
				)
				.map((item) => item.technology);

			career = ProfessionalCareerParams.items.filter(
				(item) =>
					query.trim() &&
					(item.title.toLowerCase().includes(query.trim().toLowerCase()) ||
						item.company.name.toLowerCase().includes(query.trim().toLowerCase()))
			);
		}
	}
</script>

<svelte:head>
	<title>{useTitle(SearchPageParams.title, PortfolioTitle)}</title>
</svelte:head>
<div class="flex flex-col items-stretch gap-10">
	<Input placeholder="Search" bind:value={query} />
	{#if !query}
		<div>Try typing some words in the box...</div>
	{:else}
		<div>
			<MainTitle>Career</MainTitle>
			{#if career.length === 0}
				nothing to display
			{:else}
				{#each career as item}
					<ExperienceCard experience={item} />
				{/each}
			{/if}
		</div>

		<div>
			<MainTitle>Projects</MainTitle>
			{#if projects.length === 0}
				nothing to display
			{:else}
				{#each projects as item}
					<ProjectCard project={item} />
				{/each}
			{/if}
		</div>

		<div>
			<MainTitle>Skills</MainTitle>
			{#if skills.length === 0}
				No Skill
			{:else}
				{#each skills as item}
					<Card
						classes={['cursor-pointer']}
						tiltDegree={1}
						href={skillHref(item.name)}
						bgImg={item.logo}
					>
						<CardTitle title={item.name} />
					</Card>
				{/each}
			{/if}
		</div>
	{/if}
</div>

<script lang="ts">
	import Chip from '$lib/components/Chip/Chip.svelte';
	import Input from '$lib/components/Input/Input.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import ProjectCard from '$lib/components/ProjectCard/ProjectCard.svelte';
	import { PersonalProjects, PortfolioTitle } from '$lib/params';
	import type { Project, Technology } from '$lib/utils';
	import { useTitle } from '$lib/utils';
	import { onMount } from 'svelte';

	interface TechnologyFilter extends Technology {
		isSelected?: boolean;
	}

	const { items, title } = PersonalProjects;

	let filters: Array<TechnologyFilter> = items.reduce((items, item) => {
		item.technologies.forEach((tech) => {
			if (!items.some((t) => t.name === tech.name)) {
				items.push(tech);
			}
		});

		return items;
	}, [] as Array<TechnologyFilter>);

	let search = '';
	let displayed: Array<Project> = [];

	const isSelected = (tech: Technology) => {
		return filters.some((item) => item.name === tech.name && item.isSelected);
	};

	const onSelected = (newTech: Technology) => {
		filters = filters.map((tech) => {
			if (tech.name === newTech.name) {
				tech.isSelected = !isSelected(tech);
			}

			return tech;
		});
	};

	$: {
		displayed = items.filter((project) => {
			const isFiltered =
				filters.every((item) => !item.isSelected) ||
				project.technologies.some((tech) =>
					filters.some((filter) => filter.isSelected && filter.name === tech.name)
				);

			const isSearched =
				search.trim().length === 0 ||
				project.name.trim().toLowerCase().includes(search.trim().toLowerCase());

			return isFiltered && isSearched;
		});
	}

	onMount(() => {
		const query = location.search;

		if (query) {
			const queryParams = new URLSearchParams(location.search);

			const item = queryParams.get('item');

			if (item) {
				search = item;
			}
		}
	});
</script>

<svelte:head>
	<title>{useTitle(title, PortfolioTitle)}</title>
</svelte:head>
<div class="projects">
	<MainTitle>{title}</MainTitle>
	<div class="projects-search">
		<Input bind:value={search} placeholder="Enter keywords..." />
	</div>
	<div class="projects-filters">
		{#each filters as tech}
			<Chip label={tech.name} active={tech.isSelected} on:click={() => onSelected(tech)} />
		{/each}
	</div>
	<div class="projects-list">
		{#each displayed as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>

<style lang="scss">
	.projects {
		display: flex;
		flex-direction: column;

		&-search,
		&-filters,
		&-list {
			margin-top: 40px;
		}

		&-search {
			display: flex;
			justify-content: stretch;
			padding: 0px 10px;
		}

		&-list {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 20px;
			padding: 0px 10px;

			@media (max-width: 1350px) {
				grid-template-columns: repeat(2, 1fr);
			}
			@media (max-width: 850px) {
				grid-template-columns: repeat(1, 1fr);
			}
		}
	}
</style>

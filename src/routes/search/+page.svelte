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
	import { useTitle, Icons } from '$lib/utils';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { onMount } from 'svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import { base } from '$app/paths';
	import slugify from 'slugify';

	type Item<T = unknown> = {
		icon: Icons;
		name: string;
		data: T;
		to: string;
	};

	let query = '';
	let mounted = false;
	let result: Array<Item> = [];

	// const skillHref = (skill: string): string => `${base}/skills/${slugify(skill.toLowerCase())}`;

	onMount(() => {
		let searchParams = new URLSearchParams(window.location.search);

		query = searchParams.get('q') ?? '';
		mounted = true;
	});

	$: {
		if (browser && mounted) {
			let searchParams = new URLSearchParams(window.location.search);

			searchParams.set('q', query);

			const url = `${window.location.protocol}//${window.location.host}${
				window.location.pathname
			}?${searchParams.toString()}`;

			window.history.replaceState({ path: url }, '', url);

			result = [];

			// filter
			result.push(
				...PersonalProjects.items
					.filter(
						(item) => query.trim() && item.name.toLowerCase().includes(query.trim().toLowerCase())
					)
					.map<Item>((data) => ({
						data,
						icon: Icons.Projects,
						name: data.name,
						to: `projects?item=${data.name}`
					}))
			);

			result.push(
				...MySkillsParams.skills
					.filter(
						(item) =>
							query.trim() &&
							item.technology.name.toLowerCase().includes(query.trim().toLowerCase())
					)
					.map((item) => item.technology)
					.map<Item>((data) => ({
						data,
						icon: Icons.Skills,
						name: data.name,
						to: `skills/${slugify(data.name, { lower: true })}`
					}))
			);

			result.push(
				...ProfessionalCareerParams.items
					.filter(
						(item) =>
							query.trim() &&
							(item.title.toLowerCase().includes(query.trim().toLowerCase()) ||
								item.company.name.toLowerCase().includes(query.trim().toLowerCase()))
					)
					.map<Item>((data) => ({
						data,
						icon: Icons.Job,
						name: `${data.title} @ ${data.company.name}`,
						to: `experience`
					}))
			);
		}
	}
</script>

<svelte:head>
	<title>{useTitle(SearchPageParams.title, PortfolioTitle)}</title>
</svelte:head>
<div class="flex flex-col items-stretch gap-10 p-2">
	<MainTitle>Search</MainTitle>
	<Input placeholder="Search" bind:value={query} />
	{#if !query}
		<div>Try typing something...</div>
	{:else}
		<div>
			{#if result.length === 0}
				<p>Oops ! nothing to show !</p>
			{:else}
				<div class="flex flex-row flex-wrap gap-2">
					{#each result as item}
						<a
							href={`${base}/${item.to}`}
							class="flex flex-row items-center gap-4 border rounded px-4 py-2 border-[color:var(--border)] cursor-pointer hover:border-[color:var(--border-hover)] hover:bg-[color:var(--main-hover)] duration-200"
						>
							<Icon icon={item.icon} size={20} />
							<span>{item.name}</span>
						</a>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</div>

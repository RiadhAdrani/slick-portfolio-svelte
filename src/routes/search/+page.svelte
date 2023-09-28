<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { SEARCH } from '$lib/params';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import MY_EXPERIENCES from '$lib/experiences.params';
	import MY_PROJECTS from '$lib/projects.params';
	import MY_SKILLS from '$lib/skills.params';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	const { title } = SEARCH;

	type Item<T = unknown> = {
		icon: string;
		name: string;
		data: T;
		to: string;
	};

	let query = '';
	let mounted = false;
	let result: Array<Item> = [];

	onMount(() => {
		let searchParams = new URLSearchParams(window.location.search);

		query = searchParams.get('q') ?? '';
		mounted = true;
	});

	$: {
		result = [];

		// filter
		result.push(
			...MY_PROJECTS.filter((item) => query && item.name.toLowerCase().includes(query)).map<Item>(
				(data) => ({
					data,
					icon: 'i-carbon-cube',
					name: data.name,
					to: `projects/${data.slug}`
				})
			)
		);

		result.push(
			...MY_SKILLS.filter((item) => query && item.name.toLowerCase().includes(query)).map<Item>(
				(data) => ({
					data,
					icon: 'i-carbon-software-resource-cluster',
					name: data.name,
					to: `skills/${data.slug}`
				})
			)
		);

		result.push(
			...MY_EXPERIENCES.filter(
				(item) =>
					query &&
					(item.name.toLowerCase().includes(query) || item.company.toLowerCase().includes(query))
			).map<Item>((data) => ({
				data,
				icon: 'i-carbon-development',
				name: `${data.name} @ ${data.company}`,
				to: `experience/${data.slug}`
			}))
		);
	}
</script>

<SearchPage {title} on:search={(e) => (query = e.detail.search)}>
	<div class="flex flex-col items-stretch gap-10 p-2" />
	{#if !query}
		<div class="flex-1 self-center col-center m-t-10 gap-5 font-300 text-[var(--accent-text)]">
			<UIcon icon="i-carbon-search-locate-mirror" classes="text-2em" />
			<span> Try typing something... </span>
		</div>
	{:else}
		<div>
			{#if result.length === 0}
				<div class="flex-1 self-center col-center m-t-10 gap-5 font-300 text-[var(--accent-text)]">
					<UIcon icon="i-carbon-cube" classes="text-2em" />
					<span> Oops ! nothing to show ! </span>
				</div>
			{:else}
				<div class="flex flex-row flex-wrap gap-1">
					{#each result as item}
						<Chip href={`${base}/${item.to}`} classes="flex flex-row items-center gap-2">
							<UIcon icon={item.icon} />
							<span>{item.name}</span>
						</Chip>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</SearchPage>

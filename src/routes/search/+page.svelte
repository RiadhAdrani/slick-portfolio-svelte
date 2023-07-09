<script lang="ts">
	import { Icons } from '$lib/utils';
	import { onMount } from 'svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import { base } from '$app/paths';
	import { SEARCH } from '$lib/params';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import MY_EXPERIENCES from '$lib/experiences.params';
	import MY_PROJECTS from '$lib/projects.params';
	import MY_SKILLS from '$lib/skills.params';

	const { title } = SEARCH;

	type Item<T = unknown> = {
		icon: Icons;
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
					icon: Icons.Projects,
					name: data.name,
					to: `projects?q=${data.name}`
				})
			)
		);

		result.push(
			...MY_SKILLS.filter((item) => query && item.name.toLowerCase().includes(query)).map<Item>(
				(data) => ({
					data,
					icon: Icons.Skills,
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
				icon: Icons.Job,
				name: `${data.name} @ ${data.company}`,
				to: `experience?q=${data.name}`
			}))
		);
	}
</script>

<SearchPage {title} on:search={(e) => (query = e.detail.search)}>
	<div class="flex flex-col items-stretch gap-10 p-2" />
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
							<Icon icon={item.icon} size={'20'} />
							<span>{item.name}</span>
						</a>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</SearchPage>

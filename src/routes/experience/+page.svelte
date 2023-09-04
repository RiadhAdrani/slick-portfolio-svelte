<script lang="ts">
	import ExperienceCard from '$lib/components/ExperienceCard/ExperienceCard.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { EXPERIENCES } from '$lib/params';
	import type { Experience } from '$lib/types';
	import { isBlank } from '@riadh-adrani/utils';

	const { items, title } = EXPERIENCES;

	let result: Array<Experience> = [...items];

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;

		if (isBlank(query)) {
			result = items;
		}

		result = items.filter(
			(it) =>
				it.name.toLowerCase().includes(query) ||
				it.company.toLowerCase().includes(query) ||
				it.description.toLowerCase().includes(query)
		);
	};
</script>

<SearchPage {title} on:search={onSearch}>
	<div class="flex flex-col items-center relative mt-10">
		<div class="w-[2px] hidden lg:flex h-full py-50px bg-[var(--accent-text)] absolute rounded" />
		{#each result as job, index (job.slug)}
			<div
				class={`flex ${
					index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'
				} relative items-center w-full my-[10px]`}
			>
				<div class="flex-1 hidden lg:flex" />
				<div class="p-10px bg-[var(--main)] rounded">
					<div
						class="hidden lg:flex w-[10px] h-[10px] mx-5 aspect-square bg-[var(--accent-text)] rounded-full my-5 outline-[1px] outline outline-[var(--accent-text)] outline-offset-[4px]"
					/>
				</div>
				<div class="flex-1 flex flex-col items-stretch">
					<ExperienceCard experience={job} />
				</div>
			</div>
		{/each}
	</div>
</SearchPage>

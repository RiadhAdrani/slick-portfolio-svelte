<script lang="ts">
	import ExperienceCard from '$lib/components/ExperienceCard/ExperienceCard.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { EXPERIENCES } from '$lib/params';
	import type { Experience } from '$lib/types';
	import { isBlank } from '@riadh-adrani/utils';

	const { items, title } = EXPERIENCES;

	let result: Array<Experience> = items;

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
	<div class="experiences">
		{#each result as job (job.slug)}
			<ExperienceCard experience={job} />
		{/each}
	</div>
</SearchPage>

<style lang="scss">
	.experiences {
		display: flex;
		flex-direction: column;
		margin-top: 40px;
	}
</style>

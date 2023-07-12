<script lang="ts">
	import CardDivider from '$lib/components/Card/CardDivider.svelte';
	import CardLogo from '$lib/components/Card/CardLogo.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import MY_EXPERIENCES from '$lib/experiences.params';
	import MY_PROJECTS from '$lib/projects.params';

	import { base } from '$app/paths';
	import type { Skill } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import { SKILLS } from '$lib/params';
	import { isBlank } from '@riadh-adrani/utils';
	import Markdown from '$lib/components/Markdown.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';

	type Related = { display: string; name: string; img: string; type: 'projects' | 'experience' };

	export let data: { skill?: Skill };

	const { title } = SKILLS;

	const getRelatedProjects = (): Array<Related> => {
		const out: Array<Related> = [];

		const skill = data.skill;

		if (!skill) {
			return [];
		}

		MY_PROJECTS.forEach((item) => {
			if (item.skills.some((tech) => tech.slug === skill.slug)) {
				out.push({
					img: getAssetURL(item.logo),
					display: `${item.name} (${item.type})`,
					name: item.name,
					type: 'projects'
				});
			}
		});
		MY_EXPERIENCES.forEach((item) => {
			if (item.skills.some((tech) => tech.slug === skill.slug)) {
				out.push({
					img: getAssetURL(item.logo),
					display: `${item.name} @ ${item.company}`,
					name: item.name,
					type: 'experience'
				});
			}
		});

		return out;
	};

	$: computedTitle = data.skill ? `${data.skill.name} - ${title}` : title;

	$: related = data.skill ? getRelatedProjects() : [];
</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden">
	{#if data.skill === undefined}
		<div>Could not load skill data.</div>
	{:else}
		<div class="flex flex-col items-center overflow-x-hidden">
			<div
				style={`--bg-img:url(${getAssetURL(data.skill.logo)})`}
				class="flex flex-row w-[100%] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] items-center skill-cover px-4 md:px-10"
			>
				<MainTitle>{data.skill.name}</MainTitle>
			</div>
			<div class="px-4 py-3 overflow-x-hidden w-full">
				{#if isBlank(data.skill.description)}
					<p class="text-[var(--tertiary-text)]">This place is yet to be filled...</p>
				{:else}
					<Markdown content={data.skill.description} />
				{/if}
			</div>
			<div class="self-stretch mb-3">
				<CardDivider />
			</div>
			<div class="flex flex-row px-4 gap-2 self-stretch flex-wrap ">
				{#each related as item}
					<div
						class="border rounded border-[color:var(--border)] px-2.5 py-1 text-[var(--tertiary-text)]"
					>
						<a class="flex flex-row items-center" href={`${base}/${item.type}?q=${item.name}`}>
							<CardLogo src={item.img} alt={item.name} radius={'0px'} size={17} classes="mr-2" />
							<span class="text-[0.9em]">{item.display}</span>
						</a>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.skill-cover {
		background: linear-gradient(90deg, var(--main) 0%, var(--main) 55%, var(--main-60) 130%),
			no-repeat 110% 45% / 50% var(--bg-img);

		border-block-end: 1px solid var(--border);
	}
</style>

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
	import Markdown from '$lib/components/Markdown.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';

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
			<div class="px-4 pt-3 pb-1 overflow-x-hidden w-full">
				<Markdown content={data.skill.description ?? 'This place is yet to be filled...'} />
			</div>
			<div class="self-stretch mb-3">
				<CardDivider />
			</div>
			<div class="flex flex-row px-4 gap-1 self-stretch flex-wrap ">
				{#each related as item}
					<Chip
						classes="inline-flex flex-row items-center justify-center"
						href={`${base}/${item.type}?q=${item.name}`}
					>
						<CardLogo src={item.img} alt={item.name} radius={'0px'} size={15} classes="mr-2" />
						<span class="text-[0.9em]">{item.display}</span>
					</Chip>
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

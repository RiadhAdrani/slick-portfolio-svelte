<script lang="ts">
	import CardDivider from '$lib/components/Card/CardDivider.svelte';
	import CardLogo from '$lib/components/Card/CardLogo.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { useTitle } from '$lib/utils';
	import MY_EXPERIENCES from '$lib/experiences.params';
	import MY_PROJECTS from '$lib/projects.params';

	import { base } from '$app/paths';
	import type { Skill } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import { SKILLS, TITLE_SUFFIX } from '$lib/params';

	type Related = { name: string; img: string; type: 'projects' | 'experience' };

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
				out.push({ img: getAssetURL(item.logo), name: item.name, type: 'projects' });
			}
		});

		MY_EXPERIENCES.forEach((item) => {
			if (item.skills.some((tech) => tech.slug === skill.slug)) {
				out.push({ img: getAssetURL(item.logo), name: item.name, type: 'experience' });
			}
		});

		return out;
	};

	$: computedTitle = data.skill ? `${data.skill.name} - ${title}` : title;

	$: related = data.skill ? getRelatedProjects() : [];
</script>

<svelte:head>
	<title>{useTitle(computedTitle, TITLE_SUFFIX)}</title>
</svelte:head>

<div>
	{#if data.skill === undefined}
		<div>Could not load skill data.</div>
	{:else}
		<div class="flex flex-col items-center">
			<div
				style={`--bg-img:url(${getAssetURL(data.skill.logo)})`}
				class="flex flex-row w-[100%] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] items-center skill-cover px-4 md:px-10"
			>
				<MainTitle>{data.skill.name}</MainTitle>
			</div>
			<p class="py-10 px-4 text-[var(--tertiary-text)]">
				{data.skill.description}
			</p>
			<div class="self-stretch mb-3">
				<CardDivider />
			</div>
			<div class="flex flex-row px-4 self-stretch flex-wrap text-[var(--tertiary-text)]">
				{#each related as item}
					<span>
						<a
							class="flex flex-row items-center mr-3 my-2"
							href={`${base}/${item.type}?q=${item.name}`}
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

<style lang="scss">
	.skill-cover {
		background: linear-gradient(90deg, var(--main) 0%, var(--main) 55%, var(--main-60) 130%),
			no-repeat 110% 45% / 50% var(--bg-img);

		border-block-end: 1px solid var(--border);
	}
</style>

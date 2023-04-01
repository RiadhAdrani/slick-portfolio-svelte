<script lang="ts">
	import { useTitle, type FeaturedSkill } from '$lib/utils';
	import { MySkillsParams, PortfolioTitle } from '$lib/params';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import CardTitle from '$lib/components/Card/CardTitle.svelte';
	import slugify from 'slugify';

	const { skills, title } = MySkillsParams;

	import { base } from '$app/paths';

	const skillHref = (skill: FeaturedSkill): string =>
		`${base}/skills/${slugify(skill.technology.name.toLowerCase())}`;
</script>

<svelte:head>
	<title>{useTitle(title, PortfolioTitle)}</title>
</svelte:head>

<div class="skills">
	<MainTitle>{title}</MainTitle>
	<div class="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-10">
		{#each skills as skill}
			<Card
				classes={['cursor-pointer']}
				tiltDegree={1}
				href={skillHref(skill)}
				bgImg={skill.technology.logo}
			>
				<CardTitle title={skill.technology.name} />
			</Card>
		{/each}
	</div>
</div>

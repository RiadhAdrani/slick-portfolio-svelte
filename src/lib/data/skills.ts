import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: 'I think I unlocked all Javascript and have almost 100% achievement.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: 'Being a fanatic in the JavaScript land made the transition to TypeScript easier.',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: '',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: '',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description: '',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: '',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: '',
		logo: Assets.Svelte,
		name: 'Svelte'
	}),
	s({ slug: 'vue', color: 'green', description: '', logo: Assets.VueJs, name: 'VueJs' }),
	s({ slug: 'nuxt', color: 'green', description: '', logo: Assets.Nuxt, name: 'Nuxt' }),
	s({ slug: 'node', color: 'green', description: '', logo: Assets.NodeJs, name: 'Node JS' }),
	s({
		slug: 'deno',
		color: 'white',
		description: '',
		logo: Assets.Deno,
		name: 'Deno'
	}),
	s({ slug: 'dart', color: 'cyan', description: '', logo: Assets.Dart, name: 'Dart' }),
	s({ slug: 'flutter', color: 'green', description: '', logo: Assets.Flutter, name: 'Flutter' }),
	s({ slug: 'solid', color: 'blue', description: '', logo: Assets.SolidJs, name: 'Solid JS' }),
	s({ slug: 'quasar', color: 'purple', description: '', logo: Assets.Quasar, name: 'Quasar' }),
	s({ slug: 'kotlin', color: 'purple', description: '', logo: Assets.Kotlin, name: 'Kotlin' }),
	s({
		slug: 'express',
		color: 'white',
		description: '',
		logo: Assets.ExpressJs,
		name: 'Express JS'
	}),
	s({
		slug: 'electron',
		color: 'purple',
		description: '',
		logo: Assets.Electron,
		name: 'Electron JS'
	}),
	s({
		slug: 'postgresql',
		color: 'blue',
		description: '',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL'
	}),
	s({
		slug: 'firebase',
		color: 'orange',
		description: '',
		logo: Assets.Firebase,
		name: 'Firebase'
	}),
	s({
		slug: 'mongodb',
		color: 'green',
		description: '',
		logo: Assets.MongoDB,
		name: 'MongoDB'
	}),
	s({
		slug: 'java',
		color: 'red',
		description: '',
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'angular',
		color: 'red',
		description: '',
		logo: Assets.Angular,
		name: 'Angular'
	}),
	s({
		slug: 'redis',
		color: 'red',
		description: '',
		logo: Assets.Redis,
		name: 'Redis'
	}),
	s({
		slug: 'tailwind',
		color: 'cyan',
		description: '',
		logo: Assets.Tailwind,
		name: 'Tailwind'
	}),
	s({
		slug: 'csharp',
		color: 'purple',
		description: '',
		logo: Assets.Csharp,
		name: 'C#'
	}),
	s({
		slug: 'xamarin',
		color: 'purple',
		description: '',
		logo: Assets.Xamarin,
		name: 'Xamarin'
	}),
	s({
		slug: 'python',
		color: 'yellow',
		description: '',
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'ps',
		color: 'cyan',
		description: '',
		logo: Assets.Photoshop,
		name: 'Adobe Photoshop'
	}),
	s({
		slug: 'ae',
		color: 'purple',
		description: '',
		logo: Assets.AfterEffects,
		name: 'Adobe After Effects'
	}),
	s({
		slug: 'pp',
		color: 'pink',
		description: '',
		logo: Assets.Premiere,
		name: 'Adobe Premiere'
	}),
	s({
		slug: 'ai',
		color: 'orange',
		description: '',
		logo: Assets.Illustrator,
		name: 'Adobe Illustrator'
	}),
	s({
		slug: 'docker',
		color: 'blue',
		description: '',
		logo: Assets.Docker,
		name: 'Docker'
	}),
	s({
		slug: 'fastify',
		color: 'fastify',
		description: '',
		logo: Assets.Fastify,
		name: 'Fastify'
	}),
	s({
		slug: 'vite',
		color: 'purple',
		description: '',
		logo: Assets.Vite,
		name: 'Vite'
	}),
	s({
		slug: 'vitest',
		color: 'green',
		description: '',
		logo: Assets.Vitest,
		name: 'Vitest'
	}),
	s({
		slug: 'jest',
		color: 'green',
		description: '',
		logo: Assets.Jest,
		name: 'Jest'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

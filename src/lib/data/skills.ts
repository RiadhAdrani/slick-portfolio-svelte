import Assets from './assets';
import type { Skill, SkillCategory } from '../types';

import js_md from '$lib/md/skills/js.md?raw';
import ts_md from '$lib/md/skills/ts.md?raw';
import dart_md from '$lib/md/skills/dart.md?raw';
import kt_md from '$lib/md/skills/kt.md?raw';
import go_md from '$lib/md/skills/go.md?raw';
import java_md from '$lib/md/skills/java.md?raw';
import csharp_md from '$lib/md/skills/csharp.md?raw';
import py_md from '$lib/md/skills/py.md?raw';
import react_md from '$lib/md/skills/react.md?raw';
import remix_md from '$lib/md/skills/remix.md?raw';
import svelte_md from '$lib/md/skills/svelte.md?raw';
import vue_md from '$lib/md/skills/vue.md?raw';
import nuxt_md from '$lib/md/skills/nuxt.md?raw';
import electron_md from '$lib/md/skills/electron.md?raw';
import flutter_md from '$lib/md/skills/flutter.md?raw';
import angular_md from '$lib/md/skills/angular.md?raw';
import xamarin_md from '$lib/md/skills/xamarin.md?raw';
import node_md from '$lib/md/skills/node.md?raw';
import deno_md from '$lib/md/skills/deno.md?raw';

import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

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
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Environments & Runtimes', slug: 'env' })
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

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export const items = [
	// LANGUAGES
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: js_md,
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: ts_md,
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'dart',
		color: 'cyan',
		description: dart_md,
		logo: Assets.Dart,
		name: 'Dart',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'kotlin',
		color: 'purple',
		description: kt_md,
		logo: Assets.Kotlin,
		name: 'Kotlin',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'go',
		color: 'cyan',
		description: go_md,
		logo: Assets.Go,
		name: 'Go',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'rust',
		color: 'orange',
		description: '',
		logo: Assets.Rust,
		name: 'Rust',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'red',
		description: java_md,
		logo: Assets.Java,
		category: 'pro-lang',
		name: 'Java'
	}),
	defineSkill({
		slug: 'csharp',
		color: 'purple',
		description: csharp_md,
		logo: Assets.Csharp,
		category: 'pro-lang',
		name: 'C#'
	}),
	defineSkill({
		slug: 'python',
		color: 'yellow',
		description: py_md,
		logo: Assets.Python,
		category: 'pro-lang',
		name: 'Python'
	}),

	// FRAMEWORKS
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: react_md,
		logo: Assets.ReactJs,
		category: 'library',
		name: 'React Js'
	}),
	defineSkill({
		slug: 'remix',
		color: 'white',
		description: remix_md,
		logo: Assets.Remix,
		category: 'framework',
		name: 'Remix'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelte_md,
		logo: Assets.Svelte,
		category: 'library',
		name: 'Svelte'
	}),
	defineSkill({
		slug: 'vue',
		color: 'green',
		description: vue_md,
		logo: Assets.VueJs,
		category: 'framework',
		name: 'VueJs'
	}),
	defineSkill({
		slug: 'nuxt',
		color: 'green',
		description: nuxt_md,
		logo: Assets.Nuxt,
		category: 'framework',
		name: 'Nuxt'
	}),
	defineSkill({
		slug: 'flutter',
		color: 'green',
		description: flutter_md,
		logo: Assets.Flutter,
		category: 'framework',
		name: 'Flutter'
	}),
	defineSkill({
		slug: 'solid',
		color: 'blue',
		description: '',
		logo: Assets.SolidJs,
		category: 'library',
		name: 'Solid JS'
	}),
	defineSkill({
		slug: 'quasar',
		color: 'purple',
		description: '',
		logo: Assets.Quasar,
		category: 'framework',
		name: 'Quasar'
	}),
	defineSkill({
		slug: 'electron',
		color: 'purple',
		description: electron_md,
		logo: Assets.Electron,
		name: 'Electron JS',
		category: 'library'
	}),
	defineSkill({
		slug: 'angular',
		color: 'red',
		description: angular_md,
		logo: Assets.Angular,
		category: 'framework',
		name: 'Angular'
	}),
	defineSkill({
		slug: 'xamarin',
		color: 'purple',
		description: xamarin_md,
		logo: Assets.Xamarin,
		category: 'framework',
		name: 'Xamarin'
	}),

	// ENV & BACKEND

	defineSkill({
		slug: 'node',
		color: 'green',
		description: node_md,
		logo: Assets.NodeJs,
		category: 'env',
		name: 'Node JS'
	}),
	defineSkill({
		slug: 'deno',
		color: 'white',
		description: deno_md,
		logo: Assets.Deno,
		name: 'Deno',
		category: 'env'
	}),

	defineSkill({
		slug: 'fastify',
		color: 'fastify',
		description: '',
		logo: Assets.Fastify,
		name: 'Fastify',
		category: 'framework'
	}),
	defineSkill({
		slug: 'express',
		color: 'white',
		description: '',
		logo: Assets.ExpressJs,
		name: 'Express JS',
		category: 'framework'
	}),
	defineSkill({
		slug: 'honojs',
		color: 'orange',
		description: '',
		logo: Assets.HonoJs,
		name: 'Hono JS',
		category: 'framework'
	}),

	// DATABASES
	defineSkill({
		slug: 'postgresql',
		color: 'blue',
		description: '',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'firebase',
		color: 'orange',
		description: '',
		logo: Assets.Firebase,
		name: 'Firebase',
		category: 'db'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description: '',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'redis',
		color: 'red',
		description: '',
		logo: Assets.Redis,
		category: 'db',
		name: 'Redis'
	}),
	defineSkill({
		slug: 'neo4j',
		color: 'blue',
		description: '',
		logo: Assets.Neo4j,
		category: 'db',
		name: 'Neo4j'
	}),

	// ORMs
	defineSkill({
		slug: 'prisma',
		color: 'darkcyan',
		description: '',
		logo: Assets.Prisma,
		name: 'Prisma',
		category: 'orm'
	}),

	// DEVOPS
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description: '',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: 'purple',
		description: '',
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops'
	}),

	// TOOLS & TESTING
	defineSkill({
		slug: 'vite',
		color: 'purple',
		description: '',
		logo: Assets.Vite,
		name: 'Vite',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'vitest',
		color: 'green',
		description: '',
		logo: Assets.Vitest,
		name: 'Vitest',
		category: 'test'
	}),
	defineSkill({
		slug: 'jest',
		color: 'green',
		description: '',
		logo: Assets.Jest,
		name: 'Jest',
		category: 'test'
	}),
	defineSkill({
		slug: 'playwright',
		color: 'green',
		description: '',
		logo: Assets.Playwright,
		name: 'Playwright',
		category: 'test'
	}),

	// MARKUP & STYLING
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: '',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
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
		slug: 'postcss',
		color: 'red',
		description: '',
		logo: Assets.Postcss,
		name: 'PostCSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'unocss',
		color: 'gray',
		description: '',
		logo: 'https://unocss.dev/logo.svg',
		name: 'UnoCSS',
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
		slug: 'tailwind',
		color: 'cyan',
		description: '',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		category: 'markup-style'
	}),

	// DESIGN

	defineSkill({
		slug: 'ps',
		color: 'cyan',
		description: '',
		logo: Assets.Photoshop,
		name: 'Adobe Photoshop',
		category: 'design'
	}),
	defineSkill({
		slug: 'ae',
		color: 'purple',
		description: '',
		logo: Assets.AfterEffects,
		name: 'Adobe After Effects',
		category: 'design'
	}),
	defineSkill({
		slug: 'pp',
		color: 'pink',
		description: '',
		logo: Assets.Premiere,
		name: 'Adobe Premiere',
		category: 'design'
	}),
	defineSkill({
		slug: 'ai',
		color: 'orange',
		description: '',
		logo: Assets.Illustrator,
		name: 'Adobe Illustrator',
		category: 'design'
	})
];

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

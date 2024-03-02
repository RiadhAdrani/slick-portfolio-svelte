import Assets from './assets';
import type { Skill } from '../types';

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

import type { StringWithAutoComplete } from '@riadh-adrani/utils';

const s = <S extends string = string>(skill: Skill<S>) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export const items = [
	// LANGUAGES
	s({
		slug: 'js',
		color: 'yellow',
		description: js_md,
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		description: ts_md,
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({ slug: 'dart', color: 'cyan', description: dart_md, logo: Assets.Dart, name: 'Dart' }),
	s({ slug: 'kotlin', color: 'purple', description: kt_md, logo: Assets.Kotlin, name: 'Kotlin' }),
	s({ slug: 'go', color: 'cyan', description: go_md, logo: Assets.Go, name: 'Go' }),
	s({ slug: 'rust', color: 'orange', description: '', logo: Assets.Rust, name: 'Rust' }),
	s({
		slug: 'java',
		color: 'red',
		description: java_md,
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'csharp',
		color: 'purple',
		description: csharp_md,
		logo: Assets.Csharp,
		name: 'C#'
	}),
	s({
		slug: 'python',
		color: 'yellow',
		description: py_md,
		logo: Assets.Python,
		name: 'Python'
	}),

	// FRAMEWORKS
	s({
		slug: 'reactjs',
		color: 'cyan',
		description: react_md,
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
	s({ slug: 'remix', color: 'white', description: remix_md, logo: Assets.Remix, name: 'Remix' }),
	s({
		slug: 'svelte',
		color: 'orange',
		description: svelte_md,
		logo: Assets.Svelte,
		name: 'Svelte'
	}),
	s({ slug: 'vue', color: 'green', description: vue_md, logo: Assets.VueJs, name: 'VueJs' }),
	s({ slug: 'nuxt', color: 'green', description: nuxt_md, logo: Assets.Nuxt, name: 'Nuxt' }),
	s({
		slug: 'flutter',
		color: 'green',
		description: flutter_md,
		logo: Assets.Flutter,
		name: 'Flutter'
	}),
	s({ slug: 'solid', color: 'blue', description: '', logo: Assets.SolidJs, name: 'Solid JS' }),
	s({ slug: 'quasar', color: 'purple', description: '', logo: Assets.Quasar, name: 'Quasar' }),
	s({
		slug: 'electron',
		color: 'purple',
		description: electron_md,
		logo: Assets.Electron,
		name: 'Electron JS'
	}),
	s({
		slug: 'angular',
		color: 'red',
		description: angular_md,
		logo: Assets.Angular,
		name: 'Angular'
	}),
	s({
		slug: 'xamarin',
		color: 'purple',
		description: xamarin_md,
		logo: Assets.Xamarin,
		name: 'Xamarin'
	}),

	// ENV & BACKEND

	s({ slug: 'node', color: 'green', description: node_md, logo: Assets.NodeJs, name: 'Node JS' }),
	s({
		slug: 'deno',
		color: 'white',
		description: deno_md,
		logo: Assets.Deno,
		name: 'Deno'
	}),

	s({
		slug: 'fastify',
		color: 'fastify',
		description: '',
		logo: Assets.Fastify,
		name: 'Fastify'
	}),
	s({
		slug: 'express',
		color: 'white',
		description: '',
		logo: Assets.ExpressJs,
		name: 'Express JS'
	}),

	// DATABASES
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
		slug: 'redis',
		color: 'red',
		description: '',
		logo: Assets.Redis,
		name: 'Redis'
	}),

	// ORMs
	s({
		slug: 'prisma',
		color: 'darkcyan',
		description: '',
		logo: Assets.Prisma,
		name: 'Prisma'
	}),

	// DEVOPS
	s({
		slug: 'docker',
		color: 'blue',
		description: '',
		logo: Assets.Docker,
		name: 'Docker'
	}),
	s({
		slug: 'kubernetes',
		color: 'purple',
		description: '',
		logo: Assets.Kubernetes,
		name: 'Kubernetes'
	}),

	// TOOLS & TESTING
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
	}),

	// MARKUP & STYLING
	s({
		slug: 'css',
		color: 'blue',
		description: '',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description: '',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'postcss',
		color: 'red',
		description: '',
		logo: Assets.Postcss,
		name: 'PostCSS'
	}),
	s({
		slug: 'unocss',
		color: 'gray',
		description: '',
		logo: 'https://unocss.dev/logo.svg',
		name: 'UnoCSS'
	}),
	s({
		slug: 'sass',
		color: 'pink',
		description: '',
		logo: Assets.Sass,
		name: 'Sass'
	}),
	s({
		slug: 'tailwind',
		color: 'cyan',
		description: '',
		logo: Assets.Tailwind,
		name: 'Tailwind'
	}),

	// DESIGN

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
	})
];

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

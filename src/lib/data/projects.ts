import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'govid',
		color: '#007d9c',
		description: 'A youtube clone with Golang as backend.',
		links: [{ to: 'https://github.com/RiadhAdrani/govid', label: 'GitHub' }],
		logo: Assets.Go,
		name: 'GoVid',
		period: {
			from: new Date(2023, 5, 24),
			to: new Date(2023, 8, 14)
		},
		skills: getSkills('ts', 'node', 'vite', 'go', 'docker', 'redis'),
		type: 'Web App'
	},
	{
		slug: 'ruvy',
		color: '#ffffff',
		description: 'React from scratch, but better',
		links: [
			{ to: 'https://github.com/RiadhAdrani/ruvy', label: 'GitHub' },
			{ to: 'https://github.com/RiadhAdrani/create-ruvy', label: 'CLI' },
			{ to: 'https://www.npmjs.com/package/@riadh-adrani/ruvy', label: 'NPM' },
			{
				to: 'https://stackblitz.com/edit/ruvy?file=package.json,src%2Fmain.tsx',
				label: 'Stackblitz'
			}
		],
		logo: Assets.ReactJs,
		name: 'Ruvy',
		period: {
			from: new Date(2023, 2, 1)
		},
		skills: getSkills('ts', 'node', 'vite', 'vitest'),
		type: 'Web Framework'
	},
	{
		slug: 'dom-utils',
		color: '#5cad47',
		name: 'Dom Utils',
		logo: Assets.NodeJs,
		description: 'Create and manipulate DOM elements.',
		period: { from: new Date(2022, 9, 28) },
		links: [
			{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/dom-control-js' },
			{ label: 'NPM', to: 'https://www.npmjs.com/package/@riadh-adrani/dom-control-js' },
			{ label: 'Docs', to: 'https://riadhadrani.github.io/dom-control-js/' }
		],
		skills: getSkills('ts', 'node', 'vite', 'vitest'),
		type: 'JavaScript library'
	},
	{
		slug: 'werewolves-dart',
		color: '#fbb03b',
		name: 'Werewolves',
		logo: Assets.Unknown,
		description:
			'An app to manage your game of Loup garous de thiercelieu also known as The Werewolves of Millers Hollow.',
		period: { from: new Date(2022, 6, 23) },
		links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/werewolves' }],
		skills: getSkills('dart', 'flutter'),
		type: 'Mobile App'
	},
	{
		slug: 'portfolio',
		color: '#ff3e00',
		name: 'Portfolio',
		logo: Assets.Unknown,
		description: 'My personal website portfolio.',
		period: { from: new Date(2021, 3, 1) },
		links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/RiadhAdrani' }],
		skills: getSkills('ts', 'svelte', 'sass', 'tailwind', 'vite'),
		type: 'Website'
	},
	{
		slug: 'recursive',
		color: '#cf2026',
		name: 'Recursive',
		logo: Assets.Unknown,
		description:
			'Recursive is an ongoing project that allow developers to build a functional, component-based, Javascript only, beautiful and interactive Web applications.',
		period: { from: new Date(2021, 8, 1), to: new Date(2022, 11, 26) },
		links: [
			{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/recursive' },
			{ label: 'NPM', to: 'https://www.npmjs.com/package/@riadh-adrani/recursive' }
		],
		skills: getSkills('js', 'node', 'jest'),
		type: 'UI Framework'
	},
	{
		slug: 'utils',
		color: '#5cad47',
		name: 'Utils',
		logo: Assets.NodeJs,
		description: 'My JavaScript utility functions and types.',
		period: { from: new Date(2022, 8, 1) },
		links: [
			{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/utility-js' },
			{ label: 'NPM', to: 'https://www.npmjs.com/package/@riadh-adrani/utility-js' }
		],
		skills: getSkills('ts', 'node', 'vite', 'vitest'),
		type: 'JavaScript library'
	},
	{
		slug: 'solid-github',
		color: '#518ac8',
		name: 'Solid GitHub',
		logo: Assets.SolidJs,
		description:
			'Web app that retrieves repositories from GitHub and displaying them with the ability to be saved and persisted in the local storage.',
		period: { from: new Date(2022, 10, 1), to: new Date(2022, 10, 10) },
		links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/solid-github' }],
		skills: getSkills('solid', 'ts', 'node'),
		type: 'Web App'
	},
	{
		slug: 'gradio',
		name: 'Gradio',
		type: 'Web App',
		logo: Assets.Unknown,
		color: '#52bffa',
		period: { from: new Date(2022, 9, 1), to: new Date(2022, 9, 10) },
		links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/gradio' }],
		description: 'A web application used to create and generate gradient background for css usage.',
		skills: getSkills('quasar', 'node', 'js')
	},
	{
		slug: 'random-name-picker',
		name: 'Random Name Picker',
		type: 'Android App',
		logo: Assets.Unknown,
		color: '#64c6c5',
		period: { from: new Date(2022, 7, 1), to: new Date(2022, 7, 10) },
		links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/random-name-picker' }],
		description:
			'An android application used to create lists for random name picking. Lists and user preferences are saved',
		skills: getSkills('kotlin')
	},
	{
		slug: 'question-submission',
		name: 'Question Submission',
		type: 'Web App',
		logo: Assets.Unknown,
		color: '#ffde16',
		period: { from: new Date(2021, 6, 1), to: new Date(2021, 7, 10) },
		links: [
			{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/guess-app-questions-submission' }
		],
		description:
			'A website that allow users to submit their questions and answers for a possible game app.',
		skills: getSkills('node', 'vue', 'js', 'firebase')
	},
	{
		slug: 'azur-app',
		name: 'Azur City',
		type: 'Android App',
		logo: Assets.Unknown,
		color: '#01acc8',
		period: { from: new Date(2021, 1, 1), to: new Date(2021, 4, 10) },
		links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/azur_app' }],
		description:
			'A prototype of a commercial app made for Azur City. The App was presented as an End of studies projects.',
		skills: getSkills('kotlin')
	},
	{
		slug: 'werewolves-kt',
		name: 'Werewolves',
		type: 'Android App',
		logo: Assets.Unknown,
		color: '#fbb03b',
		period: { from: new Date(2021, 0, 1), to: new Date(2021, 5, 10) },
		links: [
			{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/werewolves_of_the_millers_hollow' }
		],
		description:
			'Creating a guide for the game "Werewolves of The Millers Hollow" originally "Les loups garous de Thierclieux".',
		skills: getSkills('kotlin')
	},
	{
		slug: 'color-noter',
		name: 'Color Noter',
		type: 'Cross platform App',
		logo: Assets.Unknown,
		color: '#8cacb9',
		period: { from: new Date(2020, 8, 1), to: new Date(2020, 9, 10) },
		links: [
			{ label: 'GitHub (Android)', to: 'https://github.com/RiadhAdrani/color_note_plus' },
			{ label: 'GitHub (Desktop)', to: 'https://github.com/RiadhAdrani/color_noter-desktop' },
			{ label: 'GitHub (Web)', to: 'https://github.com/RiadhAdrani/color_noter-web' }
		],
		description:
			'Color Noter is a color based note taking app that offer the user the ability to write and save his ideas and todos in an easy to use environment.',
		skills: getSkills('java', 'electron', 'reactjs', 'firebase')
	}
];

export const title = 'Projects';

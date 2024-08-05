import type { Project } from '$lib/types';

import Assets from './assets';
import { getSkills } from './skills';

// annotator
import annotator_md from '$lib/md/projects/annotator.md?raw';
import annotator_sc_in_progress from '$lib/screenshots/annotator/annotating-in-progress.png';
import annotator_sc_annotating from '$lib/screenshots/annotator/annotating.png';
import annotator_sc_dashboard from '$lib/screenshots/annotator/dashboard.png';
import annotator_sc_label_creation from '$lib/screenshots/annotator/label-creation.png';
import annotator_sc_sign_in from '$lib/screenshots/annotator/sign-in.png';
import annotator_sc_sign_up from '$lib/screenshots/annotator/sign-up.png';
import annotator_sc_welcome from '$lib/screenshots/annotator/welcome.png';

// docuniser
import docuniser_md from '$lib/md/projects/docuniser.md?raw';
import docuniser_about from '$lib/screenshots/docuniser/about.png';
import docuniser_create_doc from '$lib/screenshots/docuniser/create-doc.png';
import docuniser_dark_mode from '$lib/screenshots/docuniser/dark-mode.png';
import docuniser_checklist from '$lib/screenshots/docuniser/doc-checklist.png';
import docuniser_subdocs from '$lib/screenshots/docuniser/doc-sub-doc.png';
import docuniser_doc from '$lib/screenshots/docuniser/doc.png';
import docuniser_docs_grid from '$lib/screenshots/docuniser/docs-detailed-grid.png';
import docuniser_docs_grid_min from '$lib/screenshots/docuniser/docs-min-grid.png';
import docuniser_docs_list from '$lib/screenshots/docuniser/docs-list.png';
import docuniser_docs_sort from '$lib/screenshots/docuniser/docs-sort-options.png';
import docuniser_home from '$lib/screenshots/docuniser/home.png';

import domer_md from '$lib/md/projects/domer.md?raw';
import dom_router_md from '$lib/md/projects/dom-router.md?raw';

export const items: Array<Project> = [
	{
		slug: 'dom-router',
		color: 'green',
		description: dom_router_md,
		shortDescription: 'Router for the dom',
		links: [{ to: 'https://github.com/RiadhAdrani/dom-router', label: 'GitHub' }],
		logo: Assets.NodeJs,
		name: 'Dom Router',
		period: {
			from: new Date(2023, 11, 3),
			to: new Date(2024, 1, 4)
		},
		skills: getSkills('ts', 'node', 'vitest', 'vite'),
		type: 'Library'
	},
	{
		slug: 'domer',
		color: 'green',
		description: domer_md,
		shortDescription: 'A library to build DOM faster',
		links: [{ to: 'https://github.com/RiadhAdrani/domer', label: 'GitHub' }],
		logo: Assets.NodeJs,
		name: 'Domer',
		period: {
			from: new Date(2023, 11, 14),
			to: new Date(2024, 0, 28)
		},
		skills: getSkills('ts', 'node', 'vitest', 'vite'),
		type: 'Library'
	},
	{
		slug: 'annotator',
		color: '#c82829',
		description: annotator_md,
		shortDescription: 'A basic annotation tools for documents',
		links: [{ to: 'https://github.com/RiadhAdrani/annotator', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Annotator',
		period: {
			from: new Date(2023, 10, 3),
			to: new Date(2024, 0, 1)
		},
		skills: getSkills(
			'ts',
			'reactjs',
			'node',
			'rust',
			'mongodb',
			'redis',
			'vite',
			'unocss',
			'docker'
		),
		type: 'Desktop App',
		screenshots: [
			{ label: 'Welcome', src: annotator_sc_welcome },
			{ label: 'Sign Up', src: annotator_sc_sign_up },
			{ label: 'Sign In', src: annotator_sc_sign_in },
			{ label: 'Dashboard', src: annotator_sc_dashboard },
			{ label: 'Annotating', src: annotator_sc_annotating },
			{ label: 'Annotation in progress', src: annotator_sc_in_progress },
			{ label: 'Label creation', src: annotator_sc_label_creation }
		]
	},
	{
		slug: 'docuniser',
		color: '#747bff',
		description: docuniser_md,
		shortDescription:
			'A simple desktop application that allow user to create and manage documents locally.',
		links: [{ to: 'https://github.com/RiadhAdrani/docuniser', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Docuniser',
		period: {
			from: new Date(2023, 8, 23),
			to: new Date(2023, 10, 0)
		},
		skills: getSkills('ts', 'reactjs', 'node', 'vite', 'electron', 'unocss', 'docker'),
		type: 'Desktop App',
		screenshots: [
			{ label: 'Home page', src: docuniser_home },
			{ label: 'About modal', src: docuniser_about },
			{ label: 'Docs grid display', src: docuniser_docs_grid },
			{ label: 'Docs compact grid display', src: docuniser_docs_grid_min },
			{ label: 'Docs list display', src: docuniser_docs_list },
			{ label: 'Docs sorting options', src: docuniser_docs_sort },
			{ label: 'Document creation', src: docuniser_create_doc },
			{ label: 'Document page', src: docuniser_doc },
			{ label: 'Document check list', src: docuniser_checklist },
			{ label: 'Document sub docs', src: docuniser_subdocs },
			{ label: 'Dark Mode', src: docuniser_dark_mode }
		]
	},
	{
		slug: 'govid',
		color: '#007d9c',
		description: 'A youtube clone with Golang as backend.',
		shortDescription: 'A youtube clone with Golang as backend.',
		links: [{ to: 'https://github.com/RiadhAdrani/govid', label: 'GitHub' }],
		logo: Assets.Go,
		name: 'GoVid',
		period: {
			from: new Date(2023, 5, 24),
			to: new Date(2023, 8, 14)
		},
		skills: getSkills('ts', 'node', 'vite', 'go', 'docker', 'redis', 'unocss'),
		type: 'Web App'
	},
	{
		slug: 'postcss-ignore-file-plugin',
		color: '#c82829',
		description: 'PostCSS plugin that ignore a file with a comment.',
		shortDescription: 'PostCSS plugin that ignore a file with a comment.',
		links: [{ to: 'https://github.com/RiadhAdrani/postcss-plugin-ignore-file', label: 'GitHub' }],
		logo: Assets.Postcss,
		name: 'Ignore file plugin',
		period: {
			from: new Date(2023, 7, 16),
			to: new Date(2023, 7, 16)
		},
		skills: getSkills('js', 'postcss', 'node', 'jest'),
		type: 'Plugin'
	},
	{
		slug: 'ruvy',
		color: '#ffffff',
		description: 'React from scratch, but better',
		shortDescription: 'React from scratch, but better',
		links: [
			{ to: 'https://github.com/RiadhAdrani/ruvy', label: 'GitHub' },
			{ to: 'https://riadhadrani.github.io/ruvy/', label: 'Documentation' },
			{ to: 'https://github.com/RiadhAdrani/create-ruvy', label: 'CLI' },
			{ to: 'https://www.npmjs.com/package/@riadh-adrani/ruvy', label: 'NPM' },
			{
				to: 'https://stackblitz.com/edit/ruvy?file=package.json,src%2Fmain.tsx',
				label: 'Stackblitz'
			}
		],
		logo: Assets.Ruvy,
		name: 'Ruvy',
		period: {
			from: new Date(2023, 2, 1)
		},
		skills: getSkills('ts', 'node', 'vite', 'vitest', 'unocss'),
		type: 'Web Framework'
	},
	{
		slug: 'dom-utils',
		color: '#5cad47',
		name: 'Dom Utils',
		logo: Assets.NodeJs,
		description: 'Create and manipulate DOM elements.',
		shortDescription: 'Create and manipulate DOM elements.',
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
		logo: Assets.Werewolves,
		description:
			'An app to manage your game of Loup garous de thiercelieu also known as The Werewolves of Millers Hollow.',
		shortDescription:
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
		logo: Assets.Svelte,
		description: 'My personal website portfolio.',
		shortDescription: 'My personal website portfolio.',
		period: { from: new Date(2021, 3, 1) },
		links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/RiadhAdrani' }],
		skills: getSkills('ts', 'svelte', 'sass', 'vite', 'unocss'),
		type: 'Website'
	},
	{
		slug: 'recursive',
		color: '#cf2026',
		name: 'Recursive',
		logo: 'https://raw.githubusercontent.com/RiadhAdrani/recursive/master/logo.png',
		description:
			'Recursive is an ongoing project that allow developers to build a functional, component-based, Javascript only, beautiful and interactive Web applications.',
		shortDescription:
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
		shortDescription: 'My JavaScript utility functions and types.',
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
		shortDescription:
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
		shortDescription:
			'A web application used to create and generate gradient background for css usage.',
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
		shortDescription:
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
		shortDescription:
			'A website that allow users to submit their questions and answers for a possible game app.',
		skills: getSkills('node', 'vue', 'js', 'firebase')
	},
	{
		slug: 'azur-app',
		name: 'Azur City',
		type: 'Android App',
		logo: Assets.Azur,
		color: '#01acc8',
		period: { from: new Date(2021, 1, 1), to: new Date(2021, 4, 10) },
		links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/azur_app' }],
		description:
			'A prototype of a commercial app made for Azur City. The App was presented as an End of studies projects.',
		shortDescription:
			'A prototype of a commercial app made for Azur City. The App was presented as an End of studies projects.',
		skills: getSkills('kotlin')
	},
	{
		slug: 'werewolves-kt',
		name: 'Werewolves',
		type: 'Android App',
		logo: Assets.Werewolves,
		color: '#fbb03b',
		period: { from: new Date(2021, 0, 1), to: new Date(2021, 5, 10) },
		links: [
			{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/werewolves_of_the_millers_hollow' }
		],
		description:
			'Creating a guide for the game "Werewolves of The Millers Hollow" originally "Les loups garous de Thierclieux".',
		shortDescription:
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
		shortDescription:
			'Color Noter is a color based note taking app that offer the user the ability to write and save his ideas and todos in an easy to use environment.',
		skills: getSkills('java', 'electron', 'reactjs', 'firebase')
	}
];

export const title = 'Projects';

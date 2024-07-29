import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'dev@cihub',
		name: 'Software Developer',
		company: 'CI HUB',
		color: 'red',
		contract: ContractType.FullTime,
		description: '',
		shortDescription: '',
		type: 'Software Development',
		location: 'Remote Tunisia',
		links: [{ label: 'Website', to: 'https://ci-hub.com/', newTab: true }],
		logo: Assets.CiHub,
		period: { from: new Date(2024, 6, 1) },
		skills: getSkills('js', 'docker', 'node', 'express'),
		screenshots: []
	},
	{
		slug: 'fullstack@hstech',
		name: 'Fullstack Developer',
		company: 'HSTECH',
		description: '',
		shortDescription: '',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Remote, Tunisia',
		color: 'cyan',
		links: [],
		logo: Assets.HSTECH,
		period: { from: new Date(2022, 9, 3), to: new Date(2024, 4, 1) },
		skills: getSkills(
			'deno',
			'ts',
			'node',
			'svelte',
			'quasar',
			'remix',
			'nuxt',
			'vue',
			'reactjs',
			'sass',
			'tailwind',
			'postgresql',
			'redis',
			'mongodb',
			'prisma',
			'fastify',
			'docker',
			'kubernetes',
			'vite',
			'jest',
			'vitest',
			'playwright',
			'unocss',
			'postcss'
		)
	},
	{
		slug: 'software-dev@freelancer',
		name: 'Software Development Freelancer',
		company: 'Self-employed',
		description:
			'Creating Mobile and Web Apps for customers using various technologies like "Xamarin", "Native Android", "React" ...',
		shortDescription:
			'Creating Mobile and Web Apps for customers using various technologies like "Xamarin", "Native Android", "React" ...',
		contract: ContractType.Freelance,
		type: 'Software Development',
		color: 'azure',
		links: [],
		logo: Assets.Unknown,
		location: 'Tunisia',
		period: { from: new Date(2021, 10, 1) },
		skills: getSkills(
			'js',
			'ts',
			'node',
			'reactjs',
			'kotlin',
			'firebase',
			'xamarin',
			'csharp',
			'fastify',
			'mongodb',
			'angular'
		)
	},
	{
		slug: 'web-designer@triweb',
		name: 'Web Designer',
		company: 'TriWeb',
		description:
			'My job consisted of designing (Using Adobe Photoshop and Illustrator) the graphical charter of turnkey websites and integrating them with the help of a custom CMS made for TriWeb.',
		shortDescription:
			'My job consisted of designing (Using Adobe Photoshop and Illustrator) the graphical charter of turnkey websites and integrating them with the help of a custom CMS made for TriWeb.',
		contract: ContractType.FullTime,
		type: 'UI Design',
		location: 'Tunis, Tunisia',
		period: { from: new Date(2021, 4, 1), to: new Date(2021, 11, 12) },
		color: 'red',
		links: [],
		logo: Assets.Triweb,
		skills: getSkills('html', 'css', 'js', 'ps', 'ai')
	},
	{
		slug: 'graphic-designer@freelancer',
		name: 'Graphic Design Freelancer',
		company: 'Self-employed',
		color: 'darkmagenta',
		links: [],
		logo: Assets.Unknown,
		description:
			'Designing graphics for small startups and companies, Creating logos, posters ... etc',
		shortDescription:
			'Designing graphics for small startups and companies, Creating logos, posters ... etc',
		contract: ContractType.Freelance,
		type: 'Graphic Design',
		location: 'Tunisia',
		period: { from: new Date(2020, 5, 1), to: new Date(2021, 11, 12) },
		skills: getSkills('ps', 'ae', 'ai', 'pp')
	},
	{
		slug: 'intern@brain-academy',
		name: 'Intern',
		company: 'Brain Academy',
		color: 'yellow',
		links: [],
		logo: Assets.BrainAcademy,
		description:
			'We developed the prototype of "SMARTchair" which is an EEG controlled wheelchair. Using our skills was not enough, so it was imminent for us to learn and get used to many other programming languages, software and even new operating systems. The project was defended the 19th of July 2020 and got "Very Good" as honor.',
		shortDescription:
			'We developed the prototype of "SMARTchair" which is an EEG controlled wheelchair. Using our skills was not enough, so it was imminent for us to learn and get used to many other programming languages, software and even new operating systems. The project was defended the 19th of July 2020 and got "Very Good" as honor.',
		contract: ContractType.Internship,
		type: 'Robotics',
		location: 'Ben Arous, Tunisia',
		period: { from: new Date(2020, 0, 1), to: new Date(2020, 6, 19) },
		skills: getSkills('python')
	}
];

export const title = 'Experience';

import { EmploymentType, Technologies, Assets, type SkillsParams, type Technology } from './utils';
import type {
	CareerParams,
	HomeParams,
	NavBarParams,
	PersonalProjectsParams,
	ResumePageParams
} from './utils';

export const PortfolioTitle = 'Slick template with Svelte';

export const NavBar: NavBarParams = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills'
};

export const Home: HomeParams = {
	title: 'Home Page',
	name: 'Name',
	lastName: 'LASTNAME',
	description:
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rerum. Debitis accusantium deleniti enim iste dignissimos? Similique, exercitationem! Odit vero, numquam quae ratione maxime sunt reiciendis laudantium quaerat iure ipsum!',
	links: {
		github: 'https://github.com/',
		linkedin: 'https://www.linkedin.com/',
		twitter: 'https://twitter.com/',
		stackoverflow: 'https://stackoverflow.com/',
		email: 'riadh-adrani@hotmail.fr'
	},
	skills: Object.keys(Technologies).map((key) => (Technologies as Record<string, Technology>)[key])
};

export const PersonalProjects: PersonalProjectsParams = {
	title: 'Personal Projects',
	items: [
		{
			color: '#5e95e3',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
			links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
			logo: Assets.Unknown,
			name: 'Slick Portfolio',
			period: {
				from: new Date()
			},
			technologies: [Technologies.Angular, Technologies.TypeScript, Technologies.Tailwind],
			type: 'Website Template'
		},
		{
			color: '#ff3e00',
			description:
				'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
			links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
			logo: Assets.Svelte,
			name: 'Slick Portfolio',
			period: {
				from: new Date()
			},
			technologies: [Technologies.Svelte, Technologies.TypeScript],
			type: 'Website Template'
		}
	]
};

export const ProfessionalCareerParams: CareerParams = {
	title: 'Professional Experience',
	items: [
		{
			company: { logo: Assets.Unknown, name: 'Home' },
			description: 'Creating awesome applications for customers.',
			employmentType: EmploymentType.Freelance,
			industry: 'Software Development',
			location: 'Home',
			period: { from: new Date() },
			skills: [Technologies.JavaScript, Technologies.HTML, Technologies.CSS],
			title: 'Freelancer'
		}
	]
};

export const MySkillsParams: SkillsParams = {
	skills: [
		{
			technology: Technologies.JavaScript,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.'
		},
		{
			technology: Technologies.TypeScript,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.'
		},
		{
			technology: Technologies.Svelte,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.'
		},
		{
			technology: Technologies.Sass,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.'
		},
		{
			technology: Technologies.CSS,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.'
		}
	],
	title: 'My Skills'
};

export const ResumeParams: ResumePageParams = {
	title: 'Resumé',
	cv: ''
};

export const SearchPageParams = {
	title: 'Search'
};

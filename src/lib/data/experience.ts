import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'President',
		company: 'Nahda | نهضة',
		description: 'President of Nahda student clubو focused on advancing the academic and career success of MENA students.',
		contract: ContractType.Volunteer,
		type: 'Student Club',
		location: 'Birmingham, UK',
		period: { from: new Date(2024, 0, 9) },
		name: 'President',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Led the initial steps to bring Nahda to Birmingham, establishing it as a registered student club, forming a dedicated team, and implementing a project-based flat structure where each member gets the chance to lead and take ownership of projects to gain practical experience. Through initiatives like the Semester Preparation Program and internship workshops, we provide students with the resources and support they need to thrive academically and professionally.'
	},
	{
		slug: 'Information Technology Intern',
		company: 'Procter & Gamble',
		description: 'Managed the execution of multiple high-impact technology projects, ensuring seamless alignment with Procter & Gamble’s technical standards to drive business.',
		contract: ContractType.Intern,
		type: 'IT',
		location: 'Jeddah, KSA',
		period: { from: new Date(2024, 0, 7), to: new Date(2024, 0, 9) },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Intern',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Developed real-time automated interactive business analytics Power BI dashboards, translating complex data into clear, actionable insights that enabled data-driven strategic decisions. Also, I led the Commercial Master Data Transformation project, successfully unifying data hierarchies across P&G’s systems and categories, streamlining processes, and improving data accuracy and consistency across the organization.'
	},
	{
		slug: 'EmTech Lab Intern',
		company: 'PwC',
		description: 'Creating awesome prototypes for pwc clients.',
		contract: ContractType.Intern,
		type: 'Emerging Technologies Lab',
		location: 'Home',
		period: { from: new Date(2023, 0, 7), to: new Date(2023, 0, 9) },
		skills: getSkills('css', 'html', 'js'),
		name: 'Intern',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Showcased prototypes in events and lab tours for multiple PwC high profile clients. Also, researched and presented on ethical AI, enhancing the team’s awareness of the latest industry developments. Finally, optimised a Python-based AI prototype utilising libraries and APIs like openCV library and openAI API, and integrated ChatGPT capabilities to boost overall functionality..'
	}
];

export const title = 'Experience';

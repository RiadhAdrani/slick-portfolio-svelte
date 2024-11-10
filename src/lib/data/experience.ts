import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'nahda',
		company: 'Nahda',
		description: 'Led the initial steps to bring Nahda to Birmingham, establishing it as a registered student club, forming a dedicated team, and implementing a project-based flat structure where each member gets the chance to lead and take ownership of projects to gain practical experience. Through initiatives like the Semester Preparation Program and internship workshops, we provide students with the resources and support they need to thrive academically and professionally.',
		contract: ContractType.SelfEmployed,
		type: 'Volunteering Leadership Experience',
		location: 'Birmingham, UK',
		period: { from: new Date(2024, 9, 1) },
		skills: getSkills(),
		name: 'President',
		color: 'green',
		links: [],
		logo: Assets.Nahda,
		shortDescription: 'President of Nahda student clubو focused on advancing the academic and career success of MENA students.'
	},
	{
		slug: 'p&g',
		company: 'Procter & Gamble',
		description: 'Developed real-time automated interactive business analytics Power BI dashboards, translating complex data into clear, actionable insights that enabled data-driven strategic decisions. Also, I led the Commercial Master Data Transformation project, successfully unifying data hierarchies across P&G’s systems and categories, streamlining processes, and improving data accuracy and consistency across the organization.',
		contract: ContractType.Internship,
		type: 'IT',
		location: 'Jeddah, KSA',
		period: { from: new Date(2024, 6, 1), to: new Date(2024, 8, 30) },
		skills: getSkills('powerbi'),
		name: 'Information Technology Intern',
		color: 'blue',
		links: [],
		logo: Assets.PG,
		shortDescription: 'Managed the execution of multiple high-impact technology projects, ensuring seamless alignment with Procter & Gamble’s technical standards to drive business.'
	},
	{
		slug: 'pwc',
		company: 'PwC',
		description: 'Showcased prototypes in events and lab tours for multiple PwC high profile clients. Also, researched and presented on ethical AI, enhancing the team’s awareness of the latest industry developments. Finally, optimised a Python-based AI prototype utilising libraries and APIs like openCV library and openAI API, and integrated ChatGPT capabilities to boost overall functionality.',
		contract: ContractType.Internship,
		type: 'EmTech Lab',
		location: 'Riyadh, UK',
		period: { from: new Date(2023, 6, 1), to: new Date(2023, 7, 30) },
		skills: getSkills('python'),
		name: 'Emerging Technologies Lab Intern',
		color: 'yellow',
		links: [],
		logo: Assets.PwC,
		shortDescription: 'Creating, maintaining and showcasing prototypes to pwc high profile clients.'
	}
];

export const title = 'Experience';
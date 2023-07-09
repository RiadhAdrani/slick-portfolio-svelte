export enum Platform {
	GitHub = 'github',
	StackOverflow = 'stackoverflow',
	Twitter = 'twitter',
	Linkedin = 'linkedin',
	Email = 'email',
	Facebook = 'facebook',
	Youtube = 'youtube'
}

export enum ContractType {
	FullTime = 'Full-time',
	PartTime = 'Part-time',
	SelfEmployed = 'Self-employed',
	Freelance = 'Freelance',
	Contract = 'Contract',
	Internship = 'Internship'
}

export type Asset = string | { light: string; dark: string };

export interface Item {
	slug: string;
	name: string;
	logo: Asset;
	description: string;
}

export interface Link {
	to: string;
	label: string;
	newTab?: boolean;
}

export interface IconLink extends Link {
	icon: Asset;
}

export interface Skill extends Item {
	color: string;
}

export interface Project extends Item {
	links: Array<Link>;
	color: string;
	period: {
		from: Date;
		to?: Date;
	};
	type: string;
	skills: Array<Skill>;
}

export interface Experience extends Project {
	company: string;
	location: string;
	contract: ContractType;
}

export interface PageParams {
	title: string;
}

export interface PageWithSearchParams<T> extends PageParams {
	items: Array<T>;
}

export interface HomeLink {
	platform: Platform;
	link: string;
}

export interface HomePageParams extends PageParams {
	name: string;
	lastName: string;
	description: string;
	links: Array<HomeLink>;
	skills?: Array<Skill>;
}

export type SearchPageParams = PageParams;

export type ProjectPageParams = PageWithSearchParams<Project>;

export type ExperiencePageParams = PageWithSearchParams<Experience>;

export type SkillsPageParams = PageWithSearchParams<Skill>;

export interface ResumePageParams extends PageParams {
	item: string;
}

import { EmploymentType, Technologies, Assets } from "./utils";
import type { CareerParams, HomeParams, NavBarParams, PersonalProjectsParams, ResumePageParams } from "./utils";

export const PortfolioTitle = 'Slick template with Svelte'

export const NavBar: NavBarParams = {
  home: 'Home',
  personal: 'Personal Projects',
  career: 'Professional Experience',
  resume: 'Resume',
}

export const Home: HomeParams = {
  title: 'Home Page',
  name: 'Name',
  lastName: 'LASTNAME',
  description: 'A brief description about myself.',
  links: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    stackoverflow: 'https://stackoverflow.com/'
  },
  skills: [Technologies.JavaScript, Technologies.HTML, Technologies.CSS]
}

export const PersonalProjects: PersonalProjectsParams = {
  title: 'Personal Projects',
  items: [
    {
      color: '#ff3e00',
      description: 'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
      links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
      logo: Assets.Svelte,
      name: "Slick Portfolio",
      period: {
        from: new Date()
      },
      technologies: [Technologies.Svelte, Technologies.TypeScript],
      type: "Website Template"
    },
  ]
}

export const ProfessionalCareerParams: CareerParams = {
  title: 'Professional Experience',
  items: [{
    company: { logo: Assets.Unknown, name: 'Home' },
    description: "Creating awesome applications for customers.",
    employmentType: EmploymentType.Freelance,
    industry: 'Software Development',
    location: 'Home',
    period: { from: new Date() },
    skills: [Technologies.JavaScript, Technologies.HTML, Technologies.CSS],
    title: 'Freelancer'
  }]
}

export const ResumeParams: ResumePageParams = {
  title: 'Resumé',
  cv: ''
}
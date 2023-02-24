import Assets from "./Assets";
import { EmploymentType } from "./Career";
import { Technologies } from "./Technologies";
import type { CareerParams, HomeParams, NavBarParams, PersonalProjectsParams } from "./types";

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
      color: '#ffffff',
      description: 'hello world',
      links: [{ to: 'github.com', label: 'hello' }],
      logo: Assets.Svelte,
      name: "world",
      period: {
        from: new Date(2022, 0, 0)
      },
      technologies: [Technologies.Java,],
      type: EmploymentType.Contract
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
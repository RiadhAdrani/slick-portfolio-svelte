import type { EmploymentType, Icons } from ".";

export interface Experience {
  title: string;
  employmentType: EmploymentType;
  company: {
    name: string;
    logo: string;
  };
  location: string;
  period: {
    from: Date;
    to?: Date;
  };
  industry: string;
  description: string;
  skills: Array<Technology>;
}

export interface Technology {
  name: string;
  logo: string;
  inverted?: boolean;
}

export interface ProjectLink {
  label?: string;
  to: string;
}

export interface Project {
  color: string;
  logo: string;
  name: string;
  type: string;
  period: {
    from: Date;
    to?: Date;
  };
  description: string;
  technologies: Array<Technology>;
  links: Array<ProjectLink>;
}

export interface Link {
  to: string;
  title: string;
}

export interface SocialLink extends Link {
  icon: Icons;
}

export interface NavMenuItem extends SocialLink {
  active?: boolean;
}

export type SocialMedia = 'github' | 'stackoverflow' | 'twitter' | 'linkedin'

export interface HomeParams {
  title: string,
  name: string,
  lastName: string,
  description: string,
  links: {
    github?: string,
    linkedin?: string,
    twitter?: string,
    stackoverflow?: string
  },
  skills: Array<Technology>;
}

export interface NavBarParams {
  home: string,
  personal: string,
  career: string,
  resume: string,
}

export interface PersonalProjectsParams {
  title: string,
  items: Array<Project>
}

export interface CareerParams {
  title: string,
  items: Array<Experience>
}

export interface ResumePageParams {
  title: string,
  cv: string,
}
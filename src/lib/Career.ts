import type { Experience } from './types';

export enum EmploymentType {
  FullTime = 'Full-time',
  PartTime = 'Part-time',
  SelfEmployed = 'Self-employed',
  Freelance = 'Freelance',
  Contract = 'Contract',
  Internship = 'Internship'
}

export const JobExperiences: Record<string, Experience> = {
};

export const JobExperiencesList: Array<Experience> = Object.keys(JobExperiences).map(
  (job) => JobExperiences[job]
);

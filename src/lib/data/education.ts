import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor’s of Science degree in Artificial Intelligence and Computer Science',
		description: 'Relevant Coursework: Data Structures & Algorithms, Artificial Intelligence, Intelligent Data Analysis, Software Engineering ',
		location: 'Birmingham, UK',
		logo: Assets.UoB,
		name: '',
		organization: 'University of Birmingham',
		period: { from: new Date(2021, 9, 1), to: new Date(2025, 8, 30) },
		shortDescription: '',
		slug: 'education',
		subjects: ['Python', 'Java', 'C', 'Algorithms', 'Data Analysis', 'AI', 'LLMs', 'NLP']
	}
];

export const title = 'Education';

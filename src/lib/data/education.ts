import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor’s of Science in Artificial Intelligence and Computer Science',
		description: 'Relevant Coursework: Data Structures & Algorithms, Artificial Intelligence, Intelligent Data Analysis, Software Engineering ',
		location: 'Birmingham, UK',
		logo: Assets.Unknown,
		name: '',
		organization: 'ISTIC',
		period: { from: new Date(2021, 9, 1), to: new Date(2025, 9, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Python', 'Java', 'C', 'Algorithms', 'Data Analysis', 'AI', 'LLMs', 'NLP']
	}
];

export const title = 'Education';

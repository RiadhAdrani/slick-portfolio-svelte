import { Platform } from '$lib/types';
import { items } from './skills';

export const title = 'Home';

export const name = 'Riadh';

export const lastName = 'Adrani';

export const description = 'A self-made Software Engineer and a hobbyist Designer';

export const links: Array<{ platform: Platform; link: string }> = [
	{
		platform: Platform.GitHub,
		link: 'https://github.com/RiadhAdrani'
	},
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/riadh-adrani/'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/users/12978534/riadh-adrani'
	},
	{
		platform: Platform.Email,
		link: 'riadh_adrani@hotmail.fr'
	}
];

export const skills = items;

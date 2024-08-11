import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import bg from '$lib/assets/bg.jpg';

const key = '@riadh-adrani-theme';

const updateLocalStorage = (value: boolean) => {
	if (browser) {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

export const theme = writable<boolean>(false);

export const toggleTheme = (value?: boolean) =>
	theme.update((it) => {
		const $v = typeof value === 'boolean' ? value : !it;

		updateLocalStorage($v);

		document.querySelector(':root')?.setAttribute('data-theme', $v ? 'dark' : 'light');

		return $v;
	});

export const onHydrated = () => {
	const fromStore = localStorage.getItem(key);

	if (!fromStore) {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			// dark mode
			toggleTheme(true);
		} else {
			// light mode
			toggleTheme(false);
		}
	} else {
		toggleTheme(JSON.parse(fromStore));
	}

	window.document.body.style.backgroundImage = `url(${bg})`;
};

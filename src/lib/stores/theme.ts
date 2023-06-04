import { writable } from 'svelte/store';

export const theme = writable<boolean>(true);

export const toggleTheme = () => theme.update((it) => !it);

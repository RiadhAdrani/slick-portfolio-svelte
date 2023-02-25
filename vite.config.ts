import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  base: '',
  plugins: [sveltekit()]
};

export default config;

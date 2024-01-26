import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import type { Plugin } from 'vite';
const add_browser_onmount: Plugin = {
	name: 'vite-plugin-onmount',
	config(config) {
		if (process.env.VITEST) {
			if (!config.resolve?.conditions) {
				if (!config.resolve) {
					config.resolve = {};
				}
				config.resolve.conditions = [];
			}
			config.resolve.conditions.unshift('browser');
		}
	}
};

export default defineConfig({
	plugins: [add_browser_onmount, sveltekit()],
	test: {
		setupFiles: ['src/test-setup.ts'],
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

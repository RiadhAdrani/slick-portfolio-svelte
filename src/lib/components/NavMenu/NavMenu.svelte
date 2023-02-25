<script lang="ts">
	import type { NavMenuItem } from '$lib/utils/types';
	import Icon from '../Icon/Icon.svelte';
	import { Icons } from '$lib/utils';
	import { page } from '$app/stores';
	import { NavBar } from '$lib/params';

	import { base } from '$app/paths';

	let currentRoute = '/';

	$: {
		if ($page) {
			currentRoute = $page.url.pathname;
		}
	}

	const items: Array<NavMenuItem> = [
		{ title: NavBar.home, to: '/', icon: Icons.Home },
		{ title: NavBar.personal, to: '/projects', icon: Icons.Projects },
		{ title: NavBar.career, to: '/experience', icon: Icons.Job },
		{ title: NavBar.resume, to: '/resume', icon: Icons.Resume }
	];
</script>

<div class="nav-menu">
	<nav class="container">
		{#each items as item}
			<a
				href={`${base}${item.to}`}
				class="nav-menu-item"
				class:nav-menu-item-active={currentRoute === item.to}
			>
				<Icon icon={item.icon} size="20px" />
				<span class="nav-menu-item-label">{item.title}</span>
			</a>
		{/each}
	</nav>
</div>

<style lang="scss">
	.container {
		justify-content: center;
		display: flex;
		height: 100%;
	}

	.nav-menu {
		display: flex;
		justify-content: center;
		position: sticky;
		top: 0px;
		z-index: 10;
		padding: 0px 10px;
		border-bottom: 1px solid var(--secondary-c);
		background-color: var(--primary-c);

		&-item {
			text-decoration: none;
			font-weight: 400;
			padding: 15px 20px;
			color: inherit;
			transition-duration: 250ms;
			display: flex;
			border-bottom: 3px solid transparent;

			&-active {
				border-bottom-color: var(--extra-c);
			}

			&-label {
				margin-left: 10px;

				@media (max-width: 950px) {
					& {
						display: none;
					}
				}
			}

			&:hover {
				background-color: var(--secondary-c);
			}
		}
	}
</style>

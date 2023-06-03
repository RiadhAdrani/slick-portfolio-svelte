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
		{ title: NavBar.skills, to: '/skills', icon: Icons.Skills },
		{ title: NavBar.personal, to: '/projects', icon: Icons.Projects },
		{ title: NavBar.career, to: '/experience', icon: Icons.Job },
		{ title: NavBar.resume, to: '/resume', icon: Icons.Resume }
	];
</script>

<div class="nav-menu">
	<nav class="container !justify-between flex flex-row items-center text-sm">
		<a
			href={`${base}/`}
			class="nav-menu-left flex flex-row items-center cursor-pointer px-6 rounded text-[var(--accent-text-c)] self-stretch hover:bg-[color:var(--secondary-c)]"
		>
			<Icon icon={Icons.Code} size="30" color="var(--accent-text-c)" />
			<span class="ml-2 text-md font-bold hidden md:inline">Riadh Adrani</span>
		</a>
		<div class="flex flex-row flex-1 self-center justify-center">
			{#each items as item}
				<a href={`${base}${item.to}`} class="nav-menu-item !text-[var(--accent-text-c)]">
					<Icon icon={item.icon} color="var(--accent-text-c)" size="18px" />
					<span class="nav-menu-item-label ">{item.title}</span>
				</a>
			{/each}
		</div>
		<a
			href={`${base}/search`}
			class="flex flex-row items-center self-stretch cursor-pointer px-6 py-0.5 hover:bg-[color:var(--secondary-c)]"
		>
			<Icon icon={Icons.Search} size="16" color="var(--extra-text-c)" />
			<span class="hidden sm:flex ml-2 text-[color:var(--extra-text-c)]">Search</span>
		</a>
	</nav>
</div>

<style lang="scss">
	// :global(.nav-menu-left:hover > svg) {
	// 	fill: red !important;
	// }

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
			padding: 10px 20px;
			color: inherit;
			transition-duration: 250ms;
			display: flex;
			align-items: center;
			border-bottom: 3px solid transparent;

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

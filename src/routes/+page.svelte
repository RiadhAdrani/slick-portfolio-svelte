<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import { Home, PortfolioTitle } from '$lib/params';
	import type { SocialLink, SocialMedia } from '$lib/utils';
	import { useSocialMedia, useTitle } from '$lib/utils';
	import { isBlank } from '@riadh-adrani/utility-js';

	const { description, lastName, links: _links, name, skills, title } = Home;

	const links: Array<SocialLink> = Object.keys(_links).map((key) => {
		const to = _links[key as 'github'] as string;
		const data = useSocialMedia(key as SocialMedia);

		return {
			to,
			title: data.title,
			icon: data.icon
		};
	});

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
</script>

<svelte:head>
	<title>{useTitle(title, PortfolioTitle)}</title>
</svelte:head>
<div class="home">
	<div class="home-section">
		<h1 class="home-title">{name} {lastName},</h1>
		<p class="home-subtitle">{description}</p>
		<div class="home-social">
			{#each links as link}
				<a
					class="home-social-item"
					href={`${isEmail(link.to) ? 'mailto:' : ''}${link.to}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={link.icon} color={'var(--accent-text)'} />
				</a>
			{/each}
		</div>
	</div>
	<Carrousel items={skills} />
</div>

<style lang="scss">
	.home {
		align-self: center;
		display: flex;
		flex-direction: row;
		flex: 1;
		align-self: stretch;
		align-items: center;
		padding: 0px 10px;

		&-title {
			font-family: var(--title-f);
			font-size: 4em;
			font-weight: 900;
			letter-spacing: 2px;
		}

		&-subtitle {
			color: var(--tertiary-text);
			font-size: 1.35em;
			font-weight: 200;
		}

		&-section {
			display: flex;
			flex-direction: column;
			flex: 1;
			gap: 10px;
		}

		&-social {
			padding: 15px 0px;

			&-item {
				margin-right: 10px;
				text-decoration: none;
			}
		}

		@media (max-width: 875px) {
			& {
				flex-direction: column;
				justify-content: center;
			}

			&-section {
				flex: 0;
				align-items: center;
				text-align: center;
			}
		}
	}
</style>

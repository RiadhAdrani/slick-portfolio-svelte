<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import CommonPage from './CommonPage.svelte';
	import Input from './Input/Input.svelte';
	import { browser } from '$app/environment';

	export let title = 'Title';
	export let search = '';

	const dispatch = createEventDispatcher();

	let mounted = false;

	$: {
		dispatch('search', { search: search.trim().toLowerCase() });
	}

	$: {
		if (browser && mounted) {
			let searchParams = new URLSearchParams(window.location.search);

			searchParams.set('q', search);

			const url = `${window.location.protocol}//${window.location.host}${
				window.location.pathname
			}?${searchParams.toString()}`;

			const state = window.history.state;

			window.history.replaceState(state, '', url);
		}
	}

	onMount(() => {
		let searchParams = new URLSearchParams(window.location.search);

		search = searchParams.get('q') ?? '';
		mounted = true;
	});
</script>

<CommonPage {title}>
	<div class="w-100% row">
		<Input bind:value={search} placeholder={'Search...'} />
	</div>
	<div class="w-100% col flex-1">
		<slot />
	</div>
</CommonPage>

<script>
	import { TITLE_SUFFIX } from '$lib/params';
	import { useTitle } from '$lib/utils';
	import MainTitle from './MainTitle/MainTitle.svelte';

	export let title = 'Title';
</script>

<svelte:head>
	<title>{useTitle(title, TITLE_SUFFIX)}</title>
</svelte:head>
<div class="flex-1 flex flex-col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12">
	<MainTitle>{title}</MainTitle>
	<div class="flex flex-col gap-5">
		<slot />
	</div>
</div>

<script lang="ts">
	import { TITLE_SUFFIX } from '$lib/params';
	import { useTitle } from '$lib/utils/helpers';

	export let title: string;
</script>

<svelte:head>
	<title>{useTitle(title, TITLE_SUFFIX)}</title>
</svelte:head>

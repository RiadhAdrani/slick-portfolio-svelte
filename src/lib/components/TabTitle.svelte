<script lang="ts">
	import { titleSuffix } from '@data/app';
	import { useTitle } from '$lib/utils/helpers';

	interface Props {
		title: string;
	}

	let { title }: Props = $props();
</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>

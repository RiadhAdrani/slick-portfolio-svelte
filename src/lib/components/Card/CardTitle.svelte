<script lang="ts">
	interface Props {
		title: string;
	}

	let { title }: Props = $props();
</script>

<h3 class="font-[var(--title-f)] text-1.25em">{title}</h3>

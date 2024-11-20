<script lang="ts">

	interface Props {
		icon?: `i-${string}-${string}` | undefined;
		classes?: string;
	}

	let { icon = undefined, classes = '' }: Props = $props();
</script>

<i class={`${icon} ${classes}`}></i>

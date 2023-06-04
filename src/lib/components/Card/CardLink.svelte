<script lang="ts">
	import Icon from '../Icon/Icon.svelte';
	import { Icons } from '$lib/utils';

	export let label: string;
	export let to: string;
</script>

<a class="card-link" href={to} title={label} target="_blank" rel="noreferrer" data-help={label}>
	<Icon icon={Icons.Link} size="17px" />
</a>

<style lang="scss">
	.card-link {
		display: flex;
		position: relative;
		align-items: center;
		margin: 0 2.5px;
		border: 1px solid var(--border);
		padding: 5px;
		border-radius: 10px;
		color: inherit;

		&:hover {
			border-color: var(--border-hover);

			&:after {
				content: attr(data-help);
				display: inline-block;
				position: absolute;
				width: max-content;
				background-color: var(--secondary);
				padding: 5px 10px;
				left: 10px;
				top: calc(100% + 5px);
				border: 1px solid var(--border);
				border-radius: 15px;
			}
		}
	}
</style>

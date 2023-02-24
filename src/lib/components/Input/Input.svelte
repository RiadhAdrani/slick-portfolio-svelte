<script lang="ts">
	export let value = '';
	export let placeholder = '';
</script>

<input bind:value {placeholder} />

<style lang="scss">
	input {
		color: inherit;
		background-color: transparent;
		border: 1px solid var(--accent-c);
		padding: 10px 20px;
		border-radius: 15px;
		flex: 1;
		font-size: 1.15em;

		&:focus {
			outline: 1px solid var(--extra-c);
		}
	}
</style>

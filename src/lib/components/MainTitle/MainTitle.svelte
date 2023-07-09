<script lang="ts">
	export let classes = '';
</script>

<h1 class={`text-[2.5em] sm:text-[3em] md:text-[3.5em] lg:text-[4em] ${classes}`}><slot /></h1>

<style lang="scss">
	h1 {
		// font-size: 4em;
		font-family: var(--title-f);
		font-weight: 900;
		letter-spacing: 4px;
		text-align: center;
	}
</style>

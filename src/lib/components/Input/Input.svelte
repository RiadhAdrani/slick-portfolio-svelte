<script lang="ts">
	interface Props {
		value?: string;
		placeholder?: string;
	}

	let { value = $bindable(''), placeholder = '' }: Props = $props();
    let inputElement: HTMLInputElement = $state();

    function focus() {
        inputElement.focus();
    }

    export { focus };
</script>

<input
	bind:this={inputElement}
	bind:value
	{placeholder}
	class="text-[inherit] bg-transparent border-[1px] border-solid border-[var(--border)] px-[20px] py-[10px] rounded-[15px] flex-1 text-[1.15em] "
/>

<style lang="scss">
	input {
		&:focus {
			outline: 1px solid var(--border-hover);
			background-color: var(--main-hover);
		}
	}
</style>

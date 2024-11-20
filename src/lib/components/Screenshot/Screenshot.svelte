<script lang="ts">
	import { handlers, createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	import UIcon from '../Icon/UIcon.svelte';


	interface Props {
		screenshot?: { src: string; label: string } | undefined;
		onClose?: any;
	}

	let { screenshot = $bindable(undefined), onClose = () => {
		screenshot = undefined;
	} }: Props = $props();

	let show = $derived(typeof screenshot !== 'undefined');
</script>

{#if show}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0px top-51px bg-[#000000dd] col-center p-50px"
		onclick={handlers(onClose, (e) => e.stopPropagation())}
		onkeydown={bubble('keydown')}
		onkeypress={bubble('keypress')}
		onkeyup={handlers(bubble('keyup'), bubble('keyup'))}
	>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="w-full w-100% md:w-80% lg:w-70% col text-center gap-5 bg-[var(--main)] border-solid border-1px border-[var(--border)] p-5 rounded-xl"
			onclick={(e) => e.stopPropagation()}
			onkeydown={bubble('keydown')}
			onkeypress={bubble('keypress')}
			onkeyup={handlers(bubble('keyup'), bubble('keyup'))}
		>
			<div class="self-end">
				<button
					class="cursor-pointer aspect-square rounded-full border-[var(--border)] border-1px bg-[transparent] border-solid hover:border-[var(--border-hover)]"
					onclick={onClose}
					onkeydown={bubble('keydown')}
					onkeypress={bubble('keypress')}
					onkeyup={bubble('keyup')}
				>
					<UIcon icon={'i-carbon-close'} />
				</button>
			</div>
			<div
				class="aspect-video col bg-contain w-100% rounded-xl bg-no-repeat bg-contains bg-center"
				style={`background-image: url(${screenshot?.src});`}
			></div>
			<p
				class="font-italic m-t-auto m-x-auto bg-[var(--main-60)] border-solid border-1px border-[var(--border)] p-x-5 p-2 rounded-xl"
			>
				{screenshot?.label}
			</p>
		</div>
	</div>
{/if}

<script lang="ts">
	let {
		value = $bindable(),
		sub = false,
	}: {
		value?: string;
		sub?: boolean;
	} = $props();
</script>

<input
	type="text"
	class={`h-10 w-10 border border-black text-center text-[8px] md:h-20 md:w-20 md:text-base
	${sub ? "bg-mauve-900 text-white" : null}`}
	bind:value
/>

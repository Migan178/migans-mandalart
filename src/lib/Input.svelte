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
	class={`h-20 w-20 border border-black text-center
	${sub ? "bg-mauve-900 text-white" : null}`}
	bind:value
/>

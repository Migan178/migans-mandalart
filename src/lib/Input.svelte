<script lang="ts">
	let {
		value = $bindable(),
		main = false,
		sub = false,
	}: {
		value?: string;
		main?: boolean;
		sub?: boolean;
	} = $props();
</script>

<input
	type="text"
	class={`h-20 w-20 border border-black text-center
	${main ? "bg-blue-500 text-white" : null}
	${sub ? "bg-yellow-500 text-white" : null}`}
	bind:value
/>

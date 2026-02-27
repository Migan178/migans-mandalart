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
	class={`border border-black w-20 h-20 text-center
	${main ? "bg-blue-500 text-white outline-none ring-0" : null}
	${sub ? "bg-yellow-500 text-white" : null}`}
	bind:value
/>

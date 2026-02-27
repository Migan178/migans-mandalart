<script lang="ts">
	import Input from "./Input.svelte";
	import SubMDAInput from "./SubMDAInput.svelte";

	let { i }: { i: number } = $props();
</script>

<div>
	<div class="flex">
		{#each { length: 3 }, _}
			<Input />
		{/each}
	</div>
	<div class="flex">
		<Input />
		<SubMDAInput {i} />
		<Input />
	</div>
	<div class="flex">
		{#each { length: 3 }, _}
			<Input />
		{/each}
	</div>
</div>

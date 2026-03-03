<script lang="ts">
	import { subNames } from "../stores/name";
	import Input from "./Input.svelte";

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
		<Input bind:value={$subNames[i]} sub />
		<Input />
	</div>
	<div class="flex">
		{#each { length: 3 }, _}
			<Input />
		{/each}
	</div>
</div>

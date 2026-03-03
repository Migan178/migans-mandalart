<script lang="ts">
	import { subGoals, subNames } from "../stores/name";
	import Input from "./Input.svelte";

	let { i }: { i: number } = $props();
</script>

<div>
	<div class="flex">
		{#each { length: 3 }, j}
			<Input bind:value={$subGoals[i][j]} />
		{/each}
	</div>
	<div class="flex">
		<Input bind:value={$subGoals[i][3]} />
		<Input bind:value={$subNames[i]} sub />
		<Input bind:value={$subGoals[i][4]} />
	</div>
	<div class="flex">
		{#each { length: 3 }, j}
			<Input bind:value={$subGoals[i][j + 5]} />
		{/each}
	</div>
</div>

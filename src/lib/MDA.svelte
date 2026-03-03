<script lang="ts">
	import MainMDA from "./MainMDA.svelte";
	import SubMDA from "./SubMDA.svelte";

	let { area = $bindable() }: { area: any | null } = $props();
</script>

<div class="border" bind:this={area}>
	<div class="flex">
		{#each { length: 3 }, i}
			<SubMDA {i} />
		{/each}
	</div>
	<div class="flex">
		<SubMDA i={3} />
		<MainMDA />
		<SubMDA i={4} />
	</div>
	<div class="flex">
		{#each { length: 3 }, i}
			<SubMDA i={i + 5} />
		{/each}
	</div>
</div>

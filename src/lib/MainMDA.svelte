<script lang="ts">
	import mandalartName from "../stores/name";
	import Input from "./Input.svelte";
	import SubMDAInput from "./SubMDAInput.svelte";
</script>

<div>
	<div class="flex">
		{#each { length: 3 }, i}
			<SubMDAInput {i} />
		{/each}
	</div>
	<div class="flex">
		<SubMDAInput i={3} />
		<Input bind:value={$mandalartName} />
		<SubMDAInput i={4} />
	</div>
	<div class="flex">
		{#each { length: 3 }, i}
			<SubMDAInput i={i + 5} />
		{/each}
	</div>
</div>

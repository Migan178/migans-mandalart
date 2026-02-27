<script lang="ts">
	import { subNames } from "../stores/name";
	import Input from "./Input.svelte";

	let { i }: { i: number } = $props();

	$effect(() => {
		console.log($subNames[i]);
	});
</script>

<div>
	<Input bind:value={$subNames[i]} sub />
</div>

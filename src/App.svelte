<script lang="ts">
	import MDA from "./lib/MDA.svelte";
	import mandalartName from "./stores/name";
</script>

<main class="flex items-center justify-center w-screen h-screen gap-x-10">
	<MDA />
	<div>
		<h1>미간라트</h1>
		<div>
			<label for="name">이름</label>
			<input id="name" type="text" bind:value={$mandalartName} />
		</div>
	</div>
</main>

<script lang="ts">
	import MDA from "./lib/MDA.svelte";
	import mandalartName from "./stores/name";
</script>

<main class="flex h-screen w-screen items-center justify-center gap-x-10">
	<MDA />
	<div>
		<h1 class="mb-2 text-3xl font-semibold text-(--text-color)">
			<a href="https://migan.co.kr">미간</a>라트
		</h1>
		<div>
			<label for="name" class="text-(--text-color)">이름</label>
			<input id="name" type="text" bind:value={$mandalartName} />
		</div>
	</div>
</main>

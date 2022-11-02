<script lang="ts">
	export let name: string;
	export let githubLink: string;
</script>

<div class="rounded-md border border-slate-600 shadow-lg">
	<div
		class="rounded-t-md border-b border-slate-600 bg-slate-200 dark:bg-slate-700"
	>
		<div class="px-4 py-2 text-lg font-bold">{name}</div>
	</div>
	<div class=" p-4 ">
		<div class="pb-2"><a class="" href={githubLink}>github</a></div>
		<slot />
	</div>
</div>

<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Github } from '@steeze-ui/simple-icons';

	export let path: string;
	export let label: string;
</script>

<div
	class="max-w-max rounded-lg border border-fjord-600 duration-100 hover:bg-fjord-100 dark:border-fjord-500 dark:hover:bg-fjord-600"
	id="github-link"
>
	<a
		href={path}
		class="flex place-items-center gap-2 py-0.5 pl-2 pr-3 font-bold no-underline"
	>
		<Icon src={Github} class="h-4 w-4" />
		<span>{label}</span>
	</a>
</div>

<style>
	@media print {
		#github-link {
			display: none;
		}
	}
</style>

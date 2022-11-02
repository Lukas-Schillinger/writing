<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Github } from '@steeze-ui/simple-icons';

	import Content from './Content.svelte';
	import getLastRepoUpdate from '$lib/lastRepoUpdate';

	let lastUpdate = getLastRepoUpdate(
		'Lukas-Schillinger',
		'writing',
		'src/routes/posts/you-can-just-change-your-own-oil'
	);
</script>

<svelte:head>
	<title>You Can Just Change Your Own Oil</title>
	<meta name="description" content="Instructions for changing engine oil" />
</svelte:head>

<div class="container mx-auto max-w-[65ch] px-3">
	<div class="">
		<div class="pb-4 text-6xl font-extrabold">
			You Can Just Change Your Own Oil
		</div>
		<div class="w-min">
			<a
				href="https://github.com/Lukas-Schillinger/writing/tree/master/src/routes/posts/you-can-just-change-your-own-oil"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Icon src={Github} class="h-5 w-5 fill-black dark:fill-white" />
			</a>
		</div>
		<div class="pb-2 pt-2 text-sm opacity-50">
			updated
			{#await lastUpdate}
				<svg
					class="inline mx-1 animate-spin h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						class="opacity-25 stroke-slate-400"
						cx="12"
						cy="12"
						r="10"
						stroke-width="4"
					/>
					<path
						class="fill-blue-400 opacity-75"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					/>
				</svg>
			{:then lastUpdate}
				{lastUpdate}
			{/await}
		</div>

		<p class="prose py-2 dark:prose-invert">
			Changing your car's engine oil is quick, easy, and significantly cheaper
			than having it done at an auto shop. This guide assumes no prior knowledge
			and will prepare you for every step along the way.
		</p>
		<div class="py-4">
			<span class="font-bold">Table of Contents</span>
			<ul class="mt-2 text-blue-500">
				<li><a class="hover:underline" href="#background">Background</a></li>
				<li>
					<a class="hover:underline" href="#cost-calculator">Cost Calculator</a>
				</li>
				<li><a class="hover:underline" href="#materials">Materials</a></li>
				<li>
					<a class="hover:underline" href="#instructions">Instructions</a>
				</li>
				<li>
					<a class="hover:underline" href="#misc">Miscellaneous</a>
				</li>
			</ul>
		</div>
	</div>
	<div class=""><Content /></div>
</div>

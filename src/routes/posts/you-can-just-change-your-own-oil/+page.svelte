<script lang="ts">
	import { onMount } from 'svelte';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { Github } from '@steeze-ui/simple-icons';

	import Content from './Content.svelte';
	import BreakEvenChart from './BreakEvenChart.svelte';
	import getLastRepoUpdate from '$lib/lastRepoUpdate';

	let lastUpdate: Promise<string>;

	onMount(async () => {
		lastUpdate = getLastRepoUpdate(
			'Lukas-Schillinger',
			'writing',
			'src/routes/posts/you-can-just-change-your-own-oil'
		);
	});
</script>

<svelte:head>
	<title>You Can Just Change Your Own Oil</title>
	<meta name="description" content="Instructions for changing engine oil" />
</svelte:head>

<div class="container mx-auto p-3 max-w-[65ch]">
	<div class="flex justify-between">
		<div>
			<a
				class="text-blue-500 hover:underline visited:text-purple-600"
				href="/posts"
			>
				posts
			</a>
			/ You Can Just Change Your Own Oil
		</div>
		<a
			href="https://github.com/Lukas-Schillinger/writing/tree/master/src/routes/posts/you-can-just-change-your-own-oil"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Icon src={Github} class="w-5 h-5" />
		</a>
	</div>
	<div class="mx-auto">
		<div class="text-6xl font-extrabold pt-6 pb-4">
			You Can Just Change Your Own Oil
		</div>

		<div class="my-2 text-sm opacity-50">
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

		<div>
			Changing your car's engine oil is quick, easy, and significantly cheaper
			than having it done at an auto shop. This guide assumes no prior knowledge
			and will prepare you for every step along the way.
		</div>
	</div>
	<div class="mx-auto py-8">
		<h1 class="font-extrabold text-4xl pb-2">Cost Calculator</h1>
		<BreakEvenChart />
	</div>
	<div><Content /></div>
</div>

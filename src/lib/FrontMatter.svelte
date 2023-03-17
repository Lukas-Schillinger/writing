<script lang="ts">
	import { onMount } from 'svelte';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { Github } from '@steeze-ui/simple-icons';

	export let title: string;
	export let path: string | undefined = undefined;

	let lastRepoUpdate: string | undefined;

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		const options: Intl.DateTimeFormatOptions = {
			day: '2-digit',
			month: 'short',
			year: 'numeric'
		};

		const currentYear = new Date().getFullYear();
		if (date.getFullYear() == currentYear) {
			options.year = undefined;
		}

		const format = new Intl.DateTimeFormat('en-gb', options);
		const formattedDate = format.format(date);
		return formattedDate;
	}

	async function getLastRepoUpdate(
		path: string,
		author = 'Lukas-Schillinger',
		repo = 'writing'
	): Promise<string> {
		const baseURL = 'https://api.github.com/repos/';
		const URL = baseURL + author + '/' + repo + '/commits?path=' + path;

		const response = await fetch(URL);
		const responseText = await response.text();
		const responseJson = responseText ? JSON.parse(responseText) : undefined;

		if (response.ok || response.status === 422) {
			try {
				const lastCommit = responseJson[0].commit.author.date;
				return formatDate(lastCommit);
			} catch (e) {
				console.log(`Error finding last commit for path ${URL}`);
			}
		} else {
			console.log(responseText);
		}
		return formatDate('2022-10-28T20:17:26Z');
	}

	onMount(async () => {
		if (path) {
			lastRepoUpdate = await getLastRepoUpdate(path);
		}
	});
</script>

<div class="">
	<div class="text-3xl font-black prose-h1:mb-4 sm:text-4xl">
		<h1 class="">{title}</h1>
	</div>
	{#if path}
		<div
			class="mb-8 flex max-w-max place-items-center gap-2 rounded-full border border-fjord-400 p-1.5 leading-none"
		>
			<Icon src={Github} class="h-5 w-5" />
			{#if lastRepoUpdate}
				updated {lastRepoUpdate}
			{/if}
		</div>
	{/if}
</div>

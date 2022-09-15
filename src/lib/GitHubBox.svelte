<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import {
		RepoForked,
		Star,
		ListUnordered,
		Law,
		Repo
	} from '@steeze-ui/octicons';

	export let userName: string;
	export let repoName: string;
	let repoData = getRepoData(userName, repoName);

	async function getRepoData(userName: string, repoName: string) {
		const url = `http://api.github.com/repos/${userName}/${repoName}`;
		const res = await fetch(url); // this will work every single time
		return await res.json();
	}

	function getLanguageColor(language: string): string {
		switch (language) {
			case 'Python':
				return '#3572A5';
			case 'Svelte':
				return '#ff3e00';
			default:
				return 'gray';
		}
	}
</script>

<div class="">
	<div class="bg-github-dark w-full rounded-lg">
		<!-- Header -->
		<div class="px-4 pt-4 pb-2 border-b border-github-bordercolor">
			<!-- Title -->
			<a
				class="text-github-contrast text-2xl font-semibold border-gitbub-contrast hover:underline decoration-4"
				href={`https://github.com/${userName}/${repoName}`}
				target="blank"
			>
				<Icon
					src={Repo}
					class="h-6 w-6 inline-block mr-1 text-github-light"
				/>{userName}/{repoName}
			</a>
			<div class="flex flex-col-reverse sm:flex-row mt-6 text-github-light">
				<!-- Info Bars -->
				<div class="flex gap-2">
					<!-- Stars -->
					<div
						class="flex gap-2 items-center rounded-lg py-1 px-2 hover:bg-github-hovercolor cursor-default"
					>
						<Icon src={Star} class="w-5 h-5 inline-block fill-github-light" />
						Stars
						<span class="text-sm bg-github-regular rounded-full p-1.5 px-2">
							{#await repoData}
								<div class="h-5 w-5 animate-pulse" />
							{:then repoData}
								{repoData.stargazers_count}
							{/await}
						</span>
					</div>

					<!-- Forks -->
					<div
						class="flex gap-2 items-center rounded-lg py-1 px-2 hover:bg-github-hovercolor cursor-default"
					>
						<Icon
							src={RepoForked}
							class="w-5 h-5 inline-block fill-github-light"
						/>
						Forks
						<span class="text-sm bg-github-regular rounded-full py-1.5 px-3">
							{#await repoData}
								<div class="h-5 w-5 animate-pulse" />
							{:then repoData}
								{repoData.forks_count}
							{/await}
						</span>
					</div>
					<!-- License -->
					<div
						class="flex gap-2 items-center rounded-lg py-1 px-2 hover:bg-github-hovercolor cursor-default"
					>
						<Icon src={Law} class="w-5 h-5 inline-block fill-github-light" />
						<span class="">
							{#await repoData}
								<div class="h-5 w-5 animate-pulse" />
							{:then repoData}
								{repoData.license.spdx_id}
							{/await}
						</span>
					</div>
				</div>
				<!-- Language -->
				<div
					class="mr-auto ml-3 my-2 sm:ml-auto sm:mr-2 flex items-center gap-2 "
				>
					{#await repoData}
						<div class="h-5 w-7 animate-pulse" />
					{:then repoData}
						<svg
							class="w-3 h-3 fill"
							style="fill: {getLanguageColor(repoData.language)};"
							viewBox="0 0 100 100"
						>
							<circle cx="50" cy="50" r="50" />
						</svg>
						{repoData.language}
					{/await}
				</div>
			</div>
		</div>

		<!-- Body -->
		<div class="p-4 text-github-light">
			<div class="m-auto rounded-lg border border-github-bordercolor">
				<div
					class="flex gap-2 text-lg items-center p-4 border-b border-github-bordercolor leading-none"
				>
					<Icon src={ListUnordered} class="w-4 h-4" />
					README.md
				</div>
				<div class="p-4 font-mono">
					{#await repoData}
						<div class="h-24 w-full animate-pulse" />
					{:then repoData}
						{repoData.description}
					{/await}
				</div>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import { page } from '$app/stores';
	export let navHeight: string = '4rem';

	function buildBreadCrumbs(routeId: string) {
		const segments = routeId.split('/');
		const breadCrumbs = segments.map((element, index) => {
			const breadCrumb = segments.slice(0, index);
			if (breadCrumb) {
				breadCrumb.push(element);
			}
			return breadCrumb.join('/');
		});
		return breadCrumbs;
	}

	$: breadCrumbs = buildBreadCrumbs($page.routeId);
</script>

<header class="fixed z-50" style="width: 100vw; height: {navHeight};">
	<div
		class="container mx-auto h-full max-w-[65ch] px-3 md:px-1 flex items-center"
	>
		<nav
			class="bg-slate-300 bg-opacity-50 backdrop-blur-sm shadow-lg py-2 px-4 rounded-xl w-full flex gap-1 whitespace-nowrap"
			data-sveltekit-prefetch
		>
			{#each breadCrumbs as crumb, index}
				{#if index == 0}
					<a class="link" href="/">home</a>
					<span>/</span>
				{:else if index == breadCrumbs.length - 1}
					<div class="text-ellipsis overflow-hidden">
						{crumb.split('/').at(-1)}
					</div>
				{:else}
					<a class="link" href={crumb}>{crumb.split('/').at(-1)}</a>
					<span>/</span>
				{/if}
			{/each}
		</nav>
	</div>
</header>

<style>
	.link {
		color: rgb(59 130 246);
	}
	.link:hover {
		text-decoration: underline 2px;
	}
</style>

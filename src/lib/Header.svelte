<script lang="ts">
	import { page } from '$app/stores';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { Sun } from '@steeze-ui/heroicons';

	export let navHeight: string = '4rem';

	function toggleDarkMode() {
		document.body.classList.toggle('dark');

		// local storage reflects document state
		if (document.body.classList.contains('dark')) {
			localStorage.setItem('theme', 'dark');
		} else {
			localStorage.setItem('theme', 'light');
		}

		// I'm still unclear how this works.
		// Adapted from https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Tips
		document.querySelector('#dark-mode-icon').className = '';
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				document.querySelector('#dark-mode-icon').className = 'spin';
			});
		});
	}

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

<header class="fixed z-50" style="width: 100%; height: {navHeight};">
	<div
		class="container mx-auto flex h-full max-w-[65ch] items-center pb-3 pt-2 md:px-1"
	>
		<nav
			class="flex w-full gap-1 whitespace-nowrap rounded-full bg-slate-300 bg-opacity-50 py-2 px-4 shadow-lg backdrop-blur-sm dark:bg-slate-500 dark:bg-opacity-50"
			data-sveltekit-prefetch
		>
			{#each breadCrumbs as crumb, index}
				<!-- home link -->
				{#if index == 0}
					<a class="link" href="/">home</a>
					<span>/</span>
					<!-- final link -->
				{:else if index == breadCrumbs.length - 1}
					<div class="overflow-hidden text-ellipsis">
						{crumb.split('/').at(-1)}
					</div>
					<!-- middle links -->
				{:else}
					<a class="link" href={crumb}>{crumb.split('/').at(-1)}</a>
					<span>/</span>
				{/if}
			{/each}
			<button class="ml-auto" on:click={toggleDarkMode}>
				<div id="dark-mode-icon">
					<Icon src={Sun} class="h-6 w-6" theme="mini" />
				</div>
			</button>
		</nav>
	</div>
</header>

<style>
	@keyframes spin {
		to {
			transform: rotate(90deg);
		}
	}

	:global(.spin) {
		animation: spin 0.3s;
	}
</style>

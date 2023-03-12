<script lang="ts">
	import '../app.postcss';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { Sun } from '@steeze-ui/heroicons';

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
		const darkModeIcon = document.querySelector('#dark-mode-icon');
		if (darkModeIcon) {
			darkModeIcon.className = '';
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					darkModeIcon.className = 'spin';
				});
			});
		}
	}
</script>

<div class="flex w-full justify-center">
	<div
		class="container prose prose-sm px-2 pb-4 dark:prose-invert sm:prose-base marker:text-fjord-400 prose-code:before:content-none prose-code:after:content-none"
	>
		<!-- Navbar -->
		<div
			class="sticky top-2 mt-0 mb-8 flex w-full justify-between rounded-full border-[0.5px] border-fjord-300 bg-fjord-200 bg-opacity-60 py-1 px-4 shadow-md shadow-fjord-500 backdrop-blur-sm dark:border-fjord-700 dark:bg-fjord-600 dark:bg-opacity-60 dark:shadow-fjord-900"
		>
			<div class="flex gap-2">
				<a href="/">Home</a>
				<a href="/posts">Posts</a>
				<a href="/projects">Projects</a>
			</div>
			<button id="dark-mode-icon" on:click={toggleDarkMode}>
				<Icon src={Sun} class="h-6 w-6" theme="mini" />
			</button>
		</div>
		<!-- Content -->
		<slot />
	</div>
</div>

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

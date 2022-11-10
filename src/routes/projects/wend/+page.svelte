<script>
	import FrontEnd from './stack_sections/FrontEnd.svelte';
	import BackEnd from './stack_sections/BackEnd.svelte';
	import DevOps from './stack_sections/DevOps.svelte';
	import Intro from './stack_sections/Intro.svelte';

	let y;
</script>

<svelte:window bind:scrollY={y} />
<svelte:head>
	<title>Wend</title>
</svelte:head>

<div class="light relative -mt-20 overflow-clip">
	<div class="overflow-y-auto">
		<Intro />
		<DevOps />
		<BackEnd />
		<FrontEnd />
	</div>
	<div
		class="wallpaper absolute -top-0 -z-10 w-screen overflow-clip bg-green-400 drop-shadow-lg"
		style="transform: translate(0,{-y * 0.9}px); height: 200%;"
	/>
</div>

<style lang="postcss">
	:global(.section-drop-shadow) {
		--tw-drop-shadow: drop-shadow(25px 18px 8px rgb(0 0 0 / 0.15))
			drop-shadow(0 10px 5px rgb(0 0 0 / 0.3));
		filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
			var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
			var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
	}

	:global(.feature-box) {
		@apply rounded-lg bg-white p-4 text-black;
	}

	:global(.feature-box-paragraph) {
		@apply font-mono text-xl font-normal text-black;
	}

	:global(.brand-box-item) {
		@apply my-2 flex cursor-default items-center gap-3 rounded-lg bg-black py-1 pr-2 text-xl font-bold leading-none text-white sm:text-3xl md:py-3 md:text-3xl;
	}

	/* global to apply to Icon components */
	:global(.brand-box-icon) {
		@apply w-10 shrink-0 rounded-l-lg bg-black py-1 pl-2 md:w-10;
	}

	:global(.brand-box) {
		display: grid;
		grid-auto-rows: min-content;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		@apply shrink-0 basis-1/3 justify-center gap-x-6 whitespace-nowrap text-2xl font-bold;
	}

	@media (min-width: 640px) {
		:global(.brand-box) {
			grid-template-columns: repeat(2, minmax(0, max-content));
		}
	}

	@media (min-width: 768px) {
		:global(.brand-box) {
			grid-template-columns: repeat(2, minmax(0, max-content));
		}
	}

	@media (min-width: 1024px) {
		:global(.brand-box) {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (min-width: 1280px) {
		:global(.brand-box) {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
	.wallpaper {
		background-color: #ffffff;
		opacity: 70%;
		background-image: url('/topographic-background.svg');
	}
</style>

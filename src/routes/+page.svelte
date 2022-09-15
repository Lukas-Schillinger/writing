<script>
	import FrontEnd from './stack_sections/FrontEnd.svelte';
	import BackEnd from './stack_sections/BackEnd.svelte';
	import DevOps from './stack_sections/DevOps.svelte';
	import Intro from './stack_sections/Intro.svelte';

	let y;
</script>

<svelte:window bind:scrollY={y} />
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="relative overflow-clip">
	<div class="overflow-y-auto">
		<Intro />
		<DevOps />
		<BackEnd />
		<FrontEnd />
	</div>
	<div
		class="wallpaper w-screen absolute -top-0 bg-green-400 -z-10 overflow-clip drop-shadow-lg"
		style="transform: translate(0,{-y * 0.4}px); height: 200%;"
	/>
</div>

<style>
	:global(.section-drop-shadow) {
		--tw-drop-shadow: drop-shadow(25px 18px 8px rgb(0 0 0 / 0.15))
			drop-shadow(0 10px 5px rgb(0 0 0 / 0.3));
		filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
			var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
			var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
	}

	:global(.feature-box) {
		@apply bg-white rounded-lg p-4 text-black;
	}

	:global(.feature-box-paragraph) {
		@apply text-xl font-mono font-normal text-black;
	}

	:global(.brand-box-item) {
		@apply gap-3 my-2 py-1 md:py-3 pr-2 bg-black text-white rounded-lg text-xl sm:text-3xl md:text-3xl font-bold leading-none items-center flex cursor-default;
	}

	/* global to apply to Icon components */
	:global(.brand-box-icon) {
		@apply w-10 md:w-10 shrink-0 bg-black pl-2 py-1 rounded-l-lg;
	}

	:global(.brand-box) {
		display: grid;
		grid-auto-rows: min-content;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		@apply shrink-0 basis-1/3 text-2xl font-bold gap-x-6 justify-center whitespace-nowrap;
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

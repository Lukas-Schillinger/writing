<script>
	import { Icon } from '@steeze-ui/svelte-icon';
	import {
		Leaflet,
		Mdnwebdocs,
		Typescript,
		Simpleicons,
		Tailwindcss,
		Svelte,
		Figma
	} from '@steeze-ui/simple-icons';
	import BrandBox from '$lib/BrandBox.svelte';
</script>

<div class="" style="margin-bottom: -1px;">
	<svg class="fill-frontend relative w-full" id="triangle" viewBox="0 0 100 30">
		<polygon points="100 30, 0 30, 100 0" />
	</svg>
</div>
<div class="stack-section bg-frontend text-white overflow-clip">
	<!-- Section Title -->
	<div class="">
		<h1 class="font-black" style="font-size: 38vw; letter-spacing: -0.03em;">
			<div style="line-height: 1;">front</div>
		</h1>
		<h1 class="font-black" style="font-size: 40vw; letter-spacing: -0.07em;">
			<div
				class="text-right"
				style="line-height: 1; margin-top: -16vw; margin-right: 2vw;"
			>
				end
			</div>
		</h1>
	</div>

	<div class="container max-w-3xl mx-auto px-3 py-8">
		<BrandBox brandIcon={Svelte} primaryColor={'#b91c1c'}>
			<div slot="brandname">Svelte</div>
			<div slot="subtitle">cybernetically enhanced web apps</div>
			<div slot="bodytext">
				The JavaScript compiler sensation that's sweeping the nation. Svelte
				cuts out the middle man (Virtual DOM) and passes the savings onto your
				users. Performant, pithy, and a pleasure to write; the case for
				developing with Svelte is persuasive
			</div>
		</BrandBox>
	</div>

	<!-- Section Content -->
	<div class="flex flex-col items-center">
		<!-- Brand Box -->
		<div class="mx-auto max-w-4xl w-full px-3 py-8">
			<div class="brand-box">
				<li class="brand-box-item">
					<Icon src={Tailwindcss} class="brand-box-icon fill-frontend" />
					Tailwind
				</li>
				<li class="brand-box-item">
					<svg
						role="img"
						viewBox="0 0 166 166"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						width="100%"
						height="100%"
						class="brand-box-icon fill-frontend"
					>
						<path
							d="m78.091 0 5.967 5.676c15.038 14.306 35.323 23.067 57.663 23.067.356 0 .711-.002 1.065-.006l6.363-.08 1.988 6.072a102.026 102.026 0 0 1 5.045 31.782c0 47.391-32.269 87.19-75.928 98.477l-2.163.559-2.163-.559C32.27 153.701 0 113.902 0 66.511c0-11.085 1.769-21.772 5.045-31.782l1.988-6.072 6.363.08c.354.004.71.006 1.065.006 22.34 0 42.625-8.761 57.664-23.067L78.09 0ZM19.846 46.033a84.814 84.814 0 0 0-2.492 20.478c0 38.459 25.662 70.919 60.737 81.006 35.075-10.087 60.738-42.547 60.738-81.006 0-7.071-.866-13.93-2.493-20.478-22.009-1.16-42.166-9.387-58.245-22.453-16.079 13.066-36.235 21.293-58.245 22.453Z"
						/>
					</svg>
					HeroIcons
				</li>
				<li class="brand-box-item">
					<Icon src={Simpleicons} class="brand-box-icon fill-frontend" />
					Simple Icons
				</li>
				<li class="brand-box-item">
					<Icon src={Leaflet} class="brand-box-icon fill-frontend" />
					Leafletjs
				</li>
				<li class="brand-box-item">
					<Icon src={Typescript} class="brand-box-icon fill-frontend" />
					Typescript
				</li>
				<li class="brand-box-item">
					<Icon src={Figma} class="brand-box-icon  fill-frontend" />
					Figma
				</li>
				<li class="brand-box-item">
					<Icon src={Mdnwebdocs} class="brand-box-icon  fill-frontend" />
					MDN Docs
				</li>
			</div>
		</div>
	</div>
</div>
<div style="margin-top: -1px;">
	<svg
		class="fill-frontend section-drop-shadow"
		id="triangle"
		viewBox="0 0 100 30"
	>
		<polygon points="100 0, 0 0, 0 30 " />
	</svg>
</div>

<style>
	:global(.bg-frontend) {
		background-color: #b91c1c;
	}
	:global(.fill-frontend) {
		fill: #b91c1c;
	}
	:global(.text-frontend) {
		color: #b91c1c;
	}
</style>

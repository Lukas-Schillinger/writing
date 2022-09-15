<script>
	import { Icon } from '@steeze-ui/svelte-icon';
	import { LightBulb, MapPin } from '@steeze-ui/heroicons';
	import {
		Stripe,
		Celery,
		Redis,
		Postman,
		Openstreetmap,
		Googlemaps,
		Openapiinitiative,
		Postgresql,
		Django,
		Twilio
	} from '@steeze-ui/simple-icons';

	import GitHubBox from '$lib/GitHubBox.svelte';
	import BrandBox from '$lib/BrandBox.svelte';
</script>

<div class="" style="margin-bottom: -1px;">
	<svg class="fill-backend relative w-full" id="triangle" viewBox="0 0 100 30">
		<polygon points="100 30, 0 30, 100 0" />
	</svg>
</div>

<div class="stack-section bg-backend  overflow-clip relative">
	<!-- Section Title -->
	<div class="pt-8 text-white">
		<h1
			class="font-black"
			style="margin-left: -1vw; font-size: 40vw; letter-spacing: -0.07em;"
		>
			<div style="line-height: 1;">back</div>
		</h1>
		<h1 class="font-black" style="font-size: 40vw; letter-spacing: -0.07em;">
			<div
				class="text-end"
				style="line-height: 1; margin-top: -16vw; margin-right: 2vw;"
			>
				end
			</div>
		</h1>
	</div>

	<div class="container max-w-3xl mx-auto px-3 py-8">
		<div class="text-4xl font-bold text-white">
			A data access layer in computer software is a layer of a computer program
			which provides simplified access to data stored in persistent storage of
			some kind, such as an entity-relational database.
		</div>
	</div>

	<div class="container max-w-3xl mx-auto px-3 py-8">
		<BrandBox brandIcon={Django} primaryColor={'rgb(20 83 45)'}>
			<div slot="brandname">Django</div>
			<div slot="subtitle">
				the web framework for perfectionists with deadlines
			</div>
			<div slot="bodytext">
				Build complex data-driven websites with python. Django comes with all
				the batteries included: a world-class ORM, out-of-the-box authorization,
				easy database caching, internationalization, GIS integration and more.
			</div>
		</BrandBox>
	</div>

	<div class="container max-w-3xl mx-auto px-3 py-8">
		<GitHubBox
			userName={'Lukas-Schillinger'}
			repoName={'django-queryset-feeler'}
		/>
	</div>

	<!-- Brand Box -->
	<div class="container mx-auto max-w-3xl px-3 py-8">
		<div class="brand-box">
			<li class="brand-box-item">
				<Icon src={Postgresql} class="brand-box-icon-backend fill-white" />
				PostgreSQL
			</li>
			<li class="brand-box-item">
				<Icon src={Celery} class="brand-box-icon-backend fill-white" />
				Celery
			</li>
			<li class="brand-box-item">
				<Icon src={Twilio} class="brand-box-icon-backend fill-white" />
				Twilio
			</li>
			<li class="brand-box-item">
				<Icon src={Openstreetmap} class="brand-box-icon-backend fill-white" />
				OSM
			</li>
			<li class="brand-box-item">
				<Icon src={Postman} class="brand-box-icon-backend fill-white" />
				Postman
			</li>
			<li class="brand-box-item">
				<Icon src={Redis} class="brand-box-icon-backend fill-white" />
				Redis
			</li>
			<li class="brand-box-item">
				<Icon src={Stripe} class="brand-box-icon-backend fill-white" />
				Stripe
			</li>
			<li
				class="brand-box-item"
				style="letter-spacing: -0.06em; word-spacing: -0.08em;"
			>
				<Icon src={Googlemaps} class="brand-box-icon-backend  fill-white" />
				Google Maps
			</li>
			<li class="brand-box-item">
				<Icon
					src={Openapiinitiative}
					class="brand-box-icon-backend  fill-white"
				/>
				Open API
			</li>
		</div>
	</div>
</div>

<div class="" style="margin-top: -1px;">
	<svg
		class="fill-backend section-drop-shadow"
		id="triangle"
		viewBox="0 0 100 30"
	>
		<polygon points="100 0, 0 0, 0 30 " />
	</svg>
</div>

<style>
	:global(.bg-backend) {
		background-color: rgb(20 83 45);
	}
	:global(.fill-backend) {
		fill: rgb(20 83 45);
	}
	:global(.text-backend) {
		color: rgb(20 83 45);
	}
	.brand-box-item {
		@apply bg-white text-black;
	}
	:global(.brand-box-icon-backend) {
		@apply w-10 md:w-10 shrink-0 pl-2 py-1 rounded-l-lg fill-green-900;
	}
</style>

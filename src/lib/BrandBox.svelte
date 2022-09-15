<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { IconSource } from '@steeze-ui/svelte-icon/types';
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
	import { text } from 'svelte/internal';

	export let brandIcon: IconSource;
	export let primaryColor: string;
</script>

<!-- Feature Box -->
<div class="">
	<div class="feature-box text-black">
		<div class="flex gap-4">
			<div
				class="p-2 w-min rounded-lg"
				style="background-color: {primaryColor};"
			>
				<Icon src={brandIcon} class="fill-white h-14 w-14" />
			</div>
			<h4
				class="text-7xl font-black"
				style="letter-spacing: -0.06em; color: {primaryColor}"
			>
				<slot name="brandname">Brand Name</slot>
			</h4>
		</div>
		<div class="py-4 text-4xl font-black" style="color: {primaryColor}">
			<slot name="subtitle">this is brand subtext</slot>
		</div>
		<div class="feature-box-paragraph">
			<slot name="bodytext">This is the body text.</slot>
		</div>
	</div>
</div>

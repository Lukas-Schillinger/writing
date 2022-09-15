<script>
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Cog } from '@steeze-ui/heroicons';
	import {
		Amazons3,
		Ubuntu,
		Cloudflare,
		Digitalocean,
		Docker,
		Git,
		Nginx,
		Elasticsearch,
		Rabbitmq,
		Sentry,
		Letsencrypt,
		Plausibleanalytics
	} from '@steeze-ui/simple-icons';

	let scrollY;
</script>

<svelte:window bind:scrollY />

<div class="" style="margin-bottom: -1px;">
	<svg class="fill-devops relative w-full" id="triangle" viewBox="0 0 100 30">
		<polygon points="100 30, 0 30, 100 0" />
	</svg>
</div>
<div class="stack-section bg-devops text-black overflow-clip">
	<!-- Section Title -->
	<div class="">
		<h1 class="font-black" style="font-size: 57vw; letter-spacing: -0.07em;">
			<div style="line-height: 1;">dev</div>
			<div style="line-height: 1.2; margin-top: -28vw;">ops</div>
		</h1>
	</div>

	<!-- Section Content -->
	<div class="flex flex-col mt-8 md:mt-16 items-center">
		<!-- Content -->
		<div class="text-4xl font-bold px-3 max-w-4xl">
			<div class="py-8">
				DevOps is a set of practices that combines software development and IT
				operations. It aims to shorten the systems development life cycle and
				provide continuous delivery with high software quality
			</div>
			<div class="bg-white rounded-lg p-4 my-8 text-black">
				<div class="flex gap-4">
					<div class="p-2 bg-devops w-min rounded-lg">
						<div style="rotate: {scrollY * 0.4}deg;">
							<Icon src={Cog} class="h-14 w-14" theme="solid" />
						</div>
					</div>
					<h4
						class="text-7xl font-black text-black"
						style="letter-spacing: -0.04em;"
					>
						Server
					</h4>
				</div>
				<div class="py-4 text-4xl font-black text-black">
					a server is a computer box
				</div>
				<div class="feature-box-paragraph">
					Build complex data-driven websites with python. Django comes with all
					the batteries included: a world-class ORM, out-of-the-box
					authorization, easy database caching, internationalization, GIS
					integration and more.
				</div>
			</div>
		</div>

		<!-- Brand Box -->
		<div class="mx-auto max-w-4xl w-full px-3 py-8">
			<div class="brand-box">
				<li class="brand-box-item" style="letter-spacing: -0.04em;">
					<Icon src={Elasticsearch} class="brand-box-icon fill-devops" />
					Elasticsearch
				</li>
				<li class="brand-box-item">
					<Icon src={Letsencrypt} class="brand-box-icon fill-devops" />
					Lets Encrypt
				</li>
				<li class="brand-box-item">
					<Icon src={Ubuntu} class="brand-box-icon fill-devops" />
					Ubuntu
				</li>
				<li class="brand-box-item">
					<Icon src={Cloudflare} class="brand-box-icon fill-devops" />
					Cloudflare
				</li>
				<li class="brand-box-item">
					<Icon src={Sentry} class="brand-box-icon fill-devops" />
					Sentry
				</li>
				<li class="brand-box-item">
					<Icon src={Digitalocean} class="brand-box-icon fill-devops" />
					DigitalOcean
				</li>
				<li class="brand-box-item">
					<Icon src={Git} class="brand-box-icon fill-devops" />
					Git
				</li>
				<li class="brand-box-item">
					<Icon src={Docker} class="brand-box-icon fill-devops" />
					Docker
				</li>
				<li class="brand-box-item ">
					<Icon src={Amazons3} class="brand-box-icon fill-devops" />
					Amazon S3
				</li>
				<li class="brand-box-item ">
					<Icon src={Plausibleanalytics} class="brand-box-icon fill-devops" />
					Plausible
				</li>
				<li class="brand-box-item">
					<Icon src={Nginx} class="brand-box-icon fill-devops" />
					Nginx
				</li>
				<li class="brand-box-item">
					<Icon src={Rabbitmq} class="brand-box-icon fill-devops" />
					RabbitMQ
				</li>
			</div>
		</div>
	</div>
</div>
<div style="margin-top: -1px;">
	<svg
		class="fill-devops section-drop-shadow "
		id="triangle"
		viewBox="0 0 100 30"
	>
		<polygon points="100 0, 0 0, 0 30 " />
	</svg>
</div>

<style>
	:global(.bg-devops) {
		background-color: rgb(251 191 36);
	}
	:global(.fill-devops) {
		fill: rgb(251 191 36);
	}
	:global(.text-devops) {
		color: rgb(251 191 36);
	}
</style>

<script>
	// adapted from https://github.com/rdela/sveltekit-imagetools

	export let src;
	export let alt = '';
</script>

<div class="" style="max-width: 550px;">
	<picture
		sizes="(min-width: 256px) 384px, (min-width: 384px) 512px, (min-width: 512px) 640, (min-width: 640px) 100vw, 256px"
	>
		{#each Object.entries(src.sources) as [format, sources]}
			<source
				srcset={sources.map((i) => `${i.src} ${i.w}w`).join(', ')}
				type={'image/' + format}
			/>
		{/each}
		<img src={src.fallback.src} {alt} loading="lazy" />
	</picture>
</div>

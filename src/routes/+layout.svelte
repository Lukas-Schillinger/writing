<script lang="ts">
	import '../app.postcss';
	import Header from '$lib/Header.svelte';

	const navHeight: string = '4rem';
</script>

<Header {navHeight} />

<div style="padding-top: 5rem;">
	<slot />
</div>

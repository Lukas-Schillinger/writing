<script>
	import { Icon } from '@steeze-ui/svelte-icon';
	import { MapPin } from '@steeze-ui/heroicons';
</script>

<h1
	class="font-black mx-4 mb-2 sm:mb-4"
	style="
    font-size: 31vw; 
    line-height: 90%; 
    letter-spacing: -0.03em;
    margin-top: 8vh;
    "
>
	WEND
</h1>
<div class="container max-w-3xl px-4 pb-8 pt-0 mx-auto">
	<div class="max-w-lg md:max-w-3xl lg:max-w-6xl xl:max-w-full">
		<div class="text-3xl sm:text-6xl xl:text-7xl font-black text-center">
			A multi-stop routing optimizer for the future
		</div>
	</div>
</div>
<div class="container max-w-3xl px-4 py-8 mx-auto">
	<div class="flex gap-6">
		<div class="bg-green-900 p-4" style="border-radius: 3rem;">
			<Icon src={MapPin} class={'text-white h-64 w-64'} />
		</div>
		<div
			class="rounded-lg flex-1 p-6 bg-amber-400"
			style="border-radius: 3rem;"
		>
			<div class="text-6xl font-extrabold mb-4">From A to Z</div>
			<div class="font-mono text-xl">with a few extra stops along the way</div>
		</div>
	</div>
</div>

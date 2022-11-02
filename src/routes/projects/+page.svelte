<script>
	import ProjectCard from './ProjectCard.svelte';
</script>

<div class="container mx-auto max-w-[65ch] px-3">
	<div class="pb-8 text-6xl font-extrabold">Project Directory</div>
	<div class="flex flex-col gap-8">
		<ProjectCard name="django queryset feeler" githubLink="github.com">
			<div>
				Get a better feel for how django views and serializers are accessing
				your app's database. Use django-queryset-feeler (dqf) to measure the
				count, execution time, and raw SQL of your queries from the command
				line, ipython shell, or jupyter notebook with no configuration required.
			</div>
		</ProjectCard>
		<ProjectCard name="wend" githubLink="github.com">
			<div>
				Full-stack multi-stop route optimizer. Upload CSV, xlsx, or other
				structured data files containing a list of addresses and generate
				optimized routes for multiple drivers.
			</div>
		</ProjectCard>
		<ProjectCard name="bubble" githubLink="github.com">
			<div>
				Commercial fermentation management app. Plan, track, and analyze long
				term fermentation projects. Maintain FDA compliant logs. Manage logs
				using QR code stickers
			</div>
		</ProjectCard>
	</div>
</div>

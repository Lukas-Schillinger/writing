<script>
	import Prism from 'svelte-prism';
</script>

<svelte:head>
	<link rel="stylesheet" href="/prism_nord_style.css" />
</svelte:head>

<div class="container mx-auto mb-8 max-w-[65ch] px-3">
	<div class="pb-4 text-6xl font-extrabold">Easy Svelte Dark Mode</div>
	<div class="pt-4">
		<div class="prose my-4 dark:prose-invert">
			<p>
				Write-up of how I implemented dark mode on this site. For a
				demonstration try clicking the sun icon on the right side of the navbar.
			</p>
		</div>
		<span class="font-bold">Table of Contents</span>
		<ul class="mt-2 text-blue-500">
			<li>
				<a href="#background">Background</a>
			</li>
			<li>
				<a href="#implementation">Implementation</a>
			</li>
		</ul>
	</div>
	<div class="prose prose-pre:text-base dark:prose-invert">
		<h1 id="background">Background</h1>
		<h2 id="requirements">Requirements</h2>
		<ul>
			<li>Default to user 'prefers-color-scheme' setting,</li>
			<li>
				Allow dark mode toggling (not set only by 'prefers-color-scheme').
			</li>
			<li>
				Determine dark mode preference before rendering page to avoid 'flash'
				when default theme and preferred theme differ.
			</li>
			<li>Persist dark mode preference between sessions.</li>
			<li>Use tailwind's dark mode system</li>
			<li>
				Include button click animation. An actual 'click' animation (instead of
				<code>:hover</code>
				or
				<code>:active</code>
				) is important for mobile.
			</li>
			<li>I don't think this should require packages</li>
		</ul>
		<h2>What Didn't Work</h2>
		<ul>
			<li>
				One options was to save users' dark mode preference as a cookie. A hook
				would be added to check for a dark mode preference cookie and modify the
				response to reflect preference. This seemed overly complicated and not
				performant.
			</li>
			<li>
				I can't use <code>onMount()</code> , <code>afterUpdate()</code>
				or most other svelte functions because they're run after CSS/HTML rendering
				and would create flashes.
			</li>
		</ul>
		<h1 id="implementation">Implementation</h1>
		<h2>
			<div>Tailwind Dark Mode</div>
		</h2>

		<p>
			Tailwind makes it easy to generate dark and light classes using the
			<code>dark:</code>
			modifier. By default
			<code>dark:</code>
			is activated by the window's
			<code>prefers-color-scheme</code>
			setting. To activate dark mode using classes see the
			<a
				href="https://tailwindcss.com/docs/dark-mode"
				target="_blank"
				rel="noreferrer"
			>
				Tailwind documentation
			</a>
			.
		</p>
		<code>tailwind.config.js</code>
		<Prism source="">
			{`\
module.exports = {
	darkMode: 'class',
	// ...
}\
			`}
		</Prism>

		<h2>Toggle Component</h2>

		<p>
			Dark mode can now be controlled by toggling a body class (or any other
			parent class).
		</p>
		<Prism source="">
			{`document.body.classList.toggle('dark');`}
		</Prism>

		<p>Color scheme preference is persisted using local storage.</p>
		<Prism source="">
			{`\
if (document.body.classList.contains('dark')) {
	localStorage.setItem('theme', 'dark');
} else {
	localStorage.setItem('theme', 'light');
}\
			`}
		</Prism>

		<p>
			Unfortunately there isn't a straightforward method for animating button
			clicks. To make a real click animation we have to add an animation class
			to our button, wait for the animation to finish, and then remove that
			class once the animation has completed.
		</p>
		<p>
			The
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Tips#javascript_content"
				target="_blank"
				rel="noreferrer"
			>
				MDN web docs
			</a>
			has a brilliant solution for doing this.
		</p>
		<Prism source="">
			{`\
document.querySelector('#dark-mode-icon').className = '';
	requestAnimationFrame(() => {
		requestAnimationFrame(() => {
			document.querySelector('#dark-mode-icon').className = 'spin';
		});
	});
}\
			`}
		</Prism>

		<p>
			If including the animation class as an inline component style ensure you
			use the
			<code>:global()</code>
			modifier.
		</p>
		<Prism source="" language="css">
			{`\
@keyframes spin {
	to {
		transform: rotate(90deg);
	}
}

:global(.spin) {
	animation: spin 0.3s;
}\
			`}
		</Prism>

		<p>
			Putting it together, this is what our dark mode toggle function looks
			like.
		</p>
		<Prism source="" language="javascript">
			{`\
function toggleDarkMode() {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

    document.querySelector('#dark-mode-icon').className = '';
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            document.querySelector('#dark-mode-icon').className = 'spin';
        });
    });
}\
			`}
		</Prism>

		<h2>Stop the Flash</h2>

		<p>
			To prevent the flash we need to set the correct class on the body tag
			before our page content renders. We can do this by running the color
			scheme check in our
			<code>app.html</code>
			body tag.
		</p>
		<p>
			My implementation is a slimmed down and less-versatile adaptation of the
			noflash script included in the react
			<a
				href="https://github.com/donavon/use-dark-mode"
				target="_blank"
				rel="noreferrer"
			>
				use-dark-mode
			</a>
			package.
		</p>
		<Prism source="">
			{`\
const themeKey = 'theme';

// If the user has a theme preference saved use that
if (localStorage.getItem(themeKey)) {
	if (localStorage.theme === 'dark') {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}

// elif the user has a color scheme preference then use that
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	localStorage.setItem(themeKey, 'dark');
	document.body.classList.add('dark');

// else default to using the light theme
} else {
	localStorage.setItem(themeKey, 'light');
}\
			`}
		</Prism>
	</div>
</div>

<style>
	h1 {
		padding-top: 4rem;
	}
</style>

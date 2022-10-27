<script lang="ts">
	import { Line } from 'svelte-chartjs';
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale
	} from 'chart.js';

	let numOilChanges = 4;
	let builtHere: 32;
	let notBuiltHere: 60;

	let data = {
		labels: [...Array(numOilChanges).keys()],
		datasets: [
			{
				data: [20, 11, 14, 18]
			}
		]
	};

	function setNumOilChanges(event: Event) {
		const target = event.target as HTMLInputElement;
		const newNum: number = parseInt(target.value);
		const newArray = [...Array(newNum).keys()];
		data.labels = newArray;
	}

	let options = {
		responsive: true,
		scales: {
			y: {
				grace: 1
			}
		},
		lineTension: 0.2,
		borderCapStyle: 'butt',
		pointHitRadius: 10
	};

	ChartJS.register(
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale
	);
</script>

<div class="container mx-auto max-w-[65ch]">
	<div class="flex">
		<div>
			<input
				type="range"
				value="3"
				min="1"
				max="40"
				on:input={(e) => setNumOilChanges(e)}
			/>
		</div>
	</div>
	<Line {data} {options} />
</div>

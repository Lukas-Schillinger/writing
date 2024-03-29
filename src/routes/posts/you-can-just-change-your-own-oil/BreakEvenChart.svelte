<script lang="ts">
	import type { ChartData, ChartOptions } from 'chart.js/auto';
	import { Line } from 'svelte-chartjs';
	import {
		Chart as ChartJS,
		Title,
		Legend,
		LineElement,
		LinearScale,
		PointElement
	} from 'chart.js/auto';

	/* 
		I'm very unhappy with chart.js and wish I had just used regular SVGs. See the
		line chart example in the svelte examples page: 
		https://svelte.dev/examples/area-chart

		- chart.js typechecking is okay with how the options object is formatted but 
		svelte-chartjs throws type warnings.

		- the chart will resize to be smaller but will not resize to be bigger.
		
		- sometimes the chart will infinitely shrink inside the canvas.  
	*/

	// independent variables
	let numOilChanges = 10;
	let internalPrice = 32;
	let externalPrice = 70;
	let internalInitialCost = 120;
	let externalInitialCost = 0;

	// dependent variables
	let breakEvenOilChange: number;
	let potentialSavings: number;

	// graph styling
	let externalColor = '#f87171'; // tailwind red-400
	let internalColor = '#38bdf8'; // tailwind sky-400

	/**
	This is the primary graph update loop. Changes to the independent  
	variables trigger updateGraph(). Updates are reflected in the 
	the data object. 
	*/
	function updateGraph(
		numOilChanges: number,
		internalPrice: number,
		externalPrice: number,
		internalInitialCost: number,
		externalInitialCost: number
	) {
		// arrays of y values mapping cumulative sum of oil changes
		const internalPriceArray = getLineData(
			internalPrice,
			internalInitialCost,
			numOilChanges
		);
		const externalPriceArray = getLineData(
			externalPrice,
			externalInitialCost,
			numOilChanges
		);

		let internalDataIndex = data.datasets.findIndex(
			(element) => element.label == 'Change Your Own Oil'
		);
		let externalDataIndex = data.datasets.findIndex(
			(element) => element.label == 'Pay for an Oil Change'
		);
		let lineInterceptIndex = data.datasets.findIndex(
			(element) => element.label == 'Break-Even Point'
		);

		// find the break-even point by calculating the intercept between both lines
		const lineIntercept = getLineIntercept(
			internalPriceArray,
			internalInitialCost,
			externalPriceArray,
			externalInitialCost
		);

		// set dependent variables
		breakEvenOilChange = Math.floor(lineIntercept.x) + 1;
		const externalTotalCost = externalPriceArray.at(-1);
		const internalTotalCost = internalPriceArray.at(-1);
		if (externalTotalCost && internalTotalCost) {
			potentialSavings = externalTotalCost - internalTotalCost;
		} else {
			potentialSavings = 0;
		}

		// plot arrays by updating the graph's data values
		data.datasets[internalDataIndex].data =
			formatLinePoints(internalPriceArray);
		data.datasets[externalDataIndex].data =
			formatLinePoints(externalPriceArray);

		// plot the line intercept (break even point) only if its within the x axis range
		if (lineIntercept.x < numOilChanges) {
			data.datasets[lineInterceptIndex].data = [lineIntercept];
		} else {
			data.datasets[lineInterceptIndex].data = [];
		}
	}

	$: updateGraph(
		numOilChanges,
		internalPrice,
		externalPrice,
		internalInitialCost,
		externalInitialCost
	);

	/** convert am HTML range input event into a number */
	function getRangeNumber(event: Event): number {
		const target = event.target as HTMLInputElement;
		const newNum: number = parseInt(target.value);
		return newNum;
	}

	/** create an array of the cumulative sum of oil change costs */
	function getLineData(
		oilChangePrice: number,
		initialPrice: number,
		numOilChanges: number
	): Array<number> {
		let prices = Array(numOilChanges).fill(oilChangePrice);
		prices[0] = prices[0] + initialPrice;

		const cumulativeSum = (
			(sum) => (value: number) =>
				(sum += value)
		)(0);
		const cumSum = prices.map(cumulativeSum);
		return cumSum;
	}

	/** 
	format an array of values into {x: number, y: number} objects using 
	a 1 based index as the x value 
	*/
	function formatLinePoints(
		lineData: Array<number>
	): Array<{ x: number; y: number }> {
		const linePoints = lineData.map((element, index) => {
			const point = { x: index + 1, y: element };
			return point;
		});
		return linePoints;
	}

	function getLineSlope(yCoordinates: Array<number>): number {
		const y1 = yCoordinates[0];
		const y2 = yCoordinates.at(-1);
		if (y1 && y2) {
			const rise = y2 - y1;
			const run = yCoordinates.length - 1;
			const slope = rise / run;
			return slope;
		} else {
			return 0;
		}
	}

	function getLineIntercept(
		yCoordinates1: Array<number>,
		yInt1: number,
		yCoordinates2: Array<number>,
		yInt2: number
	): { x: number; y: number } {
		const slope1 = getLineSlope(yCoordinates1);
		const slope2 = getLineSlope(yCoordinates2);

		const interceptX = (yInt2 - yInt1) / (slope1 - slope2);
		const interceptY = slope1 * interceptX + yInt1;

		const interceptCoordinates = { x: interceptX, y: interceptY };
		return interceptCoordinates;
	}

	/* I'm not sure why svelte-chartjs doesn't like the chartjs ChartData type. */
	let data: ChartData<'line'> = {
		datasets: [
			{
				label: 'Change Your Own Oil',
				data: [],
				borderColor: internalColor,
				backgroundColor: internalColor,
				pointBackgroundColor: internalColor,
				order: 2,
				pointRadius: 2
			},
			{
				label: 'Pay for an Oil Change',
				data: [],
				borderColor: externalColor,
				backgroundColor: externalColor,
				pointBackgroundColor: externalColor,
				order: 2,
				pointRadius: 2
			},
			{
				label: 'Break-Even Point',
				data: [],
				backgroundColor: '#6b7280',
				pointRadius: 4,
				pointHoverRadius: 12,
				order: 1
			}
		]
	};

	let options: ChartOptions<'line'> = {
		responsive: true,
		aspectRatio: 1.3,
		plugins: {
			tooltip: {
				enabled: false
			}
		},
		scales: {
			xAxes: {
				title: {
					text: 'Number of Oil Changes',
					display: true
				},
				type: 'linear',
				min: 1,
				ticks: {
					stepSize: 1
				}
			}
		}
	};

	ChartJS.register(Title, Legend, LineElement, LinearScale, PointElement);
</script>

<div class="mb-8 w-full">
	<div class="mb-4 flex gap-8">
		<!-- Internal Oil Change Controls -->
		<div class="flex-1">
			<div class="mb-4 font-bold underline decoration-sky-400 decoration-4">
				Change Your Own Oil
			</div>

			<!-- Internal Initial Cost -->
			<div class="my-2">
				<div>
					<div class="inline w-10 font-semibold opacity-90">
						${internalInitialCost}
					</div>
					<label
						class="text-sm opacity-80 dark:opacity-90"
						for="internal-oil-change-initial"
					>
						initial cost
					</label>
				</div>
				<input
					class="slider-internal w-full"
					type="range"
					name="internal-oil-change-initial"
					min="0"
					max="300"
					value={internalInitialCost}
					on:input={(e) => (internalInitialCost = getRangeNumber(e))}
				/>
			</div>

			<!-- Internal Price Per Oil Change -->
			<div class="my-2">
				<div>
					<div class="inline w-10 font-semibold opacity-90">
						${internalPrice}
					</div>
					<label
						class="text-sm opacity-80 dark:opacity-90"
						for="internal-oil-change-price">price per oil change</label
					>
				</div>
				<input
					class="slider-internal w-full"
					type="range"
					name="internal-oil-change-price"
					min="1"
					max="99"
					value={internalPrice}
					on:input={(e) => (internalPrice = getRangeNumber(e))}
				/>
			</div>
		</div>

		<!-- External Oil Change Controls -->
		<div class="flex-1">
			<div class="mb-4 font-bold underline decoration-red-400 decoration-4">
				Pay for Oil Change
			</div>
			<div class="my-2">
				<div>
					<div class="inline w-10 font-semibold opacity-90">
						${externalPrice}
					</div>
					<label
						class="text-sm opacity-80 dark:opacity-90"
						for="external-oil-change-price"
					>
						price per oil change
					</label>
				</div>
				<input
					class="slider-external w-full"
					type="range"
					name="external-oil-change-price"
					min="1"
					max="99"
					value={externalPrice}
					on:input={(e) => (externalPrice = getRangeNumber(e))}
				/>
			</div>
		</div>
	</div>

	<!-- Chart Controls -->
	<div class="mb-8">
		<div class="py-2">
			<div>
				<div class="inline w-10 font-semibold opacity-90">
					{numOilChanges}
				</div>
				<label
					class="text-sm opacity-80 dark:opacity-90"
					for="external-oil-change-price"
				>
					oil changes
				</label>
			</div>
			<input
				class="w-full"
				type="range"
				name="external-oil-change-price"
				min="2"
				max="99"
				value={numOilChanges}
				on:input={(e) => (numOilChanges = getRangeNumber(e))}
			/>
		</div>
		<div class="">
			<div class="py-1">
				{#if breakEvenOilChange <= 0}
					<div>You'll spend more money by changing your own oil.</div>
				{:else}
					<div class="">
						You'll break even after
						<span class="font-bold">
							{breakEvenOilChange}
						</span> oil changes.
					</div>
				{/if}
			</div>
			<div class="py-1">
				After {numOilChanges} oil changes you'll have saved
				<span class="font-bold">
					${potentialSavings}
				</span>
				by changing your own oil.
			</div>
		</div>
	</div>

	<!-- Chart -->
	<div class="w-full rounded-md bg-white p-4">
		<Line {data} {options} />
	</div>
</div>

<style lang="postcss">
	/* Internal Range Styles */
	input[type='range'].slider-internal::-webkit-slider-thumb {
		background: #38bdf8;
	}
	input[type='range'].slider-internal::-moz-range-thumb {
		background: #38bdf8;
	}

	/* External Range Styles */
	input[type='range'].slider-external::-webkit-slider-thumb {
		background: #f87171;
	}
	input[type='range'].slider-external::-moz-range-thumb {
		background: #f87171;
	}

	/* range input styling from https://www.cssportal.com/style-input-range/ */
	input[type='range'] {
		height: 20px;
		-webkit-appearance: none;
		background-color: transparent;
		margin: 0px 0;
		width: 100%;
	}
	input[type='range']:focus {
		outline: none;
	}
	input[type='range']::-webkit-slider-runnable-track {
		width: 100%;
		height: 5px;
		cursor: pointer;
		background: #c7c7c7;
		border-radius: 22px;
		border: 0px solid #000000;
	}
	input[type='range']::-webkit-slider-thumb {
		border: 0px solid #2497e3;
		height: 14px;
		width: 14px;
		border-radius: 14px;
		background: #6b7280;
		cursor: pointer;
		-webkit-appearance: none;
		margin-top: -4.5px;
	}
	input[type='range']:focus::-webkit-slider-runnable-track {
		background: #c7c7c7;
	}
	input[type='range']::-moz-range-track {
		width: 100%;
		height: 5px;
		cursor: pointer;
		background: #c7c7c7;
		border-radius: 22px;
		border: 0px solid #000000;
	}
	input[type='range']::-moz-range-thumb {
		border: 0px solid #2497e3;
		height: 14px;
		width: 14px;
		border-radius: 14px;
		background: #6b7280;
		cursor: pointer;
	}
	input[type='range']::-ms-track {
		width: 100%;
		height: 5px;
		cursor: pointer;
		background: transparent;
		border-color: transparent;
		color: transparent;
	}
	input[type='range']::-ms-fill-lower {
		background: #c7c7c7;
		border: 0px solid #000000;
		border-radius: 44px;
	}
	input[type='range']::-ms-fill-upper {
		background: #c7c7c7;
		border: 0px solid #000000;
		border-radius: 44px;
	}
	input[type='range']::-ms-thumb {
		margin-top: 1px;
		height: 14px;
		width: 14px;
		border-radius: 14px;
		cursor: pointer;
	}
	input[type='range']:focus::-ms-fill-lower {
		background: #c7c7c7;
	}
	input[type='range']:focus::-ms-fill-upper {
		background: #c7c7c7;
	}
</style>

<script lang="ts">
	export let storesName: string;

	export let checked: boolean;
	let id = 0;
	let ariaMin = 0;
	let ariaMax = 1;

	$: ariaCurrent = Number(checked);
</script>

<div>
	{storesName}
</div>
<div class="progress">
	<div
		class="progress-bar"
		role="progressbar"
		aria-valuenow={ariaCurrent}
		style="width:{ariaCurrent * 100}%"
		aria-valuemin={ariaMin}
		aria-valuemax={ariaMax}
	/>
</div>

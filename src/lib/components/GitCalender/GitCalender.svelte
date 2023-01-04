<script lang="ts">
	import { GitContributions } from '@lib/stores/stores';
</script>

<!-- Later on, I want to change this to a calender of blank squares and each dated commit would change 
    it to a greencheck -->

<div class="container">
	<div class="row">
		{#each $GitContributions as gits}
			<div>{gits.date}</div>

			<div>
				<span class="checkmark">
					<div class="checkmark_stem" />
					<div class="checkmark_kick" />
				</span>
			</div>
		{/each}
	</div>
</div>

<style>
	.checkmark {
		display: inline-block;
		width: 22px;
		height: 22px;
		-ms-transform: rotate(45deg);
		-webkit-transorm: rotate(45deg);
		transform: rotate(45deg);
		background-color: #ccc;
	}

	.checkmark_stem {
		position: absolute;
		width: 3px;
		height: 9px;
		background-color: rgb(0, 168, 14);
		left: 11px;
		top: 6px;
	}

	.checkmark_kick {
		position: absolute;
		width: 3px;
		height: 3px;
		background-color: rgb(0, 168, 14);
		left: 8px;
		top: 12px;
	}
</style>

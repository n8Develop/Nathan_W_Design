<script lang="ts">
	import GitCalender from '@components/GitCalender/GitCalender.svelte';
	import ProgressStore from '@lib/components/ProgressBar/ProgressStore.svelte';
	import { todos } from '@lib/stores/stores';
</script>

<div class="container ">
	<header class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
		<div class="row">
			<GitCalender />
		</div>
	</header>
</div>

<!--	Code for Displaying All Progress Bars 
	
	
	<div class="col">
				<span class="fs-4">Progress Bar</span>
			</div>
			{#each $todos as todo}
				<div class="col">
					<ProgressStore checked={todo.checked} storesName={todo.name} />
				</div>
			{/each}
			<div class="col">
				<button type="button" class="btn btn-primary">Finish!</button>
			</div>	 -->

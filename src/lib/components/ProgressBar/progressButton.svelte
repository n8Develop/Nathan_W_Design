<script lang="ts">
	import { todos } from '@lib/stores/stores';
	export let id: number;
	todos.subscribe((x) => {});

	function clickChecked() {
		todos.update((x) => {
			let copiedStores = [...x];
			let updatedStores = copiedStores.find((c) => c.id === id);

			if (updatedStores != null) {
				updatedStores.checked = true;
			}

			return [...x];
		});
	}
</script>

<button type="button" on:click={clickChecked} class="btn btn-primary">Progress Button!</button>

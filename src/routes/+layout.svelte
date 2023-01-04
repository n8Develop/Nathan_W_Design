<script lang="ts">
	import FooterComponent from '@components/LayoutComponents/FooterComponent.svelte';
	import HeaderComponent from '@components/LayoutComponents/HeaderComponent.svelte';
	import NavBar from '@components/LayoutComponents/navBar.svelte';
	let current = 'home';
</script>

<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
	crossorigin="anonymous"
/>

<NavBar bind:current />
<div class="container-fluid">
	<div class="row">
		<div class="col border-secondary border-end ">Left Column</div>
		<div class="col-10">
			<HeaderComponent />

			<slot />
		</div>
		<div class="col border-secondary border-start">Right column</div>
	</div>
</div>
<FooterComponent />

<script lang="ts">
	export let current: string;
</script>

<nav class="bg-light border-bottom">
	<div class="container d-flex flex-wrap">
		<ul class="nav nav-tabs me-auto">
			<li class="nav-item">
				<a
					class="nav-link link-dark px-2"
					href="/"
					class:active={current === 'home'}
					on:click={() => (current = 'home')}
					aria-current="page">Home</a
				>
			</li>
			<li class="nav-item">
				<a
					class="nav-link link-dark px-2"
					href="/Buttons"
					class:active={current === 'Buttons'}
					on:click={() => (current = 'Buttons')}
					aria-current="page">Buttons</a
				>
			</li>
		</ul>

		<ul class="nav">
			<li class="nav-item">
				<a class="nav-link link-dark px-2" href="/">Lorem</a>
			</li>
			<li class="nav-item">
				<a class="nav-link link-dark px-2" href="/">Ipsem</a>
			</li>
		</ul>
	</div>
</nav>

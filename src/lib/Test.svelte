<script lang="ts">
	import { onMount } from 'svelte';

	let x = 0;
	onMount(() => {
		console.log('onmount');
		x++;
	});
</script>

{x}

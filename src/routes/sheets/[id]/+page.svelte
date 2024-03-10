<script lang="ts">
	import type { PageData } from './$types';
	import AbilityScoreCard from './AbilityScoreCard.svelte';
	import SavingThrowsCard from './SavingThrowsCard.svelte';

	export let data: PageData;

	const { sheet } = data;
</script>

<h1>Sheet Data</h1>
<AbilityScoreCard {sheet} />
<SavingThrowsCard {sheet} />

<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { sheets } = data;
</script>

<h1>Atelier</h1>

<h2>Sheets</h2>

<table>
	<tr>
		<th>Id</th>
		<th>Link</th>
	</tr>
	{#each sheets as sheet}
		<tr>
			<td>
				{sheet.id}
			</td>
			<td>
				<a href={`/sheets/${sheet.id}`}> Link </a>
			</td>
		</tr>
	{/each}
</table>

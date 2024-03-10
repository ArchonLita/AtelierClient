<script lang="ts">
	import { Abilities, AbilityLabels, type Sheet } from '$lib/Types';
	import { formatModifier } from '$lib/Util';

	export let sheet: Sheet;
</script>

<div>
	<h2>Ability Scores</h2>
	<table>
		<tr>
			<th>Ability</th>
			<th>Score</th>
			<th>Modifier</th>
		</tr>
		{#each Abilities as ability}
			<tr>
				<td>
					{AbilityLabels[ability]}
				</td>
				<td>
					{sheet.abilityScores[ability]}
				</td>
				<td>
					{formatModifier(sheet.abilityModifiers[ability])}
				</td>
			</tr>
		{/each}
	</table>
</div>

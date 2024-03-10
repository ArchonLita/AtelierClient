export const Abilities = [
	'strength',
	'dexterity',
	'intelligence',
	'wisdom',
	'charisma',
	'constitution'
] as const;
export type Ability = (typeof Abilities)[number];
export const AbilityLabels: Record<Ability, string> = {
	strength: 'Strength',
	dexterity: 'Dexterity',
	intelligence: 'Intelligence',
	wisdom: 'Wisdom',
	charisma: 'Charisma',
	constitution: 'Constitution'
};

export interface Sheet {
	id: string;
	abilityScores: Record<Ability, number>;
	abilityModifiers: Record<Ability, number>;
	savingModifiers: Record<Ability, number>;
	savingProficiencies: Ability[];
}

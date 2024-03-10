import { env } from '$env/dynamic/public';
import type { Sheet } from '$lib/Types';
import type { PageLoad } from './$types';

export const load: PageLoad<{
	sheets: Sheet[];
}> = async ({ fetch }) => {
	const res = await fetch(`${env.PUBLIC_API_URL}/sheets`);
	return { sheets: (await res.json()) as Sheet[] };
};

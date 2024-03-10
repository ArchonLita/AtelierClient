import { env } from '$env/dynamic/public';
import type { Sheet } from '$lib/Types';
import type { PageLoad } from './$types';

export const load: PageLoad<{
	id: string;
	sheet: Sheet;
}> = async ({ params, fetch }) => {
	const id = params.id;
	const res = await fetch(`${env.PUBLIC_API_URL}/sheets/${id}`);
	return { id, sheet: (await res.json()) as Sheet };
};

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
	const res = await fetch('/topics.json');
	if (!res.ok) {
		throw new Error('Failed to fetch topics');
	}
	const topics = await res.json();
	return {
		topics
	};
};

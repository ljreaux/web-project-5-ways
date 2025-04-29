// src/routes/topic/[topicId]/+page.ts
import type { TopicType } from '../../../types/TopicType';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params, fetch }) => {
	const res = await fetch('/topics.json');
	if (!res.ok) throw error(500, 'Failed to load topics');

	const topics: TopicType[] = await res.json();
	const topic = topics.find((t) => t.id === params.topicId);

	if (!topic) throw error(404, 'Topic not found');

	return { topic };
};

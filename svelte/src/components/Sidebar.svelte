<script lang="ts">
	import { page } from '$app/stores';
	import type { TopicType } from '../types/TopicType';

	export let topics: TopicType[];

	// auto-subscribe to page
	$: currentPath = $page.url.pathname;
</script>

<nav class="navbar">
	<ul>
		{#each topics as topic}
			<li>
				<a
					href={`/topic/${topic.id}`}
					class="topic-link"
					class:active={$page.url.pathname === `/topic/${topic.id}`}
				>
					{topic.title}
				</a>
			</li>
		{/each}
	</ul>
</nav>

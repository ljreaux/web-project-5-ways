<script lang="ts">
	import Sidebar from '../components/Sidebar.svelte';
	import type { TopicType } from '../types/TopicType';

	export let data: {
		topics: TopicType[];
	};
</script>

<main>
	<h1>Test Wiki</h1>
	<Sidebar topics={data.topics} />
	<slot />
</main>

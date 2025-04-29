<script lang="ts">
	import type { TopicType } from '../../../types/TopicType';

	export let data: {
		topic: TopicType;
	};
</script>

<article>
	<h2>{data.topic.title}</h2>
	<p>{data.topic.content}</p>
</article>

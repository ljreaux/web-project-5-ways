<script setup lang="ts">
import { useRoute } from "vue-router";
import type { TopicType } from "../types/TopicType";
import { computed } from "vue";

const props = defineProps<{ topics: TopicType[] | null }>();
const route = useRoute();
const topicId = computed(() => route.params.topicId as string);

const topic = computed(() =>
  props.topics?.find((topic) => topic.id === topicId.value)
);
</script>

<template>
  <article v-if="topicId && topic">
    <h2>{{ topic.title }}</h2>
    <p>{{ topic.content }}</p>
  </article>
  <article v-else>Topic Not Found</article>
</template>

<style scoped></style>

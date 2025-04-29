<script setup lang="ts">
import { onMounted, ref } from "vue";
import Sidebar from "./components/Sidebar.vue";
import type { TopicType } from "./types/TopicType";
const topics = ref<TopicType[] | null>(null);
const error = ref<Error | null>(null);
const loading = ref(true);

onMounted(async () => {
  loading.value = true;
  try {
    const res = await fetch("/topics.json");
    const data = await res.json();
    topics.value = data;
    error.value = null;
  } catch (err) {
    error.value = err as Error;
    topics.value = null;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <main>
    <h1>Test Wiki</h1>

    <div v-if="loading">Loading...</div>

    <div v-else-if="error">
      <p>Failed to load topics: {{ error.message }}</p>
    </div>

    <Sidebar v-else-if="topics" :topics="topics" />
    <router-view :topics="topics" />
  </main>
</template>

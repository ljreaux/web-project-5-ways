<script setup lang="ts">
import type { TopicType } from "../types/TopicType";
defineProps<{ topics: TopicType[] }>();
</script>

<template>
  <nav class="navbar">
    <ul>
      <li v-for="topic in topics">
        <router-link
          :key="topic.id"
          :to="`/topic/${topic.id}`"
          class="topic-link"
          active-class="active"
        >
          {{ topic.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>

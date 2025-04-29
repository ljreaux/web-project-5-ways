// src/router.ts
import { createRouter, createWebHistory } from "vue-router";
import NotFound from "./pages/NotFound.vue";
import TopicPage from "./pages/TopicPage.vue";

const routes = [
  { path: "/", redirect: "/topic/getting-started" },
  { path: "/topic/:topicId", component: TopicPage },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createFileRoute } from "@tanstack/solid-router";
import { createResource, Show } from "solid-js";
import type { TopicType } from "../../types/TopicType";

export const Route = createFileRoute("/topic/$topicId")({
  component: RouteComponent,
});

const fetchTopics = async (): Promise<TopicType[]> => {
  const res = await fetch("/topics.json");
  if (!res.ok) throw new Error("Failed to fetch topics");
  return res.json();
};

function RouteComponent() {
  const params = Route.useParams();
  const topicId = () => params().topicId;

  const [topics] = createResource(fetchTopics);

  const currentTopic = () => topics()?.find((topic) => topic.id === topicId());

  return (
    <article>
      <Show when={topics.loading}>
        <p>Loading...</p>
      </Show>

      <Show when={currentTopic()} fallback={<p>Topic Not Found</p>}>
        <h2>{currentTopic()!.title}</h2>
        <p>{currentTopic()!.content}</p>
      </Show>
    </article>
  );
}

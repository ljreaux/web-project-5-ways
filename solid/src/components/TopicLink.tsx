import { Link } from "@tanstack/solid-router";
import type { TopicType } from "../types/TopicType";

function TopicLink({ topic }: { topic: TopicType }) {
  return (
    <Link
      key={topic.id}
      to="/topic/$topicId"
      params={{ topicId: topic.id }}
      activeOptions={{ exact: true }}
      activeProps={{ class: "active" }}
      class="topic-link"
    >
      {topic.title}
    </Link>
  );
}

export default TopicLink;

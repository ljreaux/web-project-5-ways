import { useParams } from "react-router-dom";
import { TopicType } from "../types/TopicType";

function TopicPage({ topics }: { topics: TopicType[] }) {
  const { topicId } = useParams<{ topicId: string }>();
  const currentTopic = topics.find((topic) => topic.id === topicId);
  if (!topicId || !currentTopic) return "Topic Not Found";

  return (
    <article>
      <h2>{currentTopic.title}</h2>
      <p>{currentTopic.content}</p>
    </article>
  );
}

export default TopicPage;

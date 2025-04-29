import { NavLink } from "react-router-dom";
import { TopicType } from "../types/TopicType";

function TopicLink({ topic }: { topic: TopicType }) {
  return (
    <li key={topic.id}>
      <NavLink
        to={`topic/${topic.id}`}
        className={({ isActive }) =>
          isActive ? "topic-link active" : "topic-link"
        }
      >
        {topic.title}
      </NavLink>
    </li>
  );
}

export default TopicLink;

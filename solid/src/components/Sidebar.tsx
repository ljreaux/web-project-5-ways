import type { TopicType } from "../types/TopicType";
import TopicLink from "./TopicLink";
function Sidebar(props: { topics: TopicType[] }) {
  return (
    <nav class="navbar">
      <ul>
        {props.topics.map((topic) => (
          <TopicLink topic={topic} />
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;

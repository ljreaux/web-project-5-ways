import { TopicType } from "../types/TopicType";
import TopicLink from "./TopicLink";
function Sidebar({ topics }: { topics: TopicType[] }) {
  return (
    <nav className="navbar">
      <ul>
        {topics.map((topic) => (
          <TopicLink topic={topic} />
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;

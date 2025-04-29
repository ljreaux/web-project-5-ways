import TopicLink from "./TopicLink";

export type TopicType = {
  id: string;
  title: string;
  content: string;
};

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

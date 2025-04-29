import { TopicType } from "../types/TopicType";

export const createSidebar = (topics: TopicType[] | null) => {
  const sidebar = document.createElement("nav");
  const ul = document.createElement("ul");

  topics?.forEach((topic) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = `#/topic/${topic.id}`;
    a.className = "topic-link";
    a.textContent = topic.title;

    li.appendChild(a);
    ul.appendChild(li);
  });

  sidebar.classList.add("navbar");
  sidebar.appendChild(ul);
  return sidebar;
};

export const updateActiveLink = () => {
  const links = document.querySelectorAll<HTMLAnchorElement>(".topic-link");
  const currentHash = location.hash;

  links.forEach((link) => {
    if (link.getAttribute("href") === currentHash) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};

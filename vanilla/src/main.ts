import { createSidebar, updateActiveLink } from "./components/sidebar";
import { fetchData } from "./lib";
import "./style.css";

const App = document.querySelector<HTMLDivElement>("#app");
const main = document.createElement("main");
const h1 = document.createElement("h1");
h1.textContent = "Test Wiki";
const article = document.createElement("article");

const { data, error } = await fetchData();

if (error) {
  App!.innerHTML = `
    <main>
      <h1>Test Wiki</h1>
      <p>${error.message}</p>
    </main>`;
} else if (data) {
  const sidebar = createSidebar(data);

  main.append(h1, sidebar, article);
  App!.appendChild(main);

  const renderPage = () => {
    const currentHash = location.hash;

    if (currentHash === "" || currentHash === "#/") {
      location.hash = "#/topic/getting-started";
      return;
    }

    const hashId = currentHash.split("#/topic/")[1];
    const currentTopic = data.find((topic) => topic.id === hashId);

    article.innerHTML = "";

    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    if (!currentTopic) {
      h2.textContent = "404 - Topic Not Found";
      p.textContent = "Sorry, that topic does not exist.";
    } else {
      h2.textContent = currentTopic.title;
      p.textContent = currentTopic.content;
    }

    article.append(h2, p);
  };

  window.addEventListener("hashchange", () => {
    console.log(location.hash);
    renderPage();
    updateActiveLink();
  });

  window.addEventListener("load", () => {
    renderPage();
    updateActiveLink();
  });
}

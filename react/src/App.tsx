import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TopicPage from "./pages/TopicPage";
import Sidebar from "./components/Sidebar";
import { useFetchData } from "./hooks/useFetchData";
import NotFoundPage from "./pages/NotFound";
import { TopicType } from "./types/TopicType";

function App() {
  const { data, error, loading } = useFetchData<TopicType[]>("/topics.json");

  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>Error loading topics.</div>;
  return (
    <BrowserRouter>
      <main>
        <h1>Test Wiki</h1>
        <Sidebar topics={data} />
        <Routes>
          <Route
            path="/"
            element={<Navigate to={"/topic/getting-started"} />}
          />
          <Route path="/topic/:topicId" element={<TopicPage topics={data} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

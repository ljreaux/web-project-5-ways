import { createFileRoute, Navigate } from "@tanstack/solid-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <Navigate to="/topic/$topicId" params={{ topicId: "getting-started" }} />
  );
}

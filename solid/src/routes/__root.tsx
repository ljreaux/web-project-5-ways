import { Outlet, createRootRouteWithContext } from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
import Sidebar from "../components/Sidebar";

import { createResource, Suspense } from "solid-js";
import NotFoundPage from "../components/NotFound";

export const Route = createRootRouteWithContext()({
  component: RootComponent,
  notFoundComponent: NotFoundPage,
});

const fetchData = async () => {
  const res = await fetch("/topics.json");
  if (!res.ok) throw new Error("Error Fetching Data");
  return res.json();
};

function RootComponent() {
  const [topics] = createResource(fetchData);
  return (
    <main>
      <h1>Test Wiki</h1>
      <Suspense fallback={<p>Loading topics...</p>}>
        <Sidebar topics={topics() ?? []} />
        <Outlet /> {/* Pages render here */}
      </Suspense>
      <TanStackRouterDevtools />
    </main>
  );
}

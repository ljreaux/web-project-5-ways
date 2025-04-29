import { createSidebar } from "../components/sidebar";
import { TopicType } from "../types/TopicType";

export const fetchData = async () => {
  let data: TopicType[] | null = null;
  let error: Error | null = null;
  try {
    const res = await fetch("/topics.json");
    if (!res.ok) throw new Error("Failed to fetch Data");
    data = await res.json();
  } catch (err) {
    error = err as Error;
    data = null;
  }

  return {
    data,
    error,
  };
};

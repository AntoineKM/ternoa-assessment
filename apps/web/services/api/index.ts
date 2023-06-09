export const endpoint =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

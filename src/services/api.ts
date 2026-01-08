// src/services/api.ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

if (!API_BASE_URL) {
  console.warn("⚠️ VITE_API_BASE_URL is not set in .env file");
}

export default API_BASE_URL;

// optional helper
export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}/${path}`);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

export async function apiPost<T>(path: string, body: any): Promise<T> {
  const res = await fetch(`${API_BASE_URL}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

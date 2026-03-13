import { API_URL } from "@/constants/api_url";

export async function POST(request: Request) {
  return fetch(`${API_URL}/api/characters/create/submit`, {
    method: "POST",
    body: await request.text(),
    headers: request.headers,
  });
}

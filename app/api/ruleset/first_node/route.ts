import { type } from "@/components/TypedSetters/typed_setter.type";
import { API_URL } from "@/constants/api_url";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ruleset_id = searchParams.get("ruleset_id");

  return fetch(
    `${API_URL}/api/characters/create/firstnode?ruleset_id=${ruleset_id}`,
    {
      method: "GET",
    },
  );
}

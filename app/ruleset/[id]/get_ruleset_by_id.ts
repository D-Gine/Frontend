import { API_URL } from "@/constants/api_url";

export interface ruleset {
  name: string;
}

export async function get_ruleset_by_id(id: string) {
  const res = await fetch(`${API_URL}/api/rulesets/${id}`, { method: "GET" });
  if (res.status == 200) {
    return res.json();
  }
}

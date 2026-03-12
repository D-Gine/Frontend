import { API_URL } from "@/constants/api_url";
import { ruleset } from "./[id]/get_ruleset_by_id";

export interface RulesetWithId extends ruleset {
  id: string;
}

export async function get_rulesets(): Promise<{ rulesets: RulesetWithId[] }> {
  const res = await fetch(`${API_URL}/api/rulesets`, {
    method: "GET",
  });

  if (res.status != 200) {
    console.log(res);
    return { rulesets: [{ id: "sfhsd", name: "prout" }] };
  }
  return { rulesets: await res.json() };
}

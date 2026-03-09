import { ruleset } from "./[id]/get_ruleset_by_id";

export interface RulesetWithId extends ruleset {
  id: string;
}

export async function get_rulesets(): Promise<RulesetWithId[]> {
  return [{ id: "id_1", name: "SRD5", description: "WOTC ruleset" }];
}

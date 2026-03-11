import { ruleset } from "./[id]/get_ruleset_by_id";

export interface RulesetWithId extends ruleset {
  id: string;
}

export async function get_rulesets(): Promise<RulesetWithId[]> {
  return [
    {
      id: "58e6aaee-5bd0-4b3d-b6db-b5c6c390b3ce",
      name: "SRD5",
      description: "WOTC ruleset",
    },
  ];
}

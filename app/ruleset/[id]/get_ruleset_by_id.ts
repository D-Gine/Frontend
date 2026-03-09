export interface ruleset {
  name: string;
  description: string;
}

export async function get_ruleset_by_id(id: string) {
  const rulesets: { [id: string]: ruleset } = {
    ["id_1"]: { name: "SRD5", description: "WOTC ruleset" },
    ["id_2"]: { name: "other", description: "other desc" },
  };

  return rulesets[id];
}

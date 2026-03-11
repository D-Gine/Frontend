export interface ruleset {
  name: string;
  description: string;
}

export async function get_ruleset_by_id(id: string) {
  const rulesets: { [id: string]: ruleset } = {
    ["58e6aaee-5bd0-4b3d-b6db-b5c6c390b3ce"]: {
      name: "SRD5",
      description: "WOTC ruleset",
    },
    ["id_2"]: { name: "other", description: "other desc" },
  };

  return rulesets[id];
}

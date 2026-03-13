import { nodeList } from "./node_type";

export async function submitCharacter(
  ruleset_id: string,
  character_name: string,
  currentPath: string[],
  nodes: nodeList,
): Promise<{ id: string }> {
  return fetch("/api/character/create/submit", {
    method: "POST",
    body: JSON.stringify({
      ruleset_id: ruleset_id,
      name: character_name,
      components: currentPath.map((node_id) => ({
        component_id: nodes[node_id].comp_id,
        values: Object.keys(nodes[node_id].comp).map((key) => ({
          key: key,
          value: nodes[node_id].comp[key],
        })),
      })),
    }),
  }).then(async (data) => {
    if (!data.ok) {
      return data.status;
    }
    const res = await data.json();
    return res;
  });
}

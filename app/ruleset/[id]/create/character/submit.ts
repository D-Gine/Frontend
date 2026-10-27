import { nodeList } from "./node_type";

export async function submitCharacter(
  ruleset_id: string,
  character_name: string,
  currentPath: string[],
  nodes: nodeList,
): Promise<{ id: string }> {
  return fetch("/api/characters/create/submit", {
    method: "POST",
    body: JSON.stringify({
      ruleset_id: ruleset_id,
      name: character_name,
      components: currentPath.map((node_id) => ({
        values: Object.keys(nodes[node_id].comp).map((key) => {
          const template_index = nodes[node_id].component_types.findIndex(
            (elem) => {
              return elem.name === key;
            },
          );
          return {
            template_id:
              nodes[node_id].component_types[template_index].template_id,
            key: key,
            value: nodes[node_id].comp[key],
          };
        }),
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

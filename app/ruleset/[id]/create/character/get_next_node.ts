import { Dispatch } from "react";
import { nodeList } from "./node_type";

export function getNextNode(
  nodes: nodeList,
  currentNode: string,
  currentPath: string[],
  setNodes: Dispatch<nodeList>,
  setCurrentNode: Dispatch<string | undefined>,
  setCurrentPath: Dispatch<string[]>,
) {
  fetch("/api/ruleset/next_node", {
    method: "POST",
    body: JSON.stringify({
      current_node_id: currentNode,
      values: Object.keys(nodes[currentNode].comp).map((comp_key) => {
        const template_index = nodes[currentNode].component_types.findIndex(
          (elem) => elem.name === comp_key,
        );
        return {
          key: nodes[currentNode].component_types[template_index].template_id,
          value: nodes[currentNode].comp[comp_key],
        };
      }),
    }),
  }).then((data) =>
    data.json().then((res) => {
      setNodes({
        ...nodes,
        [currentNode]: {
          ...nodes[currentNode],
          next: res.node_id,
        },
        [res.node_id]: {
          name: res.name,
          last: res.last,
          comp: {},
          component_types: res.component_types,
        },
      });
      const current_index = currentPath.findIndex(
        (elem) => elem === currentNode,
      );
      if (current_index === currentPath.length - 1) {
        setCurrentPath([...currentPath, res.node_id]);
      } else {
        setCurrentPath([
          ...currentPath.slice(0, current_index + 1),
          res.node_id,
        ]);
      }
      setCurrentNode(res.node_id);
    }),
  );
}

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
  if (nodes[currentNode].next == null) {
    fetch("/api/ruleset/next_node", {
      method: "POST",
      body: JSON.stringify({
        node_id: currentNode,
        type: "type ?",
        value: JSON.stringify(nodes[currentNode].comp),
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
        setCurrentPath([...currentPath, res.node_id]);
        setCurrentNode(res.node_id);
      }),
    );
  } else {
    setCurrentNode(nodes[currentNode].next || undefined);
  }
}

import { Dispatch } from "react";
import { API_URL } from "@/constants/api_url";
import { node, nodeList, adaptNode } from "./node_type";


function getNodeValue(n: node) {
  const types = n.component_types ?? [];
  if (types.length === 1) return n.comp[types[0].name];
  return n.comp;
}

function buildTree(ids: string[], nodeKey: string) {
  let tree: any = undefined;
  for (let i = ids.length - 1; i >= 0; i--) {
    tree = tree ? { [nodeKey]: ids[i], next: tree } : { [nodeKey]: ids[i] };
  }
  return tree;
}

export async function getNextNode(
  id: string,
  nodes: nodeList,
  currentNode: string,
  currentPath: string[],
  setNodes: Dispatch<nodeList>,
  setCurrentNode: Dispatch<string | undefined>,
  setCurrentPath: Dispatch<string[]>,
  nodeKey: string = "nodes_uuid",
) {
  const currentIndex = currentPath.indexOf(currentNode);
  const pathUntilCurrent = currentPath.slice(0, currentIndex + 1);

  const node_values: Record<string, unknown> = {};
  for (const nodeId of pathUntilCurrent) {
    node_values[nodeId] = getNodeValue(nodes[nodeId]);
  }

  try {
    const resp = await fetch(`/api/nodes/${id}/get_next_node/${currentNode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        node_values,
        current_tree: buildTree(pathUntilCurrent, nodeKey),
      }),
    });

    if (!resp.ok) {
      console.error("next_node", resp.status, resp.url, (await resp.text()).slice(0, 300));
      alert(`failed to fetch next node (${resp.status})`);
      return;
    }

  const res = await resp.json();
  const adapted = adaptNode(res);
  if (!adapted) {
    setNodes({
      ...nodes,
      [currentNode]: { ...nodes[currentNode], last: true },
    });
    return;
  }
  const { id: nextId, node: nextNode } = adapted;
    const kept: nodeList = {};
    for (const nid of pathUntilCurrent) kept[nid] = nodes[nid];

    setNodes({
      ...kept,
      [currentNode]: { ...nodes[currentNode], next: nextId },
      [nextId]: nextNode,
    });
    setCurrentPath([...pathUntilCurrent, nextId]);
    setCurrentNode(nextId);
  } catch (e) {
    alert("Network error");
    return;
  }
}
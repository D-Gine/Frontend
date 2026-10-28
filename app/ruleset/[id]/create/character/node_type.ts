import { type } from "@/components/TypedSetters/typed_setter.type";

export interface node {
  id?: string;
  comp_id: string;
  name: string;
  last: boolean;
  next: string | null;
  // eslint-disable-next-line
  comp: { [key: string]: any };
  component_types: type[];
}

// Converts an API type ({base, restrictions, options?, item?}) into the
// {type, metadata} shape the TypedSetters components expect.
// eslint-disable-next-line
function toInterface(t: any, name: string, template_id: string): type {
  const r = t?.restrictions ?? {};
  const metadata: { [key: string]: any } = {
    type: t?.base === "number" ? "int" : t?.base,
    ...r,
  };

  if (t?.base === "enum") {
    metadata.possible_values = t.options ?? [];
  }
  if (t?.base === "list") {
    if (r.max_length) metadata.size = r.max_length;
    if (t.item) {
      metadata.nested = toInterface(t.item, t.item.base ?? "item", t.item.id);
    }
  }


  return { template_id, name, type: t?.base, metadata };
}

export function adaptNode(res: any): { id: string; node: node } | null {
  // first_node returns the node directly, get_next_node wraps it in "next"
  const data = res?.next ?? res;
  if (!data?.node_id) return null; // no next node -> end of the tree

  const t = data.type ?? {};

  return {
    id: data.node_id,
    node: {
      comp_id: t.id,
      name: data.name ?? t.name ?? t.base ?? "Step",
      last: data.final === true,
      comp: {},
      next: null,
      component_types: [toInterface(t, t.name ?? t.base ?? "Value", t.id)],
    },
  };
}

export interface nodeList {
  [key: string]: node;
}

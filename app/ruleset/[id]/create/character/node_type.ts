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

export function adaptNode(res: any): { id: string; node: node } | null {
  // first_node returns the node directly, get_next_node wraps it in "next"
  const data = res?.next ?? res;
  if (!data?.node_id) return null; // no next node -> end of the tree

  const t = data.type ?? {};
  const r = t.restrictions ?? {};

  return {
    id: data.node_id,
    node: {
      comp_id: t.id,
      name: data.name ?? t.name ?? t.base ?? "Step",
      last: false,
      comp: {},
      next: null,
      component_types: [
        {
          template_id: t.id,
          name: t.name ?? t.base ?? "Value",
          type: t.base, // "number" | "dictionary" -> TypeComponents[type]
          metadata: {
            // number: keep the int/float choice IntSetter expects
            type: t.base === "number" ? "int" : t.base,
            // spread every restriction as-is: min/max for numbers,
            // interface.classes for dictionaries, and anything new later
            ...r,
          },
        },
      ],
    },
  };
}

export interface nodeList {
  [key: string]: node;
}

import { type } from "@/components/TypedSetters/typed_setter.type";

export interface node {
  comp_id: string;
  name: string;
  last: boolean;
  next: string | null;
  // eslint-disable-next-line
  comp: { [key: string]: any };
  component_types: type[];
}

export interface nodeList {
  [key: string]: node;
}

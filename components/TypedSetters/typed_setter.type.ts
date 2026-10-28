import { Dispatch } from "react";

export interface type {
  template_id: string;
  name: string;
  type: string;
  metadata: { [metadata: string]: any };
}

export interface TypedSetter {
  component: { [key: string]: any };
  setter: Dispatch<any>;
  type_interface: type;
}

export type SelectedType =
  | "int"
  | "float"
  | "range_number"
  | "string"
  | "list"
  | "tag";

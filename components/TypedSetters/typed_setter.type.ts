import { Dispatch } from "react";

export interface type {
  template_id: string;
  name: string;
  type: string;
  // eslint-disable-next-line
  metadata: { [metadata: string]: any };
}

export interface TypedSetter {
  // eslint-disable-next-line
  component: { [key: string]: any };
  // eslint-disable-next-line
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

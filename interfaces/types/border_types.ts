import { ColorType } from "./color_types";

export type BorderColorType = ColorType | "inherit" | "current" | "transparent";

export type BorderStyleType =
  | "solid"
  | "dashed"
  | "dotted"
  | "double"
  | "hidden"
  | "none";

import { BgColorType } from "../../types/bg_types";
import { ColorType } from "../../types/color_types";

export const bg_color_classes: Record<BgColorType, string> = {
  inherit: "bg-inherit",
  current: "bg-current",
  transparent: "bg-transparent",
  [ColorType.primary]: "bg-primary",
  [ColorType.secondary]: "bg-secondary",
  [ColorType.contrast]: "bg-contrast",
};

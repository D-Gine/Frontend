import { cva } from "class-variance-authority";
import { Size, SizeType } from "./types/size_types";
import { height_classes, width_classes } from "./class_generators/plan_sizes";
import { box_shadow_classes } from "./class_generators/box_shadow";
import { border_radius_classes } from "./class_generators/border/radius";

export const box_style = cva("", {
  variants: {
    border_radius: border_radius_classes,
    box_shadow: box_shadow_classes,
    height: height_classes,
    width: width_classes,
  },
  defaultVariants: {
    border_radius: "medium",
    box_shadow: "medium",
  },
});

export interface Box {
  border_radius?: SizeType;
  height?: Size;
  width?: Size;
  box_shadow?: SizeType;
}

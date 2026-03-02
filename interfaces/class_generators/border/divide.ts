import { BorderStyleType } from "@/interfaces/types/border_types";
import { SizeType } from "@/interfaces/types/size_types";

export const border_divide_x_classes: Record<SizeType, string> = {
  bigger: "divide-x-12",
  big: "divide-x-8",
  medium_high: "divide-x-6",
  medium: "divide-x-4",
  small: "divide-x-2",
  smaller: "divide-x-1",
};

export const border_divide_y_classes: Record<SizeType, string> = {
  bigger: "divide-y-12",
  big: "divide-y-8",
  medium_high: "divide-y-6",
  medium: "divide-y-4",
  small: "divide-y-2",
  smaller: "divide-y-1",
};

export const border_divide_style_classes: Record<BorderStyleType, string> = {
  solid: "divide-solid",
  dashed: "divide-dashed",
  dotted: "divide-dotted",
  double: "divide-double",
  hidden: "divide-hidden",
  none: "divide-none",
};

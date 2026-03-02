import { BorderColorType } from "@/interfaces/types/border_types";
import { SizeType } from "@/interfaces/types/size_types";
import { BorderStyleType } from "@/interfaces/types/border_types";

export const outline_size_classes: Record<SizeType, string> = {
  bigger: "outline-12",
  big: "outline-8",
  medium_high: "outline-6",
  medium: "outline-4",
  small: "outline-2",
  smaller: "outline-1",
};

export const outline_color_classes: Record<BorderColorType, string> = {
  inherit: "outline-inherit",
  current: "outline-current",
  transparent: "outline-transparent",
  primary: "outline-primary",
  secondary: "outline-secondary",
  contrast: "outline-contrast",
};

export const outline_style_classes: Record<BorderStyleType, string> = {
  solid: "outline-solid",
  dashed: "outline-dashed",
  dotted: "outline-dotted",
  double: "outline-double",
  hidden: "outline-hidden",
  none: "outline-none",
};

export const outline_offset_size_classes: Record<SizeType, string> = {
  bigger: "outline-offset-12",
  big: "outline-offset-8",
  medium_high: "outline-offset-6",
  medium: "outline-offset-4",
  small: "outline-offset-2",
  smaller: "outline-offset-1",
};

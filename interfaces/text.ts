import { ColorType } from "./types/color_types";
import { cva } from "class-variance-authority";
import { SizeType } from "./types/size_types";

export const text_style = cva("", {
  variants: {
    text_color: {
      [ColorType.primary]: "text-text-primary",
      [ColorType.secondary]: "text-text-secondary",
      [ColorType.contrast]: "text-text-contrast",
    },
    text_size: {
      bigger: "text-2xl",
      big: "text-xl",
      medium_high: "text-lg",
      medium: "text-base",
      small: "text-sm",
      smaller: "text-xs",
    },
  },
  defaultVariants: {
    text_color: ColorType.primary,
    text_size: "medium",
  },
});

export interface TextParams {
  text_color?: ColorType;
  text_size?: SizeType;
}

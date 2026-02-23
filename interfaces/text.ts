import { ColorType } from "./color_types";
import { cva } from "class-variance-authority";

export const text_style = cva("", {
  variants: {
    text_color: {
      [ColorType.primary]: "text-text-primary",
      [ColorType.secondary]: "text-text-secondary",
      [ColorType.contrast]: "text-text-contrast",
    },
  },
  defaultVariants: {
    text_color: ColorType.primary,
  },
});

export interface TextParams {
  text_color?: ColorType;
}

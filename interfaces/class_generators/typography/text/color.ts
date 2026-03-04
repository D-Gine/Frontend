import { TypoTextColor } from "@/interfaces/types/typography/text_color";
import { ColorType } from "@/interfaces/types/color_types";

export const text_color_classes : Record<TypoTextColor, string> = {
    inherit: "bg-inherit",
    current: "bg-current",
    transparent: "bg-transparent",
    primary: "bg-primary",
    secondary: "bg-secondary",
    contrast: "bg-contrast",
};
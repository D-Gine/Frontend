import { TypoDecorationTextColor } from "@/interfaces/types/typography/decoration/text_decoration_color";
import { ColorType } from "@/interfaces/types/color_types";

export const text_decoration_color_classes : Record<TypoDecorationTextColor, string> = {
    inherit: "decoration-inherit",
    current: "decoration-current",
    transparent: "decoration-transparent",
    black: "decoration-black",
    white: "decoration-white",
    primary: "decoration-primary",
    secondary: "decoration-secondary",
    contrast: "decoration-contrast",
}
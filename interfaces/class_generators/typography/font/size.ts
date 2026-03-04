import { Size, SizeType } from "@/interfaces/types/size_types";
import { TypoSizeType } from "@/interfaces/types/typography/font_sizes";

export const text_size_class : Record<SizeType, string> = {
    smaller: "text-xs",
    small: "text-sm",
    medium: "text-base",
    medium_high: "text-1g",
    big: "text-xl",
    bigger: "text-1xl",
}
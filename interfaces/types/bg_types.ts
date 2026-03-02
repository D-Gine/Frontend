import { ColorType } from "./color_types";

export type BgAttachementType = "fixed" | "local" | "scroll";

export type BgClipType = "border" | "padding" | "content" | "text";

export type BgColorType = ColorType | "inherit" | "current" | "transparent";

export type BgOriginType = "border" | "padding" | "content";

export type BgRepeatType =
  | "repeat"
  | "repeat_x"
  | "repeat_y"
  | "repeat_space"
  | "repeat_round"
  | "none";

export type BgSizeType = "auto" | "cover" | "contain";

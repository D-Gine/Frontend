import { MaskMode } from "@/interfaces/types/mask_mode";

export const mask_mode_classes: Record<MaskMode, string> = {
  alpha: "mask-alpha",
  luminance: "mask-luminance",
  match: "mask-match",
};

import { MaskComposite } from "@/interfaces/types/mask_composite";

export const mask_clip_classes: Record<MaskComposite, string> = {
  add: "mask-add",
  subtract: "mask-subtract",
  intersect: "mask-intersect",
  exclude: "mask-exclude",
};

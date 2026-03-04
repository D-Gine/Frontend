import { PositionType } from "@/interfaces/types/position_types";

export const mask_position_classes: Record<PositionType, string> = {
  "top-left": "mask-top-left",
  top: "mask-top",
  "top-right": "mask-top-right",
  left: "mask-left",
  center: "mask-center",
  right: "mask-right",
  "bottom-left": "mask-bottom-left",
  bottom: "mask-bottom",
  "bottom-right": "mask-bottom-right",
};

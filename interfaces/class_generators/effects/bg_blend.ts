import { BlendMode } from "@/interfaces/types/mix_blend";

export const bg_blend_classes: Record<BlendMode, string> = {
  normal: "bg-blend-normal",
  multiply: "bg-blend-multiply",
  screen: "bg-blend-screen",
  overlay: "bg-blend-overlay",
  darken: "bg-blend-darken",
  lighten: "bg-blend-lighten",
  ["color-dodge"]: "bg-blend-color-dodge",
  ["color-burn"]: "bg-blend-color-burn",
  ["hard-light"]: "bg-blend-hard-light",
  ["soft-light"]: "bg-blend-soft-light",
  difference: "bg-blend-difference",
  exclusion: "bg-blend-exclusion",
  hue: "bg-blend-hue",
  saturation: "bg-blend-saturation",
  color: "bg-blend-color",
  luminosity: "bg-blend-luminosity",
};

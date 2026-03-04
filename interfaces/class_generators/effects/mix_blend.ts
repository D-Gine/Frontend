import { MixBlend } from "@/interfaces/types/mix_blend";

export const mix_blend_classes: Record<MixBlend, string> = {
  normal: "mix-blend-normal",
  multiply: "mix-blend-multiply",
  screen: "mix-blend-screen",
  overlay: "mix-blend-overlay",
  darken: "mix-blend-darken",
  lighten: "mix-blend-lighten",
  "color-dodge": "mix-blend-color-dodge",
  "color-burn": "mix-blend-color-burn",
  "hard-light": "mix-blend-hard-light",
  "soft-light": "mix-blend-soft-light",
  difference: "mix-blend-difference",
  exclusion: "mix-blend-exclusion",
  hue: "mix-blend-hue",
  saturation: "mix-blend-saturation",
  color: "mix-blend-color",
  luminosity: "mix-blend-luminosity",
  "plus-darker": "mix-blend-plus-darker",
  "plus-lighter": "mix-blend-plus-lighter",
};

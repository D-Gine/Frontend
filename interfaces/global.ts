import { cva } from "class-variance-authority";
import {
  height_classes,
  max_height_classes,
  max_width_classes,
  min_height_classes,
  width_classes,
} from "./class_generators/plan_sizes";
import { cursor_classes } from "./class_generators/cursor";
import {
  horizontal_padding_classes,
  vertical_padding_classes,
} from "./class_generators/padding";
import {
  inline_classes,
  max_inline_classes,
  min_inline_classes,
} from "./class_generators/inline_size";
import { bg_clip_classes } from "./class_generators/bg/clip";
import { bg_attachement_classes } from "./class_generators/bg/attachement";
import { bg_color_classes } from "./class_generators/bg/color";
import { bg_origin_classes } from "./class_generators/bg/origin";
import { bg_position_classes } from "./class_generators/bg/position";
import { bg_repeat_classes } from "./class_generators/bg/repeat";
import { bg_size_classes } from "./class_generators/bg/size";

export const global_style = cva("", {
  variants: {
    height: height_classes,
    min_height: min_height_classes,
    max_height: max_height_classes,
    width: width_classes,
    min_width: min_height_classes,
    max_width: max_width_classes,
    cursor: cursor_classes,
    y_padding: vertical_padding_classes,
    x_padding: horizontal_padding_classes,
    inline: inline_classes,
    min_inline: min_inline_classes,
    max_inline: max_inline_classes,
    bg_attachement: bg_attachement_classes,
    bg_clip: bg_clip_classes,
    bg_color: bg_color_classes,
    bg_origin: bg_origin_classes,
    bg_position: bg_position_classes,
    bg_repeat: bg_repeat_classes,
    bg_size: bg_size_classes,
  },
  defaultVariants: {},
});

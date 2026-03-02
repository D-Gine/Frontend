"use client";
import { Box, box_style } from "@/interfaces/box";
import { Clickable } from "@/interfaces/clickable";
import React, { PropsWithChildren } from "react";
import Text from "../Text/Text";
import { TextParams } from "@/interfaces/text";

interface ButtonParams extends Box, Clickable, TextParams {}

export default function Button({
  children,
  ...params
}: PropsWithChildren<ButtonParams>) {
  return (
    <button className={box_style(params)} onClick={params.on_click}>
      <Text {...params}>{children}</Text>
    </button>
  );
}

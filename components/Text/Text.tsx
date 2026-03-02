import { text_style, TextParams } from "@interfaces/text";
import React, { PropsWithChildren } from "react";

export default function Text({
  children,
  ...params
}: PropsWithChildren<TextParams>) {
  return <p className={text_style(params)}>{children}</p>;
}

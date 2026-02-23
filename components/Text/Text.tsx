import { text_style, TextParams } from "@interfaces/text";
import React, { PropsWithChildren } from "react";

export default function Text(params: PropsWithChildren<TextParams>) {
  return (
    <p className={text_style({ text_color: params.text_color })}>
      {params.children}
    </p>
  );
}

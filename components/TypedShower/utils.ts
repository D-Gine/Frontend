import { value } from "@/app/characters/types";
import { JSX } from "react";
import { NumberShower } from "./NumberShower";
import { StringShower } from "./StringShower";
import { ListShower } from "./ListShower";
import { EnumShower } from "./EnumShower";

export const TypeComponents: Record<string, (data: value) => JSX.Element> = {
  number: NumberShower,
  string: StringShower,
  list: ListShower,
  enum_tag: EnumShower,
};

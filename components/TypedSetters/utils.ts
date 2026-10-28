import { JSX } from "react";
import IntSetter from "./IntSetter";
import StringSetter from "./StringInput";
import { TypedSetter } from "./typed_setter.type";
import ListSetter from "./ListSetter";
import EnumSetter from "./EnumSetter";
import DictionarySetter from "./DictionarySetter";

export const TypeComponents: Record<
  string,
  (data: TypedSetter) => JSX.Element
> = {
  number: IntSetter,
  string: StringSetter,
  list: ListSetter,
  dictionary: DictionarySetter,
  enum_tag: EnumSetter,
};

import Dropdown from "../DropDown/Dropdown";
import { TypedSetter } from "./typed_setter.type";

export default function EnumSetter({
  setter,
  component,
  type_interface,
}: TypedSetter) {
  const { name, metadata } = type_interface;
  return (
    <label className="flex flex-row justify-between">
      <p>
        select <span className="font-bold">{type_interface.name}:</span>
      </p>
      <Dropdown
        current_value={component[name]}
        value_list={metadata.possible_values}
        onChange={(v) => setter({ ...setter, [name]: v })}
      />

      {/* TODO make a good custom component */}
    </label>
  );
}

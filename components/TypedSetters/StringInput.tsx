import { TypedSetter } from "./typed_setter.type";

export default function StringSetter({
  setter,
  component,
  type_interface,
}: TypedSetter) {
  return (
    <label className="flex flex-row justify-between">
      <p>
        enter <span className="font-bold">{type_interface.name}:</span>
      </p>
      <input
        type="text"
        placeholder="-"
        className="border-black bg-gray-50 w-1/4"
        maxLength={type_interface.metadata.max}
        onChange={(e) =>
          setter({ ...component, [type_interface.name]: e.target.value })
        }
      />
      {/* TODO make a good custom component */}
    </label>
  );
}

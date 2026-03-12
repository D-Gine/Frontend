import { useState } from "react";
import { TypedSetter } from "./typed_setter.type";
import { clamp } from "@/app/utils/clamp";

export default function IntSetter({
  setter,
  component,
  type_interface,
}: TypedSetter) {
  const [display, setDisplay] = useState<string>(
    component[type_interface.name]?.toString() || "",
  );

  const { type, min, max } = type_interface.metadata;

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const number = e.target.value ? Number(e.target.value) : Number.NaN;
    const value = type === "int" ? Math.round(number) : Number(number);

    const clamped = clamp(value, min, max);
    const result =
      typeof clamped == "number" && !Number.isNaN(clamped)
        ? clamped
        : undefined;

    setter({
      ...component,
      [type_interface.name]: result,
    });
    setDisplay(typeof result === "number" ? result.toString() : "");
  }

  return (
    <label className="flex flex-row justify-between text-black">
      <p>
        enter <span className="font-bold">{type_interface.name}:</span>
      </p>
      <input
        type="number"
        value={display}
        placeholder="-"
        className="border-black bg-gray-50 w-1/4"
        min={min}
        max={max}
        inputMode="numeric"
        onChange={onChange}
      />
      {/* TODO make a good custom component */}
    </label>
  );
}

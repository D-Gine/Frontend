import { value } from "@/app/characters/types";

export function StringShower(data: value) {
  return (
    <div className="flex flex-row gap-3">
      <label className="font-bold">{data.keyname}:</label>
      <div>{data.value}</div>
    </div>
  );
}

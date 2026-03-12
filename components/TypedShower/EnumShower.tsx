import { value } from "@/app/characters/types";

export function EnumShower(data: value) {
  return (
    <div className="flex flex-row gap-3">
      <label className="font-bold">{data.keyname}:</label>
      <div>
        {
          data.metadata.possible_values.find(
            (el: { id: string; name: any }) => el.id === data.value,
          ).name
        }
      </div>
    </div>
  );
}

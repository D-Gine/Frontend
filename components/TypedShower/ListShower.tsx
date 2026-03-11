import { value } from "@/app/characters/types";
import { TypeComponents } from "./utils";

export function ListShower(data: value) {
  const nested = data.metadata.nested;
  return (
    <div>
      <label className="font-bold">{data.keyname}</label>
      <ul className="indent-4">
        {data.value.map((elem: any, index: number) => (
          <li>
            {(() => {
              const Comp = TypeComponents[nested.type];
              return (
                <Comp
                  keyname={`${data.keyname} n°${index}`}
                  value={elem}
                  metadata={nested.metadata}
                  type={nested.type}
                />
              );
            })()}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { TypedSetter } from "./typed_setter.type";
import { TypeComponents } from "./utils";
import { v4 as uuidv4 } from "uuid";

export default function ListSetter({
  setter,
  component,
  type_interface,
}: TypedSetter) {
  const { name, metadata } = type_interface;
  const [list, setList] = useState<{ id: string; value: any }[]>(
    component[name]?.map((v: any) => ({ id: uuidv4(), value: v })) || [],
  );

  useEffect(() => {
    setter({ ...component, [name]: list.map((v) => v.value) });
  }, [list]);

  return (
    <div className="flex flex-col gap-3 items-start">
      <p className="font-bold">
        {name}:
        {metadata.size ? (
          <span className="italic">
            ({component[name]?.length || 0}/{metadata.size})
          </span>
        ) : null}
      </p>
      <ul className="indent-4 flex flex-col gap-4">
        {list.map(({ id, value }) => (
          <li key={`list--${name}-${id}`} className="max-h-5">
            {(() => {
              const Component = TypeComponents[metadata.nested.type];
              return (
                <div className="flex justify-between items-center">
                  <button
                    className="relative w-3 h-3 rotate-45"
                    onClick={() => {
                      setList(list.filter((v) => v.id != id));
                    }}
                  >
                    <div className="absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 bg-current" />
                    <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-current" />
                  </button>

                  <Component
                    component={{
                      [metadata.nested.name]: value,
                    }}
                    setter={(data) =>
                      setList(
                        list.map((v) =>
                          v.id === id
                            ? { id: v.id, value: data[metadata.nested.name] }
                            : v,
                        ),
                      )
                    }
                    type_interface={metadata.nested}
                  />
                </div>
              );
            })()}
          </li>
        ))}
      </ul>
      {(!metadata.size || (component[name]?.length || 0) < metadata.size) && (
        <button
          onClick={() => setList([...list, { id: uuidv4(), value: undefined }])}
        >
          add element
        </button>
      )}
    </div>
  );
}

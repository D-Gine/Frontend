import { useRef } from "react";
import { TypedSetter } from "./typed_setter.type";
import { TypeComponents } from "./utils";

export default function ListSetter({
  setter,
  component,
  type_interface,
}: TypedSetter) {
  const { name, metadata } = type_interface;

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
        {component[name] &&
          Array.from(Array(component[name]?.length || 0).keys()).map(
            (index: number) => (
              <li
                key={`list-${index}-${JSON.stringify(component[name][index])}`}
                className="animate-grow max-h-5 opacity-0"
              >
                {(() => {
                  const Component = TypeComponents[metadata.nested.type];
                  return (
                    <div className="flex justify-between items-center">
                      <button
                        className="relative w-3 h-3 rotate-45"
                        onClick={() => {
                          console.log(index);
                          setter({
                            ...component,
                            [name]: component[name].filter(
                              (v: any, i: number) => {
                                console.log(
                                  "index: ",
                                  i,
                                  "clicked index: ",
                                  index,
                                );
                                return index != i;
                              },
                            ),
                          });
                        }}
                      >
                        <div className="absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 bg-current" />
                        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-current" />
                      </button>

                      <Component
                        component={{
                          [metadata.nested.name]: component[name][index],
                        }}
                        setter={(data) =>
                          setter({
                            ...component,
                            // eslint-disable-next-line
                            [name]: component[name].map((v: any, i: number) =>
                              i == index ? data[metadata.nested.name] : v,
                            ),
                          })
                        }
                        type_interface={metadata.nested}
                      />
                    </div>
                  );
                })()}
              </li>
            ),
          )}
      </ul>
      {(!metadata.size || (component[name]?.length || 0) < metadata.size) && (
        <button
          onClick={() =>
            setter({
              ...component,
              [name]: [...(component[name] ?? []), undefined],
            })
          }
        >
          add element
        </button>
      )}
    </div>
  );
}

import { TypedSetter } from "./typed_setter.type";
import { TypeComponents } from "./utils";

export default function ListSetter({
  setter,
  component,
  type_interface,
}: TypedSetter) {
  const { name, metadata } = type_interface;
  console.log(component[name]?.length || 0);
  return (
    <label>
      <p className="font-bold">
        {name}:
        {metadata.size ? (
          <span className="italic">
            ({component[name]?.length || 0}/{metadata.size})
          </span>
        ) : null}
      </p>
      <ul className="indent-4 flex flex-col gap-1">
        {component[name] &&
          Array.from(Array(component[name]?.length || 0).keys()).map(
            (index: number) => (
              <li
                key={`list-${name}-${index}`}
                className="animate-grow max-h-5 opacity-0"
              >
                {(() => {
                  const Component = TypeComponents[metadata.nested.type];
                  return (
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
    </label>
  );
}

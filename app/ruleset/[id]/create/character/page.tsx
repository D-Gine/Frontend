"use client";
import { type } from "@/components/TypedSetters/typed_setter.type";
import { TypeComponents } from "@/components/TypedSetters/utils";
import { useEffect, useState } from "react";

//const type = ["number", "string", "list", "tag"];
const possibility: type[] = [
  {
    name: "Normal Number",
    type: "number",
    metadata: {
      number: "float",
    },
  },
  {
    name: "Ranged Number",
    type: "number",
    metadata: {
      number: "int",
      min: 0,
      max: 20,
    },
  },
  {
    name: "Name",
    type: "string",
    metadata: {
      max: 10,
    },
  },
  {
    name: "Stats",
    type: "list",
    metadata: {
      nested: {
        name: "Stat",
        type: "number",
        metadata: {
          min: 0,
          max: 20,
          type: "int",
        },
      },
      size: 4,
    },
  },
  {
    name: "Spells",
    type: "list",
    metadata: {
      size: 5,
      nested: {
        name: "Spell",
        type: "enum_tag",
        metadata: {
          possible_values: [
            { id: "1", name: "Acid Splash" },
            { id: "2", name: "Call Lightning" },
          ],
        },
      },
    },
  },
];

export default function CharacterCreation() {
  const [nodes, setNodes] = useState<{
    [key: string]: {
      next: string | null;
      // eslint-disable-next-line
      comp: { [key: string]: any };
      possibility: type[];
    };
  }>({
    test: { next: "test2", comp: {}, possibility },
    test2: {
      next: null,
      comp: {},
      possibility: [
        {
          name: "Normal Number",
          type: "number",
          metadata: {
            number: "float",
          },
        },
      ],
    },
  });

  const [currentNode, setCurrentNode] = useState<string | undefined>("test");
  useEffect(() => {
    if (currentNode) {
      console.log(nodes[currentNode]);
    }
  }, [nodes, currentNode]);

  const [currentPath, setCurrentPath] = useState<string[]>(["test"]);

  return (
    <div className="flex flex-row gap-1 justify-center">
      <ul className="flex flex-col w-1/10 bg-amber-100 p-2">
        {currentPath.map((v) => (
          <li key={`path_${v}`}>
            <button
              className={`${v === currentNode ? "font-bold" : ""}`}
              onClick={() => setCurrentNode(v)}
            >
              {v}
            </button>
          </li>
        ))}
      </ul>
      {(currentNode && nodes[currentNode] && (
        <ul className="flex flex-col max-w-1/3 justify-self-center gap-4 bg-amber-200 p-2">
          {nodes[currentNode].possibility.map((v, i) => (
            <li key={`${currentNode}-data-select-${i}-${v.name}`}>
              {(() => {
                const Component = TypeComponents[v.type];
                return (
                  <Component
                    component={nodes[currentNode].comp}
                    setter={(comp) => {
                      setNodes({
                        ...nodes,
                        [currentNode]: { ...nodes[currentNode], comp },
                      });
                    }}
                    type_interface={v}
                  />
                );
              })()}
            </li>
          ))}
          <li>
            {nodes[currentNode].next ? (
              <button
                onClick={() => {
                  if (
                    currentPath[currentPath.length - 1] === currentNode &&
                    nodes[currentNode].next
                  ) {
                    setCurrentPath([...currentPath, nodes[currentNode].next]);
                  }
                  setCurrentNode(nodes[currentNode].next || undefined);
                }}
              >
                Next node
              </button>
            ) : (
              <button onClick={() => console.log(nodes)}>
                Submit character
              </button>
            )}
          </li>
        </ul>
      )) || <p>loading...</p>}
    </div>
  );
}

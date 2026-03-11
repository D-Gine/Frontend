"use client";
import { type } from "@/components/TypedSetters/typed_setter.type";
import { TypeComponents } from "@/components/TypedSetters/utils";
import React, { useEffect, useState } from "react";
import { node, nodeList } from "./node_type";
import { submitCharacter } from "./submit";
import { getNextNode } from "./get_next_node";

//const type = ["number", "string", "list", "tag"];

export default function CharacterCreation({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);

  const [nodes, setNodes] = useState<nodeList>({});
  const [name, setName] = useState<string>("");
  const [currentNode, setCurrentNode] = useState<string | undefined>(undefined);
  const [currentPath, setCurrentPath] = useState<string[]>([]);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/ruleset/first_node?ruleset_id=${id}`, {
      method: "GET",
    }).then((data) => {
      if (data.status != 200) {
        alert("failed to fetch next"); // switch to good thing
      }
      data.json().then((res) => {
        setNodes({
          [res.node_id]: {
            comp_id: res.component_id,
            name: res.name,
            last: res.last,
            comp: {},
            next: null,
            component_types: res.component_types,
          },
        });
        setCurrentNode(res.node_id);
        setCurrentPath([res.node_id]);
      });
    });
  }, [id]);

  return (
    <div className="flex flex-col items-center w-full gap-5 p-8">
      <div className="flex flex-col p-5 w-full border-b-2 border-black/40 bord">
        <input
          className="text-4xl flex self-center"
          placeholder="Enter character name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-row gap-1 justify-center w-9/10">
        <ul className="flex flex-col w-1/5 bg-gray-50 p-8 border-r-2 border-black/50">
          {currentPath.map((v, i) => (
            <li key={`path_${v}_${i}`}>
              <button
                className={`${v === currentNode ? "font-bold" : ""}`}
                onClick={() => setCurrentNode(v)}
              >
                {nodes[v]?.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="w-2/3 p-2 bg-gray-100">
          {(currentNode && nodes[currentNode] && (
            <ul className="flex flex-col w-4/5 justify-self-center gap-10">
              {nodes[currentNode].component_types &&
                nodes[currentNode].component_types.map((v, i) => (
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
                {!nodes[currentNode].last ? (
                  <button
                    onClick={() => {
                      getNextNode(
                        nodes,
                        currentNode,
                        currentPath,
                        setNodes,
                        setCurrentNode,
                        setCurrentPath,
                      );
                    }}
                  >
                    Next node
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      console.log(nodes);
                      submitCharacter(id, name, currentPath, nodes);
                    }}
                  >
                    Submit character
                  </button>
                )}
              </li>
            </ul>
          )) || <p>loading...</p>}
        </div>
      </div>
    </div>
  );
}

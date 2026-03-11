"use client";
import { type } from "@/components/TypedSetters/typed_setter.type";
import { TypeComponents } from "@/components/TypedSetters/utils";
import React, { useEffect, useState } from "react";

//const type = ["number", "string", "list", "tag"];

export default function CharacterCreation({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);

  const [nodes, setNodes] = useState<{
    [node_id: string]: {
      comp_id: string;
      name: string;
      last: boolean;
      next: string | null;
      // eslint-disable-next-line
      comp: { [key: string]: any };
      component_types: type[];
    };
  }>({});
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
        console.log(res);
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

  currentNode && console.log(nodes[currentNode].last);

  return (
    <div className="flex flex-col items-center w-full gap-5 p-8">
      <input
        className="text-4xl"
        placeholder="Enter character name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div className="flex flex-row gap-1 justify-center w-1/2">
        <ul className="flex flex-col w-1/5 bg-amber-100 p-2">
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
        {(currentNode && nodes[currentNode] && (
          <ul className="flex flex-col w-4/5 justify-self-center gap-4 bg-amber-200 p-2">
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
                    if (nodes[currentNode].next == null) {
                      fetch("/api/ruleset/next_node", {
                        method: "POST",
                        body: JSON.stringify({
                          node_id: currentNode,
                          type: "type ?",
                          value: JSON.stringify(nodes[currentNode].comp),
                        }),
                      }).then((data) =>
                        data.json().then((res) => {
                          console.log("RES", res);
                          setNodes({
                            ...nodes,
                            [currentNode]: {
                              ...nodes[currentNode],
                              next: res.node_id,
                            },
                            [res.node_id]: {
                              name: res.name,
                              last: res.last,
                              comp: {},
                              component_types: res.component_types,
                            },
                          });
                          setCurrentPath([...currentPath, res.node_id]);
                          setCurrentNode(res.node_id);
                        }),
                      );
                    }
                    setCurrentNode(nodes[currentNode].next || undefined);
                  }}
                >
                  Next node
                </button>
              ) : (
                <button
                  onClick={() => {
                    fetch("/api/character/create/submit", {
                      method: "POST",
                      body: JSON.stringify({
                        ruleset_id: id,
                        name: name,
                        components: currentPath.map((node_id) => ({
                          component_id: nodes[node_id].comp_id,
                          values: Object.keys(nodes[node_id].comp).map(
                            (key) => ({
                              key: key,
                              value: nodes[node_id].comp[key],
                            }),
                          ),
                        })),
                      }),
                    }).then((data) =>
                      data.json().then((res) => console.log(res)),
                    );
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
  );
}

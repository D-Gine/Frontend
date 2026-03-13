"use client";
import { type } from "@/components/TypedSetters/typed_setter.type";
import { TypeComponents } from "@/components/TypedSetters/utils";
import React, { useEffect, useState } from "react";
import { node, nodeList } from "./node_type";
import { submitCharacter } from "./submit";
import { getNextNode } from "./get_next_node";
import { useParams, useRouter } from "next/navigation";

const possibility: type[] = [
  {
    name: "Normal Number",
    type: "number",
    metadata: { number: "float" },
  },
  {
    name: "Ranged Number",
    type: "number",
    metadata: { number: "int", min: 0, max: 20 },
  },
  {
    name: "Name",
    type: "string",
    metadata: { max: 10 },
  },
  {
    name: "Stats",
    type: "list",
    metadata: {
      nested: {
        name: "Stat",
        type: "number",
        metadata: { min: 0, max: 20, type: "int" },
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

export default function CharacterCreation({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const router = useRouter();

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

  // Step index for progress bar
  const stepIndex = currentNode ? currentPath.indexOf(currentNode) : 0;
  const totalSteps = currentPath.length;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
        .font-cinzel  { font-family: 'Cinzel', serif; }
        .font-crimson { font-family: 'Crimson Text', Georgia, serif; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes runeGlow {
          0%, 100% { opacity: 0.03; }
          50%       { opacity: 0.08; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .animate-float    { animation: float 4s ease-in-out infinite; }
        .animate-runeglow { animation: runeGlow 6s ease-in-out infinite; }
        .animate-fadein   { animation: fadeInUp 0.6s ease both; }

        .gold-btn {
          background: linear-gradient(135deg, #a07830 0%, #7a5c20 50%, #a07830 100%);
          transition: all 0.3s;
        }
        .gold-btn:hover {
          background: linear-gradient(135deg, #c9a35a 0%, #a07830 50%, #c9a35a 100%);
          box-shadow: 0 0 25px rgba(201,163,90,0.4), 0 4px 15px rgba(0,0,0,0.4);
          transform: translateY(-1px);
        }
        .ghost-btn {
          transition: all 0.3s;
          border: 1px solid rgba(139,115,85,0.3);
        }
        .ghost-btn:hover {
          border-color: rgba(201,163,90,0.5);
          color: #c9a35a;
          background: rgba(160,120,48,0.08);
        }
        .card-corner::before,
        .card-corner::after {
          content: '';
          position: absolute;
          width: 10px; height: 10px;
          border-color: rgba(160,120,48,0.35);
          border-style: solid;
        }
        .progress-fill {
          background: linear-gradient(90deg, #7a5c20, #c9a35a, #7a5c20);
          background-size: 200% auto;
          animation: shimmer 2s linear infinite;
          transition: width 0.5s ease;
        }
      `}</style>

      {/* Page wrapper */}
      <div className="font-crimson relative min-h-screen overflow-hidden bg-[#0a0805] filter">
        {/* Ambient glows */}
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 60% at 20% 10%, rgba(80,50,10,0.08) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 80% 80%, rgba(60,30,5,0.06) 0%, transparent 60%)
            `,
          }}
        />

        {/* Rune watermark */}
        <div className="animate-runeglow pointer-events-none fixed left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[500px] leading-none text-[rgba(160,120,48,0.03)]">
          ✦
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-10">
          {/* Header */}
          <div className="animate-fadein mb-10 text-center">
            <div className="mb-3 flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[rgba(160,120,48,0.5)]" />
              <span className="animate-float text-2xl text-[#c9a35a]">⚜</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[rgba(160,120,48,0.5)]" />
            </div>

            <h1
              className="font-cinzel mb-2 text-[clamp(22px,4vw,38px)] font-black uppercase tracking-[4px] text-[#c9a35a]"
              style={{
                textShadow:
                  "0 0 40px rgba(201,163,90,0.3), 0 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              Character Forge
            </h1>
            <p className="font-crimson text-sm italic tracking-widest text-[#c9a35a]">
              Shape your legend, adventurer
            </p>

            {/* Progress bar */}
            <div className="mx-auto mt-6 max-w-xs">
              <div className="mb-1 flex justify-between">
                <span className="font-cinzel text-[10px] tracking-widest text-[#c9a35a]">
                  PROGRESS
                </span>
                <span className="font-cinzel text-[10px] tracking-widest text-[#6b5535]">
                  {stepIndex + 1} / {totalSteps}
                </span>
              </div>
              <div className="h-1 w-full rounded-full bg-[rgba(100,80,45,0.2)]">
                <div
                  className="progress-fill h-full rounded-full"
                  style={{ width: `${((stepIndex + 1) / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Main layout */}
          <div className="flex gap-6 items-start">
            {/* ── Sidebar: path navigation ── */}
            <div
              className="relative w-40 shrink-0 rounded-sm border border-[rgba(100,80,45,0.3)] bg-[rgba(15,10,4,0.9)] p-4"
              style={{
                boxShadow:
                  "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.02)",
              }}
            >
              {/* Corner accents */}
              <div className="absolute left-1.5 top-1.5 h-2.5 w-2.5 border-l border-t border-[rgba(160,120,48,0.35)]" />
              <div className="absolute right-1.5 top-1.5 h-2.5 w-2.5 border-r border-t border-[rgba(160,120,48,0.35)]" />
              <div className="absolute bottom-1.5 left-1.5 h-2.5 w-2.5 border-b border-l border-[rgba(160,120,48,0.35)]" />
              <div className="absolute bottom-1.5 right-1.5 h-2.5 w-2.5 border-b border-r border-[rgba(160,120,48,0.35)]" />

              <p className="font-cinzel mb-3 text-[9px] uppercase tracking-[2px] text-[#c9a35a]">
                Journey
              </p>

              <ul className="flex flex-col gap-1">
                {currentPath.map((v, i) => {
                  const isActive = v === currentNode;
                  const isPast = currentPath.indexOf(v) < stepIndex;
                  return (
                    <li key={`path_${v}`}>
                      <button
                        onClick={() => setCurrentNode(v)}
                        className={[
                          "font-cinzel flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left text-[11px] tracking-wide transition-all duration-200",
                          isActive
                            ? "bg-[rgba(160,120,48,0.15)] text-[#c9a35a]"
                            : isPast
                              ? "text-[#6b5535] hover:text-[#8b7045]"
                              : "text-[#3a2a10] cursor-not-allowed",
                        ].join(" ")}
                        disabled={!isPast && !isActive}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full shrink-0 ${isActive ? "bg-[#c9a35a] shadow-[0_0_6px_#c9a35a]" : isPast ? "bg-[#4a3820]" : "bg-[#1a1208]"}`}
                        />
                        {v}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* ── Main card ── */}
            {(currentNode && nodes[currentNode] && (
              <div
                className="animate-fadein relative flex-1 rounded-sm border border-[rgba(100,80,45,0.35)] bg-[rgba(15,10,4,0.95)] p-6"
                style={{
                  boxShadow:
                    "0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02)",
                }}
              >
                {/* Corner accents */}
                <div className="absolute left-2 top-2 h-3 w-3 border-l border-t border-[rgba(160,120,48,0.35)]" />
                <div className="absolute right-2 top-2 h-3 w-3 border-r border-t border-[rgba(160,120,48,0.35)]" />
                <div className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-[rgba(160,120,48,0.35)]" />
                <div className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-[rgba(160,120,48,0.35)]" />

                {/* Section title */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-[rgba(100,80,45,0.4)] to-transparent" />
                  <h2 className="font-cinzel text-xs uppercase tracking-[3px] text-[#8b7045]">
                    {currentNode}
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-l from-[rgba(100,80,45,0.4)] to-transparent" />
                </div>

                {/* Fields list */}
                <ul className="flex flex-col gap-5 mb-8">
                  {nodes[currentNode].component_types.map((v, i) => (
                    <li key={`${currentNode}-data-select-${i}-${v.name}`}>
                      {/* Field label */}
                      <div className="mb-1.5 flex items-center gap-2">
                        <span className="text-[rgba(160,120,48,0.5)] text-xs">
                          ◆
                        </span>
                        <span className="font-cinzel text-[11px] uppercase tracking-widest text-[#c9a35a]">
                          {v.name}
                        </span>
                      </div>

                      {/* Field component wrapper */}
                      <div
                        className="rounded-sm border  text-[rgba(260,220,200,0.5)] border-[rgba(100,80,45,0.2)] bg-[rgba(10,8,5,0.5)] p-3"
                        style={{
                          textShadow:
                            "0 0 40px rgba(201,163,90,0.3), 0 2px 4px rgba(0,0,0,0.8)",
                        }}
                      >
                        {(() => {
                          const Component = TypeComponents[v.type];
                          return (
                            <Component
                              component={nodes[currentNode].comp}
                              setter={(comp) =>
                                setNodes({
                                  ...nodes,
                                  [currentNode]: {
                                    ...nodes[currentNode],
                                    comp,
                                  },
                                })
                              }
                              type_interface={v}
                            />
                          );
                        })()}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-[rgba(100,80,45,0.2)]" />
                  <span className="text-[rgba(100,80,45,0.3)] text-xs">✦</span>
                  <div className="h-px flex-1 bg-[rgba(100,80,45,0.2)]" />
                </div>

                {/* Action button */}
                <div className="flex justify-end">
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
                      className="gold-btn font-cinzel flex items-center gap-2 rounded-sm border border-[rgba(201,163,90,0.4)] px-6 py-2.5 text-[11px] font-bold uppercase tracking-[2px] text-[#1a1208]"
                    >
                      Continue Quest
                      <span>→</span>
                    </button>
                  ) : (
                    <button
                      onClick={async () => {
                        const character_id = await submitCharacter(
                          id,
                          "bob",
                          currentPath,
                          nodes,
                        );

                        router.push(`/characters/${character_id}`);
                      }}
                      className="gold-btn font-cinzel flex items-center gap-2 rounded-sm border border-[rgba(201,163,90,0.4)] px-6 py-2.5 text-[11px] font-bold uppercase tracking-[2px] text-[#1a1208]"
                    >
                      ⚔ Forge Character
                    </button>
                  )}
                </div>
              </div>
            )) || (
              <div className="flex flex-1 items-center justify-center py-20">
                <p className="font-crimson animate-pulse text-sm italic text-[#3a2a10]">
                  The ancient scrolls are loading...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

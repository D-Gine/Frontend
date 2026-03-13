"use client";
import { useEffect, useRef, useState } from "react";
import { character } from "../types";
import { TypeComponents } from "@/components/TypedShower/utils";

export default function CharacterViewer({
  character,
}: {
  character: character;
}) {
  const componentRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string>(
    character.components[0]?.component_id ?? "",
  );

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          const id = visible[0].target.getAttribute("data-id");
          if (id) setActiveId(id);
        }
      },
      {
        root: container, // observe within the scroll container
        rootMargin: "0px 0px -90% 0px", // trigger when item enters top 40%
        threshold: 0,
      },
    );

    Object.entries(componentRefs.current).forEach(([, el]) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [character.components]);

  const scrollTo = (id: string) => {
    componentRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
      <div className="font-crimson relative min-h-[94.5vh]  bg-[#0a0805] overflow-y-hidden">
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
              {character.name}
            </h1>
            <p className="font-crimson text-sm italic tracking-widest text-[#c9a35a]">
              Acknowledge the power of {character.name}
            </p>
          </div>
          <div className="flex overflow-hidden">
            <div className="flex flex-row gap-4">
              {/* ── Sidebar navigation ── */}
              <div
                className="sticky top-4 self-start w-44 shrink-0 rounded-sm border border-[rgba(100,80,45,0.3)] bg-[rgba(15,10,4,0.9)] p-4"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
              >
                {/* Corner accents */}
                <div className="absolute left-1.5 top-1.5 h-2.5 w-2.5 border-l border-t border-[rgba(160,120,48,0.35)]" />
                <div className="absolute right-1.5 top-1.5 h-2.5 w-2.5 border-r border-t border-[rgba(160,120,48,0.35)]" />
                <div className="absolute bottom-1.5 left-1.5 h-2.5 w-2.5 border-b border-l border-[rgba(160,120,48,0.35)]" />
                <div className="absolute bottom-1.5 right-1.5 h-2.5 w-2.5 border-b border-r border-[rgba(160,120,48,0.35)]" />

                <p className="font-cinzel mb-3 text-[9px] uppercase tracking-[2px] text-[#c9a35a]">
                  Codex
                </p>

                <ul className="flex flex-col gap-1 max-h-[65vh] overflow-y-scroll no-scrollbar">
                  {character.components.map((comp) => (
                    <li key={`nav-${comp.component_id}`}>
                      <button
                        onClick={() =>
                          componentRefs.current[
                            comp.component_id
                          ]?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          })
                        }
                        className={`font-cinzel ghost-btn flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left text-[10px] uppercase tracking-wide transition-all duration-200
                          ${
                            activeId === comp.component_id
                              ? "text-[#c9a35a] border-[rgba(201,163,90,0.4)] bg-[rgba(160,120,48,0.1)]" // active
                              : "text-[#6b5535] hover:text-[#c9a35a]" // inactive
                          }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-200
                          ${activeId === comp.component_id ? "bg-[#c9a35a]" : "bg-[#3a2a10]"}`}
                        />
                        {comp.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              ref={scrollContainerRef}
              className="w-6/7 h-[70vh] overflow-y-scroll no-scrollbar"
            >
              <ul className="p-12 flex flex-col items-start gap-14">
                {character.components.map((comp) => (
                  <li
                    className="flex flex-col gap-5 w-full animate-fadein"
                    data-id={comp.component_id}
                    key={`components-${comp.component_id}`}
                    ref={(el) => {
                      componentRefs.current[comp.component_id] = el;
                    }}
                  >
                    {/* Section header */}
                    <div className="flex items-center gap-4 w-full">
                      <div className="h-px flex-1 bg-gradient-to-r from-[rgba(100,80,45,0.5)] to-transparent" />
                      <h2
                        className="font-cinzel text-2xl font-bold uppercase tracking-[3px] text-[#c9a35a]"
                        style={{ textShadow: "0 0 20px rgba(201,163,90,0.25)" }}
                      >
                        <span className="text-[#6b5535] mr-2 text-lg">◆</span>
                        {comp.name}
                      </h2>
                      <div className="h-px flex-1 bg-gradient-to-l from-[rgba(100,80,45,0.5)] to-transparent" />
                    </div>

                    {/* Component card */}
                    <div
                      className="relative w-full rounded-sm border border-[rgba(100,80,45,0.3)] bg-[rgba(15,10,4,0.9)] p-6"
                      style={{
                        boxShadow:
                          "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.02)",
                      }}
                    >
                      {/* Corner accents */}
                      <div className="absolute left-2 top-2 h-2.5 w-2.5 border-l border-t border-[rgba(160,120,48,0.35)]" />
                      <div className="absolute right-2 top-2 h-2.5 w-2.5 border-r border-t border-[rgba(160,120,48,0.35)]" />
                      <div className="absolute bottom-2 left-2 h-2.5 w-2.5 border-b border-l border-[rgba(160,120,48,0.35)]" />
                      <div className="absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-[rgba(160,120,48,0.35)]" />

                      <ul className="flex flex-col gap-4">
                        {comp.values.map(
                          ({ keyname, value, type, metadata }) => (
                            <li
                              key={`component-${comp.component_id}-value-${keyname}`}
                              className="flex flex-row items-start gap-5 border-b border-[rgba(100,80,45,0.12)] pb-4 last:border-0 last:pb-0"
                            >
                              {/* Field label */}
                              <div className="flex items-center gap-2 w-36 shrink-0 pt-0.5">
                                <span className="text-[rgba(160,120,48,0.4)] text-xs">
                                  ✦
                                </span>
                                <span className="font-cinzel text-[10px] uppercase tracking-widest text-[#c9a35a]">
                                  {keyname}
                                </span>
                              </div>

                              {/* Field value */}
                              <div className="flex-1 font-crimson text-[#9a8060]">
                                {(() => {
                                  const Comp = TypeComponents[type];
                                  return (
                                    <Comp
                                      keyname={keyname}
                                      value={value}
                                      metadata={metadata}
                                      type={type}
                                    />
                                  );
                                })()}
                              </div>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

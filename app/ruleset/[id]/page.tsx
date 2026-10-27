import React from "react";
import { get_ruleset_by_id, ruleset } from "./get_ruleset_by_id";
import ButtonCreate from "@/app/components/ButtonCreate";

export default async function RuleSetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ruleset: ruleset | undefined = await get_ruleset_by_id(id);

  if (!ruleset) return <p>ruleset not found</p>;

  return (
    <main className="flex flex-col gap-10 items-center font-crimson relative min-h-screen overflow-hidden bg-[#0a0805]">
      <div className="font-crimson relative min-h-screen overflow-hidden bg-[#0a0805]">
        {/* Ambient radial glows */}
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage: `
          radial-gradient(ellipse 80% 60% at 20% 10%, rgba(80,50,10,0.08) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 80% 80%, rgba(60,30,5,0.06) 0%, transparent 60%),
          radial-gradient(ellipse 40% 30% at 50% 50%, rgba(30,20,5,0.04) 0%, transparent 70%)
        `,
          }}
        />

        {/* Giant rune watermark */}
        <div className="animate-runeglow pointer-events-none fixed left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[600px] leading-none text-[rgba(160,120,48,0.03)]">
          ⚔
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 pb-20 pt-10">
          {/* Header */}
          <div className="animate-fadein mb-12 text-center">
            {/* Ornament row */}
            <div className="mb-3 flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-linear-to-r from-transparent to-[rgba(160,120,48,0.5)]" />
              <span className="animate-float text-[28px] text-[#c9a35a]">
                ⚜
              </span>
              <div className="h-px flex-1 bg-linear-to-l from-transparent to-[rgba(160,120,48,0.5)]" />
            </div>

            <h1
              className="font-cinzel mb-2 text-[clamp(28px,5vw,48px)] font-black uppercase tracking-[4px] text-[#c9a35a]"
              style={{
                textShadow:
                  "0 0 40px rgba(201,163,90,0.3), 0 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              {ruleset.name}
            </h1>

            {/* Sub-ornament */}
            <div className="mt-3 flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[rgba(100,80,45,0.4)]" />
              <span className="text-xs text-[rgba(100,80,45,0.5)]">✦</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[rgba(100,80,45,0.4)]" />
            </div>
          </div>
          <div className="group relative flex flex-col gap-2 rounded-sm border border-[rgba(100,80,45,0.35)] bg-[rgba(22,16,8,0.95)] p-6 transition-all duration-300">
            {/* Corner ornaments */}
            <span className="pointer-events-none absolute left-2 top-2 h-2 w-2 border-l border-t border-[rgba(160,120,48,0.4)]" />
            <span className="pointer-events-none absolute right-2 top-2 h-2 w-2 border-r border-t border-[rgba(160,120,48,0.4)]" />
            <span className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b border-l border-[rgba(160,120,48,0.4)]" />
            <span className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b border-r border-[rgba(160,120,48,0.4)]" />

            <ButtonCreate
              url={`/ruleset/${id}/create/character`}
              textInput="Create your character"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

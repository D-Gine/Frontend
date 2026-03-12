import React from "react";
import { get_rulesets } from "./get_ruleset";

export default async function RuleSetPage() {
  const { rulesets } = await get_rulesets();

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
              Ruleset
            </h1>

            <p className="font-crimson text-[15px] italic tracking-widest text-[#6b5535]">
              Select your ruleset to play your own campaign
            </p>

            {/* Sub-ornament */}
            <div className="mt-3 flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[rgba(100,80,45,0.4)]" />
              <span className="text-xs text-[rgba(100,80,45,0.5)]">✦</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[rgba(100,80,45,0.4)]" />
            </div>
          </div>
          {rulesets.length ? (
            <ul
              className="grid gap-4"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              }}
            >
              {rulesets.map((ruleset) => (
                <li key={ruleset.id} className="list-none">
                  <a
                    href={`/ruleset/${ruleset.id}`}
                    className="group relative flex flex-col gap-2 rounded-sm border border-[rgba(100,80,45,0.35)] bg-[rgba(22,16,8,0.95)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(201,163,90,0.5)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.7),0_0_30px_rgba(160,120,48,0.1)]"
                  >
                    {/* Corner ornaments */}
                    <span className="pointer-events-none absolute left-2 top-2 h-2 w-2 border-l border-t border-[rgba(160,120,48,0.4)]" />
                    <span className="pointer-events-none absolute right-2 top-2 h-2 w-2 border-r border-t border-[rgba(160,120,48,0.4)]" />
                    <span className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b border-l border-[rgba(160,120,48,0.4)]" />
                    <span className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b border-r border-[rgba(160,120,48,0.4)]" />

                    <h2
                      className="font-cinzel text-base font-bold uppercase tracking-widest text-[#c9a35a] transition-colors group-hover:text-[#e8c97a]"
                      style={{ textShadow: "0 0 20px rgba(201,163,90,0.2)" }}
                    >
                      {ruleset.name}
                    </h2>

                    <div className="h-px w-full bg-gradient-to-r from-[rgba(160,120,48,0.4)] via-[rgba(160,120,48,0.2)] to-transparent" />

                    <span className="font-cinzel mt-1 self-end text-[10px] uppercase tracking-[2px] text-[#4a3820] transition-colors group-hover:text-[#8b6535]">
                      Open scroll →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-6 py-20 text-center text-[#3a2a10]">
              <div className="mb-4 text-5xl opacity-40">📜</div>
              <p className="font-cinzel mb-2 text-base tracking-[2px]">
                No ruleset found
              </p>
              <p className="font-crimson text-sm italic">
                The ancient scrolls reveal nothing...
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

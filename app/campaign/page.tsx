"use client";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ButtonCreate from "../components/ButtonCreate";
import CampaignCard from "../components/CampaignCard";

// ─── Types ────────────────────────────────────────────────────────────────────
export type CampaignStatus = "active" | "paused" | "recruiting" | "completed";

export interface Campaign {
  id: number;
  title: string;
  system: string;
  players: number;
  sessions: number;
  statusCampaign: CampaignStatus;
  rating: number;
  dm: string;
  description: string;
  tags: string[];
  lastSession: string;
  image: string;
}

// ─── Fake data ────────────────────────────────────────────────────────────────
const CAMPAIGNS: Campaign[] = [
  {
    id: 1,
    title: "The Curse of Strahd",
    system: "D&D 5e",
    players: 5,
    sessions: 12,
    statusCampaign: "active",
    rating: 5,
    dm: "Aldric the Grey",
    description:
      "Deep in the mists of Barovia, a dark lord awaits. Can your party break the ancient curse before becoming pawns of Strahd Von Zarovich?",
    tags: ["Horror", "Gothic", "Exploration"],
    lastSession: "2 days ago",
    image: "🏰",
  },
  {
    id: 2,
    title: "Descent into Avernus",
    system: "D&D 5e",
    players: 4,
    sessions: 8,
    statusCampaign: "active",
    rating: 4,
    dm: "Sister Mira",
    description:
      "Hell has literally broken loose. Journey into Avernus, the first layer of the Nine Hells, to stop Baldur's Gate from being dragged into the inferno.",
    tags: ["Action", "Infernal", "Epic"],
    lastSession: "5 days ago",
    image: "🔥",
  },
  {
    id: 3,
    title: "Tomb of Annihilation",
    system: "D&D 5e",
    players: 6,
    sessions: 23,
    statusCampaign: "paused",
    rating: 5,
    dm: "Vex Thornwood",
    description:
      "A death curse grips the land. Only by venturing into the deadly jungles of Chult and finding the Soulmonger can the heroes bring salvation.",
    tags: ["Jungle", "Traps", "Mystery"],
    lastSession: "3 weeks ago",
    image: "💀",
  },
  {
    id: 4,
    title: "Storm King's Thunder",
    system: "D&D 5e",
    players: 3,
    sessions: 4,
    statusCampaign: "recruiting",
    rating: 3,
    dm: "Borak Ironfist",
    description:
      "Giants have emerged from their strongholds to threaten civilization. Heroes must journey into giant territory to uncover their dark plot.",
    tags: ["Giants", "Open World", "Epic"],
    lastSession: "1 week ago",
    image: "⛈️",
  },
  {
    id: 5,
    title: "Waterdeep: Dragon Heist",
    system: "D&D 5e",
    players: 4,
    sessions: 17,
    statusCampaign: "completed",
    rating: 4,
    dm: "Lady Cassavir",
    description:
      "Half a million gold coins have been hidden in Waterdeep. Rival factions race to claim the treasure. Who will emerge victorious in this city of splendors?",
    tags: ["City", "Intrigue", "Heist"],
    lastSession: "2 months ago",
    image: "🐉",
  },
  {
    id: 6,
    title: "Rime of the Frostmaiden",
    system: "D&D 5e",
    players: 5,
    sessions: 9,
    statusCampaign: "active",
    rating: 5,
    dm: "Aldric the Grey",
    description:
      "Endless winter grips Icewind Dale. The Frostmaiden Auril has cursed the land with eternal night. Only the bravest dare venture into the frozen darkness.",
    tags: ["Winter", "Horror", "Survival"],
    lastSession: "Yesterday",
    image: "❄️",
  },
];

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Campaign() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | CampaignStatus>(
    "all",
  );

  const filters: ("all" | CampaignStatus)[] = [
    "all",
    "active",
    "paused",
    "recruiting",
    "completed",
  ];

  const filtered = CAMPAIGNS.filter((c) => {
    const matchSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.dm.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchFilter =
      activeFilter === "all" || c.statusCampaign === activeFilter;
    return matchSearch && matchFilter;
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');

        .font-cinzel   { font-family: 'Cinzel', serif; }
        .font-crimson  { font-family: 'Crimson Text', Georgia, serif; }

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
          to   { opacity: 1; transform: translateY(0);    }
        }

        .animate-float    { animation: float 4s ease-in-out infinite; }
        .animate-runeglow { animation: runeGlow 6s ease-in-out infinite; }
        .animate-fadein   { animation: fadeInUp 0.7s ease both; }
        .animate-fadein-1 { animation: fadeInUp 0.7s ease 0.1s both; }
        .animate-fadein-2 { animation: fadeInUp 0.7s ease 0.2s both; }

        .filter-btn:hover { color: #8b6535 !important; }
      `}</style>

      {/* Page wrapper */}
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
        <div className="relative z-10 mx-auto max-w-8/10 px-6 pb-20 pt-10">
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
              Campaign Codex
            </h1>

            <p className="font-crimson text-[15px] italic tracking-widest text-[#6b5535]">
              Chronicles of heroic quests and legendary adventures
            </p>

            {/* Sub-ornament */}
            <div className="mt-3 flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[rgba(100,80,45,0.4)]" />
              <span className="text-xs text-[rgba(100,80,45,0.5)]">✦</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[rgba(100,80,45,0.4)]" />
            </div>
          </div>

          {/* Controls */}
          <div className="animate-fadein-1 mb-6 flex flex-wrap items-stretch gap-3">
            <div className="min-w-[240px] flex-1">
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
            <ButtonCreate textInput="New Campaign" />
          </div>

          {/* Filter tabs */}
          <div className="animate-fadein-2 mb-8 flex gap-1 border-b border-[rgba(100,80,45,0.2)]">
            {filters.map((f) => {
              const isActive = activeFilter === f;
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={[
                    "filter-btn font-cinzel -mb-px cursor-pointer border-b-2 bg-transparent px-4 py-2 text-[11px] uppercase tracking-widest transition-all duration-200",
                    isActive
                      ? "border-[#c9a35a] text-[#c9a35a] [text-shadow:0_0_12px_rgba(201,163,90,0.4)]"
                      : "border-transparent text-[#4a3820]",
                  ].join(" ")}
                >
                  {f === "all" ? "⚔ All Campaigns" : f}
                </button>
              );
            })}

            {/* Quest count */}
            <div className="ml-auto flex items-center pb-2">
              <span className="font-crimson text-xs italic text-[#3a2a10]">
                {filtered.length} {filtered.length === 1 ? "quest" : "quests"}{" "}
                found
              </span>
            </div>
          </div>

          {/* Campaign grid */}
          {filtered.length > 0 ? (
            <div
              className="grid gap-5"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
              }}
            >
              {filtered.map((c, i) => (
                <div
                  key={c.id}
                  className="animate-fadein"
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <CampaignCard campaign={c} />
                </div>
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="px-6 py-20 text-center text-[#3a2a10]">
              <div className="mb-4 text-5xl opacity-40">📜</div>
              <p className="font-cinzel mb-2 text-base tracking-[2px]">
                No quests found
              </p>
              <p className="font-crimson text-sm italic">
                The ancient scrolls reveal nothing matching your search...
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

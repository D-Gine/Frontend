"use client";

import { useState } from "react";

interface CampaignProps {
  id: number;
  title: string;
  system: string;
  players: number;
  sessions: number;
  statusCampaign: string;
  rating: number;
  dm: string;
  description: string;
  tags: string[];
  lastSession: string;
  image: string;
}

interface CampaignCardProps {
  campaign: CampaignProps;
}

interface StarIconProps {
  filled: boolean;
}

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7L12 2z" />
  </svg>
);

const ScrollIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-4 h-4"
  >
    <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-2" />
    <path d="M4 3a2 2 0 0 1 2 2v13" />
    <path d="M8 5h12v2H8" />
  </svg>
);
const UsersIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-4 h-4"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const StarIcon = ({ filled }: StarIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-3.5 h-3.5"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const STATUS_CONFIG = {
  active: {
    label: "Active",
    color: "#4ade80",
    glow: "rgba(74,222,128,0.3)",
  },
  paused: {
    label: "Paused",
    color: "#facc15",
    glow: "rgba(250,204,21,0.3)",
  },
  recruiting: {
    label: "Recruiting",
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.3)",
  },
  completed: {
    label: "Completed",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.3)",
  },
};

export default function CampaignCard({ campaign }: CampaignCardProps) {
  const [hovered, setHovered] = useState(false);
  const status =
    STATUS_CONFIG[campaign.statusCampaign as keyof typeof STATUS_CONFIG];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered
          ? "linear-gradient(145deg, rgba(30,22,12,0.98), rgba(20,14,6,0.98))"
          : "linear-gradient(145deg, rgba(22,16,8,0.95), rgba(15,10,3,0.95))",
        border: `1px solid ${hovered ? "rgba(201,163,90,0.5)" : "rgba(100,80,45,0.35)"}`,
        borderRadius: "6px",
        padding: "24px",
        cursor: "pointer",
        transition: "all 0.4s ease",
        transform: hovered ? "translateY(-3px)" : "none",
        boxShadow: hovered
          ? "0 12px 40px rgba(0,0,0,0.7), 0 0 30px rgba(160,120,48,0.1), inset 0 1px 0 rgba(201,163,90,0.1)"
          : "0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.02)",
        overflow: "hidden",
      }}
    >
      {/* Corner ornaments */}
      {[
        "top-2 left-2",
        "top-2 right-2",
        "bottom-2 left-2",
        "bottom-2 right-2",
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: pos.includes("top") ? "8px" : "auto",
            bottom: pos.includes("bottom") ? "8px" : "auto",
            left: pos.includes("left") ? "8px" : "auto",
            right: pos.includes("right") ? "8px" : "auto",
            width: "8px",
            height: "8px",
            borderTop: pos.includes("top")
              ? "1px solid rgba(160,120,48,0.4)"
              : "none",
            borderBottom: pos.includes("bottom")
              ? "1px solid rgba(160,120,48,0.4)"
              : "none",
            borderLeft: pos.includes("left")
              ? "1px solid rgba(160,120,48,0.4)"
              : "none",
            borderRight: pos.includes("right")
              ? "1px solid rgba(160,120,48,0.4)"
              : "none",
          }}
        />
      ))}

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            fontSize: "32px",
            lineHeight: 1,
            filter: "drop-shadow(0 0 8px rgba(201,163,90,0.3))",
            flexShrink: 0,
          }}
        >
          {campaign.image}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              marginBottom: "4px",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: "#e8d5a3",
                fontFamily: "'Cinzel', 'Trajan Pro', serif",
                fontSize: "16px",
                fontWeight: "700",
                letterSpacing: "0.5px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {campaign.title}
            </h3>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "2px 8px",
                background: `rgba(${status.color === "#4ade80" ? "74,222,128" : status.color === "#facc15" ? "250,204,21" : status.color === "#60a5fa" ? "96,165,250" : "167,139,250"},0.12)`,
                border: `1px solid ${status.color}40`,
                borderRadius: "20px",
                color: status.color,
                fontSize: "10px",
                fontFamily: "'Cinzel', serif",
                letterSpacing: "1px",
                textTransform: "uppercase",
                boxShadow: `0 0 8px ${status.glow}`,
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: status.color,
                  boxShadow: `0 0 6px ${status.color}`,
                }}
              />
              {status.label}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#6b5535",
              fontSize: "12px",
              fontFamily: "'Crimson Text', serif",
            }}
          >
            <ShieldIcon />
            <span>DM: {campaign.dm}</span>
            <span style={{ margin: "0 4px", opacity: 0.4 }}>•</span>
            <span>{campaign.system}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          margin: "0 0 16px",
          color: "#9a8060",
          fontSize: "13px",
          fontFamily: "'Crimson Text', Georgia, serif",
          lineHeight: "1.7",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {campaign.description}
      </p>

      {/* Tags */}
      <div
        style={{
          display: "flex",
          gap: "6px",
          marginBottom: "16px",
          flexWrap: "wrap",
        }}
      >
        {campaign.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "3px 10px",
              background: "rgba(139,115,85,0.1)",
              border: "1px solid rgba(139,115,85,0.2)",
              borderRadius: "2px",
              color: "#7a6040",
              fontSize: "11px",
              fontFamily: "'Crimson Text', serif",
              letterSpacing: "0.5px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "14px",
          borderTop: "1px solid rgba(100,80,45,0.2)",
        }}
      >
        <div style={{ display: "flex", gap: "16px" }}>
          {[
            { icon: <UsersIcon />, val: `${campaign.players} players` },
            { icon: <ScrollIcon />, val: `${campaign.sessions} sessions` },
          ].map(({ icon, val }) => (
            <div
              key={val}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "#6b5535",
                fontSize: "12px",
                fontFamily: "'Crimson Text', serif",
              }}
            >
              {icon}
              <span>{val}</span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{ display: "flex", gap: "2px", color: "#c9a35a" }}>
            {[1, 2, 3, 4, 5].map((s) => (
              <StarIcon key={s} filled={s <= campaign.rating} />
            ))}
          </div>
          <span
            style={{
              color: "#4a3820",
              fontSize: "11px",
              fontFamily: "'Crimson Text', serif",
            }}
          >
            {campaign.lastSession}
          </span>
        </div>
      </div>
    </div>
  );
}

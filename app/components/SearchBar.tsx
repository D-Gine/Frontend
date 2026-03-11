"use client";

import { Search } from "lucide-react";

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export default function SearchBar({
  searchQuery,
  setSearchQuery,
}: SearchInputProps) {
  return (
    <div style={{ position: "relative" }}>
      <span
        style={{
          position: "absolute",
          left: "14px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#8b7355",
          pointerEvents: "none",
        }}
      >
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder="Search ancient scrolls..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "12px 16px 12px 44px",
          background: "rgba(10,8,5,0.6)",
          border: "1px solid rgba(139,115,85,0.4)",
          borderRadius: "4px",
          color: "#e8d5a3",
          fontSize: "14px",
          fontFamily: "'Crimson Text', Georgia, serif",
          outline: "none",
          transition: "all 0.3s",
          boxSizing: "border-box",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "rgba(201,163,90,0.8)";
          e.target.style.boxShadow =
            "0 0 20px rgba(201,163,90,0.15), inset 0 0 10px rgba(0,0,0,0.3)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "rgba(139,115,85,0.4)";
          e.target.style.boxShadow = "none";
        }}
      />
    </div>
  );
}

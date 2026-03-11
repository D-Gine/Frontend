"use client";
import { useState } from "react";
import { Button } from "@heroui/button";
import { Plus } from "lucide-react";

interface ButtonCreateProps {
  textInput: string;
}

const PlusIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className="w-4 h-4"
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);

function handleNavCreate() {
  // naviguate throught the creation of button
}

export default function ButtonCreate({ textInput }: ButtonCreateProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={handleNavCreate}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "12px 24px",
        background: hovered
          ? "linear-gradient(135deg, #c9a35a 0%, #a07830 50%, #c9a35a 100%)"
          : "linear-gradient(135deg, #a07830 0%, #7a5c20 50%, #a07830 100%)",
        border: "1px solid rgba(201,163,90,0.6)",
        borderRadius: "4px",
        color: "#1a1208",
        fontSize: "13px",
        fontFamily: "'Cinzel', 'Trajan Pro', serif",
        fontWeight: "700",
        letterSpacing: "1px",
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "all 0.3s",
        boxShadow: hovered
          ? "0 0 25px rgba(201,163,90,0.5), 0 4px 15px rgba(0,0,0,0.4)"
          : "0 0 10px rgba(160,120,48,0.2), 0 2px 8px rgba(0,0,0,0.4)",
        transform: hovered ? "translateY(-1px)" : "none",
        textTransform: "uppercase",
      }}
    >
      <PlusIcon />
      {textInput}
    </button>
  );
}

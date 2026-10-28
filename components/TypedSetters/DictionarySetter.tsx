import { useState } from "react";
import { TypedSetter } from "./typed_setter.type";

type Row = { key: string; value: string };

const inputStyle: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  padding: "8px 12px",
  background: "rgba(10,8,5,0.6)",
  border: "1px solid rgba(139,115,85,0.4)",
  borderRadius: "4px",
  color: "#e8d5a3",
  fontSize: "14px",
  fontFamily: "'Crimson Text', Georgia, serif",
  outline: "none",
  boxSizing: "border-box",
};

export default function DictionarySetter({
  setter,
  component,
  type_interface,
}: TypedSetter) {
  const { name } = type_interface;

  const [rows, setRows] = useState<Row[]>(() =>
    Object.entries(component[name] ?? {}).map(([key, value]) => ({
      key,
      value: String(value),
    })),
  );

  function commit(next: Row[]) {
    setRows(next);
    const dict: Record<string, string> = {};
    for (const r of next) {
      if (r.key.trim() !== "") dict[r.key.trim()] = r.value;
    }
    setter({ ...component, [name]: dict });
  }

  function update(i: number, patch: Partial<Row>) {
    commit(rows.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));
  }

  return (
    <div className="flex flex-col gap-2 text-[rgba(250,220,150,0.5)]">
      <p>
        fill <span className="font-bold">{name}</span>
      </p>

      {rows.map((row, i) => (
        <div key={i} className="flex flex-row items-center gap-2">
          <input
            style={inputStyle}
            placeholder="key"
            value={row.key}
            onChange={(e) => update(i, { key: e.target.value })}
          />
          <input
            style={inputStyle}
            placeholder="value"
            value={row.value}
            onChange={(e) => update(i, { value: e.target.value })}
          />
          <button
            type="button"
            onClick={() => commit(rows.filter((_, idx) => idx !== i))}
            className="px-2 text-[#c9a35a] hover:text-[#e8d5a3]"
            aria-label="remove entry"
          >
            ✕
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => commit([...rows, { key: "", value: "" }])}
        className="ghost-btn self-start rounded-sm px-3 py-1 text-xs uppercase tracking-widest text-[#8b7045]"
      >
        + add entry
      </button>
    </div>
  );
}
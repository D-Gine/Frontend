"use client";

type Item = { id: number | string; name: string };

type Props = {
  current_value?: number | string;
  value_list: Item[];
  onChange: (value: string | undefined) => void;
};

export default function EnumSelect({ current_value, value_list, onChange }: Props) {
  return (
    <div className="relative w-full font-cinzel">
      <select
        value={current_value ?? ""}
        onChange={(e) => onChange(e.target.value || undefined)}
        className="
          w-full appearance-none cursor-pointer
          bg-[#0a0805] text-[#c9a35a]
          border border-[#c9a35a]/40 rounded-lg
          px-4 py-3 pr-10
          font-semibold tracking-wide
          shadow-lg shadow-black/40
          transition
          hover:border-[#c9a35a] hover:bg-red-950
          focus:outline-none focus:border-[#c9a35a] focus:ring-2 focus:ring-red-700/60
        "
      >
        <option value="" className="bg-[#0a0805] text-[#c9a35a]/60">
          -
        </option>
        {value_list.map((v) => (
          <option
            key={`enum-${v.id}`}
            value={v.id}
            className="bg-[#0a0805] text-[#c9a35a]"
          >
            {v.name}
          </option>
        ))}
      </select>

      {/* Flèche custom */}
      <svg
        className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#c9a35a]"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
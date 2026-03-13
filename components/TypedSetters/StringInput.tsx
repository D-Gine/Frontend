import { TypedSetter } from "./typed_setter.type";

export default function StringSetter({
  setter,
  component,
  type_interface,
}: TypedSetter) {
  return (
    <label className="flex flex-row justify-between text-[rgba(250,220,150,0.5)]">
      <p className="mt-3">
        enter <span className="font-bold">{type_interface.name}:</span>
      </p>
      <input
        type="text"
        placeholder="-"
        style={{
          width: "50%",
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
        maxLength={type_interface.metadata.max}
        onChange={(e) =>
          setter({ ...component, [type_interface.name]: e.target.value })
        }
      />
      {/* TODO make a good custom component */}
    </label>
  );
}

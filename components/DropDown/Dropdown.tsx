export default function Dropdown({
  value_list,
  current_value,
  onChange,
}: {
  value_list: { id: string; name: string }[];
  current_value: string | undefined;
  onChange: (arg0: string) => void;
}) {
  return (
    <select value={current_value} onChange={(e) => onChange(e.target.value)}>
      <option value={undefined}>-</option>
      {value_list.map((v) => (
        <option key={`enum-${v.id}`} value={v.id}>
          {v.name}
        </option>
      ))}
    </select>
  );
}

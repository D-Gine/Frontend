const possibility = [
  {
    name: "Stats",
    type: "list",
    metadata: {
      nested: {
        name: "Stat",
        type: "number",
        metadata: {
          min: 0,
          max: 20,
          type: "int",
        },
      },
      size: 4,
    },
  },
  {
    name: "Spells",
    type: "list",
    metadata: {
      size: 5,
      nested: {
        name: "Spell",
        type: "enum_tag",
        metadata: {
          possible_values: [
            { id: "1", name: "Acid Splash" },
            { id: "2", name: "Call Lightning" },
          ],
        },
      },
    },
  },
];

export async function POST(request: Request) {
  return new Response(
    JSON.stringify({
      node_id: "truc_bizzare_2",
      component_id: "comp2",
      name: "test 2",
      last: true,
      component_types: possibility,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
}

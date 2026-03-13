import { API_URL } from "@/constants/api_url";

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
  const body = await request.text();
  return fetch(`${API_URL}/api/characters/create/nextnode`, {
    method: "POST",
    body: body,
  });
}

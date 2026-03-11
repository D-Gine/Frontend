import { type } from "@/components/TypedSetters/typed_setter.type";

const possibility: type[] = [
  {
    name: "Normal Number",
    type: "number",
    metadata: {
      number: "float",
    },
  },
  {
    name: "Ranged Number",
    type: "number",
    metadata: {
      number: "int",
      min: 0,
      max: 20,
    },
  },
  {
    name: "Name",
    type: "string",
    metadata: {
      max: 10,
    },
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ruleset_id = searchParams.get("ruleset_id");

  console.log(JSON.stringify({ ruleset_id: ruleset_id }));
  // const req = new Request(
  //   `http://dengine-api:${process.env.API_PORT}/api/characters/create/firstnode?ruleset_id=${ruleset_id}`,
  //   {
  //     method: "GET",
  //     body: JSON.stringify({ ruleset_id: ruleset_id }),
  //   },
  // );
  //

  return new Response(
    JSON.stringify({
      node_id: "truc_bizzare_1",
      component_id: "comp1",
      name: "test",
      last: false,
      component_types: possibility,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );

  //return fetch(req);
}

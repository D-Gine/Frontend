export async function POST(request: Request) {
  console.log(request.body);

  return new Response(
    JSON.stringify({
      character_id: "character_id",
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
}

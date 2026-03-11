export async function GET(request: Request) {
  // For example, fetch data from your DB here
  const rulesets = [{ id: "id_1", name: "SRD5", description: "WOTC ruleset" }];
  return new Response(JSON.stringify(rulesets), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

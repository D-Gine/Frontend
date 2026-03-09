import React from "react";
import { get_ruleset_by_id, ruleset } from "./get_ruleset_by_id";

export default async function RuleSetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ruleset: ruleset | undefined = await get_ruleset_by_id(id);

  if (!ruleset) return <p>ruleset not found</p>;

  return (
    <main className="flex flex-col gap-10 items-center">
      <h1 className="text-6xl">{ruleset.name}</h1>
      <p>{ruleset.description}</p>
      <a href={`/ruleset/${id}/create/character`}>create character</a>
    </main>
  );
}

import React from "react";
import { get_rulesets } from "./get_ruleset";

export default async function RuleSetPage() {
  const { rulesets } = await get_rulesets();

  return (
    <main className="flex flex-col gap-10 items-center">
      <h1 className="text-6xl">Rulesets</h1>
      <ul className="flex flex-col gap-2">
        {rulesets.length ? (
          rulesets.map((ruleset) => (
            <li key={ruleset.id}>
              <a href={`/ruleset/${ruleset.id}`}>{ruleset.name}</a>
            </li>
          ))
        ) : (
          <li>no ruleset found</li>
        )}
      </ul>
    </main>
  );
}

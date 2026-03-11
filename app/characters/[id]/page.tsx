import { API_URL } from "@/constants/api_url";
import { character } from "../types";
import { getCharacterById } from "./get_character_by_id";
import CharacterViewer from "./CharacterViewer";

export default async function CharacterByIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const character: character = await getCharacterById(id);

  return <CharacterViewer character={character} />;
}

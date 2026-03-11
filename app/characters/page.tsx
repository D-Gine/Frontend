"use client"

import { useEffect, useState } from "react";

export default function ListCharacter() {
    const [characters, setCharacters] = useState([{
        "id": "",
        "name": "",
        "player_id": "",
    }])

    function handleNavInfo(chara_id : string) {
        
    }

    useEffect(() => {
        async function getCharacter() {
            try {
                const response = await fetch("http://localhost:8080/api/characters", {
                    method: "GET"
                })
                if (!response.ok) {
                    throw new Error("Error while trying to fetch users");
                }
                const data = await response.json();
                setCharacters(data)
            } catch (error) {
                console.log(error);
                console.error("Erreur:", error);
            }
        }
        getCharacter()
    }, [])

    return (
        <div>
            {characters.map((chara) => (
            <div
            key={chara.id}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2
                  className="text-2xl font-bold"
                  style={{ color: "black" }}
                >
                  {chara.name}
                </h2>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-red-700">{chara.name}</h3>
              </div>
              <button
                onClick={() => {
                  handleNavInfo(chara.id);
                }}
              >
                More info
              </button>
            </div>
            </div>
            ))}
        </div>
    )
}
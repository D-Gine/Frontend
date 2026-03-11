"use client";
import { useRef } from "react";
import { character } from "../types";
import { TypeComponents } from "@/components/TypedShower/utils";

export default function CharacterViewer({
  character,
}: {
  character: character;
}) {
  const componentRefs = useRef<Record<string, HTMLLIElement | null>>({});

  const scrollTo = (id: string) => {
    componentRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex flex-col items-center w-full gap-y-10 h-[94vh] overflow-hidden">
      <div className="flex flex-row items-center justify-center gap-5 w-1/2">
        <img
          className="h-64"
          src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
        />
        {/*default profile picture*/}
        <h1 className="text-7xl">{character.name}</h1>
      </div>
      <div className="flex flex-row w-6/7 overflow-hidden">
        <div className="overflow-y-scroll w-1/7">
          <ul className="p-5 flex flex-col items-start gap-2.5">
            {character.components.map((comp) => (
              <li
                className="hover:underline hover:cursor-pointer"
                key={`hook-${comp.component_id}`}
                onClick={() => scrollTo(comp.component_id)}
              >
                <a>{comp.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-y-scroll w-6/7">
          <ul className="p-12 flex flex-col items-start gap-14">
            {character.components.map((comp) => (
              <li
                className="flex flex-col gap-5"
                key={`components-${comp.component_id}`}
                ref={(el) => {
                  componentRefs.current[comp.component_id] = el;
                }}
              >
                <h2 className="text-4xl">{comp.name}</h2>
                <ul>
                  {comp.values.map(({ keyname, value, type, metadata }) => (
                    <li
                      key={`component-${comp.component_id}-value-${keyname}`}
                      className="flex flex-row items-start gap-5"
                    >
                      {(() => {
                        const Comp = TypeComponents[type];
                        return (
                          <Comp
                            keyname={keyname}
                            value={value}
                            metadata={metadata}
                            type={type}
                          />
                        );
                      })()}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

import { character } from "../types";

export async function getCharacterById(id: string): Promise<character> {
  return {
    name: "bob",
    components: [
      {
        component_id: "comp id 1",
        name: "Class",
        values: [
          {
            keyname: "class",
            type: "string",
            metadata: {},
            value: "Sorcerer",
          },
        ],
      },
      {
        component_id: "comp id 2",
        name: "Spells",
        values: [
          {
            keyname: "spells",
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
            value: ["1", "2", "1"],
          },
        ],
      },
      {
        component_id: "comp id 3",
        name: "Description",
        values: [
          {
            keyname: "description",
            type: "string",
            metadata: {
              size: 30,
            },
            value: "a wizard from the east",
          },
        ],
      },
      {
        component_id: "comp id 4",
        name: "Class",
        values: [
          {
            keyname: "class",
            type: "string",
            metadata: {},
            value: "Sorcerer",
          },
        ],
      },
      {
        component_id: "comp id 5",
        name: "Spells",
        values: [
          {
            keyname: "spells",
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
            value: ["1", "2", "1"],
          },
        ],
      },
      {
        component_id: "comp id 6",
        name: "Description",
        values: [
          {
            keyname: "description",
            type: "string",
            metadata: {
              size: 30,
            },
            value: "a wizard from the east",
          },
        ],
      },
      {
        component_id: "comp id 7",
        name: "Class",
        values: [
          {
            keyname: "class",
            type: "string",
            metadata: {},
            value: "Sorcerer",
          },
        ],
      },
      {
        component_id: "comp id 8",
        name: "Spells",
        values: [
          {
            keyname: "spells",
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
            value: ["1", "2", "1"],
          },
        ],
      },
      {
        component_id: "comp id 9",
        name: "Description",
        values: [
          {
            keyname: "description",
            type: "string",
            metadata: {
              size: 30,
            },
            value: "a wizard from the east",
          },
        ],
      },
      {
        component_id: "comp id 10",
        name: "Class",
        values: [
          {
            keyname: "class",
            type: "string",
            metadata: {},
            value: "Sorcerer",
          },
        ],
      },
      {
        component_id: "comp id 11",
        name: "Spells",
        values: [
          {
            keyname: "spells",
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
            value: ["1", "2", "1"],
          },
        ],
      },
      {
        component_id: "comp id 12",
        name: "Description",
        values: [
          {
            keyname: "description",
            type: "string",
            metadata: {
              size: 30,
            },
            value: "a wizard from the east",
          },
        ],
      },
      {
        component_id: "comp id 13",
        name: "Class",
        values: [
          {
            keyname: "class",
            type: "string",
            metadata: {},
            value: "Sorcerer",
          },
        ],
      },
      {
        component_id: "comp id 14",
        name: "Spells",
        values: [
          {
            keyname: "spells",
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
            value: ["1", "2", "1"],
          },
        ],
      },
      {
        component_id: "comp id 15",
        name: "Description",
        values: [
          {
            keyname: "description",
            type: "string",
            metadata: {
              size: 30,
            },
            value: "a wizard from the east",
          },
        ],
      },
      {
        component_id: "comp id 16",
        name: "Class",
        values: [
          {
            keyname: "class",
            type: "string",
            metadata: {},
            value: "Sorcerer",
          },
        ],
      },
      {
        component_id: "comp id 17",
        name: "Spells",
        values: [
          {
            keyname: "spells",
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
            value: ["1", "2", "1"],
          },
        ],
      },
      {
        component_id: "comp id 18",
        name: "Description",
        values: [
          {
            keyname: "description",
            type: "string",
            metadata: {
              size: 30,
            },
            value: "a wizard from the east",
          },
        ],
      },
      {
        component_id: "comp id 19",
        name: "Class",
        values: [
          {
            keyname: "class",
            type: "string",
            metadata: {},
            value: "Sorcerer",
          },
        ],
      },
      {
        component_id: "comp id 20",
        name: "Spells",
        values: [
          {
            keyname: "spells",
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
            value: ["1", "2", "1"],
          },
        ],
      },
      {
        component_id: "comp id 21",
        name: "Description",
        values: [
          {
            keyname: "description",
            type: "string",
            metadata: {
              size: 30,
            },
            value: "a wizard from the east",
          },
        ],
      },
      {
        component_id: "comp id 22",
        name: "Class",
        values: [
          {
            keyname: "class",
            type: "string",
            metadata: {},
            value: "Sorcerer",
          },
        ],
      },
      {
        component_id: "comp id 23",
        name: "Spells",
        values: [
          {
            keyname: "spells",
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
            value: ["1", "2", "1"],
          },
        ],
      },
      {
        component_id: "comp id 24",
        name: "Description",
        values: [
          {
            keyname: "description",
            type: "string",
            metadata: {
              size: 30,
            },
            value: "a wizard from the east",
          },
        ],
      },
      {
        component_id: "comp id 25",
        name: "Class",
        values: [
          {
            keyname: "class",
            type: "string",
            metadata: {},
            value: "Sorcerer",
          },
        ],
      },
      {
        component_id: "comp id 26",
        name: "Spells",
        values: [
          {
            keyname: "spells",
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
            value: ["1", "2", "1"],
          },
        ],
      },
      {
        component_id: "comp id 27",
        name: "Description",
        values: [
          {
            keyname: "description",
            type: "string",
            metadata: {
              size: 30,
            },
            value: "a wizard from the east",
          },
        ],
      },
    ],
  };
}

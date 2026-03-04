export type Didgit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Percent = "100" | `${Didgit}${Didgit | 0}` | `${Didgit | 0}`;

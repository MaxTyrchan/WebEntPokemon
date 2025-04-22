export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

import { defineStore } from "pinia";
import type { Pokemon } from "~/types/pokemon";
import { mockAllPokemon } from "~/types/mock-data";

export const useCompareStore = defineStore("compare", {
  state: (): {
    allPokemon: Pokemon[];
    selectedPokemon: (Pokemon | null)[];
    searchQueries: string[];
  } => ({
    allPokemon: [],
    selectedPokemon: [null, null],
    searchQueries: ["", ""],
  }),

  getters: {
    filteredPokemon: (state) => (index: number) => {
      return state.allPokemon.filter((p) =>
        p.name.toLowerCase().includes(state.searchQueries[index].toLowerCase())
      );
    },
  },

  actions: {
    fetchAllPokemon() {
      this.allPokemon = mockAllPokemon;
    },

    selectPokemon(pokemon: Pokemon, index: number) {
      this.selectedPokemon[index] = pokemon;
      this.searchQueries[index] = "";
    },

    setSearchQuery(query: string, index: number) {
      this.searchQueries[index] = query;
    },

    clearSearchQuery(index: number) {
      this.searchQueries[index] = "";
    },
  },
});

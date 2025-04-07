import { defineStore } from "pinia";
import type { Pokemon } from "~/types/pokemon";

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
    async fetchAllPokemon() {
      try {
        const responses = await Promise.all(
          Array.from({ length: 151 }, (_, i) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
              .then((res) => res.json())
              .catch((error) => {
                console.error(`Error fetching Pokemon ${i + 1}:`, error);
                return null;
              })
          )
        );
        // Type assertion might be needed here if the API response format isn’t certain.
        this.allPokemon = responses.filter((p): p is Pokemon => p !== null);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
        this.allPokemon = [];
      }
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

import { defineStore } from "pinia";

interface Pokemon {
  id: number;
  name: string;
  // ...other properties as needed...
}

export const usePokemonStore = defineStore("pokemon", {
  state: (): {
    allPokemon: Pokemon[];
    searchQuery: string;
    selectedPokemon: Pokemon | null;
    loading: boolean;
    error: boolean;
  } => ({
    allPokemon: [],
    searchQuery: "",
    selectedPokemon: null,
    loading: false,
    error: false,
  }),

  getters: {
    filteredPokemon: (state) => {
      return state.allPokemon.filter((p) =>
        p.name.toLowerCase().includes(state.searchQuery.toLowerCase())
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
        this.allPokemon = responses.filter((p): p is Pokemon => p !== null);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
        this.allPokemon = [];
      }
    },

    async fetchPokemonByName(name: string) {
      this.loading = true;
      this.error = false;
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        this.selectedPokemon = await response.json();
      } catch (err) {
        console.error("Error fetching Pokemon:", err);
        this.error = true;
        this.selectedPokemon = null;
      } finally {
        this.loading = false;
      }
    },

    setSearchQuery(query: string) {
      this.searchQuery = query;
    },

    clearSearchQuery() {
      this.searchQuery = "";
    },
  },
});

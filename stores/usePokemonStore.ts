import { defineStore } from "pinia";
import type { Pokemon } from "~/types/pokemon";

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
      this.loading = true;
      this.error = false;
      try {
        const responses = await Promise.all(
          Array.from({ length: 151 }, (_, i) =>
            $fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`).catch(
              (error) => {
                console.error(`Error fetching Pokemon ${i + 1}:`, error);
                return null;
              }
            )
          )
        );
        this.allPokemon = responses.filter((p): p is Pokemon => p !== null);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
        this.error = true;
        this.allPokemon = [];
      } finally {
        this.loading = false;
      }
    },

    async fetchPokemonByName(name: string) {
      this.loading = true;
      this.error = false;
      try {
        this.selectedPokemon = await $fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
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

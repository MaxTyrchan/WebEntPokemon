import { defineStore } from "pinia";
import type { Pokemon } from "~/types/pokemon";
import { mockAllPokemon } from "~/types/mock-data";

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
    filterPokemon: (state) => {
      return state.allPokemon.filter((p) =>
        p.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },

  actions: {
    fetchAllPokemon() {
      this.allPokemon = mockAllPokemon;
    },

    fetchPokemonByName(name: string) {
      this.selectedPokemon =
        this.allPokemon.find(
          (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
        ) || null;
      if (!this.selectedPokemon) {
        this.error = true;
        this.loading = false;
      } else {
        this.error = false;
        this.loading = false;
      }
    },

    clearSearchQuery() {
      this.searchQuery = "";
    },
  },
});

<template>
  <div class="container">
    <div class="search-container">
      <div class="search-wrapper">
        <input v-model="store.searchQuery" type="text" placeholder="Search Pokémon..." class="search-input" />
        <button v-if="store.searchQuery" @click="store.clearSearchQuery()" class="clear-button"
          aria-label="Clear search">✕</button>
      </div>
    </div>

    <div class="flex justify-center mb-6">
      <NuxtLink to="/compare" class="compare-button">
        Compare Pokémon
      </NuxtLink>
    </div>

    <div v-if="store.allPokemon.length" class="pokemon-grid">
      <PokemonCard v-for="pokemon in store.filteredPokemon" :key="pokemon.id" :pokemon="pokemon" />
    </div>
    <div v-else class="text-center text-gray-600">Loading Pokémon...</div>
  </div>
</template>

<script setup>
const store = usePokemonStore();

onMounted(() => {
  store.fetchAllPokemon();
});
</script>

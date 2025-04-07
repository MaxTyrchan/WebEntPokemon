<template>
  <div class="container">
    <div class="flex justify-between items-center mb-8">
      <button @click="navigateBack" class="back-button">← Back to List</button>
      <h1 class="page-title">Compare Pokémon</h1>
      <div class="w-[104px]"></div>
    </div>

    <div class="compare-container">
      <div
        v-for="(selected, index) in store.selectedPokemon"
        :key="index"
        class="compare-search"
      >
        <div class="relative">
          <input
            v-model="store.searchQueries[index]"
            type="text"
            :placeholder="`Search Pokémon ${index + 1}...`"
            class="search-input"
          />
          <button
            v-if="store.searchQueries[index]"
            @click="store.clearSearchQuery(index)"
            class="clear-button"
          >
            ✕
          </button>
        </div>

        <div v-if="store.searchQueries[index]" class="compare-results">
          <ul class="space-y-2">
            <li
              v-for="pokemon in store.filteredPokemon(index)"
              :key="pokemon.id"
              @click="store.selectPokemon(pokemon, index)"
              class="compare-item"
            >
              <img
                :src="pokemon.sprites.front_default"
                :alt="pokemon.name"
                class="compare-pokemon-image"
              />
              <span class="capitalize">{{ pokemon.name }}</span>
            </li>
          </ul>
        </div>

        <div v-if="selected" class="detail-container">
          <div class="flex items-center gap-4 mb-4">
            <img
              :src="selected.sprites.other['official-artwork'].front_default"
              :alt="selected.name"
              class="w-32 h-32 object-contain"
            />
            <h2 class="detail-title">{{ selected.name }}</h2>
          </div>

          <div class="space-y-4">
            <div>
              <h3 class="section-title">Types</h3>
              <div class="type-container">
                <TypeBadge
                  v-for="type in selected.types"
                  :key="type.type.name"
                  :type="type.type.name"
                />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <h3 class="section-title">Height</h3>
                <p>{{ (selected.height * 0.1).toFixed(1) }} m</p>
              </div>
              <div>
                <h3 class="section-title">Weight</h3>
                <p>{{ (selected.weight * 0.1).toFixed(1) }} kg</p>
              </div>
            </div>

            <div>
              <h3 class="section-title">Base Stats</h3>
              <div class="stats-container">
                <div
                  v-for="stat in selected.stats"
                  :key="stat.stat.name"
                  class="stat-row"
                >
                  <span class="stat-name">{{ stat.stat.name }}:</span>
                  <div class="stat-bar-container">
                    <div
                      class="h-full"
                      :class="getStatBarColor(stat.base_stat)"
                      :style="{ width: `${(stat.base_stat / 255) * 100}%` }"
                    ></div>
                  </div>
                  <span class="stat-value">{{ stat.base_stat }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useCompareStore();

const getStatBarColor = (value) => {
  if (value >= 100) return "bg-green-500";
  if (value >= 50) return "bg-blue-500";
  return "bg-red-500";
};

const navigateBack = () => {
  navigateTo("/");
};

onMounted(() => {
  store.fetchAllPokemon();
});
</script>

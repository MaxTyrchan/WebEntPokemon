<template>
  <div class="container">
    <div class="detail-header">
      <button @click="navigateBack" class="back-button">← Back to List</button>
    </div>

    <div v-if="store.error" class="text-center text-red-600">
      Failed to load Pokémon data. Please try again later.
    </div>

    <div v-else-if="store.loading" class="text-center text-gray-600">
      Loading...
    </div>

    <div v-else-if="store.selectedPokemon" class="detail-container">
      <div class="detail-layout">
        <img :src="store.selectedPokemon?.sprites?.other?.['official-artwork']
          ?.front_default
          " :alt="store.selectedPokemon.name" class="detail-image" />

        <div class="detail-content">
          <h1 class="detail-title">{{ store.selectedPokemon.name }}</h1>

          <div class="mb-6">
            <h2 class="section-title">Types</h2>
            <div class="type-container">
              <div v-for="(type, index) in store.selectedPokemon.types" :key="index">
                <p>{{ type.type.name }}</p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h2 class="section-title">Height</h2>
              <p>
                {{
                  store.selectedPokemon.height
                    ? (store.selectedPokemon.height * 0.1).toFixed(1)
                    : "N/A"
                }}
                m
              </p>
            </div>
            <div>
              <h2 class="section-title">Weight</h2>
              <p>
                {{
                  store.selectedPokemon.weight
                    ? (store.selectedPokemon.weight * 0.1).toFixed(1)
                    : "N/A"
                }}
                kg
              </p>
            </div>
          </div>

          <div>
            <h2 class="section-title">Base Stats</h2>
            <div class="stats-container">
              <div v-for="stat in store.selectedPokemon?.stats" :key="stat?.stat?.name" class="stat-row">
                <span class="stat-name">{{ stat?.stat?.name }}:</span>
                <div class="stat-bar-container">
                  <div class="h-full bg-blue-500" :style="{
                    width: `${((stat?.base_stat || 0) / 255) * 100}%`,
                  }"></div>
                </div>
                <span class="stat-value">{{ stat?.base_stat || 0 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const store = usePokemonStore();

onMounted(() => {
  store.fetchPokemonByName(route.params.name);
});

const navigateBack = () => {
  navigateTo("/");
};
</script>

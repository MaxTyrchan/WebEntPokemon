<template>
  <div class="container">
    <button @click="navigateBack" class="back-button">← Back to List</button>

    <div v-if="error" class="text-center text-red-600">
      Failed to load Pokémon data. Please try again later.
    </div>

    <div v-else-if="loading" class="text-center text-gray-600">Loading...</div>

    <div v-else-if="pokemon" class="detail-container">
      <div class="detail-layout">
        <img
          :src="pokemon?.sprites?.other?.['official-artwork']?.front_default"
          :alt="pokemon.name"
          class="detail-image"
        />

        <div class="detail-content">
          <h1 class="detail-title">{{ pokemon.name }}</h1>

          <div class="mb-6">
            <h2 class="section-title">Types</h2>
            <div class="type-container">
              <TypeBadge
                v-for="type in pokemon?.types"
                :key="type?.type?.name"
                :type="type?.type?.name"
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h2 class="section-title">Height</h2>
              <p>
                {{
                  pokemon.height ? (pokemon.height * 0.1).toFixed(1) : "N/A"
                }}
                m
              </p>
            </div>
            <div>
              <h2 class="section-title">Weight</h2>
              <p>
                {{
                  pokemon.weight ? (pokemon.weight * 0.1).toFixed(1) : "N/A"
                }}
                kg
              </p>
            </div>
          </div>

          <div>
            <h2 class="section-title">Base Stats</h2>
            <div class="stats-container">
              <div
                v-for="stat in pokemon?.stats"
                :key="stat?.stat?.name"
                class="stat-row"
              >
                <span class="stat-name">{{ stat?.stat?.name }}:</span>
                <div class="stat-bar-container">
                  <div
                    class="h-full bg-blue-500"
                    :style="{
                      width: `${((stat?.base_stat || 0) / 255) * 100}%`,
                    }"
                  ></div>
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

const { data: pokemon, error } = useFetch(
  `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
);

// Code when we would use the fetch API directly instead of useFetch
// const pokemon = ref(null);
// const loading = ref(true);
// const error = ref(false);

// onMounted(async () => {
//   try {
//     loading.value = true;
//     error.value = false;
//     const response = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     pokemon.value = await response.json();
//   } catch (err) {
//     console.error("Error fetching Pokemon:", err);
//     error.value = true;
//   } finally {
//     loading.value = false;
//   }
// });

const navigateBack = () => {
  navigateTo("/");
};
</script>

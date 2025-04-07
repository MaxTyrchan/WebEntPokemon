<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-8">
      <button
        @click="navigateBack"
        class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        ← Back to List
      </button>
      <h1 class="text-4xl font-bold text-center">Compare Pokémon</h1>
      <div class="w-[104px]"></div>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <div
        v-for="(selected, index) in selectedPokemon"
        :key="index"
        class="space-y-4"
      >
        <div class="relative">
          <input
            v-model="searchQueries[index]"
            type="text"
            :placeholder="`Search Pokémon ${index + 1}...`"
            class="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            v-if="searchQueries[index]"
            @click="searchQueries[index] = ''"
            class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div
          v-if="searchQueries[index]"
          class="bg-white rounded-lg shadow-md p-4 max-h-60 overflow-y-auto"
        >
          <ul class="space-y-2">
            <li
              v-for="pokemon in filteredPokemon(index)"
              :key="pokemon.id"
              @click="selectPokemon(pokemon, index)"
              class="flex items-center gap-4 p-2 rounded hover:bg-gray-100 cursor-pointer"
            >
              <img
                :src="pokemon.sprites.front_default"
                :alt="pokemon.name"
                class="w-12 h-12"
              />
              <span class="capitalize">{{ pokemon.name }}</span>
            </li>
          </ul>
        </div>

        <div v-if="selected" class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center gap-4 mb-4">
            <img
              :src="selected.sprites.other['official-artwork'].front_default"
              :alt="selected.name"
              class="w-32 h-32 object-contain"
            />
            <h2 class="text-2xl font-bold capitalize">{{ selected.name }}</h2>
          </div>

          <div class="space-y-4">
            <div>
              <h3 class="font-semibold mb-2">Types</h3>
              <div class="flex gap-2">
                <TypeBadge
                  v-for="type in selected.types"
                  :key="type.type.name"
                  :type="type.type.name"
                />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <h3 class="font-semibold">Height</h3>
                <p>{{ (selected.height * 0.1).toFixed(1) }} m</p>
              </div>
              <div>
                <h3 class="font-semibold">Weight</h3>
                <p>{{ (selected.weight * 0.1).toFixed(1) }} kg</p>
              </div>
            </div>

            <div>
              <h3 class="font-semibold mb-2">Base Stats</h3>
              <div class="space-y-2">
                <div
                  v-for="stat in selected.stats"
                  :key="stat.stat.name"
                  class="flex items-center"
                >
                  <span class="w-32 capitalize">{{ stat.stat.name }}:</span>
                  <div
                    class="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden"
                  >
                    <div
                      class="h-full"
                      :class="getStatBarColor(stat.base_stat)"
                      :style="{ width: `${(stat.base_stat / 255) * 100}%` }"
                    ></div>
                  </div>
                  <span class="ml-2 w-12 text-right">{{ stat.base_stat }}</span>
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
const allPokemon = ref([]);
const selectedPokemon = ref([null, null]);
const searchQueries = ref(["", ""]);

// More beginner friendly version
const filteredPokemon = (index) => {
  // Get the search query for the specified index and convert it to lowercase
  const query = searchQueries.value[index].toLowerCase();

  // Filter the list of all Pokémon
  const results = allPokemon.value.filter((pokemon) => {
    // Check if the pokemon exists and has a name
    if (!pokemon || !pokemon.name) {
      return false;
    }

    // Convert the Pokémon's name to lowercase
    const pokemonName = pokemon.name.toLowerCase();

    // Include this Pokémon if its name contains the search query
    return pokemonName.includes(query);
  });

  // Return the filtered Pokémon list
  return results;
};

// More advanced version
// const filteredPokemon = (index) => {
//   return allPokemon.value.filter(
//     (p) =>
//       p &&
//       p.name &&
//       p.name.toLowerCase().includes(searchQueries.value[index].toLowerCase())
//   );
// };

const selectPokemon = (pokemon, index) => {
  selectedPokemon.value[index] = pokemon;
  searchQueries.value[index] = "";
};

const getStatBarColor = (value) => {
  if (value >= 100) return "bg-green-500";
  if (value >= 50) return "bg-blue-500";
  return "bg-red-500";
};

const navigateBack = () => {
  navigateTo("/");
};

onMounted(async () => {
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
    allPokemon.value = responses.filter((p) => p !== null);
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    allPokemon.value = [];
  }
});
</script>

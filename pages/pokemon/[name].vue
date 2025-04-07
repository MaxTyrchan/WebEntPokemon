<template>
  <div class="container mx-auto px-4 py-8">
    <button 
      @click="navigateBack"
      class="mb-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
    >
      ← Back to List
    </button>

    <div v-if="error" class="text-center text-red-600">
      Failed to load Pokémon data. Please try again later.
    </div>

    <div v-else-if="loading" class="text-center text-gray-600">
      Loading...
    </div>

    <div v-else-if="pokemon" class="bg-white rounded-lg shadow-lg p-8">
      <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
        <img 
          :src="pokemon?.sprites?.other?.['official-artwork']?.front_default"
          :alt="pokemon.name"
          class="w-64 h-64 object-contain"
        >

        <div class="flex-1">
          <h1 class="text-4xl font-bold capitalize mb-4">{{ pokemon.name }}</h1>
          
          <div class="mb-6">
            <h2 class="text-xl font-semibold mb-2">Types</h2>
            <div class="flex flex-wrap gap-2">
              <TypeBadge 
                v-for="type in pokemon?.types" 
                :key="type?.type?.name"
                :type="type?.type?.name"
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h2 class="text-xl font-semibold mb-2">Height</h2>
              <p>{{ pokemon.height ? (pokemon.height * 0.1).toFixed(1) : 'N/A' }} m</p>
            </div>
            <div>
              <h2 class="text-xl font-semibold mb-2">Weight</h2>
              <p>{{ pokemon.weight ? (pokemon.weight * 0.1).toFixed(1) : 'N/A' }} kg</p>
            </div>
          </div>

          <div>
            <h2 class="text-xl font-semibold mb-2">Base Stats</h2>
            <div class="space-y-2">
              <div v-for="stat in pokemon?.stats" :key="stat?.stat?.name" class="flex items-center">
                <span class="w-32 capitalize">{{ stat?.stat?.name }}:</span>
                <div class="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    class="h-full bg-blue-500"
                    :style="{ width: `${((stat?.base_stat || 0) / 255) * 100}%` }"
                  ></div>
                </div>
                <span class="ml-2 w-12 text-right">{{ stat?.base_stat || 0 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const pokemon = ref(null)
const loading = ref(true)
const error = ref(false)

onMounted(async () => {
  try {
    loading.value = true
    error.value = false
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    pokemon.value = await response.json()
  } catch (err) {
    console.error('Error fetching Pokemon:', err)
    error.value = true
  } finally {
    loading.value = false
  }
})

const navigateBack = () => {
  router.push('/')
}
</script>
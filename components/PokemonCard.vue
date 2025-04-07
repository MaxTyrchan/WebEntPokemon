<template>
  <NuxtLink :to="`/pokemon/${pokemon.name}`" 
    class="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300">
    <img 
      :src="pokemon.sprites.front_default" 
      :alt="pokemon.name"
      class="w-32 h-32 mx-auto"
    >
    <h2 class="text-xl font-semibold text-center mt-2 capitalize">
      {{ pokemon.name }}
    </h2>
  </NuxtLink>
</template>

<script setup>
defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <NuxtLink :to="`/pokemon/${pokemon.name}`" class="pokemon-card">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" class="pokemon-image" />
    <h2 class="pokemon-name">
      {{ pokemon.name }}
    </h2>
    <div class="type-container  justify-center">
      <TypeBadge v-for="type in pokemon.types" :key="type.type.name" :type="type.type.name" />
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});
</script>

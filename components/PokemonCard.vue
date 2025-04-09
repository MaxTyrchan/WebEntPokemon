<template>
  <NuxtLink :to="`/pokemon/${pokemon.name}`" class="pokemon-card">
    <h2 class="pokemon-name">
      {{ pokemon.name }}
    </h2>
    <div class="type-container">
      <TypeBadge
        v-for="type in pokemon.types"
        :key="type.type.name"
        :type="type.type.name"
      />
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

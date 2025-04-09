<template>
  <div class="container">
    <div class="search-container">
      <div class="search-wrapper">
        <input
          type="text"
          placeholder="Search Pokémon..."
          class="search-input"
        />
        <button class="clear-button" aria-label="Clear search">🗑️</button>
      </div>
    </div>

    <div class="flex justify-center mb-6">
      <NuxtLink
        to="/compare"
        class="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
      >
        Compare Pokémon
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

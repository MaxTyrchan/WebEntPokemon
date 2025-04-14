<template>
  <div class="container">
    <div class="search-container">
      <div class="search-wrapper">
        <input type="text" placeholder="Search Pokémon..." class="search-input" />
        <button class="clear-button" aria-label="Clear search">✕</button>
      </div>
    </div>

    <div class="flex justify-center mb-6">
      <NuxtLink to="/compare" class="compare-button">
        Compare Pokémon
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>
‚
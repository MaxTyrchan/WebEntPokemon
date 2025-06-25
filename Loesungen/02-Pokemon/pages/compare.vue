<template>
  <div class="container">
    <div class="compare-container">
      <button @click="navigateBack" class="back-button">← Back to List</button>
      <h1 class="compare-title">Compare Pokémon</h1>
    </div>

    <div class="compare-search-container">
      <div class="compare-search">
        <div class="relative">
          <input type="text" :placeholder="`Search Pokémon...`" class="search-input" />
          <button class="clear-button">✕</button>
        </div>
      </div>
      <div class="compare-search">
        <div class="relative">
          <input type="text" :placeholder="`Search Pokémon...`" class="search-input" />
          <button class="clear-button">✕</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const navigateBack = () => {
  navigateTo("/");
};
</script>

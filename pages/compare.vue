<template>
  <div class="container">
    <div class="flex justify-between items-center mb-8">
      <button @click="navigateBack" class="back-button">← Back to List</button>
      <h1 class="page-title">Compare Pokémon</h1>
      <div class="w-[104px]"></div>
    </div>

    <div class="compare-container">
      <div class="compare-search">
        <div class="relative">
          <input
            type="text"
            :placeholder="`Search Pokémon...`"
            class="search-input"
          />
          <button class="clear-button">✕</button>
        </div>
      </div>
      <div class="compare-search">
        <div class="relative">
          <input
            type="text"
            :placeholder="`Search Pokémon...`"
            class="search-input"
          />
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

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <header class="bg-gray-200">
      <div class="header">
        <NuxtLink to="/" class="flex items-center">
          <h1 class="page-title">Pokédex</h1>
        </NuxtLink>
      </div>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="bg-gray-200 py-4 text-start text-gray-700">
      <div class="container mx-auto px-4">
        <p>&copy; Pokédex App - Entwicklung von Web-Anwendungen SS 2025</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// You can add layout-specific logic here
</script>

<style scoped>
/* Add any scoped styles for your layout here */
</style>

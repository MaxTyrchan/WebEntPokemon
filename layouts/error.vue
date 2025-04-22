<template>
    <div class="error-container">
        <h1 class="error-title">404</h1>

        <main class="py-4">
            <slot />
        </main>

        <NuxtLink to="/" class="error-link">
            Zurück zur Startseite
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
// Hier kannst du spezifische Logik für die Error-Seite hinzufügen
</script>

<style scoped>
/* Füge hier spezifische Styles für die Error-Seite hinzu */
</style>
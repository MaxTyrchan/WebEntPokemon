<template>
    <div class="default">
        <header class="header">
            <div class="container">
                <NuxtLink to="/">
                    <h1 class="page-title">Pokédex</h1>
                </NuxtLink>
            </div>
        </header>

        <main class="main">
            <slot />
        </main>

        <footer class="footer">
            <div class="container">
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

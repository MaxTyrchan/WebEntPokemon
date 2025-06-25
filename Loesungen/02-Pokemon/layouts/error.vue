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

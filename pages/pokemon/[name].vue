<template>
  <div class="container">
    <button @click="navigateBack" class="back-button">← Back to List</button>
  </div>
</template>

<script setup>
const navigateBack = () => {
  navigateTo("/");
};
</script>

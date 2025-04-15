<template>
  <div class="container">
    <div class="detail-header">
      <button @click="navigateBack" class="back-button">← Back to List</button>
    </div>
    <div class="detail-container">
      <h1 class="detail-title">My Pokemon - Just a test</h1>
    </div>
  </div>
</template>

<script setup>
const navigateBack = () => {
  navigateTo("/");
};
</script>



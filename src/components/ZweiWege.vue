<template>
    <div>
      <input v-model="message" />
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: ''
      };
    }
  };
  </script>
  
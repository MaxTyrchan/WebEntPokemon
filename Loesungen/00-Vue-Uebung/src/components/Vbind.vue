<template>
    <div>
      <a v-bind:href="url" target="_blank">Zur Website</a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        url: 'https://www.hdm-stuttgart.de/'
      };
    }
  };
  </script>
  
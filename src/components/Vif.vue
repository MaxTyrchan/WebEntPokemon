<template>
    <div>
      <button v-on:click="show = !show">Toggle</button>
      <p v-if="show">🎉 Ich bin sichtbar!</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: true
      };
    }
  };
  </script>
  
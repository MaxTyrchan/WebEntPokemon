<template>
    <div>
      <ul>
        <li v-for="(fruit, index) in fruits" :key="index">{{ fruit }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fruits: ['🍎 Apfel', '🍌 Banane', '🍇 Traube']
      };
    }
  };
  </script>
  

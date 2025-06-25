<script setup>
import Liste from './components/Liste.vue';
import ListePapierkorb from './components/ListePapierkorb.vue';
import Reactivity from './components/Reactivity.vue';
import Vbind from './components/Vbind.vue';
import Vfor from './components/Vfor.vue';
import Vif from './components/Vif.vue';
import ZweiWege from './components/ZweiWege.vue';
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <ListePapierkorb/>
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

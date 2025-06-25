<script setup>
import { ref } from 'vue'

const newName = ref('')
const names = ref([])

function addName() {
  if (newName.value.trim()) {
    names.value.push(newName.value.trim())
    newName.value = ''
  }
}
</script>

<template>
    <input v-model="newName" placeholder="Gib deinen Namen ein" />
    <button v-on:click="addName" :disabled="!newName">Hinzufügen</button>
    
    <ul>
      <li v-for="(name, index) in names" :key="index">
        {{ name }}
      </li>
    </ul>
  </template>
  

  
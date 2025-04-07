<template>
  <span :class="[
    'px-3 py-1 rounded-full text-white text-sm font-medium mr-2',
    `type-${type}`
  ]">
    {{ type }}
  </span>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true
  }
})
</script>
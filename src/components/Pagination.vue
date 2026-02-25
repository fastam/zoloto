<template>
  <div class="pagination">
    <button
      v-for="p in pages"
      :key="p"
      @click="$emit('change', p)"
    >
      {{ p }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  total: Number,
  page: Number
})

const pages = computed(() =>
  Math.ceil(props.total / 10)
)
</script>
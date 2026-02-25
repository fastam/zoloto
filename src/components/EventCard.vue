<template>
  <div class="card">
    <img :src="event.image" />

    <div class="card-title">{{ event.title }}</div>
    <div class="card-desc">{{ event.description }}</div>

    <div class="tags">
      <span v-for="t in event.tags" :key="t" class="tag">
        {{ t }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({ event: Object })
</script>
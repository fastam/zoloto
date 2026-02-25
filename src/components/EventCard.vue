<template>
  <div class="card" @click="open">
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
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({ event: Object })

const open = () => {
  router.push(`/event/${props.event.id}`)
}
</script>
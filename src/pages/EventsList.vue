<template>
  <div class="container">
    <div class="header-bar">
      <div class="title">Мероприятия</div>

      <TagFilter
        :tags="store.tags"
        :selected="store.selectedTags"
        @toggle="store.toggleTag"
        @clear="store.clearTags"
      />
    </div>

    <div class="grid">
      <EventCard
        v-for="e in store.events"
        :key="e.id"
        :event="e"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useEventsStore } from '../store/events'
import EventCard from '../components/EventCard.vue'
import TagFilter from '../components/TagFilter.vue'

const store = useEventsStore()

onMounted(()=>{
  store.filterEvents()
})
</script>
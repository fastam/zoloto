<template>
  <div class="container">

    <div class="header-bar">
      <div class="title">Мероприятия</div>

      <TagFilter
        :tags="tags"
        :selected="selectedTags"
        @toggle="$emit('toggleTag', $event)"
        @clear="$emit('clearTags')"
      />
    </div>

    <div class="grid">
      <EventCard
        v-for="e in events"
        :key="e.id"
        :event="e"
        @click="$emit('openEvent', e)"
      />
    </div>

  </div>
</template>

<script setup>
import EventCard from '../components/EventCard.vue'
import TagFilter from '../components/TagFilter.vue'

defineProps({
  events:Array,
  tags:Array,
  selectedTags:Array
})
</script>
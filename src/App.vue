<script setup>
import { ref, onMounted, watch } from 'vue'
import EventsList from './pages/EventsList.vue'
import EventDetail from './pages/EventDetail.vue'
import { getEvents, getEvent, getTags } from './api/events'

const view = ref('list')
const events = ref([])
const tags = ref([])
const selectedTags = ref([])
const selectedEvent = ref(null)
const page = ref(1)
const totalCount = ref(0)

onMounted(async () => {
  tags.value = await getTags()
  loadEvents()
})

async function loadEvents() {
  const tagQuery = selectedTags.value.length ? selectedTags.value[0] : null
  const response = await getEvents(page.value, tagQuery)
  events.value = response.items || []
  totalCount.value = response.total || 0
}

watch(selectedTags, () => {
  page.value = 1
  loadEvents()
}, { deep: true })

watch(page, () => {
  loadEvents()
})

function toggleTag(tag) {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter(t => t !== tag)
  } else {
    selectedTags.value = [tag]
  }
}

function clearTags() {
  selectedTags.value = []
}

async function openEvent(event) {
  selectedEvent.value = await getEvent(event.id)
  view.value = 'detail'
}
</script>

<template>
  <div id="app">
    <EventsList 
      v-if="view === 'list'"
      :events="events"
      :tags="tags"
      :selectedTags="selectedTags"
      :total="totalCount" 
      :page="page"
      @toggleTag="toggleTag"
      @clearTags="clearTags"
      @openEvent="openEvent"
      @changePage="p => page = p"
    />
    
    <EventDetail 
      v-else-if="view === 'detail'"
      :event="selectedEvent"
      @back="view = 'list'"
    />
  </div>
</template>

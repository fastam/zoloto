<template>
  <div>

    <EventsList
      v-if="view === 'list'"
      :events="filteredEvents"
      :tags="tags"
      :selectedTags="selectedTags"
      @toggleTag="toggleTag"
      @clearTags="clearTags"
      @openEvent="openEvent"
    />

    <EventDetail
      v-if="view === 'detail'"
      :event="selectedEvent"
      @back="view = 'list'"
    />

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import EventsList from './pages/EventsList.vue'
import EventDetail from './pages/EventDetail.vue'

const view = ref('list')
const selectedEvent = ref(null)

const selectedTags = ref([])

const tags = ['IT','Conference','Design','Business']

const events = ref([
  {
    id:1,
    title:'Vue Conference',
    description:'Большая конференция по Vue.js',
    fullDescription:'Подробное описание мероприятия с программой и спикерами.',
    date:'12 июня 2026',
    location:'Берлин',
    organizer:'Vue Community',
    participants:250,
    requirements:'Открыто для разработчиков любого уровня.',
    image:'https://picsum.photos/600/400?1',
    tags:['IT','Conference']
  },
  {
    id:2,
    title:'Design Meetup',
    description:'Встреча дизайнеров',
    fullDescription:'Обсуждение трендов и кейсов.',
    date:'18 июля 2026',
    location:'Амстердам',
    organizer:'Design Hub',
    participants:120,
    requirements:'Подходит для UX/UI дизайнеров.',
    image:'https://picsum.photos/600/400?2',
    tags:['Design']
  }
])

const filteredEvents = computed(()=>{
  if(!selectedTags.value.length) return events.value

  return events.value.filter(e =>
    selectedTags.value.every(tag => e.tags.includes(tag))
  )
})

const toggleTag = tag => {
  if(selectedTags.value.includes(tag)){
    selectedTags.value = selectedTags.value.filter(t=>t!==tag)
  } else {
    selectedTags.value.push(tag)
  }
}

const clearTags = ()=> selectedTags.value = []

const openEvent = event => {
  selectedEvent.value = event
  view.value = 'detail'
}
</script>
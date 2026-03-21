<script setup>

import { ref, onMounted, watch } from 'vue'

import EventsList from './pages/EventsList.vue'
import EventDetail from './pages/EventDetail.vue'

import {
  getEvents,
  getEvent,
  getTags
} from './api/events'


const view = ref('list')

const events = ref([])

const tags = ref([])

const selectedTags = ref([])

const selectedEvent = ref(null)

const page = ref(1)



onMounted(async ()=>{

  tags.value =
  await getTags()

  loadEvents()

})



async function loadEvents(){

  events.value =
  await getEvents(
    page.value,
    selectedTags.value
  )

}



watch(selectedTags, ()=>{

  page.value = 1

  loadEvents()

})



function toggleTag(tag){

  if(selectedTags.value.includes(tag)){

    selectedTags.value =
    selectedTags.value.filter(
      t => t !== tag
    )

  }

  else{

    selectedTags.value.push(tag)

  }

}



function clearTags(){

  selectedTags.value = []

}



async function openEvent(event){

  selectedEvent.value =
  await getEvent(event.id)

  view.value = 'detail'

}

</script>
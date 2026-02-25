<template>
  <div class="dropdown">
    <button class="dropdown-btn" @click="open=!open">
      {{ label }}
    </button>

    <div v-if="open" class="dropdown-menu">
      <div class="dropdown-item" @click="clear">Сбросить</div>

      <div
        v-for="tag in tags"
        :key="tag"
        :class="['dropdown-item',{active:selected.includes(tag)}]"
        @click="toggle(tag)"
      >
        {{tag}}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref,computed } from 'vue'

const props = defineProps({
  tags:Array,
  selected:Array
})

const emit = defineEmits(['toggle','clear'])

const open = ref(false)

const label = computed(()=>{
  if(!props.selected.length) return 'Теги'
  if(props.selected.length<=2) return props.selected.join(', ')
  return `${props.selected.slice(0,2).join(', ')} +${props.selected.length-2}`
})

const toggle = tag => emit('toggle',tag)
const clear = ()=> emit('clear')
</script>
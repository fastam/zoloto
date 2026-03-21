<script setup>

import { computed } from 'vue'

const props = defineProps({

  total:Number,

  page:Number

})

const pages = computed(()=>{

  const count =
  Math.ceil(props.total / 10)

  return Array.from(
    {length:count},
    (_,i)=>i+1
  )

})

</script>
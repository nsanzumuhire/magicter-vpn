<template>
    <input 
      :class="'rounded-full border border-gray-400 px-4 py-2 focus:outline-none focus:ring focus:ring-purple-100 w-full' + props.classes"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)" 
      :type="props.type"
      :placeholder="props.placeholder"
    />
  </template>
  
<script setup>
import { defineProps } from 'vue';

// Define props using defineProps
const props = defineProps({
  modelValue: String,
  type: String,
  placeholder: String,
  classes: String,
});
console.log(props.classes);
</script>
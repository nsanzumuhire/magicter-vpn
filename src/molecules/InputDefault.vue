<template>
    <input 
      ref="inputRef"
      :class="'rounded-full border border-gray-400 px-4 py-2 focus:outline-none focus:ring focus:ring-purple-100 w-full ' + props.classes"
      :value="props.modelValue"
      :minlength="min" 
      :maxlength="max"
      @input="$emit('update:modelValue', $event.target.value)" 
      :type="props.type"
      :placeholder="props.placeholder"
    />
  </template>
  
<script setup>
import { defineProps,ref, onMounted } from 'vue';
// Define props using defineProps
const props = defineProps({
  modelValue: String,
  type: String,
  min: {
    type: Number,
    required: false
  },
  max: {
    type: Number,
    required: false
  },
  placeholder: {
    type: String,
    required: false
  },
  classes: String,
});

const focus = () => {
  console.log(ref().value);
};

onMounted(() => {
  focus()
});

</script>
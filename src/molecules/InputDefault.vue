<template>
  <div class="relative">
    <input 
      ref="inputRef"
      :class="'rounded-full border border-gray-400 px-4 py-2 focus:outline-none focus:ring focus:ring-purple-100 w-full ' + props.classes"
      :value="modelValue"
      :minlength="min" 
      :maxlength="max"
      @input="$emit('update:modelValue', $event.target.value)" 
      :type="seeText ? type : 'text'"
      :placeholder="placeholder"
    />
    <div class="absolute right-4 top-2" v-if="type ==='password'">
      <EyeIcon v-if="!seeText" class="cursor-pointer h-5 w-5" @click="toggleSeePwd" />
      <EyeSlashIcon v-else class="cursor-pointer h-5 w-5" @click="toggleSeePwd" />
    </div>
  </div>
    
  </template>
  
<script setup>
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline';
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

const seeText = ref(true);


const toggleSeePwd = () => {
  seeText.value = !seeText.value;
};

onMounted(() => {

});

</script>
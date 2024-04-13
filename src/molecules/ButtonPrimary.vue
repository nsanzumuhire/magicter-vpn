<template>
    <button :class="'tracking-wide py-2 px-5 sm:px-8 border text-white-500 bg-purple-500 outline-none rounded-full hover:bg-purple-500 hover:text-white-500 transition-all hover:shadow-purple ' + props.classes">
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  // Define props using defineProps
  const props = defineProps({
    classes: String
  });
  console.log(props.classes);
  </script>
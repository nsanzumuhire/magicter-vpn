<template>
  <div :class="'relative' + isFullClass">
    <router-link :to="link ? link : ''" :class="'tracking-wide py-2 px-5 sm:px-8 border text-white-500 bg-purple-500 outline-none rounded-full hover:bg-purple-500 hover:text-white-500 transition-all hover:shadow-purple flex justify-center items-center w-full ' + props.classes + `${isLoading ? ' opacity-75' : ''}`">
      <div v-if="isLoading">
        <SpinnerLoader></SpinnerLoader>
      </div>
      <slot v-else></slot>
    </router-link>
  </div>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue';
  import SpinnerLoader from './SpinnerLoader.vue';
  
  // Define props using defineProps
  const props = defineProps({
    classes: String,
    link: {type: String, required: false},
    isLoading: {type: Boolean, default: false},
    isFull: {type: Boolean, default: true}
  });

  const isFullClass = computed(() => {
    return props.isFull ? ' w-full': ''
  })
  </script>
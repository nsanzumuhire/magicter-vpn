<template>
    <div ref="dropdownTrigger" @click="toggleDropdown">
      <slot name="trigger">Dropdown Trigger</slot> 
    </div>
  
    <div ref="dropdownMenu" v-show="isOpen">
      <slot /> 
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useToggle, onClickOutside } from '@vueuse/core';
  
  const dropdownTrigger = ref(null);
  const dropdownMenu = ref(null);
  const [isOpen, toggleDropdown] = useToggle(false);

  onClickOutside(dropdownTrigger, (event) => {
    console.log(event);
    isOpen.value = false; // Or any other action you want to take
  });
  
  </script>
  




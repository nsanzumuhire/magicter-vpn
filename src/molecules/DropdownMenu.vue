<template>
    <div class="relative">
        <div ref="dropdownTrigger" @click="toggleDropdown">
      <slot name="trigger">Dropdown Trigger</slot> 
    </div>
  
    <div ref="dropdownMenu" class="absolute z-20 top-[40px] right-0 w-[178px]" v-show="isOpen">
      <slot /> 
    </div>
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
  




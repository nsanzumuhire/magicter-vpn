<template>
    <div class="modal fade" :class="{ show: isShow }">
      <div class="mx-0 my-20 w-full md:max-w-screen-lg md:mx-auto lg:w-[80] 2xl:w-[60]">
        <div ref="modalRef" class="content flex flex-col gap-2 w-full">
          <div class="flex w-full items-end justify-end">
            <XMarkIcon class="h-5 w-5 cursor-pointer" @click="onClose"/>
          </div>

          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick, defineEmits } from "vue";
  import { onClickOutside } from "@vueuse/core";
  import { onKeyStroke } from "@vueuse/core";
  import { XMarkIcon } from '@heroicons/vue/24/outline';

  const emits = defineEmits(["close"]);

  const modalRef = ref(null);
  
  const isShow = ref(false);
  
  onMounted(() => {
    nextTick(() => {
      isShow.value = true;
    });
  });
  
  const onClose = () => {
    closeModal();
  };
  
  const closeModal = () => {
    isShow.value = false;
    setTimeout(() => {
      emits("close");
    }, 200);
  };
  
  onClickOutside(modalRef, () => {
    onClose();
  });
  
  onKeyStroke("Escape", (e) => {
    e.preventDefault();
    closeModal();
  });
  </script>
  
  <style lang="css">
    .modal {
        position: fixed;
        z-index: 9999;
        top: 0%;
        left: 0;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: rgb(0, 0, 0, 0.75);
    }
    
    .fade:not(.show) {
        opacity: 0;
    }
    
    .fade {
        transition: opacity 0.2s linear;
    }
    
    .content {
        position: relative;
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        padding: 2rem;
        justify-content: center;
        background-color: white;
        border-radius: 1rem;
    }
  </style>
  
  
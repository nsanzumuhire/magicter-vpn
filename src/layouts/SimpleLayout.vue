<template>
    <div class="flex min-h-screen relative flex-col sm:h-full xl:h-screen bg-white-300">  
      <div v-if="isSidebarOpen" class="absolute left-0 z-20">
        <transition name="slide-fade-reverse">
          <SidebarSection :show-header-icon="false"/>
        </transition>
      </div>
      <HeaderSection></HeaderSection>
      <div class="max-w-screen-xl flex-1 w-full px-6 sm:px-8 lg:px-16 mx-auto  justify-start py-3 sm:py-4">
        <transition>
            <router-view />
        </transition>
      </div>
      <FooterSmallSection></FooterSmallSection>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import HeaderSection from '@/components/HeaderSection.vue';
  import FooterSmallSection from '@/components/FooterSmallSection';
  import SidebarSection from '@/pages/dashboard/components/SidebarSection.vue';
  import { useRouterStore } from '@/stores/router.state'
  
  const state = useRouterStore();
  const isSidebarOpen = computed(() => {
    return state.sidebarOpen
});
  </script>
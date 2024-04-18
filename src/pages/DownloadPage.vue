<template>
    <div class="flex relative flex-col sm:h-full xl:h-screen">
      
    <!-- side nav -->

    <div v-if="isSidebarOpen" class="absolute left-0 z-20">
      <SidebarSection :show-header-icon="false"/>
    </div>

    <!-- end of side nav -->
    <!-- header nav -->
    <HeaderSection></HeaderSection>
    <!-- End of header  -->
    <div class="mt-24">
    <!-- Hero -->
    <HeroSection></HeroSection>
    <!-- End of Hero -->
    </div>
    <!-- Footer -->
    <FooterSection></FooterSection>
    <!-- End of Footer  -->
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import HeroSection from '@/components/HeroSection.vue';
  import HeaderSection from '@/components/HeaderSection.vue';
  import FooterSection from '@/components/FooterSection';
  import SidebarSection from '@/pages/dashboard/components/SidebarSection.vue';
  import { useRouterStore } from '../stores/router.state'
  
  const state = useRouterStore();
  const isSidebarOpen = computed(() => {
    return state.sidebarOpen
});
  </script>
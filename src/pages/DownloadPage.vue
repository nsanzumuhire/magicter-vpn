<template>
    <div class="flex flex-col sm:h-full xl:h-screen">
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
  
  <script>
  
  import HeroSection from '../components/HeroSection.vue';
  import HeaderSection from '../components/HeaderSection.vue';
  import FooterSection from '../components/FooterSection'
  
  
  export default {
    components: {
      HeaderSection,
      HeroSection,
      FooterSection
    },
    setup() {
    }
  };
  </script>
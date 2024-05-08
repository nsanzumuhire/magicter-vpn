<template>
    <div class="flex min-h-screen relative flex-col sm:h-full xl:h-screen bg-white-300 p-6">  
        <div class="flex-1">
            <transition>
                    <router-view />
            </transition>
        </div>
    <FooterSmallSection></FooterSmallSection>
    </div>
  </template>

<script setup>
import FooterSmallSection from '@/components/FooterSmallSection.vue'
</script>
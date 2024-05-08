<template>
        <div class="w-full flex flex-col justify-center items-center gap-3 mt-20">
            
            <h3
              class="text-2xl lg:text-4xl font-medium text-center text-black-600 leading-relaxed"
            >
              Download Magicter VPN for your platform
            </h3>
            <p
              class="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center text-sm lg:text-base"
            >
             choose the appropriate application match the package you purchased.
            </p>


            <template v-for="(platform, index) in platforms" :key="index">
              <DownloadSection :platform="platform"></DownloadSection>
            </template>
        
    </div>
</template>
<script setup>

import DownloadSection from '@/components/DownloadSection.vue'
import { ref } from 'vue';

const platforms = ref([
      {
        name: "windows",
        icon: "windows.svg",
        description: "only support windows 10 and 11"
      },
      {
        name: "mac",
        icon: "mac-os.svg",
        description: "only Support for macOS 11 Big sur - 14 Sonoma"
      },
      {
        name: "android",
        icon: "android.svg",
        description: "only Support for android 12 - 14 "
      },
]);

</script>
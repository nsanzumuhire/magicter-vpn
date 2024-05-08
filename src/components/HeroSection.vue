<template>

    <div class="max-w-screen-xl  px-8 xl:px-16 mx-auto">
        <div
          class="grid grid-flow-row md:grid-flow-col grid-rows-2 md:grid-rows-1 gap-10 md:gap-8"
        >
          <div class="flex flex-col justify-center items-start row-start-2 md:row-start-1">
            <h1 class="text-2xl text-center md:text-left md:text-3xl xl:text-4xl font-medium text-black-500 leading-normal">
              Experience Lightning-Fast & Secure  <strong>VPN</strong>.
            </h1>
            <p class="text-black-500 text-center md:text-left mt-4 mb-6 text-sm">
              Unlock blazing speeds, unbreakable privacy, and global access with our advanced VPN technology. Stream, download, and browse without limits while being protected by military-grade encryption and a strict no-logs policy.  Download our intuitive apps for your platform below and experience the difference today!
            </p>
            <div class="relative flex  w-full flex">
        <div
          class="grid grid-cols-3 gap-2 lg:gap-8 z-10"
        >
          <template v-for="(platform, index) in platforms" :key="index">
            <a @click="onOpen(platform)" class="quick-stats rounded-full cursor-pointer  flex items-center mx-auto sm:w-auto gap-4 py-1 pr-4 pl-1">
                <div class="flex items-center justify-center bg-purple-100 h-8 w-8 lg:w-10 lg:h-10 rounded-full">
                  <img :src="require(`@/assets/Icon/${platform.icon}`)" class="h-4 w-4 lg:h-6 lg:w-6" />
                </div>
                <p class="text-xs lg:text-base text-black-500 text-sm  capitalize">{{ platform.name }}</p>
              </a>
          </template>
        </div>
      </div>
          </div>
          <div class="">
            <div class="h-full w-full">
              <img class="h-auto"
                src="../assets/Illustration1.png"
                alt="VPN Illustrasi"
                width="800"
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <transition>
          <PopupModal v-if="modalOpen" @close="onClose">
            <DownloadSection :platform="selectedPlatform" :default-class="''"></DownloadSection>
          </PopupModal>
        </transition>
    </div>
</template>
  
<script setup>
import PopupModal from '@/components/PopupModal.vue'
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

const modalOpen = ref(false);
const selectedPlatform = ref(null)

const onOpen = (val) => {
  selectedPlatform.value = val;
  modalOpen.value = !modalOpen.value
}

const onClose = () => {
  selectedPlatform.value = null;
  modalOpen.value = false;
};

</script>
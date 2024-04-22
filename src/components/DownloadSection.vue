<template>
            <div :class="'flex justify-center rounded-xl px-6  w-full ' + defaultClass">
                <div class="flex flex-col mx-0 py-6 gap-2 w-2/5">
                        <img :src="require('@/assets/' + platform + '.jpeg')" style="height: auto; width: 200px;" class="rounded-xl">
                        <h1 class="text-lg text-black-500 font-light">Magicter VPN for <span class="capitalize">{{ platform }}</span> </h1>
                        <p class="text-xs text-black-500 font-light opacity-75">With a high internet connectivity</p>
                </div>


                <div class="flex justify-center flex-col w-full"
              >
                <div class="flex items-center justify-between border-b border-b-gray-500 py-4">
                    
                    <div class="flex flex-col items-center gap-1 w-1/5">
                        <div class="flex items-center gap-2">
                            <img src="../assets/Icon/individual.png" class="h-4 w-4">
                            <p class="text-lg text-black-500 font-light">Individual</p>
                        </div>
                        <span class="text-xs opacity-75 font-light">Free</span>
                    </div>
      
                    <div class="flex flex-col items-center gap-1 w-1/5">
                        <div class="flex items-center gap-2">
                        <img src="../assets/Icon/enterprise.png" class="h-4 w-4">
                        <p class="text-lg text-black-500 font-light">Enterprise</p>
                    </div>
                    <span class="text-xs opacity-75 font-light">Free</span>
                    </div>

                    <div class="flex flex-col items-center gap-1 w-1/5">
                        <div class="flex items-center gap-2">
                        <img src="../assets/Icon/partner.png" class="h-4 w-4">
                        <p class="text-lg text-black-500 font-light">Partner</p>
                        </div>
                        <span class="text-xs opacity-75 font-light">Free</span>
                    </div>

                    
                </div>
                <div class="flex items-center justify-between py-4">
                    <div class="flex flex-col items-center gap-3 w-1/5">
                        <ul class="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                            <li class="relative custom-list my-2"> 1 Member</li>
                            <li class="relative custom-list my-2"> 1 Device</li>
                            <li class="relative custom-list my-2"> 1 Route</li>
                        </ul>
                        <ButtonPrimary :link="''" :classes="''">Download</ButtonPrimary>
                    </div>
      
                    <div class="flex flex-col items-center gap-3 w-1/5">
                        <ul class="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                            <li class="relative custom-list my-2"> 5 Members</li>
                            <li class="relative custom-list my-2"> 5 Devices</li>
                            <li class="relative custom-list my-2"> 2 Routes</li>
                        </ul>
                        <ButtonPrimary :link="''" :classes="''">Download</ButtonPrimary>
                    </div>

                    <div class="flex flex-col items-center gap-3 w-1/5">
                        <ul class="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                            <li class="relative custom-list my-2"> Unlimited Members</li>
                            <li class="relative custom-list my-2"> Unlimited Devices</li>
                            <li class="relative custom-list my-2"> 20 Route</li>
                        </ul>
                        <ButtonPrimary :link="''" :classes="''">Download</ButtonPrimary>
                    </div>
                </div>
                
           
    </div>
            </div>
</template>

<script setup>
import { defineProps } from 'vue';
import ButtonPrimary from '@/molecules/ButtonPrimary'

// Define props using defineProps
const props = defineProps({
  platform: {type: String, required: true},
  defaultClass: {type: String, default: ' bg-white-500 shadow-md'}
});

console.log(props)
</script>
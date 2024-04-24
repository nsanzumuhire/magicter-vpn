<template>
            <div :class="'flex justify-center rounded-xl px-6  w-full ' + defaultClass">
                <div class="flex justify-center flex-col gap-4 w-full">
                <div class="flex items-center justify-between border-b border-b-gray-500 py-4"> 
                    <div class="flex items-center gap-2 w-full">
                        <div class="flex items-center justify-center bg-purple-100 w-10 h-10 mr-6 rounded-full">
                            <img :src="require(`@/assets/Icon/${platform.icon}`)" class="h-6 w-6" />
                        </div>
                        <div class="flex flex-col">
                            <h1 class="text-lg text-black-500 font-light">Magicter VPN for <span class="capitalize">{{ platform.name }}</span> </h1>
                            <p class="text-xs text-black-500 font-light opacity-75">{{platform.description}}</p>
                        </div>
                    </div>
                </div>
                <div  class="flex flex-col cursor-pointer bg-white-500 rounded-xl border border-gray-500 px-6 py-6">
                    <div class="flex items-center justify-between ">
                        <div class="flex flex-col gap-2">
                            <p class="text-sm">Individual</p>
                            <p class="text-xs opacity-75"> Hight connectivity </p>
                        </div>    
                        <span class="flex items-center">
                            <ButtonPrimary :classes="''"> <span class="text-xs"> Download</span> </ButtonPrimary>   
                        </span> 
                    </div>
                </div>
                <div  class="flex flex-col cursor-pointer bg-white-500 rounded-xl border border-gray-500 px-6 py-6">
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col gap-2">
                            <p class="text-sm">Enterprise</p>
                            <p class="text-xs opacity-75"> Hight connectivity </p>
                        </div>    
                        <span class="flex items-center">
                            <ButtonPrimary :classes="''"> <span class="text-xs"> Download</span> </ButtonPrimary>   
                        </span> 
                    </div>
                </div>
                <div  class="flex flex-col cursor-pointer bg-white-500 rounded-xl border border-gray-500 px-6 py-6">
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col gap-2">
                            <p class="text-sm">Partner</p>
                            <p class="text-xs opacity-75"> Hight connectivity </p>
                        </div>    
                        <span class="flex items-center">
                            <ButtonPrimary :classes="''"> <span class="text-xs"> Download</span> </ButtonPrimary>   
                        </span> 
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
  platform: {type: Object, required: true},
  defaultClass: {type: String, default: ''}
});

console.log(props)
</script>
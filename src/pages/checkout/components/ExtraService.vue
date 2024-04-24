<template>
    <div class="flex bg-white-500 items-center justify-between  rounded-xl border border-gray-500 px-6 py-3">
            <div class="flex flex-col gap-2 w-3/4">
                    <p class="text-sm font-medium"> Change plan</p>
                    <span class="text-xs opacity-75">In case you chose the wrong package</span>
            </div> 
            <div class="w-1/4">
                <ButtonOutline> 
                    <div class="flex gap-2 text-xs text-purple-500 justify-center items-center">
                        <ArrowsRightLeftIcon class="h-5 w-5"/> <span class="">Change</span>
                    </div>
                </ButtonOutline>
            </div>
        </div>
</template>
<script setup>
import ButtonOutline from '@/molecules/ButtonOutline'
import {  ArrowsRightLeftIcon } from '@heroicons/vue/24/outline';
</script>
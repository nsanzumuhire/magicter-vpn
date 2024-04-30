<template>
    <div class="flex flex-col gap-6 py-4 border-t border-gray-500">
        <p class="leading-normal text-xs">By purchasing this subscription and clicking "Continue", you agree to the 
            <a class="cursor-pointer underline" target="_blank" rel="noopener noreferrer" href="">terms of service</a> and
            <a class="cursor-pointer underline" target="_blank" rel="noopener noreferrer" href="">Privacy policy</a>
        </p>
        <div class="flex flex-col gap-2 xl:flex-row items-center justify-between w-full border-b border-gray-500">
            <div v-if="!isFull" class="w-full xl:w-2/5">
                <slot></slot>
            </div>
            <div class="w-full mb-4" :class="{'xl:w-3/5': !isFull}">
                <MoneyGuaranty/>
            </div>
        </div>
        <p class="leading-normal text-xs opacity-75">
            Payments are processed in USD. Payment provider fees may apply.
        </p>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
import MoneyGuaranty from './MoneyGuaranty';

defineProps({
    isFull: { type: Boolean, default: false }
})
</script>
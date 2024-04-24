<template>
            <div class="relative flex justify-center">
              <div
                class="flex flex-col bg-white-500 rounded-xl py-4 px-4 xl:px-8 w-full"
                :class="{'shadow-purple-md': isRecommended, 'shadow-md': !isRecommended}"
              >
                
              <div class="flex items-center justify-between border-b border-b-gray-500 py-4">
                    <div class="flex items-center gap-2">
                        <p class="text-xl text-black-600 font-light">{{name}}</p>
                    </div>
                    <div v-if="savedPercentage === 0" class="flex items-center justify-center text-xs rounded-2xl text-black-500 font-bold bg-gray-100 px-3 py-1">save 0% </div>
                    <div v-else class="flex items-center justify-center text-xs rounded-2xl text-purple-500 font-bold bg-purple-100 px-3 py-1">save {{savedPercentage.toFixed(0)}}% </div>
                </div>
                
           
                <div class="flex flex-col gap-3 w-full justify-center flex-none mt-8">
                  <p class="text-4xl font-bold text-black-500 text-center mb-4">${{product.price}}<span class="text-xs font-light opacity-75">/{{ product.months > 1 ? product.months + 'months': 'month'}} </span></p>

                    <div class="flex w-full">
                        <ButtonPrimary v-if="isRecommended" :classes="' w-full'">Purchase</ButtonPrimary>
                        <ButtonOutline v-else>Purchase</ButtonOutline>
                    </div>

                  <p class="text-sm text-black-500  font-light">30-day money-back guarantee</p>
                  <p class="text-xs text-black-500 opacity-75 font-light">Billed at ${{product.price}}</p>
                </div>

              </div>
              <div class="absolute -top-3 inset-x-0 mx-auto w-28" v-if="isRecommended">
                <div class="flex items-center justify-center text-xs rounded-2xl border-2 border-purple-500 text-purple-500 font-bold bg-purple-100 px-3 py-1"> Recommended </div>
              </div>
            </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import ButtonPrimary from '@/molecules/ButtonPrimary';
import ButtonOutline from '@/molecules/ButtonOutline';

const props = defineProps({
    isRecommended: {type: Boolean, default: false },
    name: {Type: String, default: ''},
    product: Object
})

console.log(props.product);

const savedPercentage = computed(() => {
    const { price, months } = props.product;
    const regularPrice = months * price;

    const savedAmount = regularPrice - price;

    return months === 1 ? 0 : (savedAmount / regularPrice) * 100
})

console.log('----savedPercentage----', savedPercentage.value.toFixed(0));

</script>
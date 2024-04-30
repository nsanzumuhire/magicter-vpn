<template>

    <div class="flex flex-col gap-16 xl:flex-row xl:justify-between mt-8">
    <div class="flex flex-col justify-center items-center gap-6 w-full xl:w-2/3">
        <img src="../../assets/payment-successful.png">
        <h3 class="text-purple-500 text-2xl font-bold">Your Payment is Successful!</h3>
        <p class="w-4/5 text-center">Thank you for your payment, An automated payment receit will be sent to your  registered email.</p>
        <ButtonPrimary :is-full="false" :link="'/account/top-up-center/history'">Go to your order history</ButtonPrimary>
     </div>
     <div class="flex flex-col gap-6 w-full xl:w-1/3">
         <div class="flex items-center justify-between">
             <h3 class="text-gray-600 text-xl font-light">Order summary</h3>
             <MoneyGuaranty :is-small="true"/>
         </div>
 
         <SummarySectiom :show-coupon-code="false" :cart="cart"/>
     </div>
    </div>
 </template>
 <script setup>
 import SummarySectiom from './components/SummarySection.vue';
 import MoneyGuaranty from './components/MoneyGuaranty.vue';
 import ButtonPrimary from '@/molecules/ButtonPrimary.vue';
 import { useRouterStore } from '@/stores/router.state'
 import { computed } from 'vue';
 
 
 const state = useRouterStore();
 
 const cart = computed(() => {
     return state.getCart;
 });
 
 </script>
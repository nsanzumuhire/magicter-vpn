<template>

    <div class="flex flex-col gap-4 w-full">
        <div @click="togglePaymentOption('ALI')" :class="{'border border-purple-500': selectedPayment === 'ALI'}" class="flex flex-col cursor-pointer bg-white-500 rounded-xl border border-gray-500 px-6 py-3 hover:border hover:border-purple-500">
            <div class="flex items-center justify-between">
                <div class="flex gap-2 items-center">
                    <p class="text-sm"> Global Ali pay</p>
                    <img src="../../../assets/Icon/alipay.svg" class="h-14 w-auto"/>
                </div>    
                <span class="flex items-center">
                    <ChevronDownIcon v-if="selectedPayment === 'ALI'" class="h-4 w-4"/>
                    <ChevronRightIcon v-else class="h-4 w-4"/>    
                </span> 
            </div>
            <PaymentInstruction v-if="selectedPayment === 'ALI'">
                <ButtonPrimary :classes="' sm:px-2'"> <span class="text-xs"> Continue to Ali pay</span> </ButtonPrimary>
            </PaymentInstruction>
        </div>
        
        <div @click="togglePaymentOption('PAYPAL')" :class="{'border border-purple-500': selectedPayment === 'PAYPAL'}" class="flex flex-col cursor-pointer bg-white-500 rounded-xl border border-gray-500 px-6 py-3  hover:border hover:border-purple-500">
            <div class="flex items-center justify-between">
                <div class="flex gap-2 items-center">
                <p class="text-sm"> Paypal</p>
                <img src="../../../assets/Icon/paypal.svg" class="h-14 w-auto"/>
                
            </div>    
            <span class="flex items-center">
                <ChevronDownIcon v-if="selectedPayment === 'PAYPAL'" class="h-4 w-4"/>
                <ChevronRightIcon v-else class="h-4 w-4"/>   
            </span>
            </div>
            
            <PaymentInstruction v-if="selectedPayment === 'PAYPAL'">
                <ButtonPrimary :classes="' sm:px-2'"> <span class="text-xs"> Continue to paypal</span> </ButtonPrimary>
            </PaymentInstruction>
        </div>

        <div @click="togglePaymentOption('STRIPE')" :class="{'border border-purple-500': selectedPayment === 'STRIPE'}" class="flex flex-col cursor-pointer bg-white-500 rounded-xl border border-gray-500 px-6 py-3 hover:border hover:border-purple-500">
            <div class="flex items-center justify-between">
                <div class="flex gap-2 items-center">
                <p class="text-sm"> Stripe</p>
                <img src="../../../assets/Icon/stripe.svg" class="h-14 w-auto"/>
                
            </div>    
            <span class="flex items-center">
                <ChevronDownIcon v-if="selectedPayment === 'STRIPE'" class="h-4 w-4"/>
                <ChevronRightIcon v-else class="h-4 w-4"/> 
            </span>  
            </div>
            
            <PaymentInstruction v-if="selectedPayment === 'STRIPE'">
                <ButtonPrimary :classes="' sm:px-2'"> <span class="text-xs"> Continue to stripe</span> </ButtonPrimary>
            </PaymentInstruction>
        </div>
        <div @click="togglePaymentOption('CRYPTOMUS')" :class="{'border border-purple-500': selectedPayment === 'CRYPTOMUS'}"  class="flex flex-col cursor-pointer bg-white-500 rounded-xl border border-gray-500 px-6 py-3 hover:border hover:border-purple-500">
            <div class="flex items-center justify-between">
                <div class="flex gap-2 items-center">
                <p class="text-sm"> Cryptocurrency (USTD)</p>
                <img src="../../../assets/Icon/cryptomus.svg" class="h-14 w-24"/>
                
            </div>    
            <span class="flex items-center">
                <ChevronDownIcon v-if="selectedPayment === 'CRYPTOMUS'" class="h-4 w-4"/>
                <ChevronRightIcon v-else class="h-4 w-4"/> 
            </span> 
            </div>
            
            <PaymentInstruction v-if="selectedPayment === 'CRYPTOMUS'">
                <ButtonPrimary :classes="' sm:px-2'"> <span class="text-xs"> Continue to cryptomus</span> </ButtonPrimary>
            </PaymentInstruction>
        </div>
    </div>

 </template>
 <script setup>
   import { ref } from 'vue'
   import {  ChevronRightIcon, ChevronDownIcon } from '@heroicons/vue/24/outline';
   import PaymentInstruction from '../components/PaymentInstruction.vue';
   import ButtonPrimary from '@/molecules/ButtonPrimary.vue'
   

   const selectedPayment = ref('');

   function togglePaymentOption(name) {
    if (name === selectedPayment.value) {
        selectedPayment.value = ''
    } else {
        selectedPayment.value = name;
    }

   }


 </script>
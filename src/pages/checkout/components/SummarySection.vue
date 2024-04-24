<template>
    <div class="flex flex-col gap-4 w-full bg-white-500 rounded-xl border border-gray-500 px-6 py-6">
      <div class="flex flex-col gap-2 border-b border-b-gray-500 pb-4">
        <h3 class="text-base font-bold">{{cart.user_type || 'Individual'}}</h3>
        <div class="flex items-center justify-between font-light">
            <p class="text-sm">{{ cart.months > 1 ? cart.months + ' months': '1 month'}}</p>
            <p class="text-sm">${{cart.price}}</p>
        </div>
      </div>
      <div class="flex items-center justify-between font-light border-b border-b-gray-500 pb-4">
            <p class="text-sm">VAT {{tax}}%</p>
            <p class="text-sm">${{tax.toFixed(2)}}</p>
      </div>
      <div class="flex items-center justify-between border-b border-b-gray-500 pb-4">
            <p class="text-sm font-bold">Total</p>
            <p class="text-xl font-bold">${{cart.price + tax}}</p>
      </div>
      <div class="flex w-full items-center gap-4">
            <p v-if="!showCodeForm" @click="toggleCodeForm" class="cursor-pointer text-xs underline opacity-75">Got a coupon code? </p>

            <div  v-else class="flex w-full justify-between">
                <InputDefault v-model="couponCode" :type="'text'" :placeholder="'Enter coupon code'"/> 
                <ButtonPrimary :link="''" :is-full="false" @click="applyCouponCode" :is-loading="isLoading">Apply</ButtonPrimary> 
            </div>
      </div>
    </div>
 </template>

 <script setup>
    import {defineProps, ref} from 'vue';
    import ButtonPrimary from '../../../molecules/ButtonPrimary.vue';
    import InputDefault from '../../../molecules/InputDefault.vue';

    defineProps({
        cart: {type: Object, required: true},
        showCouponCode: {type: Boolean, default: true}
    })
    const showCodeForm = ref(false);
    const couponCode = ref('');
    const isLoading = ref(false)
    const tax = ref(0)

    function toggleCodeForm () {
        showCodeForm.value = !showCodeForm.value;
    }

    function applyCouponCode() {
        console.log('----couponCode----', couponCode)
    }

 </script>
<template>

    <div class="flex flex-col gap-16 xl:flex-row xl:justify-between mt-8">
    <div class="flex flex-col justify-center items-center gap-6 w-full xl:w-2/3">
        <template v-if="!paymentLoading">
            <img src="../../assets/payment-successful.png">
            <h3 class="text-purple-500 text-2xl font-bold">Your Payment is Successful!</h3>
            <p class="w-4/5 text-center">Thank you for your payment, An automated payment receit will be sent to your  registered email.</p>
            <ButtonPrimary :is-full="false" :link="'/account/top-up-center/history'">Go to your order history</ButtonPrimary>
        </template>
        <template v-else>
            <div class="flex min-h-[calc(100vh-300px)] w-full justify-center items-center">
                <SpinnerLoader :full-loadder="true" />
            </div>
        </template>
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
 import SpinnerLoader from '@/molecules/SpinnerLoader.vue';
 import SummarySectiom from './components/SummarySection.vue';
 import MoneyGuaranty from './components/MoneyGuaranty.vue';
 import ButtonPrimary from '@/molecules/ButtonPrimary.vue';
 import { useRouterStore } from '@/stores/router.state'
 import { computed, onMounted, onUnmounted, ref } from 'vue';
 import { useRoute } from 'vue-router';
 import { useAPI } from '@/composables/useAPI';
 import { useConfig } from '@/composables/useConfig';
 import { useToast } from '@/composables/useToast.js';
 import { useAuth } from '@/composables/useAuth.js';

 const { updateUserType, userTypePaymentSuccess, userPaymentSuccess} = useAPI();
 const { generateUUID } = useConfig();
 const { showErrorMsg } = useToast();
 const { removeStorage } = useAuth();

 const route = useRoute();
 const { package_id , user_type } = route.query;
 
 const paymentLoading = ref(true)
 

 const state = useRouterStore();
 
 const cart = computed(() => {
     return state.getCart;
 });


 async function handleUserPaymentSuccess(request) {
    const results = await userPaymentSuccess(request);

    paymentLoading.value = false;

    if (results?.statusCode === 200) {
        return;
    } else {
        showErrorMsg(results.message)
    }
 }

 async function handleUserTypePaymentSuccess(request) {
    const results = await userTypePaymentSuccess(request);

    if (results?.statusCode === 200) {
        const req = {
            ...(user_type === 'Enterprise' && {is_enterprise: 1}),
            ...(user_type === 'Partner' && {is_agent_partner: 1})
        }

        const updateUser = await updateUserType(req);
        paymentLoading.value = false;
        if (updateUser?.status === 200) {
            return;
        } else {
            showErrorMsg(results.message)
        }

    } else {
        showErrorMsg(results.message);
        paymentLoading.value = false;
    }
 }

 function handlePaymentSuccess() {
    const request = {
        package_id,
        subscription_id: generateUUID()
    }
    switch (user_type) {
        case 'Enterprise':
        case 'Partner':
            handleUserTypePaymentSuccess(request);
            break;
        default:
        handleUserPaymentSuccess(request);
    }
 } 


 onMounted(() => {
    handlePaymentSuccess();
 });

 onUnmounted(() => {
    removeStorage('cart');
 });
 
 </script>
<template>

   <div class="flex flex-col gap-16 xl:flex-row xl:justify-between mt-8">
    <div class="flex flex-col gap-6 w-full xl:w-3/5">
        <div class="flex flex-col gap-6">
            <h3 class="text-gray-600 text-xl font-light">1. Change Service (Optional)</h3>
            <ExtraService/>
        </div>
        <div class="flex flex-col gap-6">
            <h3 class="text-gray-600 text-xl font-light">2. Select payment method</h3>
            <PaymentSection/>
        </div>
        
    </div>
    <div class="flex flex-col gap-6 w-full xl:w-2/5">
        <div class="flex items-center justify-between">
            <h3 class="text-gray-600 text-xl font-light">Order summary</h3>
            <MoneyGuaranty :is-small="true"/>
        </div>

        <SummarySectiom :cart="cart"/>
    </div>
   </div>
</template>
<script setup>
import PaymentSection from './components/PaymentSection.vue';
import SummarySectiom from './components/SummarySection.vue';
import MoneyGuaranty from './components/MoneyGuaranty.vue'
import ExtraService from './components/ExtraService'
import { useRouterStore } from '@/stores/router.state'
import { computed } from 'vue';


const state = useRouterStore();

const cart = computed(() => {
    return state.getCart;
});

</script>
<template>
    <div class="flex justify-center" v-if="!isLoading && individual && enterprise && partner">
                        <div class="max-w-screen-xl flex flex-col w-full text-center justify-center">
                            <div class="flex flex-col w-full gap-3">

                                <h3
                                class="text-lg font-bold text-black-600 leading-relaxed"
                                >
                                Select Your Plan
                                </h3>
    
                                <SelectMonths/>

                                <div class="grid w-full gap-8 grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12">
                                    <PackageCard name="Individual" @checkout="saveCartData(individual)" :product="individual"></PackageCard>
                                    <PackageCard name="Enterprise" @checkout="saveCartData(enterprise)" :is-recommended="true" :product="enterprise"></PackageCard>
                                    <PackageCard name="Partner" @checkout="saveCartData(partner)" :product="partner"></PackageCard>
                                </div>

                            </div>
                    </div>
    </div>
    <template v-else>
        <div class="flex w-full h-full justify-center items-center">
            <SpinnerLoader :full-loadder="true" />
        </div>
    </template>
</template>

<script setup>
  import PackageCard from '../dashboard/components/PackageCard';
  import SelectMonths from '../dashboard/components/SelectMonths';
  import { usePackages } from '@/composables/usePackages.js';
  import SpinnerLoader from '@/molecules/SpinnerLoader.vue';
  import { useRouter, useRoute } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter()
  const { token } = route.query;

  const {
    isLoading,
    partner,
    individual,
    enterprise,
    saveCart
} = usePackages()


function saveCartData(cart) {
  saveCart(cart)
  router.push('/mobile/checkout?token='+ token);
}

</script>
<template>
    <div class="flex bg-white-500 items-center justify-between  rounded-xl border border-gray-500 px-6 py-3">
            <div class="flex flex-col gap-2 w-3/4">
                    <p class="text-sm font-medium"> Change plan</p>
                    <span class="text-xs opacity-75">In case you chose the wrong package</span>
            </div> 
            <div class="w-1/4">
                <ButtonOutline @click="togglePopup"> 
                    <div class="flex gap-2 text-xs text-purple-500 justify-center items-center">
                        <ArrowsRightLeftIcon class="h-5 w-5"/> <span class="">Change</span>
                    </div>
                </ButtonOutline>
            </div>


            <PopupModal v-if="isOpen" @close="onClose">
                    <div class="flex justify-center" v-if="!isLoading && individual && enterprise && partner">
                        <div class="max-w-screen-xl flex flex-col w-full text-center justify-center">
                        <div class="flex flex-col w-full gap-3">

                            <h3
                            class="text-lg font-bold text-black-600 leading-relaxed"
                            >
                            Change Your Plan
                            </h3>
   
                            <SelectMonths/>

                            <div class="grid w-full grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12">
                            <PackageCard name="Individual" @checkout="saveCartData(individual)" :product="individual"></PackageCard>
                            <PackageCard name="Enterprise" @checkout="saveCartData(enterprise)" :is-recommended="true" :product="enterprise"></PackageCard>
                            <PackageCard name="Partner" @checkout="saveCartData(partner)" :product="partner"></PackageCard>
                            </div>

                        </div>
                    </div>
                    </div>
                    <template v-else>
                        <div class="flex min-h-[100px] w-full justify-center items-center">
                            <SpinnerLoader :full-loadder="true" />
                        </div>
                </template>
            </PopupModal>
        </div>
</template>
<script setup>
import ButtonOutline from '@/molecules/ButtonOutline';
import PopupModal from '@/components/PopupModal';
import PackageCard from '../../dashboard/components/PackageCard';
import SelectMonths from '../../dashboard/components/SelectMonths';
import SpinnerLoader from '@/molecules/SpinnerLoader'
import {  ArrowsRightLeftIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';


import { usePackages } from '@/composables/usePackages.js'


const isOpen = ref(false);

const {
    isLoading,
    partner,
    individual,
    enterprise,
    saveCart,
  } = usePackages()

function togglePopup() {
    isOpen.value = !isOpen.value;
}

const onClose = () => {
  isOpen.value = false;
};

function saveCartData(cart) {
  saveCart(cart)
  onClose()
}

</script>

<template>
    <div class="flex flex-col">
    <template v-if="!isLoading && individual && enterprise && partner">
        <div class="flex justify-center">
            <div class="max-w-screen-xl flex flex-col w-full text-center justify-center">
            <div class="flex flex-col w-full gap-3">

                <h3
                  class="text-2xl lg:text-4xl  lg:text-4xl font-medium text-black-600 leading-relaxed"
                >
                  Choose Your Plan
                </h3>
                <p
                  class="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center text-sm lg:text-base"
                >
                  Let's choose the package that is best for you and explore it happily and cheerfully.
                </p>

                <SelectMonths/>

                <div class="grid w-full grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12">
                  <PackageCard name="Individual" @checkout="saveCartData(individual)" :product="individual"></PackageCard>
                  <PackageCard name="Enterprise" @checkout="saveCartData(enterprise)" :is-recommended="true" :product="enterprise"></PackageCard>
                  <PackageCard name="Partner" @checkout="saveCartData(partner)" :product="partner"></PackageCard>
                </div>

            </div>
          </div>
        </div>

        <div class="w-full flex justify-center">
            <div
                    class="flex max-w-screen-xl justify-center flex-col bg-white-500 shadow-md rounded-xl px-6  w-full"
                  >
                    <div class="flex items-center justify-between border-b border-b-gray-500 py-4">
                        <div class="flex items-center gap-2 w-2/5">
                            <p class="text-xl text-black-600 font-bold">Feature list</p>
                        </div>
                        <div class="flex flex-col items-center gap-1 w-1/5">
                            <div class="flex items-center gap-2">
                                <img src="../../../assets/Icon/individual.png" class="h-4 w-4">
                                <p class="text-lg text-black-500 font-light">Individual</p>
                            </div>
                            <span class="text-xs opacity-75 font-light">${{individual.price}}<span class="text-xs font-light opacity-75">/{{ individual.months > 1 ? individual.months + 'months': 'month'}} </span></span>
                        </div>
          
                        <div class="flex flex-col items-center gap-1 w-1/5">
                            <div class="flex items-center gap-2">
                            <img src="../../../assets/Icon/enterprise.png" class="h-4 w-4">
                            <p class="text-lg text-black-500 font-light">Enterprise</p>
                        </div>
                        <span class="text-xs opacity-75 font-light">${{enterprise.price}}<span class="text-xs font-light opacity-75">/{{ enterprise.months > 1 ? enterprise.months + 'months': 'month'}} </span></span>
                        </div>

                        <div class="flex flex-col items-center gap-1 w-1/5">
                            <div class="flex items-center gap-2">
                            <img src="../../../assets/Icon/partner.png" class="h-4 w-4">
                            <p class="text-lg text-black-500 font-light">Partner</p>
                            </div>
                            <span class="text-xs opacity-75 font-light">${{partner.price}}<span class="text-xs font-light opacity-75">/{{ partner.months > 1 ? partner.months + 'months': 'month'}} </span></span>
                        </div>

                        
                    </div>
                    <div class="flex items-center justify-between py-4">
                        <div class="flex items-center gap-2 w-2/5">
                            <ul class="flex text-sm flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                                <li class="relative custom-list my-2">Members</li>
                                <li class="relative custom-list my-2">Devices</li>
                                <li class="relative custom-list my-2">Route</li>
                            </ul>
                        </div>
                        <div class="flex flex-col items-center gap-1 w-1/5">
                            <ul class="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                                <li class="relative custom-list my-2">{{individual.members || 1}}</li>
                                <li class="relative custom-list my-2">{{individual.devices || 1}}</li>
                                <li class="relative custom-list my-2">{{individual.route || 1}}</li>
                            </ul>
                        </div>
          
                        <div class="flex flex-col items-center gap-1 w-1/5">
                            <ul class="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                                <li class="relative custom-list my-2">{{enterprise.members || 1}}</li>
                                <li class="relative custom-list my-2">{{enterprise.devices || 1}}</li>
                                <li class="relative custom-list my-2">{{enterprise.route || 1}}</li>
                            </ul>
                        </div>

                        <div class="flex flex-col items-center gap-1 w-1/5">
                            <ul class="flex flex-col list-inside pl-6 xl:pl-0 items-center justify-center text-left text-black-500 flex-grow">
                              <li class="relative custom-list my-2">{{partner.members || 1}}</li>
                              <li class="relative custom-list my-2">{{partner.devices || 1}}</li>
                              <li class="relative custom-list my-2">{{partner.route || 1}}</li>
                            </ul>
                        </div>
                    </div>
                    
              
        </div>
        </div>
    </template>
    <template v-else>
      <div class="flex min-h-[calc(100vh-300px)] w-full justify-center items-center">
        <SpinnerLoader :full-loadder="true" />
      </div>
    </template>
    </div>
   
  </template>

<script setup>


import PackageCard from '../components/PackageCard';
import SpinnerLoader from '@/molecules/SpinnerLoader.vue';
import SelectMonths from '../components/SelectMonths'
import { useRouter } from 'vue-router';
import { usePackages } from '@/composables/usePackages.js'

const router = useRouter();

const {
    isLoading,
    partner,
    individual,
    enterprise,
    saveCart
  } = usePackages()


function saveCartData(cart) {
  saveCart(cart)
  router.push('/checkout')
}

</script>
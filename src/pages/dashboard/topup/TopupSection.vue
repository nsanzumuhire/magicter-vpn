
<template>
    <div class="flex flex-col">
    <template v-if="!isLoading && individual && enterprise && partner">
        <div class="flex justify-center">
            <div class="max-w-screen-xl flex flex-col w-full text-center justify-center">
            <div class="flex flex-col w-full gap-3">

                <h3
                  class="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
                >
                  Choose Your Plan
                </h3>
                <p
                  class="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
                >
                  Let's choose the package that is best for you and explore it happily and cheerfully.
                </p>
                
                <div class="flex w-full space-x-4 text-center justify-center">
                  <label class="flex items-center gap-2">
                    <input @click="setMonths(1)" type="radio" :checked="selectedMonths === 1" class="form-radio cursor-pointer h-5 w-5 rounded-full bg-gray-500 border-transparent focus:border-transparent focus:bg-gray-100 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 text-purple-500" name="radio" value="option1">
                    <span class="ml-2">1 month</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input @click="setMonths(3)" type="radio" :checked="selectedMonths === 3" class="form-radio h-5 w-5 cursor-pointer rounded-full bg-gray-500 border-transparent focus:border-transparent focus:bg-gray-100 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 text-purple-500" name="radio" value="option1">
                    <span class="ml-2">3 months</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input @click="setMonths(6)" type="radio" :checked="selectedMonths === 6" class="form-radio h-5 w-5 cursor-pointer rounded-full bg-gray-500 border-transparent focus:border-transparent focus:bg-gray-100 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 text-purple-500" name="radio" value="option1">
                    <span class="ml-2">6 months</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input @click="setMonths(12)" type="radio" :checked="selectedMonths === 12" class="form-radio h-5 w-5 cursor-pointer rounded-full bg-gray-500 border-transparent focus:border-transparent focus:bg-gray-100 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 text-purple-500" name="radio" value="option1">
                    <span class="ml-2">1 year</span>
                  </label>
                </div>

                <div class="grid w-full grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12">
                  <PackageCard name="Individual" @checkout="saveCart(individual)" :product="individual"></PackageCard>
                  <PackageCard name="Enterprise" @checkout="saveCart(enterprise)" :is-recommended="true" :product="enterprise"></PackageCard>
                  <PackageCard name="Partner" @checkout="saveCart(enterprise)" :product="partner"></PackageCard>
                </div>

            </div>
            <!-- Rest of the content -->
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

import { useAPI } from '@/composables/useAPI';
import { useRouterStore } from '@/stores/router.state'
import { onMounted, computed, ref } from 'vue';
import PackageCard from '../components/PackageCard';
import SpinnerLoader from '@/molecules/SpinnerLoader.vue'
import { useRouter } from 'vue-router';
import { useAuth } from '../../../composables/useAuth.js'


const { setStorage } = useAuth();
const { userPackages } = useAPI();
const router = useRouter();
const state = useRouterStore();
const selectedMonths = ref(1);


function setMonths(months) {
  selectedMonths.value = months
}

function getVal(name) {
  return state.getPackage(name, selectedMonths.value)
}

async function getUserPackages() {

  state.setState({ 
    enterprise: { isLoading: true },
    partner: { isLoading: true }
  });

  const enterpriseData = await userPackages('Enterprise');
  const partnerData = await userPackages('Partner');


  if (enterpriseData.statusCode === 200) {
        state.setState({ 
            enterprise: { isLoading: false, data: enterpriseData.data },
        });
  } else {
        state.setState({ 
            enterprise: { isLoading: false },
        });
  }

  if (partnerData.statusCode === 200) {
        state.setState({ 
            partner: { isLoading: false, data: partnerData.data },
        });
  }  else {
        state.setState({ 
            partner: { isLoading: false },
        });
  }
}

function saveCart(cart) {
  setStorage('cart', JSON.stringify(cart))
  state.setState({ 
    cart
  });
  setTimeout(() => {
    router.push('/checkout')
  }, 100);
}


const individual = computed(() => {
    return getVal('individual');
});

const enterprise = computed(() => {
    return getVal('enterprise');
});

const partner = computed(() => {
    return getVal('partner');
});

const isLoading = computed(() => {
    return state.enterprise.isLoading || state.partner.isLoading;
});



onMounted(() => {
    if (!enterprise.value || !partner.value || !individual.value) {
      getUserPackages();
    }
})

</script>
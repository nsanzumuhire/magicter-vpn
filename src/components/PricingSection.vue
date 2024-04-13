<template>
    <div class="bg-gradient-to-b from-white-300 to-white-500 w-full py-14" id="pricing">
      <div class="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div class="flex flex-col w-full">

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
          <div class="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <div class="flex justify-center">
              <div
                class="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover="{ scale: 1.1, transition: { duration: .2 } }"
              >
                <div class="p-4 lg:p-0 mt-6 lg:mt-16">
                  <img src="@/assets/Free.png" width="145" height="165" alt="Free Plan" />
                </div>
                <p class="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">Free Plan</p>
                <ul class="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li class="relative check custom-list my-2">Unlimited Bandwidth</li>
                  <li class="relative check custom-list my-2">Encrypted Connection</li>
                  <li class="relative check custom-list my-2">No Traffic Logs</li>
                  <li class="relative check custom-list my-2">Works on All Devices</li>
                </ul>
                <div class="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p class="text-2xl text-black-600 text-center mb-4">Free</p>
                  <ButtonOutline>Select</ButtonOutline>
                </div>
              </div>
            </div>
            <!-- Repeat for other plans -->
          </div>
        </div>
        <!-- Rest of the content -->
      </div>
    </div>
  </template>
  
  <script>
import ButtonOutline from '@/molecules/ButtonOutline.vue';


  export default {
    components: {
      ButtonOutline
    },
    setup() {
        const pricing = [
         {
            type: 'Individual',
            features: [
                {
                  name: 'Unlimited Bandwitch',
                  enabled: true  
                },
                {
                  name: 'Encrypted Connection',
                  enabled: true  
                },
                {
                  name: 'No Traffic Logs',
                  enabled: false  
                },
                {
                  name: 'Works on All Devices',
                  enabled: false  
                },
                {
                  name: 'Connect Anyware',
                  enabled: true  
                },
                {
                  name: 'Get New Features',
                  enabled: false  
                }
            ]
         },
         {
            type: 'Interprise',
            features: [
                {
                  name: 'Unlimited Bandwitch',
                  enabled: true  
                },
                {
                  name: 'Encrypted Connection',
                  enabled: true  
                },
                {
                  name: 'No Traffic Logs',
                  enabled: true  
                },
                {
                  name: 'Works on All Devices',
                  enabled: true  
                },
                {
                  name: 'Connect Anyware',
                  enabled: true  
                },
                {
                  name: 'Get New Features',
                  enabled: false  
                }
            ]
         },
         {
            type: 'Partner',
            features: [
                {
                  name: 'Unlimited Bandwitch',
                  enabled: true  
                },
                {
                  name: 'Encrypted Connection',
                  enabled: true  
                },
                {
                  name: 'No Traffic Logs',
                  enabled: false  
                },
                {
                  name: 'Works on All Devices',
                  enabled: false  
                },
                {
                  name: 'Connect Anyware',
                  enabled: true  
                },
                {
                  name: 'Get New Features',
                  enabled: true  
                }
            ]
         }
      ];
      
      return { pricing };
    },
  };
  </script>
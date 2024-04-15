
<template>
    <div class="flex flex-col">

    <div class="flex justify-center mt-20">
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
                <input type="radio" checked class="form-radio cursor-pointer h-5 w-5 rounded-full bg-gray-500 border-transparent focus:border-transparent focus:bg-gray-100 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 text-purple-500" name="radio" value="option1">
                <span class="ml-2">1 month</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" class="form-radio h-5 w-5 cursor-pointer rounded-full bg-gray-500 border-transparent focus:border-transparent focus:bg-gray-100 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 text-purple-500" name="radio" value="option1">
                <span class="ml-2">3 months</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" class="form-radio h-5 w-5 cursor-pointer rounded-full bg-gray-500 border-transparent focus:border-transparent focus:bg-gray-100 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 text-purple-500" name="radio" value="option1">
                <span class="ml-2">6 months</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" class="form-radio h-5 w-5 cursor-pointer rounded-full bg-gray-500 border-transparent focus:border-transparent focus:bg-gray-100 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 text-purple-500" name="radio" value="option1">
                <span class="ml-2">1 year</span>
              </label>
            </div>



          <div class="grid w-full grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12">
            <div class="flex justify-center">
              <div
                class="flex flex-col bg-white-500 shadow-md rounded-xl py-4 px-4 xl:px-8 w-full"
              >
                <div class="flex items-center justify-between border-b border-b-gray-500 py-4">
                    <div class="flex items-center gap-2">
                        <p class="text-xl text-black-600 font-light">Individual</p>
                    </div>
                    <div class="flex items-center justify-center text-xs rounded-2xl text-black-500 font-bold bg-gray-100 px-3 py-1">save 0% </div>
                </div>
                
           
                <div class="flex flex-col gap-3 w-full justify-center flex-none mt-8">
                  <p class="text-4xl font-bold text-black-500 text-center mb-4">$5.6<span class="text-xs opacity-75 font-light">/month</span></p>
                  <router-link class="flex w-full" :to="'/account/checkout'"><ButtonOutline>Get Individual</ButtonOutline></router-link>
                  <p class="text-sm text-black-500  font-light">30-day money-back guarantee</p>
                  <p class="text-xs text-black-500 opacity-75 font-light">Billed at $5.6</p>
                </div>
              </div>
            </div>
            <div class="relative flex justify-center">
              <div
                class="flex flex-col bg-white-500 shadow-purple-md rounded-xl py-4 px-4 xl:px-8 w-full"
              >
                <div class="flex items-center justify-between border-b border-b-gray-500 py-4">
                    <div class="flex items-center gap-2">
                        <p class="text-xl text-black-600 font-light">Enterprise</p>
                    </div>
                    <div class="flex items-center justify-center text-xs rounded-2xl text-purple-500 font-bold bg-purple-100 px-3 py-1">save 50% </div>
                </div>
                
           
                <div class="flex flex-col gap-3 w-full justify-center flex-none mt-8">
                  <p class="text-4xl font-bold text-black-500 text-center mb-4">$199<span class="text-xs font-light opacity-75">/month</span></p>
                  <router-link class="flex w-full" :to="'/account/checkout'"><ButtonPrimary :link="''" :classes="' w-full'">Get Enterprise</ButtonPrimary></router-link>
                  <p class="text-sm text-black-500  font-light">30-day money-back guarantee</p>
                  <p class="text-xs text-black-500 opacity-75 font-light">Billed at $199</p>
                </div>
              </div>
              <div class="absolute -top-3 inset-x-0 mx-auto w-28">
                <div class="flex items-center justify-center text-xs rounded-2xl border-2 border-purple-500 text-purple-500 font-bold bg-purple-100 px-3 py-1"> Recomendation </div>

              </div>
            </div>

            <div class="flex justify-center">
              <div
                class="flex flex-col bg-white-500 shadow-md rounded-xl py-4 px-4 xl:px-8 w-full"
              >
                <div class="flex items-center justify-between border-b border-b-gray-500 py-4">
                    <div class="flex items-center gap-2">
                        <p class="text-xl text-black-600 font-light">Partner</p>
                    </div>
                    <div class="flex items-center justify-center text-xs rounded-2xl text-purple-500 font-bold bg-purple-100 px-3 py-1">save 30% </div>
                </div>
                
           
                <div class="flex flex-col gap-3 w-full justify-center flex-none mt-8">
                  <p class="text-4xl font-bold text-black-500 text-center mb-4">$99<span class="text-xs opacity-75 font-light">/month</span></p>
                  <router-link class="flex w-full" :to="'/account/checkout'"><ButtonOutline>Get Partner</ButtonOutline></router-link>
                  <p class="text-sm text-black-500  font-light">30-day money-back guarantee</p>
                  <p class="text-xs text-black-500 opacity-75 font-light">Billed at $99</p>
                </div>
              </div>
            </div>
            <!-- Repeat for other plans -->
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
                            <img src="../../assets/Icon/individual.png" class="h-4 w-4">
                            <p class="text-lg text-black-500 font-light">Individual</p>
                        </div>
                        <span class="text-xs opacity-75 font-light">$5.6/month</span>
                    </div>
      
                    <div class="flex flex-col items-center gap-1 w-1/5">
                        <div class="flex items-center gap-2">
                        <img src="../../assets/Icon/enterprise.png" class="h-4 w-4">
                        <p class="text-lg text-black-500 font-light">Enterprise</p>
                    </div>
                        <span class="text-xs opacity-75 font-light">$129/month</span>
                    </div>

                    <div class="flex flex-col items-center gap-1 w-1/5">
                        <div class="flex items-center gap-2">
                        <img src="../../assets/Icon/partner.png" class="h-4 w-4">
                        <p class="text-lg text-black-500 font-light">Partner</p>
                        </div>
                        <span class="text-xs opacity-75 font-light">$129/month</span>
                    </div>

                    
                </div>
                <div class="flex items-center justify-between py-4">
                    <div class="flex items-center gap-2 w-2/5">
                        <ul class="flex text-sm flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                            <li class="relative custom-list my-2">Members</li>
                            <li class="relative custom-list my-2">Devices</li>
                            <li class="relative custom-list my-2">Route</li>
                            <li class="relative custom-list my-2">All features</li>
                        </ul>
                    </div>
                    <div class="flex flex-col items-center gap-1 w-1/5">
                        <ul class="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                            <li class="relative check custom-list my-2">&nbsp;</li>
                            <li class="relative check custom-list my-2">&nbsp;</li>
                            <li class="relative check custom-list my-2">&nbsp;</li>
                            <li class="relative check custom-list my-2">&nbsp;</li>
                        </ul>
                    </div>
      
                    <div class="flex flex-col items-center gap-1 w-1/5">
                        <ul class="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                            <li class="relative check custom-list my-2">&nbsp;</li>
                            <li class="relative check custom-list my-2">&nbsp;</li>
                            <li class="relative check custom-list my-2">&nbsp;</li>
                            <li class="relative check custom-list my-2">&nbsp;</li>
                        </ul>
                    </div>

                    <div class="flex flex-col items-center gap-1 w-1/5">
                        <ul class="flex flex-col list-inside pl-6 xl:pl-0 items-center justify-center text-left text-black-500 flex-grow">
                            <li class="relative check custom-list my-2">&nbsp;</li>
                            <li class="relative check custom-list my-2">&nbsp;</li>
                            <li class="relative check custom-list my-4">&nbsp;</li>
                            <!-- <router-link class="flex w-full" :to="'/account/checkout'"><ButtonOutline>Get Partner</ButtonOutline></router-link> -->
                        </ul>
                    </div>
                </div>
                
           
    </div>
    </div>
    </div>
   
  </template>

<script setup>
import ButtonPrimary from '@/molecules/ButtonPrimary';
import ButtonOutline from '@/molecules/ButtonOutline';


//   export default {
//     components: {
//       ButtonOutline
//     },
//     setup() {
//         const pricing = [
//          {
//             type: 'Individual',
//             features: [
//                 {
//                   name: 'Unlimited Bandwitch',
//                   enabled: true  
//                 },
//                 {
//                   name: 'Encrypted Connection',
//                   enabled: true  
//                 },
//                 {
//                   name: 'No Traffic Logs',
//                   enabled: false  
//                 },
//                 {
//                   name: 'Works on All Devices',
//                   enabled: false  
//                 },
//                 {
//                   name: 'Connect Anyware',
//                   enabled: true  
//                 },
//                 {
//                   name: 'Get New Features',
//                   enabled: false  
//                 }
//             ]
//          },
//          {
//             type: 'Interprise',
//             features: [
//                 {
//                   name: 'Unlimited Bandwitch',
//                   enabled: true  
//                 },
//                 {
//                   name: 'Encrypted Connection',
//                   enabled: true  
//                 },
//                 {
//                   name: 'No Traffic Logs',
//                   enabled: true  
//                 },
//                 {
//                   name: 'Works on All Devices',
//                   enabled: true  
//                 },
//                 {
//                   name: 'Connect Anyware',
//                   enabled: true  
//                 },
//                 {
//                   name: 'Get New Features',
//                   enabled: false  
//                 }
//             ]
//          },
//          {
//             type: 'Partner',
//             features: [
//                 {
//                   name: 'Unlimited Bandwitch',
//                   enabled: true  
//                 },
//                 {
//                   name: 'Encrypted Connection',
//                   enabled: true  
//                 },
//                 {
//                   name: 'No Traffic Logs',
//                   enabled: false  
//                 },
//                 {
//                   name: 'Works on All Devices',
//                   enabled: false  
//                 },
//                 {
//                   name: 'Connect Anyware',
//                   enabled: true  
//                 },
//                 {
//                   name: 'Get New Features',
//                   enabled: true  
//                 }
//             ]
//          }
//       ];
      
//       return { pricing };
//     },
//   };
  </script>
<template>
        <div class="w-full flex flex-col justify-center items-center gap-3 mt-20">
            
            <h3
              class="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Download Magicter VPN for your platform
            </h3>
            <p
              class="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
             choose the appropriate application match the package you purchased.
            </p>

            <div class="flex max-w-screen-xl justify-center  bg-white-500 shadow-md rounded-xl px-6  w-full">
                <div class="flex flex-col mx-0 py-6 gap-2 w-2/5">
                        <img src="../../assets/mac.jpeg" style="height: auto; width: 200px;" class="rounded-xl">
                        <h1 class="text-lg text-black-500 font-light">Magicter VPN for MAC </h1>
                        <p class="text-xs text-black-500 font-light opacity-75">With a high internet connectivity</p>
                </div>


                <div class="flex justify-center flex-col w-full"
              >
                <div class="flex items-center justify-between border-b border-b-gray-500 py-4">
                    
                    <div class="flex flex-col items-center gap-1 w-1/5">
                        <div class="flex items-center gap-2">
                            <img src="../../assets/Icon/individual.png" class="h-4 w-4">
                            <p class="text-lg text-black-500 font-light">Individual</p>
                        </div>
                        <span class="text-xs opacity-75 font-light">Free</span>
                    </div>
      
                    <div class="flex flex-col items-center gap-1 w-1/5">
                        <div class="flex items-center gap-2">
                        <img src="../../assets/Icon/enterprise.png" class="h-4 w-4">
                        <p class="text-lg text-black-500 font-light">Enterprise</p>
                    </div>
                    <span class="text-xs opacity-75 font-light">Free</span>
                    </div>

                    <div class="flex flex-col items-center gap-1 w-1/5">
                        <div class="flex items-center gap-2">
                        <img src="../../assets/Icon/partner.png" class="h-4 w-4">
                        <p class="text-lg text-black-500 font-light">Partner</p>
                        </div>
                        <span class="text-xs opacity-75 font-light">Free</span>
                    </div>

                    
                </div>
                <div class="flex items-center justify-between py-4">
                    <div class="flex flex-col items-center gap-3 w-1/5">
                        <ul class="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                            <li class="relative custom-list my-2"> 1 Member</li>
                            <li class="relative custom-list my-2"> 1 Device</li>
                            <li class="relative custom-list my-2"> 1 Route</li>
                        </ul>
                        <ButtonPrimary :link="''" :classes="''">Download</ButtonPrimary>
                    </div>
      
                    <div class="flex flex-col items-center gap-3 w-1/5">
                        <ul class="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                            <li class="relative custom-list my-2"> 5 Members</li>
                            <li class="relative custom-list my-2"> 5 Devices</li>
                            <li class="relative custom-list my-2"> 2 Routes</li>
                        </ul>
                        <ButtonPrimary :link="''" :classes="''">Download</ButtonPrimary>
                    </div>

                    <div class="flex flex-col items-center gap-3 w-1/5">
                        <ul class="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                            <li class="relative custom-list my-2"> Unlimited Members</li>
                            <li class="relative custom-list my-2"> Unlimited Devices</li>
                            <li class="relative custom-list my-2"> 20 Route</li>
                        </ul>
                        <ButtonPrimary :link="''" :classes="''">Download</ButtonPrimary>
                    </div>
                </div>
                
           
    </div>
            </div>

            <div class="flex max-w-screen-xl justify-center  bg-white-500 shadow-md rounded-xl px-6  w-full">
                <div class="flex flex-col mx-0 py-6 gap-2 w-2/5">
                        <img src="../../assets/windows.jpeg" style="height: auto; width: 200px;" class="rounded-xl">
                        <h1 class="text-lg text-black-500 font-light">Magicter VPN for Windows </h1>
                        <p class="text-xs text-black-500 font-light opacity-75">With a high internet connectivity</p>
                </div>


                <div class="flex justify-center flex-col w-full"
              >
                <div class="flex items-center justify-between border-b border-b-gray-500 py-4">
                    
                    <div class="flex flex-col items-center gap-1 w-1/5">
                        <div class="flex items-center gap-2">
                            <img src="../../assets/Icon/individual.png" class="h-4 w-4">
                            <p class="text-lg text-black-500 font-light">Individual</p>
                        </div>
                        <span class="text-xs opacity-75 font-light">Free</span>
                    </div>
      
                    <div class="flex flex-col items-center gap-1 w-1/5">
                        <div class="flex items-center gap-2">
                        <img src="../../assets/Icon/enterprise.png" class="h-4 w-4">
                        <p class="text-lg text-black-500 font-light">Enterprise</p>
                    </div>
                    <span class="text-xs opacity-75 font-light">Free</span>
                    </div>

                    <div class="flex flex-col items-center gap-1 w-1/5">
                        <div class="flex items-center gap-2">
                        <img src="../../assets/Icon/partner.png" class="h-4 w-4">
                        <p class="text-lg text-black-500 font-light">Partner</p>
                        </div>
                        <span class="text-xs opacity-75 font-light">Free</span>
                    </div>

                    
                </div>
                <div class="flex items-center justify-between py-4">
                    <div class="flex flex-col items-center gap-3 w-1/5">
                        <ul class="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                            <li class="relative custom-list my-2"> 1 Member</li>
                            <li class="relative custom-list my-2"> 1 Device</li>
                            <li class="relative custom-list my-2"> 1 Route</li>
                        </ul>
                        <ButtonPrimary :link="''" :classes="''">Download</ButtonPrimary>
                    </div>
      
                    <div class="flex flex-col items-center gap-3 w-1/5">
                        <ul class="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                            <li class="relative custom-list my-2"> 5 Members</li>
                            <li class="relative custom-list my-2"> 5 Devices</li>
                            <li class="relative custom-list my-2"> 2 Routes</li>
                        </ul>
                        <ButtonPrimary :link="''" :classes="''">Download</ButtonPrimary>
                    </div>

                    <div class="flex flex-col items-center gap-3 w-1/5">
                        <ul class="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                            <li class="relative custom-list my-2"> Unlimited Members</li>
                            <li class="relative custom-list my-2"> Unlimited Devices</li>
                            <li class="relative custom-list my-2"> 20 Route</li>
                        </ul>
                        <ButtonPrimary :link="''" :classes="''">Download</ButtonPrimary>
                    </div>
                </div>
                
           
    </div>
            </div>

            <div class="flex max-w-screen-xl justify-center  bg-white-500 shadow-md rounded-xl px-6  w-full">
                <div class="flex flex-col mx-0 py-6 gap-2 w-2/5">
                        <img src="../../assets/android.jpeg" style="height: auto; width: 200px;" class="rounded-xl">
                        <h1 class="text-lg text-black-500 font-light">Magicter VPN for Android </h1>
                        <p class="text-xs text-black-500 font-light opacity-75">With a high internet connectivity</p>
                </div>


                <div class="flex justify-center flex-col w-full"
              >
                <div class="flex items-center justify-between border-b border-b-gray-500 py-4">
                    
                    <div class="flex flex-col items-center gap-1 w-1/5">
                        <div class="flex items-center gap-2">
                            <img src="../../assets/Icon/individual.png" class="h-4 w-4">
                            <p class="text-lg text-black-500 font-light">Individual</p>
                        </div>
                        <span class="text-xs opacity-75 font-light">Free</span>
                    </div>
      
                    <div class="flex flex-col items-center gap-1 w-1/5">
                        <div class="flex items-center gap-2">
                        <img src="../../assets/Icon/enterprise.png" class="h-4 w-4">
                        <p class="text-lg text-black-500 font-light">Enterprise</p>
                    </div>
                    <span class="text-xs opacity-75 font-light">Free</span>
                    </div>

                    <div class="flex flex-col items-center gap-1 w-1/5">
                        <div class="flex items-center gap-2">
                        <img src="../../assets/Icon/partner.png" class="h-4 w-4">
                        <p class="text-lg text-black-500 font-light">Partner</p>
                        </div>
                        <span class="text-xs opacity-75 font-light">Free</span>
                    </div>

                    
                </div>
                <div class="flex items-center justify-between py-4">
                    <div class="flex flex-col items-center gap-3 w-1/5">
                        <ul class="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                            <li class="relative custom-list my-2"> 1 Member</li>
                            <li class="relative custom-list my-2"> 1 Device</li>
                            <li class="relative custom-list my-2"> 1 Route</li>
                        </ul>
                        <ButtonPrimary :link="''" :classes="''">Download</ButtonPrimary>
                    </div>
      
                    <div class="flex flex-col items-center gap-3 w-1/5">
                        <ul class="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                            <li class="relative custom-list my-2"> 5 Members</li>
                            <li class="relative custom-list my-2"> 5 Devices</li>
                            <li class="relative custom-list my-2"> 2 Routes</li>
                        </ul>
                        <ButtonPrimary :link="''" :classes="''">Download</ButtonPrimary>
                    </div>

                    <div class="flex flex-col items-center gap-3 w-1/5">
                        <ul class="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                            <li class="relative custom-list my-2"> Unlimited Members</li>
                            <li class="relative custom-list my-2"> Unlimited Devices</li>
                            <li class="relative custom-list my-2"> 20 Route</li>
                        </ul>
                        <ButtonPrimary :link="''" :classes="''">Download</ButtonPrimary>
                    </div>
                </div>
                
           
    </div>
            </div>
        
    </div>
</template>
<script setup>
import ButtonPrimary from '@/molecules/ButtonPrimary';
</script>
<template>
<div class="flex items flex-col w-72 min-h-screen bg-white-500 shadow-t z-10">
                <template v-if="props.showHeaderIcon">
                        <router-link to="/" class="flex p-6 gap-2 items-center cursor-pointer">
                        <img src="../../../assets/Logo.png" class="h-6"  alt="Logo">
                        <h2 class="text-black-500 text-base font-extrabold">Magicter <span class="text-purple-500">VPN</span></h2>
                </router-link>
                
                <div class="flex text-gray-600">
                        <router-link class="text-sm w-full hover:bg-purple-100" to="/account">
                                <div class="flex items-center gap-2 px-6 py-4">
                                        <HomeIcon class="h-5 w-5"/>
                                        <span>Home</span>
                                </div>
                        </router-link>
                </div></template>
                <div class="flex items-center justify-between py-4 mr-2 text-gray-600">
                <p class="text-xs px-6  opacity-75 font-light">SERVICES</p>
                <XMarkIcon v-if="!props.showHeaderIcon" @click="handleSideBar" class="h-6 w-6 cursor-pointer"/>
                </div>
                <div class="flex flex-col text-gray-600">
                        <router-link class="text-sm w-full hover:bg-purple-100" to="/account/top-up-center">
                                <div class="flex items-center gap-2 px-6 py-4">
                                        <CreditCardIcon class="h-5 w-5"/>
                                        <span>Top-up center</span>
                                </div>
                        </router-link>
                        <router-link class="text-sm w-full hover:bg-purple-100" to="/account/planning-center">
                                <div class="flex items-center gap-2 px-6 py-4">
                                        <CalendarDaysIcon class="h-5 w-5"/>
                                        <span>Planning center</span>
                                </div>
                        </router-link>
                        <router-link class="text-sm w-full hover:bg-purple-100" to="/account/managment">
                                <div class="flex items-center gap-2 px-6 py-4">
                                        <ClipboardDocumentIcon class="h-5 w-5"/>
                                        <span>Managment board</span>
                                </div>
                        </router-link>
                        <router-link class="text-sm w-full hover:bg-purple-100" to="/account/marketing">
                                <div class="flex items-center gap-2 px-6 py-4">
                                        <BanknotesIcon class="h-5 w-5"/>
                                        <span>Marketing center</span>
                                </div>
                        </router-link>
                        <router-link class="text-sm w-full hover:bg-purple-100" to="/account/faq">
                                <div class="flex items-center gap-2 px-6 py-4">
                                        <QuestionMarkCircleIcon class="h-5 w-5"/>
                                        <span>FAQ</span>
                                </div>
                        </router-link>
                </div>
            </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { HomeIcon, XMarkIcon, CreditCardIcon, ClipboardDocumentIcon, BanknotesIcon, CalendarDaysIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline';
import { useRouterStore } from '@/stores/router.state'

const props = defineProps({
        showHeaderIcon: {type: Boolean, default: true}
});

const handleSideBar = () => {
  const routeState = useRouterStore()
  routeState.handleSidebar();
}

</script>


<template>
    <div class="flex w-full items-center justify-between">
        <div class="flex gap-2">
            <Bars3Icon @click="handleSideBar" class="hidden md:flex h-8 w-8 cursor-pointer"/>
            <h3 class="text-gray-600 text-xl font-bold">{{ currentPageName }}</h3>
        </div>
       
        <div class="cursor-pointer">
            <dropdownMenu>
                <template #trigger>
                    <EmailDisplay :classes="'border-gray-500'" :is-dropdown="true"  :email="user_?.user_name"></EmailDisplay>
                </template>
                <div class="flex absolute z-20 top-[4%] right-0 w-[178px] flex-col gap-2 text-sm bg-white-500 shadow-md rounded-xl">
                    <p @click="logout()" class="hover:bg-purple-100 px-6 py-4">Logout</p>
                </div>
            </dropdownMenu>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import EmailDisplay from '@/molecules/EmailDisplay.vue';
import dropdownMenu from '@/molecules/DropdownMenu';
import { useRouterStore } from '@/stores/router.state';
import { useAuth } from '@/composables/useAuth.js';
import { Bars3Icon } from '@heroicons/vue/24/outline';

const routerStore = useRouterStore();
const { user, logout } = useAuth();
const user_  = JSON.parse(user.value);


const currentPageName = computed(() => {
    return routerStore.currentPage
});

const handleSideBar = () => {
  const routeState = useRouterStore()
  routeState.handleSidebar();
}

</script>

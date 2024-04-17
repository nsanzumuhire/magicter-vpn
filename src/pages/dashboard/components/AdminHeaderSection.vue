

<template>
    <div class="flex w-full items-center justify-between">
        <h3 class="text-gray-600 text-xl font-bold">{{ currentPageName }}</h3>
        <EmailDisplay class="cursor-pointer" :email="user_?.user_name" :classes="'border-gray-500'"></EmailDisplay>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import EmailDisplay from '@/molecules/EmailDisplay.vue';
import { useRouterStore } from '@/stores/router.state';
import { useAuth } from '@/composables/useAuth.js';

const routerStore = useRouterStore();
const { user } = useAuth();
const user_  = JSON.parse(user.value);


const currentPageName = computed(() => {
    return routerStore.currentPage
});

</script>

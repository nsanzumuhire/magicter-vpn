

<template>
    <div class="flex w-full items-center justify-between">
        <h3 class="text-gray-600 text-xl font-bold">{{ currentPageName }}</h3>
        <EmailDisplay class="cursor-pointer" :email="email" :classes="'border-gray-500'"></EmailDisplay>
    </div>
</template>
<script>
import EmailDisplay from '@/molecules/EmailDisplay.vue';
import { useRouterStore } from '@/stores/router.state';
export default {
    components: {
        EmailDisplay
    },
    computed: {
        currentPageName()  {
            return this.routerStore.currentPage
        }
    },
    setup(){
        const pageName = 'Overview'
        const email = 'nsanzudaniel59@gmail.com'
        const routerStore = useRouterStore()
        return {
            pageName,
            email,
            routerStore
        }

    }
}
</script>

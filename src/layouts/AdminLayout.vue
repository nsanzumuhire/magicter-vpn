<template>
        <div class="flex relative min-h-screen w-full relative overflow-x-hidden">
            
            <SidebarSection class="hidden lg:flex" :class="{'absolute left-0 z-20': isSidebarOpen}"/>

            <div class="flex flex-col h-fit min-h-screen relative w-full bg-white-300 px-6 pt-6">
                <AdminHeaderSection/>
                    <div class="flex-1">
                        <router-view />
                    </div>
                <FooterSmallSection/>
            </div>
        </div>
        <!-- -->
    
    </template>
    
    <script setup>
    import AdminHeaderSection from '@/pages/dashboard/components/AdminHeaderSection.vue';
    import FooterSmallSection from '@/components/FooterSmallSection.vue'
    import SidebarSection from '@/pages/dashboard/components/SidebarSection.vue'
    import { computed } from 'vue';
    import { useRouterStore } from '@/stores/router.state';

    const isSidebarOpen = computed(() => {
        const routeState = useRouterStore()
        return routeState.isSidebarOpen;
    })

    </script>
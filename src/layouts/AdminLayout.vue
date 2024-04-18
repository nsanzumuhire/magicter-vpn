<template>
        <div class="flex w-full relative overflow-x-hidden">
            <SidebarSection/>
            <div class="flex flex-col h-fit min-h-screen relative w-full bg-white-300 px-6 py-6">
                <AdminHeaderSection/>
                <router-view />
                <FooterSmallSection/>
            </div>
        </div>
        <!-- -->
    
    </template>
    
    <script setup>
    import AdminHeaderSection from '@/pages/dashboard/components/AdminHeaderSection.vue';
    import FooterSmallSection from '@/components/FooterSmallSection.vue'
    import SidebarSection from '@/pages/dashboard/components/SidebarSection.vue'

    </script>
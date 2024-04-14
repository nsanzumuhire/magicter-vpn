<template>
        <div class="flex w-full relative overflow-x-hidden">
            <SidebarSection/>
            <div class="flex min-h-screen h-auto relative w-full bg-white-300 px-6 py-6">
                <router-view />
                <FooterSmallSection/>
            </div>
        </div>
        <!-- -->
    
       
    </template>
    
    <script>
    import FooterSmallSection from '../components/FooterSmallSection.vue'
    import SidebarSection from '../pages/dashboard/components/SidebarSection.vue'
    export default {
        components: {
            FooterSmallSection,
            SidebarSection
        }
    }
    
    </script>
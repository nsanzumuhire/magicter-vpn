<template>
    <div class="flex relative min-h-screen flex-col h-screen w-full bg-white lg:bg-white-300 items-center">
        <div class="container flex flex-1 w-full items-center justify-center  mx-auto mt-6 sm:mt-12 px-6 md:px-40 lg:px-0">
            <main class="rounded-lg sm:pb-6 sm:pt-8 sm:px-6 bg-red flex flex-col bg-white-500 items-center w-full lg:w-[418px] lg:shadow-t">
                <router-link to="/" class="flex gap-2 items-center mb-16 cursor-pointer">
                    <img src="../assets/Logo.png" class="h-8 w-auto"  alt="Logo">
                    <h2 class="text-black-500 text-lg font-extrabold">Magicter <span class="text-purple-500">VPN</span></h2>
                </router-link> 
                <router-view />
            </main>
        </div>
        <FooterSmallSection/>
    </div>
    <!-- -->

   
</template>

<script setup>
    import { onMounted  } from 'vue'
    import { useAuth } from '@/composables/useAuth'; 
    import FooterSmallSection from '@/components/FooterSmallSection.vue'
    const { token, removeToken, removeStorage } = useAuth();
    

    function deleteToken() {
        if (token !== null || !token) {
            removeToken()
        }
    }


    onMounted(() => {
        deleteToken()
        removeStorage('user')
    })

</script>
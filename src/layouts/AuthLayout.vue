<template>
    <div class="flex relative flex-col h-screen w-full bg-white-300 border borde">
        <div class="container flex w-full items-center justify-center  mx-auto mt-6 sm:mt-12">
            <main class="rounded-lg sm:pb-6 sm:pt-8 sm:px-6 bg-red flex flex-col bg-white-500 items-center w-[418px] shadow-t">
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
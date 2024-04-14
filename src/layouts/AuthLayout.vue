<template>
    <div class="flex flex-col h-screen w-full bg-white-300 border borde">
        <div class="container flex w-full items-center justify-center  mx-auto mt-6 sm:mt-12">
            <main class="rounded-lg sm:pb-6 sm:pt-8 sm:px-6 bg-red flex flex-col bg-white-500 items-center w-[418px] shadow-t">
                <div class="flex gap-2 items-center mb-16">
                    <img src="../assets/Logo.png" class="h-8 w-auto"  alt="Logo">
                    <h2 class="text-black-500 text-lg font-extrabold">Magicter <span class="text-purple-500">VPN</span></h2>
                </div> 
                <router-view />
            </main>
        </div>
    </div>
    <!-- -->

   
</template>

<script>

</script>
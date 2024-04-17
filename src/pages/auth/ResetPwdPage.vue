<template>
    <div class="flex flex-col items-center gap-4 w-full text-black-500">
            <h1 class="text-3xl font-bold">Create new password</h1>
            <p class="text-sm">Enter your new password, and confirm.</p>
            <form action="" class="w-full flex flex-col gap-3 text-sm">
                <InputDefault v-model="password" :type="'password'" :placeholder="'Enter new password '"/> 
                <InputDefault v-model="confirmPwd" :type="'password'" :placeholder="'Confirm new password '"/>
                <ButtonPrimary :link="''" :is-loading="isLoading" @click="resetPasswordFunc">Update password</ButtonPrimary> 
            </form>
            <router-link class="text-purple-500 font-bold text-sm mt-2" to="/auth/signin">Back to sign in</router-link>
    
        </div>
    </template>
    
    <script setup>
        import { ref } from 'vue'
        import { useRouter, useRoute  } from 'vue-router';
        import ButtonPrimary from '../../molecules/ButtonPrimary.vue';
        import InputDefault from '../../molecules/InputDefault.vue';
        import { useAPI } from '@/composables/useAPI'; 
        import { useToast } from '@/composables/useToast.js'

        const { resetPassword } = useAPI()
        const router = useRouter();
        const route = useRoute();
        const { showSuccessMsg, showErrorMsg } = useToast();

        const code = route.query.code
        const isLoading = ref(false);
        const password = ref('');
        const confirmPwd = ref('');


        async function resetPasswordFunc() {
            const data = {code, password: password.value};
            isLoading.value = true;
            if (data.code && data.password) {
                const res = await resetPassword(data);
                isLoading.value = false;
                if (res.statusCode === 200) {
                    router.push('/auth/confirm-signin');
                    showSuccessMsg('Success, Password updated kindly login with your new password.')
                } else {
                  showErrorMsg(res.message);
                }
            }        
    }


</script>
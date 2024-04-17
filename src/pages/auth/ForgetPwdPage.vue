<template>
    <div class="flex flex-col items-center gap-4 w-full text-black-500">
            <h1 class="text-3xl font-bold">Reset password</h1>
            <p class="text-sm">Enter your email address, and we’ll send you verification code.</p>
            <form action="" class="w-full flex flex-col gap-3 text-sm">
                <InputDefault v-model="email" :type="'text'" :placeholder="'Enter your email address '"/> 
                <ButtonPrimary :link="''" :is-loading="isLoading" @click="forgotPasswordFunc">Send</ButtonPrimary> 
            </form>
            <router-link class="text-purple-500 font-bold text-sm mt-2" to="/auth/signin">Back to sign in</router-link>
    
        </div>
    </template>
    
    <script setup>
    import { ref } from 'vue'
    import { useRouter  } from 'vue-router';
    import ButtonPrimary from '../../molecules/ButtonPrimary.vue';
    import InputDefault from '../../molecules/InputDefault.vue';
    import { useAuth } from '@/composables/useAuth'; 
    import { useAPI } from '@/composables/useAPI'; 

    const { getStorage, setStorage  } = useAuth();
    const { forgotPassword } = useAPI()
    const router = useRouter();
    import { useToast } from '@/composables/useToast.js'

    const { showErrorMsg } = useToast();
    const email = ref(getStorage('email'));
    const isLoading = ref(false);


    async function forgotPasswordFunc() {
        const data = { email: email.value};
        isLoading.value = true;
        if (data.email) {
            const res = await forgotPassword(data);
            isLoading.value = false;
            if (res.statusCode === 200) {
                setStorage('email', data.email);
                router.push('/auth/verify?type=forgot-pwd')
            } else {
              showErrorMsg(res.message)
            }
        }
        
    }


</script>
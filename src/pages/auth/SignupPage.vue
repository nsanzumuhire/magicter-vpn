<template>
    <div class="flex flex-col items-center gap-4 w-full text-black-500">
            <h1 class="text-3xl font-bold">Sign up</h1>
            <p class="text-sm">Already have an account? <router-link class="text-purple-500 font-bold" to="/auth/signin">Sign in</router-link></p>
            <form action="" class="w-full flex flex-col gap-3 text-sm">
                <InputDefault v-model="email" :type="'text'" :placeholder="'Enter your email address '"/> 
                <InputDefault v-model="password" :type="'password'" :placeholder="'Enter password'"/> 
                <InputDefault v-model="passwordConfirm" :type="'password'" :placeholder="'Confirm password'"/> 
                <ButtonPrimary :link="''" :is-loading="isLoading" @click="signUpFunc">Create Account</ButtonPrimary> 

                
            </form>
            <div class="flex flex-col w-full items-center justify-center">
                <p class="text-xs text-black-100 text-center">
                    By signing up, you agree with our <span class="underline">terms of service</span> and <span class="underline">privacy policy</span>.
                </p>
            </div>
    </div>
    </template>
    
    <script setup>
       import { ref } from 'vue';
       import ButtonPrimary from '../../molecules/ButtonPrimary.vue';
       import InputDefault from '../../molecules/InputDefault.vue';
       import { useRouter } from 'vue-router'; 
       import { useAPI } from '@/composables/useAPI';
       import { useAuth } from '@/composables/useAuth';
       import { useToast } from '@/composables/useToast.js'

       const { setStorage } = useAuth();
       const { signUp } = useAPI()
       const router = useRouter();
       const { showErrorMsg } = useToast();
       
       const email = ref('');
       const password = ref('');
       const passwordConfirm = ref('')
       const isLoading = ref(false);


       async function signUpFunc() {
        const data = { email: email.value, password: password.value } 
        if (password.value !== passwordConfirm.value) {
          console.log('Error')
        }
        isLoading.value = true
        if (data.email && data.password) {
            const res = await signUp(data);
            console.log(res);
            isLoading.value = false
            if (res.statusCode === 200 && res.data) {
                setStorage('email', data.email);
                router.push('/auth/verify')
            } else {
              showErrorMsg(res.message)
            }
        }
        
    }
    
    </script>
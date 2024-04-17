<template>
    <div class="flex flex-col items-center gap-4 w-full text-black-500">
            <h1 class="text-3xl font-bold">Hi there!</h1>
            
            <EmailDisplay v-if="email" :email="email"/>
    
            <router-link class="text-sm text-purple-500 font-bold" @click="removeEmailFromStorage" to="/auth/signin">Use another account </router-link>
            <form action="" class="w-full flex flex-col gap-3 text-sm">
                <InputDefault v-model="password" :type="'password'" :placeholder="'Password'"/> 
                <ButtonPrimary @click="login" :link="''" :is-loading="isLoading">Sign in</ButtonPrimary> 
            </form>
            <router-link class="text-purple-500 font-bold text-sm -mt-2" @click="removeEmailFromStorage" to="/auth/forget-password">Forgot your password?</router-link>
        </div>
    </template>
    
 
<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router';
    import EmailDisplay from '../../molecules/EmailDisplay.vue';
    import ButtonPrimary from '../../molecules/ButtonPrimary.vue';
    import InputDefault from '../../molecules/InputDefault.vue';
    import { useAuth } from '@/composables/useAuth'; 
    import { useAPI } from '@/composables/useAPI'; 
    import { useConfig } from '@/composables/useConfig.js'
    import { useToast } from '@/composables/useToast.js'


    const { getStorage, removeStorage, setStorage, setToken  } = useAuth();
    const { signIn } = useAPI()
    const { deviceId } = useConfig();
    const { showSuccessMsg, showErrorMsg } = useToast();
    const router = useRouter();
    const email = ref(getStorage('email'));
    const password = ref('');
    const isLoading = ref(false);


    function removeEmailFromStorage() {
        if (email.value) {
            removeStorage('email')
        }
    }

    async function login() {
        const data = { email: email.value, password: password.value, device_id: deviceId};
        isLoading.value = true;
        if (data.email && data.password) {
                const res = await signIn(data);
                isLoading.value = false;
            if (res.statusCode === 200 && res.data) {
                setToken(res.data.token);
                setStorage('user', JSON.stringify(res.data.data));
                router.push('/account');
                showSuccessMsg('Hello!, Welcome to your Magicter VPN account');
            } else {
                showErrorMsg(res.message);
            }
 
        
    }
}


</script>
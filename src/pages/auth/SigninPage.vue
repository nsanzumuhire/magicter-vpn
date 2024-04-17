<template>
<div class="flex flex-col items-center gap-4 w-full text-black-500">
        <h1 class="text-3xl font-bold">Sign in</h1>
        <p class="text-sm">Don't have an account? <router-link class="text-purple-500 font-bold" to="/auth/signup">Sign up</router-link></p>
        <form action="" class="w-full flex flex-col gap-3 text-sm">
            <InputDefault v-model="email" :type="'text'" :placeholder="'Enter your email address '"/> 
            <ButtonPrimary :link="''" @click="saveEmail">Continue</ButtonPrimary> 
        </form>
        <router-link class="text-purple-500 font-bold text-sm -mt-2" to="/auth/forget-password">Forgot your password?</router-link>
    </div>
</template>

<script setup>
    import { ref, onMounted  } from 'vue'
    import ButtonPrimary from '../../molecules/ButtonPrimary.vue';
    import InputDefault from '../../molecules/InputDefault.vue';
    import { useAuth } from '@/composables/useAuth'; 
    import { useRouter } from 'vue-router';

    const router = useRouter() 
    const { token, removeToken, setStorage, removeStorage } = useAuth();
    

    const email = ref('');


    function deleteToken() {
        if (token !== null || !token) {
            removeToken()
        }
    }

    function saveEmail() {
        if (email.value) {
            setStorage('email', email.value)
            router.push('/auth/confirm-signin')
        }
    }

    onMounted(() => {
        deleteToken()
        removeStorage('user')
    })

</script>
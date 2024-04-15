<template>
    <div class="flex flex-col items-center gap-4 w-full text-black-500">
            <h1 class="text-3xl font-bold">Hi there!</h1>
            
            <EmailDisplay :email="email"/>
    
            <router-link class="text-sm text-purple-500 font-bold" @click="removeEmailFromStorage" to="/auth/signin">Use another account </router-link>
            <form action="" class="w-full flex flex-col gap-3 text-sm">
                <InputDefault v-model="password" :type="'password'" :placeholder="'Password'"/> 
                <ButtonPrimary @click="login" :link="''">Sign in</ButtonPrimary> 
            </form>
            <router-link class="text-purple-500 font-bold text-sm -mt-2" @click="removeEmailFromStorage" to="/auth/forget-password">Forgot your password?</router-link>
    
            <div class="flex w-full flex-col gap-2 text-sm mt-4">
                <ButtonOutline>
                    <div class="flex items-center justify-center gap-2">
                        <img src="../../assets/Icon/google.svg">
                        <span>Sign in with Google</span>
                    </div>
                </ButtonOutline>
                <ButtonOutline>
                    <div class="flex items-center justify-center gap-2">
                        <img src="../../assets/Icon/apple.svg">
                        <span>Sign in with Apple</span>
                    </div>
                </ButtonOutline>
            </div>
        </div>
    </template>
    
 
<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'
    import { useRouter } from 'vue-router';
    import EmailDisplay from '../../molecules/EmailDisplay.vue';
    import ButtonPrimary from '../../molecules/ButtonPrimary.vue';
    import ButtonOutline from '../../molecules/ButtonOutline.vue'
    import InputDefault from '../../molecules/InputDefault.vue';
    import { useAuth } from '@/composables/useAuth'; 
    import { useAPI } from '@/composables/useAPI'; 

    const { getStorage, removeStorage, setStorage, setToken,  } = useAuth();
    const { signIn } = useAPI()
    const router = useRouter();
    const email = ref(getStorage('email'));
    const password = ref('')


    function removeEmailFromStorage() {
        if (email.value) {
            removeStorage('email')
        }
    }

    async function login() {
        const data = { email: email.value, password: password.value} 
        if (data.email && data.password) {
            const res = await signIn(data);
            console.log(res);
            if (res.statusCode === 200 && res.data) {
                setToken(res.data.token);
                setStorage('user', JSON.stringify(res.data.data));
                router.push('/account')
            }
        }
        
    }

    onMounted(() => {
        console.log(email.value)
    })

    onUnmounted(() => {
        removeEmailFromStorage();
    })



</script>
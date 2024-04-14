<template>
    <div class="flex flex-col items-center gap-4 w-full text-black-500">
            <h1 class="text-3xl font-bold">Hi there!</h1>
            
            <EmailDisplay :email="email"/>
    
            <router-link class="text-sm text-purple-500 font-bold" to="/auth/signin">Use another account </router-link>
            <form action="" class="w-full flex flex-col gap-3 text-sm">
                <InputDefault v-model="pwd" :type="'password'" :placeholder="'Password'"/> 
                <ButtonPrimary :link="''">Sign in</ButtonPrimary> 
            </form>
            <router-link class="text-purple-500 font-bold text-sm -mt-2" to="/auth/forget-password">Forgot your password?</router-link>
    
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
    
    <script>
    import ButtonPrimary from '../../molecules/ButtonPrimary.vue';
    import ButtonOutline from '../../molecules/ButtonOutline.vue'
    import InputDefault from '../../molecules/InputDefault.vue';
    import EmailDisplay from '../../molecules/EmailDisplay.vue'
    
    export default {
      components: {
        ButtonPrimary,
        ButtonOutline,
        InputDefault,
        EmailDisplay
      },
    
      setup() {
        const email = 'nsanzudaniel59@gmail.com'
        const pwd = ''
        
    
        return {
            email,
            pwd
        }
      }
    }
    </script>
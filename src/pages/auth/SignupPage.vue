<template>
    <div class="flex flex-col items-center gap-4 w-full text-black-500">
            <h1 class="text-3xl font-bold">Sign up</h1>
            <p class="text-sm">Already have an account? <router-link class="text-purple-500 font-bold" to="/auth/signin">Sign in</router-link></p>
            <form action="" class="w-full flex flex-col gap-3 text-sm">
                <InputDefault v-model="email" :type="'text'" :placeholder="'Enter your email address '"/> 
                <ButtonPrimary :link="''">Continue</ButtonPrimary> 
            </form>
            <router-link class="text-purple-500 font-bold text-sm -mt-2" to="/auth/forget-password">Forgot your password?</router-link>
    
            <div class="flex w-full flex-col gap-2 text-sm mt-4">
                <ButtonOutline>
                    <div class="flex items-center justify-center gap-2">
                        <img src="../../assets/Icon/google.svg">
                        <span>Sign up with Google</span>
                    </div>
                </ButtonOutline>
                <ButtonOutline>
                    <div class="flex items-center justify-center gap-2">
                        <img src="../../assets/Icon/apple.svg">
                        <span>Sign up with Apple</span>
                    </div>
                </ButtonOutline>
            </div>

            <div class="flex flex-col w-full items-center justify-center">
                <p class="text-xs text-black-100">
                    By signing up, you agree with our <span class="underline">terms of service</span> and <span class="underline">privacy policy</span>. You’ll be able to change notification settings for marketing emails in your Nord Account.
                </p>
            </div>
        </div>
    </template>
    
    <script>
    import ButtonPrimary from '../../molecules/ButtonPrimary.vue';
    import ButtonOutline from '../../molecules/ButtonOutline.vue'
    import InputDefault from '../../molecules/InputDefault.vue';
    
    export default {
      components: {
        ButtonPrimary,
        ButtonOutline,
        InputDefault
      },
    
      setup() {
        const email = ''
    
        return {
            email
        }
      }
    }
    </script>
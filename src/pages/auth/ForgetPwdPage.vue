<template>
    <div class="flex flex-col items-center gap-4 w-full text-black-500">
            <h1 class="text-3xl font-bold">Reset password</h1>
            <p class="text-sm">Enter your email address, and we’ll send you the reset link.</p>
            <form action="" class="w-full flex flex-col gap-3 text-sm">
                <InputDefault v-model="email" :type="'text'" :placeholder="'Enter your email address '"/> 
                <ButtonPrimary :link="''">Send</ButtonPrimary> 
            </form>
            <router-link class="text-purple-500 font-bold text-sm mt-2" to="/auth/signin">Back to sign in</router-link>
    
        </div>
    </template>
    
    <script>
    import ButtonPrimary from '../../molecules/ButtonPrimary.vue';
    import InputDefault from '../../molecules/InputDefault.vue';
    
    export default {
      components: {
        ButtonPrimary,
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
<template>
    <div class="flex flex-col items-center gap-4 w-full text-black-500">
            <h1 class="text-3xl font-bold">Create new password</h1>
            <p class="text-sm">Enter your new password, and confirm.</p>
            <form action="" class="w-full flex flex-col gap-3 text-sm">
                <InputDefault v-model="newPwd" :type="'password'" :placeholder="'Enter new password '"/> 
                <InputDefault v-model="confirmPwd" :type="'password'" :placeholder="'Confirm new password '"/>
                <ButtonPrimary :link="''">Update password</ButtonPrimary> 
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
        const newPwd = '';
        const confirmPwd = ''
    
        return {
            newPwd,
            confirmPwd
        }
      }
    }
    </script>
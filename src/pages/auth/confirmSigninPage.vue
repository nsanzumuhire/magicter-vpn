<template>
    <div class="flex flex-col items-center gap-4 w-full text-black-500">
            <h1 class="text-3xl font-bold">Hi there!</h1>
            
                    <div class="flex items-center justify-center border border-gray-100 rounded-full p-1">
                        <div class="flex text-white-500 uppercase font-bold items-center justify-center w-6 h-6 mr-2 rounded-full" :style="{background: pickedColor}">
                            <span>{{ firstLetter }}</span>
                        </div>
                        <span class="text-sm text-black-500 opacity-75">{{email}}</span>
                    </div>
    
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
    
    export default {
      components: {
        ButtonPrimary,
        ButtonOutline,
        InputDefault
      },
    
      setup() {
        const email = 'nsanzudaniel59@gmail.com'
        const firstLetter = email.substring(0,1).toLocaleUpperCase();
        const pwd = ''
        const pickedColor = ['#006d77', '#132a13', '#31572c','#4f772d', '#0081a7', '#264653', '#780000', '#003049', '#14213d', '#023e8a', '#1b263b', '#005f73', '#bb3e03', '#ae2012', '#ae2012', '#0077b6', '#2b2d42', '#0077b6', '#ef233c', '#d90429'][Math.floor(Math.random() * (20 - 0 + 1)) + 0]
    
        console.log(pickedColor)
        return {
            email,
            pwd,
            firstLetter,
            pickedColor
        }
      }
    }
    </script>
<template>
    <div class="flex flex-col items-center gap-4 w-full text-black-500">
            <h1 class="text-3xl font-bold">Check your inbox!</h1>
            <p class="text-sm">We sent you a link to reset your password. </p>
            <EmailDisplay :email="email"/>
    
        </div>
    </template>
    
    <script>
    import EmailDisplay from '@/molecules/EmailDisplay.vue';

    export default {
      components: {
        EmailDisplay
      },
    
      setup() {
        const email = 'nsanzudaniel59@gmail.com'
        
        return {
            email
        }
      }
    }
    </script>
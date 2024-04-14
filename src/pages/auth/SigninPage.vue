<template>
<div class="flex flex-col items-center gap-4 w-full text-black-500">
        <h1 class="text-3xl font-bold">Sign in</h1>
        <p class="text-sm">Don't have an account? <router-link class="text-purple-500 font-bold" to="/auth/signup">Sign up</router-link></p>
        <form action="" class="w-full flex flex-col gap-3 text-sm">
            <InputDefault v-model="email" :type="'text'" :placeholder="'Enter your email address '"/> 
            <ButtonPrimary :link="''">Continue</ButtonPrimary> 
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
    const email = ''

    return {
        email
    }
  }
}
</script>
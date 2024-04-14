<template>
    <div class="flex flex-col items-center gap-4 w-full text-black-500">
            <h1 class="text-3xl font-bold">Verify email!</h1>
            <p class="text-sm">Enter the code we have sent you</p>
            <form action="" class="w-full flex flex-col gap-3 text-sm">
                <div
                  class="grid grid-cols-4 gap-6">
                <template v-for="(c, index) in codes" :key="index">
                    <InputDefault :ref="`inputField${index}`" :classes="'px-8'" v-model="codeArray[index]" :type="'text'" :min="1" :max="1" :placeholder="''"/>
                </template>
 
                </div>

                <ButtonPrimary :link="''">Verify</ButtonPrimary> 
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
      methods: {
        focusInput(index) {
          console.log(this.$refs[`inputField${index}`])
         
        }
      },

      mounted() {
        this.focusInput(0)
      },
    
      setup() {
        const codes = [0, 1, 2, 3];
        const codeArray = []
        const code = ''
    
        return {
            codes,
            codeArray,
            code
        }
      }
    }
    </script>
<template>
    <div class="flex flex-col items-center gap-4 w-full text-black-500">
            <h1 class="text-3xl font-bold">Verify email!</h1>
            <EmailDisplay v-if="email" :email="email"/>
            <p class="text-sm">Enter the code we have sent you</p>
            <form action="" class="w-full flex flex-col gap-3 text-sm">
                <div
                  class="grid grid-cols-4 gap-6">
                <template v-for="(c, index) in codes" :key="index">
                    <InputDefault :should-focus="index" :classes="'px-8'" v-model="codeArray[index]" :type="'text'" :min="1" :max="1" :placeholder="''"/>
                </template>
 
                </div>

                <ButtonPrimary :link="''" @click="verifyCodeFunc" :is-loading="isLoading">Verify</ButtonPrimary> 
            </form>
            <router-link class="text-purple-500 font-bold text-sm mt-2" to="/auth/signin">Back to sign in</router-link>
        </div>
    </template>
    
    <script setup>
    import ButtonPrimary from '@/molecules/ButtonPrimary.vue';
    import InputDefault from '@/molecules/InputDefault.vue';
    import { ref, onMounted, watch, computed } from 'vue'
    import { useRouter } from 'vue-router';
    import EmailDisplay from '@/molecules/EmailDisplay.vue';
    import { useAuth } from '@/composables/useAuth'; 
    import { useAPI } from '@/composables/useAPI'; 
    import { useConfig } from '@/composables/useConfig.js'
    import { useRoute } from 'vue-router';
    import { useToast } from '@/composables/useToast.js'
    import { useRouterStore } from '../../stores/router.state'

    const { getStorage, setStorage,removeStorage, setToken } = useAuth();
    const { deviceId } = useConfig();
    const { veriyEmail } = useAPI();
    const { showSuccessMsg, showErrorMsg } = useToast();

    const router = useRouter();
    const email = ref(getStorage('email'));
    const codes = ref([0, 1, 2, 3]);
    const codeArray = ref([]);
    const isLoading = ref(false);
    const route = useRoute();
    const queryType = route.query.type;
    

    async function verifyCodeFunc() {
        const verificationCode = parseInt(codeArray.value.join(''));

        if (queryType === 'forgot-pwd') {
          router.push('/auth/reset-password?code=' + verificationCode);
        } else {
          const data = { email: email.value, verify_code: verificationCode, device_id: deviceId} 
          
          isLoading.value = true;
            if (data.email && data.verify_code) {
                const res = await veriyEmail(data);
                isLoading.value = false;
                if (res.status === 200 && res.data.token) {
                    setToken(res.data.token);
                    setStorage('user', JSON.stringify(res.data.user));
                    removeStorage('email')
                    router.push('/account')
                    showSuccessMsg('Hello!, Welcome to your Magicter VPN account');
                } else {
                  showErrorMsg(res.message)
                }
            }
        }
    } 

  const focusedInput = computed(() => {
  const routeState = useRouterStore()
  return routeState.codeInputFocus;
  })

    const triggerFocus = (num) => {
      const state = useRouterStore();
      state.triggerFocusedInput(num)
    }

    watch(codeArray.value, (newCodeArray, oldCodeArray) => {
      console.log(newCodeArray, oldCodeArray)
      triggerFocus(focusedInput.value + 1)
    });

    onMounted(() => {
      triggerFocus(0)
    });

    </script>
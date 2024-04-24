  <template>
    <div>
        <header>
          <nav class="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
            <div class="col-start-1 col-end-2 flex gap-2 items-center text-black-500">
              <Bars3Icon v-if="!isSidebarOpen && token" @click="handleSideBar" class="h-8 w-8 cursor-pointer"/>
              <img src="../assets/Logo.png" class="h-6 w-auto"  alt="Logo">
              <h2 class="text-black-500 text-base font-extrabold">Magicter 
                <span class="text-purple-500">VPN</span>
                <span class="font-light px-2 opacity-75" v-if="$route.path === '/checkout'">CHECKOUT</span>
              </h2>
            </div>
            <div class="col-start-10 col-end-12 font-medium flex justify-end items-center text-sm">
                <template v-if="!token">
                  <router-link to="/auth/signin" class="cursor-pointer text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-purple-500 font-bold transition-all">
                  Sign In
                </router-link>
                <ButtonPrimary :is-full="false" :link="'/auth/signup'" :classes="defaultBtnFont">Sign Up</ButtonPrimary>
              </template>
              <router-link v-else to="/account" class="cursor-pointer"> 
                <EmailDisplay  :email="user_?.user_name"></EmailDisplay>
              </router-link>
      

            </div>
          </nav>
  </header>

  <!-- Mobile Navigation --> 
  <nav class="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
    <div class="bg-white-500 sm:px-3">
      
    </div>
  </nav>
  <!-- End Mobile Navigation -->
    </div>
  </template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import ButtonPrimary from '../molecules/ButtonPrimary';
import { useAuth } from '@/composables/useAuth.js';
import EmailDisplay from '../molecules/EmailDisplay';
import { Bars3Icon } from '@heroicons/vue/24/outline';
import { useRouterStore } from '@/stores/router.state'

const { token, user } = useAuth();
const user_  = JSON.parse(user.value);
const scrollActive = ref(false);
const defaultBtnFont = 'font-bold';

const handleScroll = () => {
  scrollActive.value = window.scrollY > 20;
};

const handleSideBar = () => {
  const routeState = useRouterStore()
  routeState.handleSidebar();
}

const isSidebarOpen = computed(() => {
  const routeState = useRouterStore()
  return routeState.isSidebarOpen;
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

</script>
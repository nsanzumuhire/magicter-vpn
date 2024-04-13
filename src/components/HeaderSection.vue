  <template>
    <div>
        <header>
    <nav class="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
      <div class="col-start-1 col-end-2 flex gap-2 items-center">
        <img src="../assets/Logo.png" class="h-10 w-auto"  alt="Logo">
        <h2 class="text-black-500 text-lg font-extrabold">Magicter <span class="text-purple-500">VPN</span></h2>
      </div>
      <div class="col-start-10 col-end-12 font-medium flex justify-end items-center text-sm">
        <router-link to="/signin" class="cursor-pointer text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-purple-500 font-bold transition-all">
          Sign In
        </router-link>
        <ButtonPrimary :classes="defaultBtnFont">Sign Up</ButtonPrimary>
      </div>
    </nav>
  </header>

  <!-- Mobile Navigation -->
  <nav class="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
    <div class="bg-white-500 sm:px-3">
      <ul class="flex w-full justify-between items-center text-black-500">
        <NavLink
          to="about"
          @click="setActiveLink('about')"
          :active="activeLink === 'about'"
          class="mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          About
        </NavLink>
        <!-- Similar NavLink components for other links -->
      </ul>
    </div>
  </nav>
  <!-- End Mobile Navigation -->
    </div>
  </template>

<script>
import { ref, onMounted } from 'vue';

// import LogoVPN from '../assets/Logo.svg';
import ButtonPrimary from '../molecules/ButtonPrimary';

export default {
  components: {
    ButtonPrimary

  },
  setup() {
    const activeLink = ref(null);
    const scrollActive = ref(false);
    const defaultBtnFont = 'font-bold';

    const handleScroll = () => {
      scrollActive.value = window.scrollY > 20;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    return {
      activeLink,
      scrollActive,
      handleScroll,
      defaultBtnFont
    };
  },
};
</script>
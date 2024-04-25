<template>
            <div class="w-full max-w-screen-xl mx-auto flex flex-col justify-center items-center gap-3 mt-20">
            
            <h3
              class="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Frequently asked quesions 
            </h3>
            <p
              class="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
             Bellow you can filter in FaQs for easy discovery
            </p>

            <template v-if="!isLoading && faqs">
                <template v-for="(f, index) in faqs" :key="index">
                    <div @click="toggleFaqIndex(index)" :class="{'border border-purple-500': selectedIndex === index }" class="flex w-full flex-col cursor-pointer bg-white-500 rounded-xl border border-gray-500 px-6 py-6 hover:border hover:border-purple-500">
                        <div class="flex items-center justify-between">
                            <div class="flex gap-2 items-center">
                                <p class="text-sm"> {{ f.question }}</p>
                            </div>    
                            <span class="flex items-center">
                                <ChevronDownIcon v-if="selectedIndex === index" class="h-4 w-4"/>
                                <ChevronRightIcon v-else class="h-4 w-4"/>    
                            </span> 
                        </div>
                        <div v-if="selectedIndex === index" class="flex pt-6">
                            {{ f.answer }}
                        </div>
                    </div>
                </template>
            </template>

            <template v-else>
                <div class="flex min-h-[calc(100vh-300px)] w-full justify-center items-center">
                    <SpinnerLoader :full-loadder="true" />
                </div>
            </template>
        
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import {  ChevronRightIcon, ChevronDownIcon } from '@heroicons/vue/24/outline';
import { useAPI } from '@/composables/useAPI';
import { useRouterStore } from '@/stores/router.state';
import SpinnerLoader from '@/molecules/SpinnerLoader.vue';

const { getFaqs } = useAPI();
const state = useRouterStore();
const searchInput = ref('');
const selectedIndex = ref(-1);


async function getAllFAQs() {
    state.setState({
      faqs: { isLoading: true },
    });

    const res = await getFaqs();
    if (res.statusCode === 200) {
      state.setState({
        faqs: { isLoading: false, data: res.data },
      });
    } else {
      state.setState({
        faqs: { isLoading: false },
      });
    }
}

function toggleFaqIndex(index) {
    if (index === selectedIndex.value) {
        selectedIndex.value = -1
    } else {
        selectedIndex.value = index;
    }
}

  const faqs = computed(() => {
    return state.getFaqs(searchInput.value);
  });

  const isLoading = computed(() => {
    return state.faqs.isLoading;
  });

  onMounted(() => {
    getAllFAQs()
  })

</script>
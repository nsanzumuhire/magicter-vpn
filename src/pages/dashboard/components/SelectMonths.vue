<template>
   <div class="flex w-full space-x-4 text-center justify-center">
        <label class="flex items-center gap-2">
        <input @click="setMonths(1)" type="radio" :checked="selectedMonths === 1" class="form-radio cursor-pointer h-5 w-5 rounded-full bg-gray-500 border-transparent focus:border-transparent focus:bg-gray-100 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 text-purple-500" name="radio" value="option1">
        <span class="ml-2">1 month</span>
        </label>
        <label class="inline-flex items-center">
        <input @click="setMonths(3)" type="radio" :checked="selectedMonths === 3" class="form-radio h-5 w-5 cursor-pointer rounded-full bg-gray-500 border-transparent focus:border-transparent focus:bg-gray-100 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 text-purple-500" name="radio" value="option1">
        <span class="ml-2">3 months</span>
        </label>
        <label class="inline-flex items-center">
        <input @click="setMonths(6)" type="radio" :checked="selectedMonths === 6" class="form-radio h-5 w-5 cursor-pointer rounded-full bg-gray-500 border-transparent focus:border-transparent focus:bg-gray-100 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 text-purple-500" name="radio" value="option1">
        <span class="ml-2">6 months</span>
        </label>
        <label class="inline-flex items-center">
        <input @click="setMonths(12)" type="radio" :checked="selectedMonths === 12" class="form-radio h-5 w-5 cursor-pointer rounded-full bg-gray-500 border-transparent focus:border-transparent focus:bg-gray-100 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 text-purple-500" name="radio" value="option1">
        <span class="ml-2">1 year</span>
        </label>
    </div>
</template>
<script setup>
import { computed} from 'vue';
import { useRouterStore } from '@/stores/router.state'

const state = useRouterStore();

function setMonths(months) {
  state.setState({ 
    selectedMonths: months
  });
}

const selectedMonths = computed(() => {
    return state.getSelectedMonths;
});

</script>
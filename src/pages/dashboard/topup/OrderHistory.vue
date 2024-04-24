<template>
<template v-if="!isLoading">
  <div class="container max-w-screen-xl mx-auto mt-8">
  <div class="overflow-x-auto">
    <table class="table-auto min-w-full bg-white-500 shadow-md rounded-lg overflow-hidden">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-4">#Order ID</th>
          <th class="px-4 py-4">Ordered on</th>
          <th class="px-4 py-4">Amount</th>
          <th class="px-4 py-4">Type</th>
          <th class="px-4 py-4">Status</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        <template v-for="(item, index) in history" :key="index">
          <tr class="text-center">
          <td class="px-4 py-4">{{item.id}}</td>
          <td class="px-4 py-4">{{useDateFormat(item.createdAt, 'YYYY-MM-DD HH:mm').value }}</td>
          <td class="px-4 py-4">$ {{item.packages.price}}</td>
          <td class="px-4 py-4">{{item.packages.months}} months</td>
          <td class="px-4 py-4 flex items-center justify-center">
            <div v-if="item.status === null" class="flex w-fit items-center justify-center text-xs rounded-2xl text-green-500 font-bold bg-green-100 px-3 py-1">Successful</div>
            <div v-else-if="item.status === 0" class="flex w-fit items-center justify-center text-xs rounded-2xl text-red-500 font-bold bg-red-100 px-3 py-1">Failed</div>
          </td>
        </tr>
      </template>
        
      </tbody>
    </table>
  </div>
</div>
</template>

<template v-else>
      <div class="flex min-h-[calc(100vh-300px)] w-full justify-center items-center">
        <SpinnerLoader :full-loadder="true" />
      </div>
    </template>
</template>
<script setup>
import { useAPI } from '@/composables/useAPI';
import { useRouterStore } from '@/stores/router.state'
import { onMounted, computed } from 'vue';
import SpinnerLoader from '@/molecules/SpinnerLoader.vue';
import { useDateFormat } from '@vueuse/core'


const { orderHistory } = useAPI();
const state = useRouterStore();

async function getUserOrderHistory() {

  state.setState({ 
    orderHistory: { isLoading: true }
  });

  const orderHistoryData = await orderHistory();


  if (orderHistoryData.statusCode === 200) {
        state.setState({ 
          orderHistory: { isLoading: false, data: orderHistoryData.data },
        });
  } else {
        state.setState({ 
          orderHistory: { isLoading: false },
        });
  }

console.log('isLoading', isLoading)
console.log('his--', history)
}

const history = computed(() => {
    return state.orderHistoryData;
});

const isLoading = computed(() => {
    return state.orderHistory.isLoading;
});




onMounted(() => {
    if (!history.value) {
      getUserOrderHistory();
    }
})

</script>

<template>
    <div class="flex flex-col gap-8 mt-20">
      <div class="flex space-x-10 w-full mx-auto max-w-screen-xl text-sm font-bold">
        <router-link exact class="flex p-2" active-class="border-b-2 border-purple-500 text-purple-500" :to="'/account/top-up-center/new'">Top up center</router-link>
        <router-link exact class="flex p-2" active-class="border-b-2 border-purple-500 text-purple-500" :to="'/account/top-up-center/history'">Order history</router-link>
      </div>
      <router-view />
    </div>
   
  </template>

<script setup>
</script>
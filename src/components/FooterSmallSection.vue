<template>
    <div class="bg-white-300 w-full">
      <div class="flex w-full px-6 sm:px-8 lg:px-16">
        <div class="text-xs flex divide-x divide-gray-500 mt-6 mb-4 space-x-2 py-1 w-full items-center justify-center">
            <a class="text-black-500 cursor-pointer hover:underline">Terms of use</a>
            <a class="pl-2 text-black-500  cursor-pointer hover:underline">Privacy policy</a>
            <a class="pl-2 text-black-500">info@magicter.com</a>
            <p class="text-gray-400 pl-2">©{{ new Date().getFullYear() }} - MagitecterVPN</p>
          </div>
      </div>
    </div>
  </template>
  
  <script>

  
  export default {
    components: {
    },
  };
  </script>
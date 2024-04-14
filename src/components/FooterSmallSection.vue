<template>
    <div class="bg-white-300 w-full  xl:absolute xl:bottom-0">
      <div class="flex w-full px-6 sm:px-8 lg:px-16">
        <div class="flex divide-x divide-gray-500 my-6 space-x-2 py-1 w-full items-center justify-center">
            <a class="text-sm text-black-500 cursor-pointer hover:underline">Terms of use</a>
            <a class="text-sm pl-2 text-black-500  cursor-pointer hover:underline">Privacy policy</a>
            <a class="text-sm pl-2 text-black-500">info@magicter.com</a>
            <p class="text-gray-400 text-sm pl-2">©{{ new Date().getFullYear() }} - MagitecterVPN</p>
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
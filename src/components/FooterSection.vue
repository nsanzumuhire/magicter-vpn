<template>
    <div class="bg-white-300 w-full py-16 xl:absolute xl:bottom-0">
      <div class="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid  sm:grid-rows-1 gap-4">
        <div class=" text-sm row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start w-full">
          <!-- <h3 class="text-lg font-bold text-black-500 ">About us</h3> -->
          <div class="flex w-full -mx-2 text-sm">
            <div class="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <img src="../assets/Icon/facebook.svg" class="h-6 w-6" />
            </div>
            <div class="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <img src="../assets/Icon/twitter.svg" class="h-6 w-6" />
            </div>
            <div class="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <img src="../assets/Icon/instagram.svg" class="h-6 w-6" />
            </div>
          </div>
          <div class="flex divide-x divide-gray-500 my-6 space-x-2 py-1 w-full">
            <a class="text-sm text-black-500 cursor-pointer hover:underline">Terms of use</a>
            <a class="text-sm pl-2 text-black-500  cursor-pointer hover:underline">Privacy policy</a>
            <a class="text-sm pl-2 text-black-500  cursor-pointer hover:underline">info@magicter.com</a>
          </div>
          <p class="text-gray-400 text-sm">©{{ new Date().getFullYear() }} - MagitecterVPN</p>
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
<template>
    <div class="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="feature">
      <div class="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div class="flex w-full justify-end">
          <div class="h-full w-full p-4">
            <img
              src="../assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              height="414"
              width="508"
            />
          </div>
        </div>

          <div class="flex flex-col gap-4 items-end justify-center ml-auto w-full lg:w-9/12" :variants="scrollAnimation">
            <h3 class="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              We Provide Many Features You Can Use
            </h3>
            <p class="my-2 text-black-500">
              You can explore the features that we provide with fun and have their
              own functions each feature.
            </p>
            <ul class="flex flex-col gap-4 text-black-500 self-start list-inside ml-8">
              <template v-for="(feature, index) in features" :key="index">
                <li
                  class="relative circle-check custom-list"
    
                  whileHover="{ scale: 1.1, transition: { duration: .2 } }"
                >
                  {{ feature }}
                </li>
              </template>
            </ul>
          </div>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    components: {

    },
    setup() {
      const features = [
        "Powerfull online protection.",
        "Internet without borders.",
        "Supercharged VPN",
        "No specific time limits."
      ];
      
      return { features };
    },
  };
  </script>
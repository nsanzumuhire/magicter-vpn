<template>
    <div :class="'flex items-center justify-center border border-gray-100 rounded-full p-1 ' + AddClass">
                <div class="flex text-white-500 uppercase font-bold items-center justify-center w-6 h-6 mr-2 rounded-full" :style="{background: pickedColor}">
                    <span>{{ firstLetter }}</span>
                </div>
                <span class="text-sm text-black-500 opacity-75">{{email}}</span>
    </div>
</template>
<script>
import { toRefs } from 'vue'
export default {
    props: {
        email: {
            type: String,
            required: true
        },
        classes: {
            type: String,
            required: false
        },
    },
    components: {

    },
  
    setup(props) {
        
      const { email, classes } = toRefs(props)
      const AddClass = classes.value;
      const firstLetter = email.value.substring(0,1).toLocaleUpperCase();
      const pickedColor = ['#006d77', '#132a13', '#31572c','#4f772d', '#0081a7', '#264653', '#780000', '#003049', '#14213d', '#023e8a', '#1b263b', '#005f73', '#bb3e03', '#ae2012', '#ae2012', '#0077b6', '#2b2d42', '#0077b6', '#ef233c', '#d90429'][Math.floor(Math.random() * (20 - 0 + 1)) + 0]
  
      return {
    
          firstLetter,
          pickedColor,
          AddClass
      }
    }
  }
  </script>
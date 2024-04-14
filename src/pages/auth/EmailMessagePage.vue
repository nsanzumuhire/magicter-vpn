<template>
    <div class="flex flex-col items-center gap-4 w-full text-black-500">
            <h1 class="text-3xl font-bold">Check your inbox!</h1>
            <p class="text-sm">We sent you a link to reset your password. </p>
                    <div class="flex items-center justify-center border border-gray-100 rounded-full p-1">
                        <div class="flex text-white-500 uppercase font-bold items-center justify-center w-6 h-6 mr-2 rounded-full" :style="{background: pickedColor}">
                            <span>{{ firstLetter }}</span>
                        </div>
                        <span class="text-sm text-black-500 opacity-75">{{email}}</span>
                    </div>
    
        </div>
    </template>
    
    <script>
    
    export default {
      components: {

      },
    
      setup() {
        const email = 'nsanzudaniel59@gmail.com'
        const firstLetter = email.substring(0,1).toLocaleUpperCase();
        const pwd = ''
        const pickedColor = ['#006d77', '#132a13', '#31572c','#4f772d', '#0081a7', '#264653', '#780000', '#003049', '#14213d', '#023e8a', '#1b263b', '#005f73', '#bb3e03', '#ae2012', '#ae2012', '#0077b6', '#2b2d42', '#0077b6', '#ef233c', '#d90429'][Math.floor(Math.random() * (20 - 0 + 1)) + 0]
    
        return {
            email,
            pwd,
            firstLetter,
            pickedColor
        }
      }
    }
    </script>
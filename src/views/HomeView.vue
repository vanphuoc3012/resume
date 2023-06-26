<script setup lang="ts">

</script>

<template>
  <div class="container mx-auto w-[50%] md:w-full border">
    <!--    Name + title-->
    <div class="p-4 mb-2 relative flex items-center">
      <img src="../assets/images/av.png" alt="Avatar">
      <div class="px-4">
        <h1 class="font-bold text-3xl ">Ho Van Phuoc</h1>
        <p>Junior Developer</p>
      </div>
    </div>

    <!-- Link   -->
    <div class="flex items-center px-4">
      <a href="https://github.com/vanphuoc3012"
         class="flex items-center px-1 hover:bg-gray-100 rounded-md"
         target="_blank" rel="noopener noreferrer"
      >
        <img class="h-5 px-1" src="./../assets/images/Github.svg" alt=""/>
        Developer
      </a>
      <span>/</span>
      <a href="https://www.linkedin.com/in/phuoc-ho-van/"
         class="flex items-center px-1 text-blue-500 hover:bg-gray-100 rounded-md"
         target="_blank" rel="noopener noreferrer"
      >
        <img class="h-5 px-1" src="./../assets/images/LinkedIN.svg" alt=""/>
        Linkedin
      </a>
      <span>/</span>

      <a href="mailto:vanphuoc3012@gmail.com?"
         class="flex items-center px-1 text-red-400 hover:bg-gray-100 rounded-md"
         target="_blank" rel="noopener noreferrer"
      >
        <img class="h-8 px-1" src="./../assets/images/Gmail.svg" alt=""/>
        vanphuoc3012@gmail.com
      </a>
      <span>/</span>
      <a href="tel:+843444415562"
         class="flex items-center px-1 text-blue-500 hover:bg-gray-100 rounded-md"
         target="_blank" rel="noopener noreferrer"
      >
        <i class="fa-solid fa-mobile-screen-button px-1"></i>
        +84 344 441 5562
      </a>

    </div>

    <div class="w-full pt-8 flex items-center px-4">
      <p class="font-bold text-xl">Skill</p>
      <hr class="ms-4 border-gray-600 border-2 w-full border-opacity-30"/>
      <div class="">
        Java
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
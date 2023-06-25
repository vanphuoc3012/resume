<script setup lang="ts">

</script>

<template>
  <div class="container mx-auto w-[50%] md:w-full border">
    <!--    Name + title-->
    <div class="p-4 mb-2 relative flex items-center">
      <img src="../assets/images/av.png" alt="Avatar">
      <div class="px-4">
        <h1 class="font-bold text-3xl ">Ho Van Phuoc</h1>
        <p>Java Developer</p>
      </div>
    </div>

    <!-- Link   -->
    <div class="flex">
      <a href="https://github.com/vanphuoc3012"
         class="flex items-center px-1 hover:bg-gray-100 rounded-md"
         target="_blank" rel="noopener noreferrer"
      >
        <img class="h-5 px-1" src="./../assets/images/github.svg" alt=""/>
        Developer
      </a>
      <span>/</span>
      <a href="https://www.linkedin.com/in/phuoc-ho-van/"
         class="flex items-center px-1 text-blue-500 hover:bg-gray-100 rounded-md"
         target="_blank" rel="noopener noreferrer"
      >
        <img class="h-5 px-1" src="./../assets/images/linkedin.svg" alt=""/>
        Linkedin
      </a>
      <span>/</span>
    </div>
  </div>
</template>

<style scoped>

</style>
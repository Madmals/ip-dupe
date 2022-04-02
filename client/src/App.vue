<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Content from '@/components/Content.vue'
</script>

<template>
  <header>

      <nav class="h-[10vh] text-white flex justify-center p-2">
        <RouterLink class="mr-2" to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';


</style>

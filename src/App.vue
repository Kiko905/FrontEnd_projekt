<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/NavBar.vue'

</script>

<template>
  <header>
    <Nav />
  </header>

  <RouterView />
</template>
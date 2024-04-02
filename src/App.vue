<template>
  <NavBar />
  <router-view></router-view>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-gray;
  font-size: 1rem;
  line-height: 1;
  font-weight: normal;

  width: 100vw;
  height: 100vh;
  padding-top: 3rem;

  scroll-behavior: smooth;
  overflow-x: hidden;
  box-sizing: border-box;
}
</style>

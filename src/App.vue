<template>
  <the-navbar />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar';

export default {
  name: 'App',
  components: { TheNavbar }
};
</script>

<style lang="scss">
@import './assets/style';
</style>

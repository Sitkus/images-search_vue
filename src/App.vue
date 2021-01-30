<template>
  <Header />
  <Images />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/layout/Header.vue';
import Images from './components/Images.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Images
  }
});
</script>

<style lang="scss">
// Style
</style>

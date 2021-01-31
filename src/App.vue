<template>
  <main>
    <Search />
    <Images />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Search from './components/Search.vue';
import Images from './components/Images.vue';

export default defineComponent({
  name: 'App',
  components: {
    Search,
    Images
  }
});
</script>

<style lang="scss">
// Style
</style>

<template>
  <main class="main">
    <Search />
    <Images />
  </main>
</template>

<script>
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
.main {
  min-height: calc(100vh - 6rem);
  width: 90vw;
  margin: 3rem auto;
}

@media screen and (min-width: 1100px) {
  .main {
    width: 85vw;
  }
}
</style>

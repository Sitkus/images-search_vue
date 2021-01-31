<template>
  <section class="search">
    <form class="search__form">
      <input type="text" class="search__input" placeholder="What are you searching for?" />
      <button class="search__btn">Find it!</button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Search'
});
</script>

<style scoped lang="scss">
// Style
</style>

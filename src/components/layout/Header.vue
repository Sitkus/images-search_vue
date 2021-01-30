<template>
  <header>
    <h2>Header here</h2>
    <SearchBox />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchBox from '../common/SearchBox.vue';

export default defineComponent({
  name: 'Header',
  components: {
    SearchBox
  }
});
</script>

<style scoped lang="scss">
// Style
</style>

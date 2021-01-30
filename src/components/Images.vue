<template>
  <main>
    <h1>{{ msg }}</h1>
    <ImageBox />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ImageBox from './common/ImageBox.vue';

export default defineComponent({
  name: 'Images',
  components: {
    ImageBox
  },
  data() {
    return {
      msg: 'Hello world, this is Vue.js v3 TypeScript images search application.' as string
    };
  }
});
</script>

<style scoped lang="scss">
// Style
</style>

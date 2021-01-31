<template>
  <section class="photos">
    <ImageBox />
    <ImageBox />
    <ImageBox />
    <ImageBox />
    <ImageBox />
    <ImageBox />
    <ImageBox />
    <ImageBox />
    <ImageBox />
    <ImageBox />
    <ImageBox />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ImageBox from './common/ImageBox.vue';

export default defineComponent({
  name: 'Images',
  components: {
    ImageBox
  }
});
</script>

<style scoped lang="scss">
.photos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

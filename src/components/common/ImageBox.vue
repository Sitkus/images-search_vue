<template>
  <article class="photo">
    <img class="photo__img" src="/" alt="Text" />
    <div class="photo__info">
      <h2 class="photo__author">Lukas Sitkus</h2>
      <p class="photo__likes">103 likes</p>
      <img class="photo__portrait" src="/" alt="/" />
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header'
});
</script>

<style scoped lang="scss">
// Style
</style>

<template>
  <article class="photo">
    <img class="photo__img" src="@/assets/images/hero.jpg" alt="Text" />
    <div class="photo__info">
      <div>
        <h2 class="photo__author">Lukas Sitkus</h2>
        <p class="photo__likes">103 likes</p>
      </div>
      <a class="photo__portrait-link" href="/">
        <img class="photo__portrait" src="@/assets/images/hero.jpg" alt="/" />
      </a>
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
.photo {
  position: relative;
  height: 20rem;
  width: 100%;
  margin-bottom: 3rem;
  overflow: hidden;

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    padding: 2rem;
  }

  &__author {
    //
  }

  &__likes {
    //
  }

  &__portrait-link {
    display: block;
  }

  &__portrait {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 50%;
  }
}
</style>

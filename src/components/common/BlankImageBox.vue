<template>
  <article class="photo"></article>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlankImageBox'
});
</script>

<style scoped lang="scss">
.photo {
  position: relative;
  height: 30rem;
  width: 100%;
  margin-bottom: 3rem;
  background-color: $blue;
}

@media screen and (min-width: 868px) {
  .photo {
    flex: 0 0 calc(100% / 2 - 1.5rem);
    margin-right: 3rem;

    &:nth-child(2n) {
      margin-right: 0;
    }
  }
}

@media screen and (min-width: 1300px) {
  .photo {
    flex: 0 0 calc(100% / 3 - 6rem / 3);

    &:nth-child(2n) {
      margin-right: 3rem;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}
</style>

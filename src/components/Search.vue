<template>
  <section class="search">
    <form class="search__form">
      <input type="text" class="search__input" placeholder="Search" />
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
.search {
  padding: 5rem 0;

  &__form {
    width: 100%;
    display: flex;
  }

  &__input {
    flex: 1;
    padding: 1rem 1.5rem;
    border: none;
    border-bottom: 0.2rem solid var(--blue);
    outline: none;

    &:focus {
      border-bottom: 0.2rem solid var(--yellow);
    }
  }

  &__btn {
    padding: 1rem 1.5rem;
    border: none;
    border-bottom: 0.2rem solid var(--blue);
    background-color: white;
    cursor: pointer;
    transition: all 250ms ease-in-out;

    &:hover {
      border-bottom: 0.2rem solid var(--yellow);
      transition: all 250ms ease-in-out;
    }
  }
}
</style>

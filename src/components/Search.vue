<template>
  <section class="search">
    <form class="search__form">
      <input type="text" class="search__input" placeholder="Search" />
      <button type="submit" class="search__btn"><fa icon="search"></fa></button>
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
  max-width: 60rem;

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
    font-size: 1.8rem;
    color: var(--blue);

    &::placeholder {
      font-size: 1.8rem;
      color: var(--blue);
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1.5rem;
    border: none;
    outline: none;
    border-bottom: 0.2rem solid var(--blue);
    background-color: white;
    font-size: 1.8rem;
    color: var(--blue);
    cursor: pointer;
    transition: color 150ms ease-in-out;

    &:hover {
      color: var(--yellow);
      transition: color 150ms ease-in-out;
    }
  }
}

@media screen and (min-width: 868px) {
  .search {
    &__input {
      font-size: 2.2rem;
      border-bottom: 0.3rem solid var(--blue);

      &::placeholder {
        font-size: 2.2rem;
      }
    }

    &__btn {
      border-bottom: 0.3rem solid var(--blue);
      font-size: 2.2rem;
    }
  }
}
</style>

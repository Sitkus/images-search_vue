<template>
  <section class="search">
    <form @submit.prevent="checkIfInputIsNotEmpty" class="search__form">
      <input
        v-model="searchInput"
        type="text"
        class="search__input"
        :class="{ 'search__input--error': errorMessage }"
        placeholder="Search"
      />
      <button type="submit" class="search__btn"><fa icon="search"></fa></button>
    </form>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'Search',
  data() {
    return {
      searchInput: ''
    };
  },
  computed: mapGetters(['errorMessage']),
  methods: {
    ...mapActions(['getImages', 'showError', 'removeError']),
    checkIfInputIsNotEmpty() {
      if (this.searchInput) {
        this.getImages(`https://api.unsplash.com/search/photos?query=${this.searchInput}&per_page=30`);
      } else {
        this.showError('Please insert something to search for');
      }
    }
  }
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
    border-bottom: 0.2rem solid $blue;
    outline: none;
    font-size: 1.8rem;
    color: $blue;

    &::placeholder {
      font-size: 1.8rem;
      color: $blue;
    }

    &--error {
      border-bottom: 0.2rem solid $red;
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1.5rem;
    border: none;
    outline: none;
    border-bottom: 0.2rem solid $blue;
    background-color: white;
    font-size: 1.8rem;
    color: $blue;
    cursor: pointer;
    transition: color 150ms ease-in-out;

    &:hover {
      color: $yellow;
      transition: color 150ms ease-in-out;
    }
  }
}

@media screen and (min-width: 868px) {
  .search {
    &__input {
      font-size: 2.2rem;
      border-bottom: 0.3rem solid $blue;

      &::placeholder {
        font-size: 2.2rem;
      }

      &--error {
        border-bottom: 0.3rem solid $red;
      }
    }

    &__btn {
      border-bottom: 0.3rem solid $blue;
      font-size: 2.2rem;
    }
  }
}
</style>

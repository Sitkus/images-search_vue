<template>
  <main class="main">
    <ErrorMessage v-if="errorMessage" />
    <Search />
    <Images />
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

import { ErrorMessage } from './components/common';
import { Search, Images } from './components';

export default defineComponent({
  name: 'App',
  components: {
    ErrorMessage,
    Search,
    Images
  },
  computed: mapGetters('error', ['errorMessage']),
  methods: mapActions('error', ['showError', 'removeError'])
});
</script>

<style lang="scss">
.main {
  min-height: calc(100vh - 6rem);
  width: 90vw;
  margin: 3rem auto;
}

@media screen and (min-width: 1100px) {
  .main {
    width: 85vw;
  }
}
</style>

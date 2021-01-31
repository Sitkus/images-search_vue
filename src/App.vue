<template>
  <main class="main">
    <Search />
    <Images />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Search from './components/Search.vue';
import Images from './components/Images.vue';

export default defineComponent({
  name: 'App',
  components: {
    Search,
    Images
  }
});
</script>

<style lang="scss">
:root {
  --black: #161616;
  --blue: #324d67;
  --gray: #cccccc;
  --light-gray: #f1f1f1;
  --light-white: #f9f9f9;
  --yellow: #eda31d;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  background-color: white;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  overflow-y: scroll;
}

body {
  color: var(--black);
  font-size: 1.5rem;
  overflow-x: hidden;
  overflow-y: auto;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: inherit;
}
.main {
  width: 90vw;
  margin: 0 auto;
}
</style>

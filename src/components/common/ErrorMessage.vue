<template>
  <p class="error">{{ errorMessage }}</p>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'ErrorMessage',
  computed: mapGetters(['errorMessage'])
});
</script>

<style scoped lang="scss">
.error {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: $red;
  color: white;
  text-align: center;
  padding: 1rem 0;
  z-index: 10;
}
</style>

<template>
  <section class="photos">
    <ImageBox :key="image.id" v-for="image in allImages" />
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import ImageBox from './common/ImageBox.vue';

export default defineComponent({
  name: 'Images',
  components: {
    ImageBox
  },
  methods: {
    ...mapActions(['getImages'])
  },
  computed: mapGetters(['allImages']),
  created() {
    this.getImages('https://api.unsplash.com/photos/random?count=30');
  }
});
</script>

<style scoped lang="scss">
.photos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media screen and (min-width: 876px) {
  .photos {
    justify-content: flex-start;
  }
}
</style>

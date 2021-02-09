<template>
  <section v-if="isLoading || allImages.length === 0" class="photos">
    <BlankImageBox v-for="blankImage in 30" :key="blankImage" />
  </section>
  <section v-else class="photos">
    <ImageBox
      v-for="image in allImages"
      :likes="image.likes"
      :user="image.user"
      :pictureUrl="image.urls.regular"
      :pictureAlt="image.alt_description"
      :key="image.id"
    />
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { BlankImageBox, ImageBox } from './common';

export default defineComponent({
  name: 'Images',
  components: {
    ImageBox,
    BlankImageBox
  },
  computed: {
    ...mapGetters('images', ['isLoading', 'allImages']),
    ...mapGetters('error', ['errorMessage'])
  },
  methods: {
    ...mapActions('images', ['getImages']),
    ...mapActions('error', ['showError', 'removeError'])
  },
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

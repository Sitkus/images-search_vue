<template>
  <article class="photo">
    <img class="photo__img" :src="pictureUrl" :alt="pictureAlt ? pictureAlt : 'Photography'" />
    <div class="photo__info">
      <div>
        <h2 class="photo__author">{{ user.first_name }} {{ user.last_name }}</h2>
        <p class="photo__likes">{{ likes }} likes</p>
      </div>
      <a class="photo__portrait-link" :href="user.links.html" target="_blank">
        <img
          class="photo__portrait"
          :src="user.profile_image.large"
          :alt="`Picture of ${user.first_name} ${user.last_name}`"
        />
      </a>
    </div>
  </article>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageBox',
  props: {
    pictureUrl: {
      type: String,
      required: true
    },
    pictureAlt: {
      type: String,
      required: false
    },
    user: {
      type: Object,
      required: true
    },
    likes: {
      type: Number,
      required: true
    }
  }
});
</script>

<style scoped lang="scss">
.photo {
  position: relative;
  height: 30rem;
  width: 100%;
  margin-bottom: 3rem;
  overflow: hidden;
  background-color: $blue;

  &:hover .photo__info {
    bottom: 0;
    transition: 500ms all ease-in-out;
  }

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info {
    position: absolute;
    bottom: -95px;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    padding: 2rem;
    transition: 500ms all ease-in-out;
  }

  &__author {
    font-size: 1.7rem;
    margin-bottom: 0.2rem;
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
    transform: scale(1);
    transition: 200ms all ease-in-out;

    &:hover {
      transform: scale(1.05);
      transition: 200ms all ease-in-out;
    }
  }
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
